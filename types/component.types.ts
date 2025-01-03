/**
 * Shared component type definitions
 */

import { ReactNode } from 'react';

/** Base props shared by all components */
export interface BaseComponentProps {
  /** Optional class names to apply to the component */
  className?: string;
  /** Optional test ID for component testing */
  'data-testid'?: string;
}

/** Props for components that render children */
export interface PropsWithChildren extends BaseComponentProps {
  /** Child elements to render */
  children: ReactNode;
}

/** Props for components that can be disabled */
export interface DisableableProps extends BaseComponentProps {
  /** Whether the component is disabled */
  disabled?: boolean;
}

/** Props for components that load data */
export interface LoadableProps<T> extends BaseComponentProps {
  /** Whether data is currently loading */
  isLoading?: boolean;
  /** Error message if loading failed */
  error?: Error | string | null;
  /** Data that was loaded */
  data?: T;
}