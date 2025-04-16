import { SPWMiniProvider } from "@/components/SPWMiniProvider";
import { AuthProvider } from "../contexts/AuthContext";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Header } from "@/components/Header";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin", "cyrillic"],
  variable: "--font-raleway",
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
      <body className={`${raleway.variable} antialiased`}>
        <AuthProvider>
          <SPWMiniProvider>
            <Header />
            <main className="pt-[3vw]">{children}</main>
          </SPWMiniProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
