import React from "react";
import { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Avion",
  description: "An awesome e-commerce site built with Next.js",
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="/images/room.png" as="image" />
        <link rel="preload" href="/images/poplar-sofa.png" as="image" />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
