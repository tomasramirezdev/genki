"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeft, ArrowRight, Paperclip, X } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Link from "next/link";

function ServiceContactForm({ serviceLabel }) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleFiles = (e) => {
    const selected = Array.from(e.target.files);
    setFiles((prev) => {
      const combined = [...prev, ...selected];
      // max 5 archivos, max 10MB por archivo
      return combined.filter((f) => f.size <= 10 * 1024 * 1024).slice(0, 5);
    });
    e.target.value = "";
  };

  const removeFile = (i) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="px-6 py-20 bg-black">
      <div className="max-w-6xl mx-auto">
        <FadeIn className="mb-10">
          <p className="text-white/40 text-sm tracking-widest uppercase mb-3">Contacto</p>
          <h2 className="text-3xl md:text-5xl text-white tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
            Hablemos de tu <em className="italic text-white/50">proyecto</em>
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <FadeIn delay={0.1}>
            <p className="text-white/50 text-base leading-relaxed mb-8">
              Completá el formulario y uno de nuestros asesores especializados en{" "}
              <span className="text-white/80">{serviceLabel}</span> te contactará en menos de 48 hs.
            </p>
            <div className="space-y-5">
              {[
                { label: "Teléfono",   value: "+54 351 000-0000" },
                { label: "Email",      value: "info@genki.com.ar" },
                { label: "Horario",    value: "Lun – Vie: 8:00 a 18:00" },
                { label: "Ubicación",  value: "Córdoba Capital, Argentina" },
              ].map((item) => (
                <div key={item.label}>
                  <span className="text-white/25 text-xs tracking-widest uppercase">{item.label}</span>
                  <p className="text-white text-sm mt-0.5">{item.value}</p>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            <div className="glass-card rounded-3xl p-8">
              {sent ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>☀</div>
                  <h3 className="text-2xl text-white mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    ¡Mensaje recibido!
                  </h3>
                  <p className="text-white/50 text-sm">Te contactamos a la brevedad.</p>
                  <button onClick={() => setSent(false)} className="mt-6 text-white/30 hover:text-white text-xs transition-colors">
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <h3 className="text-white font-medium mb-1">Consulta sobre {serviceLabel}</h3>
                  {[
                    { key: "name",  placeholder: "Tu nombre",   type: "text",  required: true },
                    { key: "email", placeholder: "Tu email",    type: "email", required: true },
                    { key: "phone", placeholder: "Tu teléfono", type: "tel",   required: false },
                  ].map((f) => (
                    <input
                      key={f.key}
                      type={f.type}
                      required={f.required}
                      placeholder={f.placeholder}
                      value={form[f.key]}
                      onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/20 transition-colors"
                    />
                  ))}
                  <textarea
                    rows={3}
                    placeholder="Contanos sobre tu proyecto o consulta..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/20 transition-colors resize-none"
                  />

                  {/* File upload */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                    onChange={handleFiles}
                    className="hidden"
                  />
                  <button
                    type="button"
                    onClick={() => fileInputRef.current.click()}
                    className="flex items-center gap-2 text-white/40 hover:text-white/70 text-sm transition-colors px-1 py-1"
                  >
                    <Paperclip size={15} />
                    Adjuntar archivos
                    <span className="text-white/20 text-xs ml-1">(PDF, JPG, PNG · máx. 5 · 10 MB c/u)</span>
                  </button>

                  {files.length > 0 && (
                    <div className="flex flex-col gap-2">
                      {files.map((f, i) => (
                        <div key={i} className="flex items-center justify-between bg-white/5 rounded-xl px-4 py-2.5 gap-3">
                          <div className="flex items-center gap-2 min-w-0">
                            <Paperclip size={13} className="text-white/30 flex-shrink-0" />
                            <span className="text-white/70 text-xs truncate">{f.name}</span>
                            <span className="text-white/25 text-xs flex-shrink-0">
                              {f.size < 1024 * 1024
                                ? `${(f.size / 1024).toFixed(0)} KB`
                                : `${(f.size / (1024 * 1024)).toFixed(1)} MB`}
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(i)}
                            className="text-white/25 hover:text-white/60 transition-colors flex-shrink-0"
                          >
                            <X size={14} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="liquid-glass rounded-full px-6 py-3.5 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/5 transition-colors mt-1"
                  >
                    Enviar consulta
                    <ArrowRight size={16} />
                  </button>
                  <p className="text-white/20 text-xs text-center">Sin compromiso · Respondemos en menos de 48 hs.</p>
                </form>
              )}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function ServiceLayout({ tag, title, subtitle, description, features, process, stats, nextService, cta, serviceLabel }) {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#servicios" className="inline-flex items-center gap-2 text-white/30 hover:text-white/60 text-sm transition-colors mb-10">
            <ArrowLeft size={14} />
            Volver a servicios
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-4"
        >
          {tag}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-5xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] mb-6"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          {title}
          {subtitle && (
            <><br /><em className="italic text-white/50">{subtitle}</em></>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-white/50 text-lg leading-relaxed max-w-2xl mb-12"
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex gap-4"
        >
          <a
            href="#contacto"
            className="inline-flex items-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-full hover:bg-white/90 transition-colors text-sm"
          >
            {cta?.primary ?? "Solicitar diagnóstico gratis"}
            <ArrowRight size={16} />
          </a>
          <a
            href={cta?.secondaryHref ?? "/#proyectos"}
            className="liquid-glass inline-flex items-center gap-2 text-white px-6 py-3 rounded-full hover:bg-white/5 transition-colors text-sm"
          >
            {cta?.secondary ?? "Ver proyectos"}
          </a>
        </motion.div>
      </section>

      {/* Stats */}
      {stats && (
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 border-t border-white/10">
            {stats.map((s, i) => (
              <FadeIn key={s.label} delay={i * 0.1}>
                <div className="py-8 px-6 border-b border-r border-white/10 last:border-r-0">
                  <div className="text-3xl md:text-4xl text-white mb-1" style={{ fontFamily: "'Instrument Serif', serif" }}>
                    {s.value}
                  </div>
                  <div className="text-white/40 text-xs tracking-wide">{s.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      )}

      {/* Features */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-white/40 text-sm tracking-widest uppercase mb-3">¿Qué incluye?</p>
            <h2 className="text-3xl md:text-5xl text-white tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
              Todo lo que necesitás
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <FadeIn key={f.title} delay={i * 0.08}>
                <div className="glass-card rounded-2xl p-6 h-full">
                  <div className="text-2xl mb-4">{f.icon}</div>
                  <h3 className="text-white font-medium mb-2 text-base">{f.title}</h3>
                  <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <FadeIn className="mb-12">
            <p className="text-white/40 text-sm tracking-widest uppercase mb-3">Cómo trabajamos</p>
            <h2 className="text-3xl md:text-5xl text-white tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
              El proceso, <em className="italic text-white/50">paso a paso</em>
            </h2>
          </FadeIn>

          <div className="flex flex-col gap-px">
            {process.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.1}>
                <div className="flex gap-6 md:gap-12 py-8 border-b border-white/10 group">
                  <div className="text-white/20 text-xs font-mono w-8 flex-shrink-0 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white text-lg md:text-xl mb-2 tracking-tight group-hover:text-white/80 transition-colors"
                      style={{ fontFamily: "'Instrument Serif', serif" }}>
                      {step.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
                  </div>
                  <div className="text-white/10 text-3xl flex-shrink-0 hidden md:block">{step.icon}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="glass-card rounded-3xl p-10 md:p-16 text-center">
              <p className="text-white/40 text-sm tracking-widest uppercase mb-4">¿Listo para empezar?</p>
              <h2 className="text-4xl md:text-6xl text-white mb-6 tracking-tight" style={{ fontFamily: "'Instrument Serif', serif" }}>
                Tu diagnóstico es <em className="italic text-white/50">gratis</em>
              </h2>
              <p className="text-white/50 text-base max-w-xl mx-auto mb-10">
                {cta?.ctaDesc ?? "En menos de 48 horas uno de nuestros asesores se comunica con vos para analizar tu caso y diseñar la solución ideal."}
              </p>
              <a
                href="#contacto"
                className="inline-flex items-center gap-2 bg-white text-black font-semibold px-8 py-4 rounded-full hover:bg-white/90 transition-all hover:scale-105 text-sm"
              >
                {cta?.ctaButton ?? "Empezar ahora"}
                <ArrowRight size={16} />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Next service */}
      {nextService && (
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto border-t border-white/10 pt-12 flex items-center justify-between">
            <span className="text-white/30 text-sm">Siguiente servicio</span>
            <Link
              href={nextService.href}
              className="flex items-center gap-3 text-white hover:text-white/70 transition-colors group"
            >
              <span className="text-lg" style={{ fontFamily: "'Instrument Serif', serif" }}>{nextService.title}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </section>
      )}

      <ServiceContactForm serviceLabel={serviceLabel ?? tag} />
      <Footer />
    </main>
  );
}
