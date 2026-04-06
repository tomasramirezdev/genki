"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    tag: "Residencial",
    title: "Instalación en Hogares",
    desc: "Sistemas solares conectados a la red de EPEC. Reducí hasta un 90% tu factura con paneles de alta eficiencia y monitoreo remoto.",
    href: "/servicios/instalacion-hogares",
  },
  {
    tag: "Industrial",
    title: "Soluciones para Empresas",
    desc: "Grandes instalaciones para industrias, comercios y campos en Córdoba. Optimizá costos y accedé a beneficios impositivos nacionales.",
    href: "/servicios/soluciones-empresas",
  },
  {
    tag: "Tecnología",
    title: "Monitoreo Inteligente",
    desc: "Controlá tu producción en tiempo real desde tu teléfono. Alertas automáticas, reportes y soporte técnico incluidos en cada proyecto.",
    href: "/servicios/monitoreo-inteligente",
  },
  {
    tag: "Asesoramiento",
    title: "Diagnóstico Gratuito",
    desc: "Analizamos tu consumo, orientación y estructura para diseñar el sistema exacto que necesitás. Sin compromiso, sin costo.",
    href: "/servicios/diagnostico-gratuito",
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16"
        >
          <h2
            className="text-3xl md:text-5xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Lo que hacemos
          </h2>
          <span className="text-white/40 text-sm hidden md:block tracking-widest uppercase">
            Nuestros servicios
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {services.map((s, i) => (
            <Link href={s.href} key={s.title}>
            <motion.div
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer"
            >
              {/* Visual area */}
              <div className="aspect-video relative overflow-hidden bg-white/[0.03]">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-8xl text-white/10 group-hover:text-white/30 transition-colors duration-500 select-none"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {["☀", "⚡", "📡", "🔍"][i]}
                  </div>
                </div>
                <div className="absolute inset-0 grid grid-cols-8 grid-rows-5 gap-px p-4 opacity-10 group-hover:opacity-25 transition-opacity duration-500">
                  {Array.from({ length: 40 }).map((_, j) => (
                    <div key={j} className="bg-white/50 rounded-sm" />
                  ))}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-white/40 text-xs tracking-widest uppercase">{s.tag}</span>
                  <div className="liquid-glass rounded-full p-2 text-white/60 group-hover:text-white transition-colors">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
                <h3
                  className="text-white text-xl md:text-2xl mb-3 tracking-tight"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  {s.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
