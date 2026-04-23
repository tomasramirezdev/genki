"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const testimonials = [
  {
    name: "Carlos Benítez",
    role: "Propietario",
    location: "Nueva Córdoba",
    text: "En el primer mes reduje un 80% mi factura de EPEC. El equipo fue muy profesional y la instalación quedó impecable. Sin dudas lo mejor que hice para mi casa.",
    saving: "−80% factura",
  },
  {
    name: "Florencia Romero",
    role: "Comerciante",
    location: "Villa Allende",
    text: "Me asesoraron muy bien sobre el retorno de inversión. En 4 años recupero todo lo invertido. Me conectaron a la red de EPEC sin ningún inconveniente.",
    saving: "ROI en 4 años",
  },
  {
    name: "Martín Juárez",
    role: "Productor agropecuario",
    location: "Río Cuarto",
    text: "Instalamos 30 kW en el campo. Ahora el riego no depende de la red eléctrica. El soporte post-venta es excelente, siempre disponibles.",
    saving: "100% autónomo",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* Encabezado editorial — sin pill */}
        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16"
        >
          <h2
            className="text-4xl md:text-6xl text-white tracking-tight"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            Lo que dicen{" "}
            <em className="italic" style={{ color: "#CEF657" }}>nuestros clientes</em>
          </h2>
          <p className="text-white/25 text-xs tracking-widest uppercase md:text-right flex-shrink-0">
            +500 instalaciones<br />en Córdoba
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.1 }}
              className="rounded-3xl p-7 flex flex-col justify-between gap-8"
              style={{ backgroundColor: "#111111" }}
            >
              <div>
                <p
                  className="text-4xl text-white/20 leading-none mb-4 select-none"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  "
                </p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {t.text}
                </p>
              </div>

              <div className="flex items-end justify-between">
                <div>
                  <p className="text-white text-sm font-medium">{t.name}</p>
                  <p className="text-white/35 text-xs mt-0.5">
                    {t.role} · {t.location}
                  </p>
                </div>
                <span
                  className="text-xs font-medium px-3 py-1.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: "#CEF657", color: "#000" }}
                >
                  {t.saving}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
