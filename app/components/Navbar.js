"use client";
import { useEffect, useRef, useState } from "react";
import { Sun, Menu, X, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const serviceItems = [
  { label: "Instalación en Hogares",   href: "/servicios/instalacion-hogares" },
  { label: "Soluciones para Empresas", href: "/servicios/soluciones-empresas" },
  { label: "Monitoreo Inteligente",    href: "/servicios/monitoreo-inteligente" },
  { label: "Diagnóstico Gratuito",     href: "/servicios/diagnostico-gratuito" },
];

export default function Navbar() {
  const [progress, setProgress] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const rafRef = useRef(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  // En páginas de servicios la navbar empieza ya con glassmorphism
  useEffect(() => {
    if (!isHome) { setProgress(1); return; }
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setProgress(Math.min(window.scrollY / 120, 1));
        rafRef.current = null;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isHome]);

  const href = (hash) => isHome ? `#${hash}` : `/#${hash}`;

  // Cerrar dropdown al hacer click fuera
  useEffect(() => {
    const handler = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const bgAlpha = (progress * 0.07).toFixed(3);
  const borderAlpha = (progress * 0.12).toFixed(3);
  const shadowAlpha = (progress * 0.4).toFixed(3);
  const blurPx = Math.round(progress * 20);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-6 pt-6">
      <nav
        className="max-w-5xl mx-auto rounded-full px-6 py-3 flex items-center justify-between relative"
        style={{
          background: `rgba(255,255,255,${bgAlpha})`,
          backdropFilter: `blur(${blurPx}px)`,
          WebkitBackdropFilter: `blur(${blurPx}px)`,
          boxShadow: `inset 0 1px 1px rgba(255,255,255,${borderAlpha}), 0 8px 32px rgba(0,0,0,${shadowAlpha})`,
        }}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-full"
          style={{
            padding: "1.4px",
            background: `linear-gradient(180deg,
              rgba(255,255,255,${(progress * 0.45).toFixed(3)}) 0%,
              rgba(255,255,255,${(progress * 0.15).toFixed(3)}) 20%,
              rgba(255,255,255,0) 40%,
              rgba(255,255,255,0) 60%,
              rgba(255,255,255,${(progress * 0.15).toFixed(3)}) 80%,
              rgba(255,255,255,${(progress * 0.45).toFixed(3)}) 100%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
          }}
        />

        {/* Left */}
        <div className="flex items-center gap-8 relative">
          <Link href="/" className="flex items-center gap-2">
            <Sun size={20} className="text-[#74acdf]" />
            <span className="text-white font-semibold text-lg tracking-tight">Genki</span>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            {/* Servicios dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setServicesOpen((v) => !v)}
                className="flex items-center gap-1 text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                Servicios
                <ChevronDown size={14} className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 rounded-2xl bg-black/95 backdrop-blur-xl shadow-2xl overflow-hidden"
                  style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06)" }}
                >
                  {serviceItems.map((s, i) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      onClick={() => setServicesOpen(false)}
                      className={`block px-5 py-3 text-sm text-white/50 hover:text-white hover:bg-white/[0.04] transition-colors
                        ${i !== serviceItems.length - 1 ? "border-b border-white/[0.06]" : ""}`}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <a href={href("proyectos")} className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Proyectos
            </a>
            <a href={href("nosotros")} className="text-white/70 hover:text-white text-sm font-medium transition-colors">
              Nosotros
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 relative">
          <a
            href={href("contacto")}
            className="hidden md:block text-white/70 hover:text-white text-sm font-medium transition-colors"
          >
            Contacto
          </a>
          <a
            href={href("contacto")}
            className="liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Cotizá Gratis
          </a>
          <button
            className="md:hidden text-white p-1"
            onClick={() => setMobileOpen((v) => !v)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 px-4 py-4 flex flex-col gap-1">
          <p className="text-white/20 text-xs tracking-widest uppercase px-2 pb-1">Servicios</p>
          {serviceItems.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              onClick={() => setMobileOpen(false)}
              className="block px-2 py-2.5 text-white/60 hover:text-white text-sm transition-colors"
            >
              {s.label}
            </Link>
          ))}
          <div className="border-t border-white/10 my-2" />
          {[{ label: "Proyectos", hash: "proyectos" }, { label: "Nosotros", hash: "nosotros" }, { label: "Contacto", hash: "contacto" }].map((item) => (
            <a
              key={item.label}
              href={href(item.hash)}
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white text-sm font-medium transition-colors px-2 py-2"
            >
              {item.label}
            </a>
          ))}
          <a
            href={href("contacto")}
            onClick={() => setMobileOpen(false)}
            className="bg-white text-black text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2"
          >
            Cotizá Gratis
          </a>
        </div>
      )}
    </header>
  );
}
