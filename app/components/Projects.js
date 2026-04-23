"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Casa familia Rodríguez",
    location: "Nueva Córdoba",
    type: "Residencial",
    capacity: "8 kW",
    panels: "16 paneles",
    saving: "85% de ahorro",
    desc: "Sistema on-grid conectado a EPEC. Instalación completa en 2 días, con monitoreo remoto y compensación de energía inyectada a la red.",
    year: "2024",
  },
  {
    id: "02",
    title: "Bodega Los Aromos",
    location: "Valle de Calamuchita",
    type: "Industrial",
    capacity: "45 kW",
    panels: "90 paneles",
    saving: "70% de ahorro",
    desc: "Sistema de gran escala para reducir los costos de refrigeración y producción. Recupero de inversión proyectado en 4 años.",
    year: "2024",
  },
  {
    id: "03",
    title: "Campo San Marcos",
    location: "Río Cuarto",
    type: "Rural",
    capacity: "30 kW",
    panels: "60 paneles",
    saving: "100% autónomo",
    desc: "Sistema off-grid con banco de baterías para riego y galpones. Eliminación total de dependencia de la red eléctrica provincial.",
    year: "2023",
  },
  {
    id: "04",
    title: "Clínica Del Sol",
    location: "Villa Allende",
    type: "Comercial",
    capacity: "20 kW",
    panels: "40 paneles",
    saving: "65% de ahorro",
    desc: "Instalación en techo plano con estructura especial. Sistema híbrido con respaldo de baterías para garantizar continuidad operativa.",
    year: "2023",
  },
];

const typeColors = {
  Residencial: "text-[#0083FE]",
  Industrial:  "text-[#CEF657]",
  Rural:       "text-[#CEF657]",
  Comercial:   "text-[#0083FE]",
};

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(null);

  return (
    <section id="proyectos" ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="flex items-end justify-between mb-16"
        >
          <h2
            className="text-4xl md:text-6xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Proyectos <em className="italic text-[#0083FE]">realizados</em>
          </h2>
          <span className="text-white/25 text-xs tracking-widest uppercase hidden md:block">
            {projects.length} casos destacados
          </span>
        </motion.div>

        {/* Project list */}
        <div className="flex flex-col divide-y divide-white/10">
          {projects.map((p, i) => (
            <motion.div
              key={p.id}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActive(active === p.id ? null : p.id)}
            >
              {/* Row */}
              <div className="flex items-center justify-between py-6 gap-4">
                <div className="flex items-center gap-6 min-w-0">
                  <span className="text-white/20 text-xs font-mono flex-shrink-0">{p.id}</span>
                  <div className="min-w-0">
                    <h3
                      className="text-white text-lg md:text-2xl tracking-tight group-hover:text-white/80 transition-colors truncate"
                      style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                      {p.title}
                    </h3>
                    <p className="text-white/40 text-xs mt-0.5">{p.location} · {p.year}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 md:gap-8 flex-shrink-0">
                  <span className={`text-xs font-medium hidden md:block ${typeColors[p.type]}`}>
                    {p.type}
                  </span>
                  <span className="text-white/40 text-sm hidden md:block">{p.capacity}</span>
                  <span className="text-white/70 text-sm font-medium hidden lg:block">{p.saving}</span>
                  <div className="liquid-glass rounded-full p-2 text-white/40 group-hover:text-white transition-all group-hover:rotate-45 duration-300">
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>

              {/* Expanded detail */}
              {active === p.id && (
                <div className="pb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 glass-card rounded-2xl p-6">
                    <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                  </div>
                  <div className="glass-card rounded-2xl p-6 flex flex-col gap-4">
                    {[
                      { label: "Capacidad", value: p.capacity },
                      { label: "Paneles", value: p.panels },
                      { label: "Ahorro", value: p.saving },
                      { label: "Tipo", value: p.type },
                    ].map((d) => (
                      <div key={d.label}>
                        <div className="text-white/30 text-xs tracking-widest uppercase mb-0.5">{d.label}</div>
                        <div className="text-white text-sm font-medium">{d.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 flex justify-center"
        >
          <a
            href="#contacto"
            className="liquid-glass rounded-full px-8 py-4 text-white text-sm font-medium hover:bg-[#0083FE]/20 hover:border-[#0083FE]/50 transition-colors flex items-center gap-2"
          >
            ¿Querés ser el próximo proyecto?
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
