"use client";

import { Lexend } from "next/font/google";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <ThemeProvider attribute='class' defaultTheme='dark'>
        <body
          className={`${lexend.className} text-foreground fixed max-h-[100dvh] overflow-y-hidden w-full !scrollbar-thin`}
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
            <div className='h-[100dvh] w-full scrollbar-thin'>{children}</div>
          </Scrollbar>
        </body>
      </ThemeProvider>
    </html>
  );
}
