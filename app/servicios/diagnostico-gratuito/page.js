import ServiceLayout from "@/app/components/ServiceLayout";

export const metadata = {
  title: "Diagnóstico Gratuito – Genki Solar",
  description: "Analizamos tu consumo y diseñamos el sistema solar ideal para tu hogar o empresa en Córdoba. Sin costo y sin compromiso.",
};

export default function DiagnosticoGratuito() {
  return (
    <ServiceLayout
      tag="Asesoramiento"
      title="Diagnóstico"
      subtitle="Gratuito."
      description="Antes de tomar cualquier decisión, necesitás información concreta. Nuestros ingenieros analizan tu consumo real, la orientación de tu techo y el potencial solar de tu ubicación en Córdoba para darte una propuesta precisa, sin rodeos y sin costo."
      stats={[
        { value: "48 hs", label: "Tiempo de respuesta garantizado" },
        { value: "$0", label: "Costo del diagnóstico" },
        { value: "100%", label: "Sin compromiso de compra" },
        { value: "+500", label: "Diagnósticos realizados en Córdoba" },
      ]}
      features={[
        {
          icon: "📋",
          title: "Análisis de consumo",
          desc: "Revisamos tus facturas de EPEC de los últimos 12 meses para entender tu perfil de consumo y las horas de mayor demanda.",
        },
        {
          icon: "🛰️",
          title: "Estudio de radiación solar",
          desc: "Analizamos la irradiación solar de tu ubicación exacta en Córdoba usando datos satelitales NASA y PVGIS.",
        },
        {
          icon: "🏠",
          title: "Relevamiento del techo",
          desc: "Evaluamos orientación, inclinación, superficie disponible, tipo de estructura y posibles sombras que afecten la producción.",
        },
        {
          icon: "💡",
          title: "Dimensionamiento del sistema",
          desc: "Calculamos la potencia óptima, cantidad de paneles e inversor necesarios para cubrir tu consumo de manera eficiente.",
        },
        {
          icon: "💰",
          title: "Proyección financiera",
          desc: "Ahorro mensual estimado, retorno de inversión, TIR y comparativa con distintas opciones de financiación disponibles.",
        },
        {
          icon: "📞",
          title: "Asesor dedicado",
          desc: "Un ingeniero especialista te acompaña durante todo el proceso y responde todas tus dudas técnicas y financieras.",
        },
      ]}
      process={[
        {
          title: "Completás el formulario",
          desc: "Nos contás sobre tu propiedad, tipo de consumo y dejás tus datos de contacto. Solo tarda 2 minutos.",
          icon: "📝",
        },
        {
          title: "Te contactamos en 48 hs",
          desc: "Un asesor especializado se comunica con vos para coordinar el relevamiento y pedirte las últimas 3 facturas de EPEC.",
          icon: "📞",
        },
        {
          title: "Análisis técnico",
          desc: "Nuestros ingenieros procesan la información y diseñan el sistema óptimo para tu caso específico en Córdoba.",
          icon: "🔬",
        },
        {
          title: "Presentación del informe",
          desc: "Te presentamos el informe completo: diseño del sistema, producción esperada, ahorro proyectado y opciones de inversión.",
          icon: "📊",
        },
        {
          title: "Vos decidís sin presión",
          desc: "El diagnóstico es tuyo. Podés tomarte el tiempo que necesitás para evaluar la propuesta sin ningún tipo de compromiso.",
          icon: "✅",
        },
      ]}
      cta={{
        primary: "Solicitar mi diagnóstico ahora",
        secondary: "Ver proceso paso a paso",
        secondaryHref: "/#nosotros",
        ctaDesc: "Completá el formulario con tu dirección y las últimas facturas de EPEC. Es gratis, sin compromiso y te respondemos en 48 hs.",
        ctaButton: "Quiero mi diagnóstico gratuito",
      }}
      nextService={{
        title: "Instalación en Hogares",
        href: "/servicios/instalacion-hogares",
      }}
    />
  );
}
