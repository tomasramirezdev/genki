"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";
import Image from "next/image";

// Reemplazá cada src con la ruta real del logo en /public/logos/
const logos = [
  { name: "Cliente 1",  src: "/logos/logo-01.svg" },
  { name: "Cliente 2",  src: "/logos/logo-02.svg" },
  { name: "Cliente 3",  src: "/logos/logo-03.svg" },
  { name: "Cliente 4",  src: "/logos/logo-04.svg" },
  { name: "Cliente 5",  src: "/logos/logo-05.svg" },
  { name: "Cliente 6",  src: "/logos/logo-06.svg" },
  { name: "Cliente 7",  src: "/logos/logo-07.svg" },
  { name: "Cliente 8",  src: "/logos/logo-08.svg" },
  { name: "Cliente 9",  src: "/logos/logo-09.svg" },
  { name: "Cliente 10", src: "/logos/logo-10.svg" },
  { name: "Cliente 11", src: "/logos/logo-11.svg" },
  { name: "Cliente 12", src: "/logos/logo-12.svg" },
  { name: "Cliente 13", src: "/logos/logo-13.svg" },
  { name: "Cliente 14", src: "/logos/logo-14.svg" },
  { name: "Cliente 15", src: "/logos/logo-15.svg" },
  { name: "Cliente 16", src: "/logos/logo-16.svg" },
];

// Duplicamos para loop infinito sin salto
const track = [...logos, ...logos];

export default function ClientLogos() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section ref={ref} className="bg-black py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-10">
        <p className="text-white/30 text-[10px] tracking-widest uppercase text-center">
          Empresas y hogares que ya confían en Genki
        </p>
      </div>

      {/* Fade lateral */}
      <div className="relative">
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #000, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #000, transparent)" }}
        />

        <div
          className="flex gap-12 items-center"
          style={{
            width: "max-content",
            animation: inView ? "marquee 30s linear infinite" : "none",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex items-center justify-center h-10 w-32 opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={128}
                height={40}
                className="object-contain h-full w-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
