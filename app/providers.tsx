"use client"

import { ThemeProvider as NextThemeProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes"
import { RootProvider } from "fumadocs-ui/provider"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemeProvider {...props}>{children}</NextThemeProvider>
}

export function DocsProvider({ children }: { children: React.ReactNode }) {
  return <RootProvider>{children}</RootProvider>
} 