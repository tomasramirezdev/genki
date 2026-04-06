"use client";
import { useState } from "react";
import { Sun, ArrowRight, Share2, MessageCircle, Globe } from "lucide-react";
import Link from "next/link";

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
  { label: "Cotizá gratis",  href: "/#contacto" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Newsletter */}
      <div className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 border-b border-white/10">
        <div>
          <h3 className="text-2xl text-white mb-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Suscribite al newsletter
          </h3>
          <p className="text-white/40 text-sm">Novedades sobre energía solar, subsidios y tecnología renovable.</p>
        </div>
        {subscribed ? (
          <p className="text-white/60 text-sm">¡Gracias por suscribirte!</p>
        ) : (
          <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto">
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors flex-1 md:w-56"
            />
            <button type="submit" className="liquid-glass rounded-full p-3 text-white hover:bg-white/5 transition-colors flex-shrink-0">
              <ArrowRight size={18} />
            </button>
          </form>
        )}
      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Sun size={20} className="text-[#74acdf]" />
            <span className="text-white font-semibold text-lg">Genki</span>
          </Link>
          <p className="text-white/30 text-sm leading-relaxed mb-6">
            Instaladores de energía solar en Córdoba, Argentina. Tecnología limpia para un futuro sustentable.
          </p>
          <div className="flex gap-3">
            {[Share2, MessageCircle, Globe].map((Icon, i) => (
              <a key={i} href="#" className="liquid-glass rounded-full p-3 text-white/60 hover:text-white hover:bg-white/5 transition-all">
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
        <p className="text-white/20 text-xs">© 2024 Genki. Todos los derechos reservados.</p>
        <p className="text-white/20 text-xs">Av. Colón 1234, Nueva Córdoba · +54 351 000-0000</p>
      </div>
    </footer>
  );
}
