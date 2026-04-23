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
            <Link href={s.href} key={s.title} className="block">
            <motion.div
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer h-full"
            >
              {/* Visual area — margen para que el borde del glass-card sea visible */}
              <div
                className="relative overflow-hidden"
                style={{
                  margin: "1.5px 1.5px 0",
                  aspectRatio: "16/9",
                  borderRadius: "22px 22px 0 0",
                  backgroundColor: "#07111f",
                }}
              >

                {/* Celdas internas — grilla fina (6×10 por panel) */}
                <div
                  className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundImage: [
                      "linear-gradient(rgba(0,131,254,0.6) 1px, transparent 1px)",
                      "linear-gradient(90deg, rgba(0,131,254,0.6) 1px, transparent 1px)",
                    ].join(", "),
                    backgroundSize: "4.167% 5%",
                  }}
                />

                {/* Marco de paneles — grilla gruesa (4×2) */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: [
                      "linear-gradient(rgba(0,5,18,1) 4px, transparent 4px)",
                      "linear-gradient(90deg, rgba(0,5,18,1) 4px, transparent 4px)",
                    ].join(", "),
                    backgroundSize: "25% 50%",
                  }}
                />

                {/* Brillo superficial — simula el vidrio del panel */}
                <div
                  className="absolute inset-0 opacity-10 group-hover:opacity-60 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, rgba(0,131,254,0.8) 0%, transparent 50%, rgba(0,40,120,0.3) 100%)",
                  }}
                />

                {/* Flash de luz en hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "radial-gradient(ellipse at 30% 40%, rgba(0,131,254,0.25) 0%, transparent 60%)",
                  }}
                />

                {/* Icono */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="text-8xl text-white/10 group-hover:text-white transition-colors duration-500 select-none"
                    style={{ fontFamily: "'Instrument Serif', serif" }}
                  >
                    {["☀", "⚡", "📡", "🔍"][i]}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="liquid-glass rounded-full inline-block px-3 py-1 text-white/60 text-xs tracking-widest uppercase">{s.tag}</span>
                  <div className="bg-white/5 backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.08)] rounded-full p-2 text-[#CEF657] group-hover:text-black hover:bg-[#CEF657]/20 hover:shadow-[0_0_0_1px_rgba(206,246,87,0.5)] transition-all">
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
