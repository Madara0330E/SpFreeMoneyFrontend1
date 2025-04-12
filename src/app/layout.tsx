import { SPWMiniProvider } from "@/components/SPWMiniProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <body className={`${inter.variable} antialiased`}>
        <SPWMiniProvider>{children}</SPWMiniProvider>
      </body>
    </html>
  );
}
