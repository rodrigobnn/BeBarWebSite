import type { Metadata } from "next";
import { Outfit, Poppins } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BeBar - Conectando Clientes e Bares em Tempo Real",
  description: "O BeBar é o ecossistema definitivo para bares e restaurantes. Peça na mesa via QR Code (BeBar Cliente) e gerencie os pedidos, cozinha e garçons com facilidade (BeBar Back-office).",
  keywords: ["bebar", "comanda digital", "qr code mesa", "restaurante", "bar", "gestão de bar", "kanban cozinha"],
  authors: [{ name: "BeBar Team" }],
  openGraph: {
    title: "BeBar - Conectando Clientes e Bares em Tempo Real",
    description: "Conheça o ecossistema de comanda digital e gestão de bares definitivo.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${outfit.variable} ${poppins.variable} h-full scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col antialiased selection:bg-primary/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
