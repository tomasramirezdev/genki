"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Top row: label + descripción */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-20 md:mb-28">
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-white/40 text-sm tracking-widest uppercase mb-6">¿Quiénes somos?</p>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1]"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Pioneros en{" "}
              <em className="italic text-white/50">energía renovable</em>{" "}
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
              className="liquid-glass self-start rounded-full px-6 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              Conocé más →
            </a>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3"
        >
          {[
            { value: "+500", label: "Instalaciones", sub: "en Córdoba y provincia" },
            { value: "10 años", label: "De experiencia", sub: "en el mercado solar argentino" },
            { value: "98%", label: "Satisfacción", sub: "en nuestros clientes" },
          ].map((s, i) => (
            <div
              key={s.label}
              className={`py-10 px-8 flex flex-col gap-1 glass-card
                ${i < 2 ? "md:border-r md:border-white/10" : ""}
                ${i > 0 ? "border-t border-white/10 md:border-t-0" : ""}
              `}
            >
              <div
                className="text-5xl md:text-6xl text-white mb-2"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.value}
              </div>
              <div className="text-white text-sm font-medium">{s.label}</div>
              <div className="text-white/30 text-xs">{s.sub}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
