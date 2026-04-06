import ServiceLayout from "@/app/components/ServiceLayout";

export const metadata = {
  title: "Instalación en Hogares – Genki Solar",
  description: "Sistemas solares residenciales conectados a EPEC. Reducí hasta un 90% tu factura de energía en Córdoba.",
};

export default function InstalacionHogares() {
  return (
    <ServiceLayout
      tag="Residencial"
      title="Instalación en"
      subtitle="Hogares."
      description="Diseñamos e instalamos sistemas fotovoltaicos conectados a la red de EPEC adaptados exactamente a tu consumo. Paneles de alta eficiencia, inversores inteligentes y monitoreo en tiempo real para que tu casa genere su propia energía."
      stats={[
        { value: "90%", label: "Reducción promedio en factura EPEC" },
        { value: "3–5 años", label: "Recupero de inversión" },
        { value: "25 años", label: "Garantía de producción" },
        { value: "2 días", label: "Tiempo de instalación" },
      ]}
      features={[
        {
          icon: "☀",
          title: "Paneles de alta eficiencia",
          desc: "Utilizamos paneles monocristalinos de primera línea con eficiencia superior al 21%, ideales para el clima de Córdoba.",
        },
        {
          icon: "🔌",
          title: "Conexión a red EPEC",
          desc: "Gestionamos todos los trámites de conexión y habilitación ante EPEC. Vos no tenés que hacer nada.",
        },
        {
          icon: "💰",
          title: "Inyección a la red",
          desc: "La energía que no consumís se inyecta a la red y te genera crédito en tu próxima factura.",
        },
        {
          icon: "📱",
          title: "Monitoreo remoto",
          desc: "App incluida para ver en tiempo real cuánta energía producís, consumís e inyectás a la red.",
        },
        {
          icon: "🔧",
          title: "Garantía de mano de obra",
          desc: "5 años de garantía en la instalación. Nuestro equipo técnico responde ante cualquier inconveniente.",
        },
        {
          icon: "📋",
          title: "Financiación disponible",
          desc: "Accedé a planes de financiación en cuotas y créditos bancarios para distribuir la inversión inicial.",
        },
      ]}
      process={[
        {
          title: "Diagnóstico energético",
          desc: "Analizamos tus facturas de EPEC, la orientación de tu techo y tu consumo para dimensionar el sistema exacto que necesitás.",
          icon: "🔍",
        },
        {
          title: "Propuesta técnica y económica",
          desc: "Te presentamos un informe detallado con el diseño del sistema, ahorro proyectado, retorno de inversión y opciones de financiación.",
          icon: "📄",
        },
        {
          title: "Instalación en 2 días",
          desc: "Nuestro equipo certificado realiza la instalación completa: estructura, paneles, inversor y cableado con mínima interferencia en tu hogar.",
          icon: "🏠",
        },
        {
          title: "Trámites ante EPEC",
          desc: "Gestionamos toda la documentación técnica y administrativa para la habilitación y conexión a la red provincial.",
          icon: "📑",
        },
        {
          title: "Puesta en marcha y capacitación",
          desc: "Activamos el sistema, configuramos el monitoreo y te explicamos cómo interpretar los datos de producción desde la app.",
          icon: "🚀",
        },
      ]}
      cta={{
        primary: "Quiero instalar paneles",
        secondary: "Ver proyectos realizados",
        secondaryHref: "/#proyectos",
        ctaDesc: "Contanos dónde vivís y cuánto pagás de luz. En 48 horas te mandamos una propuesta con el ahorro real que podés esperar.",
        ctaButton: "Solicitar instalación residencial",
      }}
      nextService={{
        title: "Soluciones para Empresas",
        href: "/servicios/soluciones-empresas",
      }}
    />
  );
}
