import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });

export const metadata = {
  title: "Genki – Energía Solar en Córdoba, Argentina",
  description:
    "Instalamos paneles solares de última generación en Córdoba, Argentina. Energía limpia y eficiente para hogares y empresas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={geist.variable}>
      <body className="bg-black text-white antialiased">{children}</body>
    </html>
  );
}
