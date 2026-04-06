"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function Philosophy() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight mb-16 md:mb-24"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Sustentabilidad{" "}
          <em className="italic text-white/40">×</em>{" "}
          Tecnología
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left – video */}
          <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="rounded-3xl overflow-hidden aspect-[4/3]"
          >
            <img
              src="/instalacion.jpg"
              alt="Instalación de paneles solares en Córdoba"
              className="w-full h-full object-cover"
            />
</motion.div>

          {/* Right – text */}
          <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-col gap-8"
          >
            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Nuestra visión
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Cada instalación que realizamos es un paso concreto hacia una Córdoba más independiente
                energéticamente. Combinamos tecnología de primer nivel con conocimiento del territorio
                local para diseñar sistemas que duran décadas y generan valor real.
              </p>
            </div>

            <div className="w-full h-px bg-white/10" />

            <div>
              <p className="text-white/40 text-xs tracking-widest uppercase mb-4">
                Nuestro compromiso
              </p>
              <p className="text-white/70 text-base md:text-lg leading-relaxed">
                Creemos que la energía solar no es solo un ahorro económico: es una declaración de valores.
                Trabajamos con cada cliente para asegurarnos de que su sistema esté optimizado para el
                clima, el consumo y los objetivos de Córdoba.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
