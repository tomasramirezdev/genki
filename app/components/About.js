"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "+500", label: "Instalaciones", sub: "en Córdoba y provincia" },
  { value: "10 años", label: "De experiencia", sub: "en el mercado solar argentino" },
  { value: "98%", label: "Satisfacción", sub: "en nuestros clientes" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={ref} className="bg-black pt-28 md:pt-40 pb-16 md:pb-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16 md:mb-20">
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-5 h-px" style={{ backgroundColor: "#CEF657" }} />
              <span className="text-[10px] tracking-widest uppercase text-white/35">Quiénes somos</span>
            </div>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Pioneros en{" "}
              <em className="italic text-[#0083FE]">energía renovable</em>{" "}
              para Córdoba.
            </h2>
          </motion.div>

          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex flex-col justify-end gap-6"
          >
            <p className="text-white/50 text-base leading-relaxed">
              Somos una empresa cordobesa con más de 10 años instalando sistemas
              fotovoltaicos en hogares, comercios e industrias. Combinamos tecnología
              de primer nivel con conocimiento real del territorio.
            </p>
            <p className="text-white/30 text-sm leading-relaxed">
              Trabajamos con las mejores marcas del mercado y estamos certificados
              por EPEC para la conexión a la red eléctrica provincial.
            </p>
            <a
              href="#contacto"
              className="liquid-glass self-start rounded-full px-6 py-3 text-white text-sm font-medium transition-colors"
            >
              Conocé más →
            </a>
          </motion.div>
        </div>

        {/* Stats — tiles oscuros sin animación de borde */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
              className="rounded-2xl px-8 py-7"
              style={{ backgroundColor: "#111111" }}
            >
              <p
                className="text-5xl md:text-6xl text-white mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.value}
              </p>
              <p className="text-white text-sm font-medium mb-0.5">{s.label}</p>
              <p className="text-white/30 text-xs">{s.sub}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
