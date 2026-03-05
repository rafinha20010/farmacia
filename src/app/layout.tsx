import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Farmácia Online",
  description: "Sua saúde em primeiro lugar, entrega rápida e segura",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}