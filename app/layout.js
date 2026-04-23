import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata = {
  title: "Genkidama – Energía Solar en Córdoba, Argentina",
  description:
    "Instalamos paneles solares de última generación en Córdoba, Argentina. Energía limpia y eficiente para hogares y empresas.",
  icons: {
    icon: "/isoblanco.png",
    apple: "/isoblanco.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={geist.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
