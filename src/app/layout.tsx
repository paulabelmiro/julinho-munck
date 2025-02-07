import { ReactNode } from "react";
import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import Providers from "@/providers/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Julinho Munck",
  description: "Transporte seguro e eficiente com munck de até 6 toneladas na região de Camaquã-RS.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <head>
        <meta name="google-site-verification" content="gpd93JEAYXIiDAQsgYsCxIayx4flyH7s358wroqKfGA" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}