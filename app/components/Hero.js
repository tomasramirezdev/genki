"use client";
import { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let fadeRAF = null;

    function animateOpacity(from, to, duration, onDone) {
      if (fadeRAF) cancelAnimationFrame(fadeRAF);
      const start = performance.now();
      function step(now) {
        const t = Math.min((now - start) / duration, 1);
        video.style.opacity = from + (to - from) * t;
        if (t < 1) {
          fadeRAF = requestAnimationFrame(step);
        } else {
          if (onDone) onDone();
        }
      }
      fadeRAF = requestAnimationFrame(step);
    }

    function handleCanPlay() {
      video.play().catch(() => {});
      animateOpacity(0, 1, 500);
    }

    function handleTimeUpdate() {
      const remaining = video.duration - video.currentTime;
      if (remaining <= 0.55 && parseFloat(video.style.opacity) > 0) {
        animateOpacity(parseFloat(video.style.opacity || 1), 0, 500);
      }
    }

    function handleEnded() {
      video.style.opacity = 0;
      setTimeout(() => {
        video.currentTime = 0;
        video.play().catch(() => {});
        animateOpacity(0, 1, 500);
      }, 100);
    }

    video.addEventListener("canplay", handleCanPlay);
    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("ended", handleEnded);

    // Si el browser ya cargó el video antes de que montara el listener
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      if (fadeRAF) cancelAnimationFrame(fadeRAF);
      video.removeEventListener("canplay", handleCanPlay);
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("ended", handleEnded);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col bg-black">
      {/* Background video */}
      <video
        ref={videoRef}
        src="/hero.mp4"
        muted
        autoPlay
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ opacity: 0 }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Gradient bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black to-transparent" />

      {/* Navbar space */}
      <div className="h-24" />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[8%]">
        <h1
          className="text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] text-white tracking-tight leading-none mb-8"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Energía <em className="italic text-white/80">solar.</em>
        </h1>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <a
            href="#contacto"
            className="bg-white text-black font-semibold text-sm px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:scale-105 flex items-center gap-2"
          >
            Cotizá gratis
            <ArrowRight size={16} />
          </a>
          <a
            href="#nosotros"
            className="liquid-glass text-white text-sm px-8 py-4 rounded-full hover:bg-white/5 transition-colors"
          >
            Conocé más
          </a>
        </div>

        <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light tracking-wide">
          Instalamos sistemas solares de última generación en Córdoba, Argentina.
          Ahorrá en tu factura y cuidá el planeta.
        </p>
      </div>

      {/* Bottom tagline */}
      <div className="relative z-10 flex justify-center pb-10">
        <button className="liquid-glass rounded-full px-8 py-3 text-white/70 text-sm font-medium hover:bg-white/5 transition-colors">
          Córdoba · Argentina · +300 días de sol al año
        </button>
      </div>
    </section>
  );
}
