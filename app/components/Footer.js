"use client";
import { ArrowRight, Share2, MessageCircle, Globe } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Inicio",     href: "/" },
  { label: "Servicios",  href: "/#servicios" },
  { label: "Nosotros",   href: "/#nosotros" },
  { label: "Proyectos",  href: "/#proyectos" },
  { label: "Contacto",   href: "/#contacto" },
];

const serviceLinks = [
  { label: "Instalación en Hogares",    href: "/servicios/instalacion-hogares" },
  { label: "Soluciones para Empresas",  href: "/servicios/soluciones-empresas" },
  { label: "Monitoreo Inteligente",     href: "/servicios/monitoreo-inteligente" },
  { label: "Diagnóstico Gratuito",      href: "/servicios/diagnostico-gratuito" },
];

const companyLinks = [
  { label: "Quiénes somos",  href: "/#nosotros" },
  { label: "Proyectos",      href: "/#proyectos" },
  { label: "Testimonios",    href: "/#testimonios" },
  { label: "Contacto",  href: "/#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-black">

      {/* CTA franja */}
      <div
        className="px-6 py-20 md:py-28"
        style={{ backgroundColor: "#0f0f0f" }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight leading-tight max-w-xl"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            ¿Listo para dejar de pagarle a EPEC?
          </h2>
          <a
            href="/#contacto"
            className="flex-shrink-0 flex items-center gap-2 text-black text-sm font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            style={{ backgroundColor: "#CEF657" }}
          >
            Contactanos
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* Links + brand */}
      <div className="border-t border-white/10 max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Image src="/logoazul.png" alt="Genkidama" width={240} height={70} className="h-12 md:h-14 w-auto" />
          </Link>
          <p className="text-white/30 text-sm leading-relaxed mb-6">
            Instaladores de energía solar en Córdoba, Argentina. Tecnología limpia para un futuro sustentable.
          </p>
          <div className="flex gap-3">
            {[Share2, MessageCircle, Globe].map((Icon, i) => (
              <a key={i} href="#" className="liquid-glass rounded-full p-3 text-white/60 hover:text-white transition-all">
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white text-xs font-medium mb-4 tracking-widest uppercase opacity-40">Navegación</h4>
          <ul className="space-y-3">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/40 hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Servicios */}
        <div>
          <h4 className="text-white text-xs font-medium mb-4 tracking-widest uppercase opacity-40">Servicios</h4>
          <ul className="space-y-3">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/40 hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Empresa */}
        <div>
          <h4 className="text-white text-xs font-medium mb-4 tracking-widest uppercase opacity-40">Empresa</h4>
          <ul className="space-y-3">
            {companyLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href} className="text-white/40 hover:text-white text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/20 text-xs">© 2025 Genkidama. Todos los derechos reservados.</p>
        <p className="text-white/20 text-xs">Av. Colón 1234, Nueva Córdoba · +54 351 000-0000</p>
      </div>

    </footer>
  );
}
