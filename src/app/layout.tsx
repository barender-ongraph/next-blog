import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../styles/globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blog | Latest Posts",
  description: "Read our latest blog posts about technology, development, and more.",
  openGraph: {
    title: "Blog | Latest Posts",
    description: "Read our latest blog posts about technology, development, and more.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Latest Posts",
    description: "Read our latest blog posts about technology, development, and more.",
  },
};

import React from 'react';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <main className="font-bodyFont">
            {/* Header */}
            <Header />

            {children}

            <div className="mt-8">
              {/* Footer */}
              <Footer />
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
