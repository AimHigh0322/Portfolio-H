import type React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

// Using system fonts instead of Google Fonts to avoid timeout issues
const fontClasses = "font-sans";

export const metadata: Metadata = {
  title: "山同 誠 | AI, App, Web Engineer",
  description: "Portfolio of Makoto Yamadō - Full Stack Engineer",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${fontClasses} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
