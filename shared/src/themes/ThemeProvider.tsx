import { ThemeProvider } from "@mui/material"
import React from "react"

// const light = light.ts
export interface ThemeProviderProps {
  children?: React.ReactNode;
}

export default ({ children }: ThemeProviderProps) => {
  return <ThemeProvider theme={{}}>
    {children}
  </ThemeProvider>
}
