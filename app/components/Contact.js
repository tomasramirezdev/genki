"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

const tipos = ["Residencial", "Comercial", "Industrial", "Rural"];

const highlights = [
  { value: "+500", label: "hogares y empresas instalados" },
  { value: "24 hs", label: "tiempo de respuesta garantizado" },
  { value: "100%", label: "certificados por EPEC" },
];

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

        <motion.h2
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl text-white tracking-tight mb-16"
          style={{ fontFamily: "'Instrument Serif', serif" }}
        >
          Empezá a ahorrar{" "}
          <em className="italic" style={{ color: "#CEF657" }}>desde hoy</em>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">

          {/* Left — CTA + stats */}
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-3xl p-8 md:p-10 flex flex-col justify-between gap-10"
            style={{ backgroundColor: "#111111" }}
          >
            <div>
              <p className="text-white/70 text-lg leading-relaxed mb-0">
                Nuestros asesores te contactan para hacer un diagnóstico gratuito
                de tu consumo y diseñar el sistema solar ideal para tu hogar o empresa.
              </p>
            </div>

            {/* Mini stats */}
            <div className="flex flex-col gap-5">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-baseline gap-4">
                  <span
                    className="text-3xl font-bold"
                    style={{ fontFamily: "'Instrument Serif', serif", color: "#CEF657" }}
                  >
                    {h.value}
                  </span>
                  <span className="text-white/40 text-sm">{h.label}</span>
                </div>
              ))}
            </div>

            {/* Datos de contacto */}
            <div className="flex flex-col gap-3 pt-4 border-t border-white/10">
              {[
                { label: "Teléfono", value: "+54 351 000-0000", href: "tel:+543510000000" },
                { label: "Email", value: "info@genki.com.ar", href: "mailto:info@genki.com.ar" },
                { label: "Horario", value: "Lun – Vie: 8:00 a 18:00", href: null },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <span className="text-white/25 text-xs tracking-widest uppercase w-16 flex-shrink-0">{item.label}</span>
                  {item.href ? (
                    <a href={item.href} className="text-white/60 text-sm hover:text-white transition-colors">{item.value}</a>
                  ) : (
                    <span className="text-white/60 text-sm">{item.value}</span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-3xl p-8 md:p-10"
            style={{ backgroundColor: "#0c1a2e" }}
          >
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-10 gap-4">
                <p
                  className="text-6xl text-white/20 select-none"
                  style={{ fontFamily: "'Instrument Serif', serif" }}
                >
                  ☀
                </p>
                <h3 className="text-2xl text-white" style={{ fontFamily: "'Instrument Serif', serif" }}>
                  ¡Mensaje recibido!
                </h3>
                <p className="text-white/40 text-sm max-w-xs">
                  Te contactamos a la brevedad para tu diagnóstico gratuito.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-white/30 hover:text-white text-xs transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 h-full">
                <h3 className="text-white text-lg font-medium mb-2">Iniciá tu proyecto</h3>
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
                  rows={4}
                  placeholder="Contanos sobre tu proyecto..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none flex-1"
                />

                <button
                  type="submit"
                  className="rounded-full px-6 py-3.5 text-white text-sm font-semibold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 mt-2"
                  style={{ backgroundColor: "#0083FE" }}
                >
                  Enviar consulta
                  <ArrowRight size={16} />
                </button>
                <p className="text-white/20 text-xs text-center">
                  Sin compromiso · Respondemos en menos de 24 hs.
                </p>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
