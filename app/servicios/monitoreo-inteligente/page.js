import ServiceLayout from "@/app/components/ServiceLayout";

export const metadata = {
  title: "Monitoreo Inteligente – Genki Solar",
  description: "Controlá tu sistema solar en tiempo real desde tu celular. Alertas automáticas y reportes mensuales incluidos.",
};

export default function MonitoreoInteligente() {
  return (
    <ServiceLayout
      tag="Tecnología"
      title="Monitoreo"
      subtitle="Inteligente."
      description="Todos nuestros sistemas incluyen plataforma de monitoreo remoto en tiempo real. Desde tu celular o computadora podés ver exactamente cuánta energía producís, cuánto ahorrás y cómo está funcionando cada componente de tu instalación."
      stats={[
        { value: "24/7", label: "Monitoreo continuo sin interrupciones" },
        { value: "< 5 min", label: "Tiempo de detección de fallas" },
        { value: "99.5%", label: "Uptime garantizado del sistema" },
        { value: "∞", label: "Historial de datos almacenado" },
      ]}
      features={[
        {
          icon: "📱",
          title: "App para iOS y Android",
          desc: "Dashboard intuitivo con producción en tiempo real, histórico de generación y comparativas mes a mes.",
        },
        {
          icon: "⚡",
          title: "Datos en tiempo real",
          desc: "Potencia instantánea, energía diaria/mensual/anual, tensión, corriente y temperatura de cada panel e inversor.",
        },
        {
          icon: "🔔",
          title: "Alertas automáticas",
          desc: "Notificaciones al instante si un panel falla, el inversor se desconecta o la producción cae por debajo de lo esperado.",
        },
        {
          icon: "📊",
          title: "Reportes mensuales",
          desc: "Informe PDF automático con producción, ahorro en pesos y CO₂ evitado, para que tengas el registro completo.",
        },
        {
          icon: "🌐",
          title: "Acceso web",
          desc: "Portal web accesible desde cualquier dispositivo. Compartí el acceso con tu contador o socios para reportes financieros.",
        },
        {
          icon: "🔮",
          title: "Predicción de producción",
          desc: "Integración con datos meteorológicos para proyectar la producción de los próximos 7 días según el clima de Córdoba.",
        },
      ]}
      process={[
        {
          title: "Instalación del datalogger",
          desc: "Instalamos el dispositivo de comunicación conectado al inversor. Compatible con todas las marcas líderes del mercado.",
          icon: "📡",
        },
        {
          title: "Configuración de la plataforma",
          desc: "Damos de alta tu sistema en nuestra plataforma de monitoreo con todos los parámetros y umbrales de alerta personalizados.",
          icon: "⚙️",
        },
        {
          title: "Instalación de la app",
          desc: "Te ayudamos a instalar y configurar la app en tu celular. En 10 minutos ya estás viendo tus datos en tiempo real.",
          icon: "📱",
        },
        {
          title: "Capacitación",
          desc: "Explicación completa de cómo interpretar cada dato, cómo leer los reportes y qué hacer ante cada tipo de alerta.",
          icon: "🎓",
        },
        {
          title: "Soporte continuo",
          desc: "Nuestro equipo monitorea tu sistema remotamente. Si detectamos una anomalía, te contactamos antes de que vos lo notes.",
          icon: "🛡️",
        },
      ]}
      cta={{
        primary: "Consultá por el monitoreo",
        secondary: "Ver nuestros servicios",
        secondaryHref: "/#servicios",
        ctaDesc: "El monitoreo está incluido en todas nuestras instalaciones. Si ya tenés paneles de otra empresa, consultanos para conectar tu sistema.",
        ctaButton: "Consultar disponibilidad",
      }}
      nextService={{
        title: "Diagnóstico Gratuito",
        href: "/servicios/diagnostico-gratuito",
      }}
    />
  );
}
