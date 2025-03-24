"use client";

import { ViewTransitions } from "next-view-transitions";
import { Lexend, Oswald } from "next/font/google";
import NavBar from "../components/shared/NavBar/NavBar";
import { ThemeProvider } from "../components/shared/ThemeProvider";

import { ScrollToTopButton } from "../components/shared/ScrollToTopButton";
import "./globals.css";

const lexend = Lexend({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-lexend",
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${lexend.variable} ${oswald.variable} relative font-lexend text-foreground transition duration-300 ease-in-out scrollbar-thin`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <NavBar />
            <div className="relative w-full border-white">{children}</div>
          </ThemeProvider>

          <ScrollToTopButton />
        </body>
      </html>
    </ViewTransitions>
  );
}
