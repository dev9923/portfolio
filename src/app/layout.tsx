/* eslint-disable react-refresh/only-export-components */
import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";

export const metadata: Metadata = {
  title: "Devansh Bansal - Portfolio",
  description: "Web Developer and Software Engineer. BTech CSE Core at SRM Institute of Science and Technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased min-h-screen">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
