"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-mode" // Matches your [data-mode=dark] selector
      defaultTheme="light" // Set your default
      enableSystem={true}
      storageKey="theme" // Saves user preference in localStorage
    >
      {children}
    </NextThemesProvider>
  );
}
