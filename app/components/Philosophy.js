"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "64 kt",   label: "CO₂ evitado total" },
  { value: "1.8 M",   label: "Árboles equivalente" },
  { value: "99.94%",  label: "Uptime monitoreo" },
  { value: "15 min",  label: "Resolución de datos" },
];

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-black py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-3">

        {/* Cards row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3">

          {/* Card IMPACTO — ocupa 3 columnas */}
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-3 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px]"
            style={{ backgroundColor: "#111111" }}
          >
            <div>
              <p className="text-[10px] tracking-widest uppercase mb-8"
                 style={{ color: "#CEF657" }}>
                Impacto
              </p>
              {/* Número héroe */}
              <p
                className="text-7xl md:text-8xl font-bold leading-none mb-4"
                style={{ fontFamily: "'Instrument Serif', serif", color: "#0083FE" }}
              >
                120&nbsp;t
              </p>
              <p className="text-white/40 text-sm uppercase tracking-widest mb-6">
                de CO₂ evitadas por instalación al año
              </p>
              <p className="text-white/55 text-sm leading-relaxed max-w-sm">
                No vendemos buena conciencia. Reportamos emisiones evitadas
                verificadas por tercero cada trimestre, con certificación
                I-REC disponible bajo demanda.
              </p>
            </div>
          </motion.div>

          {/* Card TECNOLOGÍA — ocupa 2 columnas */}
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="md:col-span-2 rounded-3xl p-8 md:p-10 flex flex-col justify-between min-h-[320px]"
            style={{ backgroundColor: "#0c1a2e" }}
          >
            <div>
              <p className="text-[10px] tracking-widest uppercase text-[#0083FE]/70 mb-8">
                Tecnología
              </p>
              <h3
                className="text-3xl md:text-4xl font-bold text-white leading-tight mb-5"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                Stack abierto,{" "}
                <em className="italic text-[#0083FE]">datos tuyos.</em>
              </h3>
              <p className="text-white/45 text-sm leading-relaxed">
                Inversores Tier-1, gateway propio Genkidama Edge y panel web
                con API. Tus datos de producción nunca quedan encerrados
                detrás de un login OEM.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Stats bar — 4 tiles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.08 }}
              className="rounded-2xl px-6 py-5"
              style={{ backgroundColor: "#111111" }}
            >
              <p
                className="text-2xl md:text-3xl font-bold text-white mb-1"
                style={{ fontFamily: "'Instrument Serif', serif" }}
              >
                {s.value}
              </p>
              <p className="text-[10px] tracking-widest uppercase text-white/30">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
