"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Carlos Benítez",
    role: "Propietario · Nueva Córdoba",
    text: "En el primer mes reduje un 80% mi factura de EPEC. El equipo fue muy profesional y la instalación quedó impecable. Sin dudas lo mejor que hice para mi casa.",
  },
  {
    name: "Florencia Romero",
    role: "Comerciante · Villa Allende",
    text: "Me asesoraron muy bien sobre el retorno de inversión. En 4 años recupero todo lo invertido. Me conectaron a la red de EPEC sin ningún inconveniente.",
  },
  {
    name: "Martín Juárez",
    role: "Productor agropecuario · Río Cuarto",
    text: "Instalamos 30 kW en el campo. Ahora el riego no depende de la red eléctrica. El soporte post-venta es excelente, siempre disponibles.",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [current, setCurrent] = useState(0);

  return (
    <section id="testimonios" ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="liquid-glass rounded-full inline-block px-3 py-1 text-white/60 text-[10px] tracking-widest uppercase mb-6"
        >
          Testimonios
        </motion.p>

        <motion.h2
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl text-white tracking-tight mb-16"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Lo que dicen{" "}
          <em className="italic text-[#0083FE]">nuestros clientes</em>
        </motion.h2>

        <motion.div
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card rounded-3xl p-8 md:p-12"
        >
          <div
            className="text-5xl text-white/20 mb-6 leading-none"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            "
          </div>
          <p
            className="text-white/80 text-xl md:text-2xl leading-relaxed mb-10"
            style={{ fontFamily: "'Instrument Serif', serif" }}
          >
            {testimonials[current].text}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-white font-medium">{testimonials[current].name}</div>
              <div className="text-white/40 text-sm mt-0.5">{testimonials[current].role}</div>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
                className="liquid-glass rounded-full p-3 text-white/60 hover:text-white hover:bg-[#0083FE]/20 hover:border-[#0083FE]/50 transition-colors"
              >
                <ArrowRight size={16} className="rotate-180" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`rounded-full transition-all ${i === current ? "w-6 h-2 bg-white" : "w-2 h-2 bg-white/20"}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
                className="liquid-glass rounded-full p-3 text-white/60 hover:text-white hover:bg-[#0083FE]/20 hover:border-[#0083FE]/50 transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
