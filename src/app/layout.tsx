import { SPWorldsProvider } from "../components/SPWorldsProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SP Free Money",
  description: "Приложение для SPWorlds",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="frame-ancestors https://spworlds.ru;"
        />
      </head>
      <body>
        <SPWorldsProvider>{children}</SPWorldsProvider>
      </body>
    </html>
  );
}
