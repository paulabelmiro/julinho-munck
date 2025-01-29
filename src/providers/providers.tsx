"use client";
import { GlobalStyle } from "@/styles/global";
import { defaultTheme } from "@/styles/theme/default";
import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";

export default function Providers({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            {children}
        </ThemeProvider>
    );
}