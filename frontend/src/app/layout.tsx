import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.scss";

import Header from "@/components/Header";
// import Footer from "@/components/Footer"; // İstersen footer da ekleriz

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Elit Aluminyum Cephe Sistemleri",
  description: "Kaliteli hizmetin adresi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body suppressHydrationWarning className={montserrat.variable}>
        <Header />
        <main>{children}</main>
        {/* <Footer /> */}
      </body>
    </html>
  );
}
