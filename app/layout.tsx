"use client";

import { Lexend, Oswald } from "next/font/google";
import { Scrollbar } from "smooth-scrollbar-react";
import { OverscrollEffect } from "smooth-scrollbar/plugins/overscroll";
import NavBar from "../components/shared/NavBar/NavBar";
import { ThemeProvider } from "../components/shared/ThemeProvider";
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
    <html lang="en" suppressHydrationWarning>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <body
          className={`${lexend.variable} ${oswald.variable} fixed max-h-[100dvh] w-full overflow-y-hidden font-lexend text-foreground transition duration-500 ease-in-out !scrollbar-thin`}
        >
          <NavBar />
          <Scrollbar
            damping={0.05}
            thumbMinSize={0}
            renderByPixels={false}
            alwaysShowTracks={false}
            continuousScrolling={false}
            plugins={{
              overscroll: {
                effect: OverscrollEffect.BOUNCE,
              },
            }}
          >
            <div className="h-[100dvh] w-full scrollbar-thin">{children}</div>
          </Scrollbar>
        </body>
      </ThemeProvider>
    </html>
  );
}
