import { SPWMiniProvider } from "@/components/SPWMiniProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SPWorlds Mini App",
  description: "Мини-приложение для SPWorlds",
  other: {
    "Content-Security-Policy": "frame-ancestors https://spworlds.ru;",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="frame-ancestors https://spworlds.ru;"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SPWMiniProvider>{children}</SPWMiniProvider>
      </body>
    </html>
  );
}
