"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";
import { PropsWithChildren } from "../types/component.types";

interface Props extends PropsWithChildren {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Something went wrong
            </h2>
            <p className="text-gray-600">
              {this.state.error?.message ||
                "An error occurred while displaying this content."}
            </p>
          </div>
        )
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
