"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const tipos = ["Residencial", "Comercial", "Industrial", "Rural"];

function CustomSelect({ value, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white/70 text-sm focus:outline-none flex items-center justify-between hover:border-white/20 transition-colors"
      >
        {value}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-[#111] border border-white/10 rounded-xl overflow-hidden z-50 shadow-xl">
          {tipos.map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => { onChange(t); setOpen(false); }}
              className={`w-full text-left px-4 py-3 text-sm transition-colors hover:bg-white/5
                ${value === t ? "text-white" : "text-white/50"}`}
            >
              {t}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", type: "Residencial", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" ref={ref} className="bg-black py-28 md:py-40 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.p
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-white/40 text-sm tracking-widest uppercase mb-6"
        >
          Contacto
        </motion.p>

        <motion.h2
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl text-white tracking-tight mb-16"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Empezá a ahorrar{" "}
          <em className="italic text-white/60">desde hoy</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left – info */}
          <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-white/60 text-lg leading-relaxed mb-10">
              Nuestros asesores te contactarán para hacer un diagnóstico gratuito
              de tu consumo y diseñar el sistema solar ideal para tu hogar o empresa en Córdoba.
            </p>

            <div className="space-y-6">
              {[
                { label: "Ubicación", value: "Córdoba Capital, Argentina", href: null },
                { label: "Teléfono", value: "+54 351 000-0000", href: "tel:+543510000000" },
                { label: "Email", value: "info@genki.com.ar", href: "mailto:info@genki.com.ar" },
                { label: "Horario", value: "Lun – Vie: 8:00 a 18:00", href: null },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-0.5">
                  <span className="text-white/30 text-xs tracking-widest uppercase">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-white text-sm hover:text-white/70 transition-colors">{item.value}</a>
                  ) : (
                    <span className="text-white text-sm">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right – form */}
          <motion.div
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-card rounded-3xl p-8"
          >
            {sent ? (
              <div className="text-center py-10">
                <div className="text-5xl text-white mb-4" style={{ fontFamily: "'Instrument Serif', serif" }}>☀</div>
                <h3 className="text-2xl text-white mb-2" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  ¡Mensaje recibido!
                </h3>
                <p className="text-white/50 text-sm">Te contactamos a la brevedad para tu diagnóstico gratuito.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-white/40 hover:text-white text-xs transition-colors">
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-white text-lg font-medium mb-2">Cotización gratuita</h3>
                {[
                  { key: "name", placeholder: "Tu nombre", type: "text", required: true },
                  { key: "email", placeholder: "Tu email", type: "email", required: true },
                ].map((f) => (
                  <input
                    key={f.key}
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={form[f.key]}
                    onChange={(e) => setForm({ ...form, [f.key]: e.target.value })}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors"
                  />
                ))}

                <CustomSelect
                  value={form.type}
                  onChange={(t) => setForm({ ...form, type: t })}
                />

                <textarea
                  rows={3}
                  placeholder="Contanos sobre tu proyecto..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="liquid-glass rounded-full px-6 py-3.5 text-white text-sm font-medium flex items-center justify-center gap-2 hover:bg-white/5 transition-colors mt-2"
                >
                  Solicitar diagnóstico gratuito
                  <ArrowRight size={16} />
                </button>
                <p className="text-white/25 text-xs text-center">Sin compromiso · Respondemos en menos de 24 hs.</p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
