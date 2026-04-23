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
          Energía <em className="italic text-[#0083FE]">solar.</em>
        </h1>

        <div className="flex flex-row items-center gap-3 mb-8">
          <a
            href="#contacto"
            className="bg-[#0083FE] text-white font-semibold text-sm px-6 py-3 md:px-8 md:py-4 rounded-full hover:opacity-90 transition-all flex items-center gap-2 whitespace-nowrap"
          >
            Contactanos
            <ArrowRight size={16} />
          </a>
          <a
            href="#nosotros"
            className="text-white text-sm px-6 py-3 md:px-8 md:py-4 rounded-full transition-all bg-white/[0.02] shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:bg-[#CEF657]/20 hover:shadow-[0_0_0_1px_rgba(206,246,87,0.5)] whitespace-nowrap"
            style={{ backdropFilter: "blur(6px)", WebkitBackdropFilter: "blur(6px)" }}
          >
            Conocé más
          </a>
        </div>

        <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light tracking-wide">
          Más de 500 hogares y empresas en Córdoba ya generan su propia energía.
          El tuyo puede ser el próximo.
        </p>
      </div>

      {/* Bottom tagline */}
      <div className="relative z-10 flex justify-center pb-10">
        <button className="liquid-glass rounded-full px-8 py-3 text-white/70 text-sm font-medium hover:text-white transition-colors">
          Córdoba · Argentina · +300 días de sol al año
        </button>
      </div>
    </section>
  );
}
