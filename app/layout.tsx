"use client";

import { ViewTransitions } from "next-view-transitions";
import { Lexend, Oswald } from "next/font/google";
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
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <body
          className={`${lexend.variable} ${oswald.variable} font-lexend text-foreground transition duration-300 ease-in-out scrollbar-thin`}
        >
          <ThemeProvider attribute="class" defaultTheme="dark">
            <NavBar />
            {/* <Scrollbar
            damping={0.07}
            thumbMinSize={0}
            renderByPixels={false}
            alwaysShowTracks={false}
            continuousScrolling={false}
            plugins={{
              overscroll: {
                effect: OverscrollEffect.BOUNCE,
              },
            }}
          > */}
            <div className="w-full border-white">{children}</div>

            {/* </Scrollbar> */}
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
