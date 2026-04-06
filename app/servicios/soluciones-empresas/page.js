import ServiceLayout from "@/app/components/ServiceLayout";

export const metadata = {
  title: "Soluciones para Empresas – Genki Solar",
  description: "Instalaciones solares industriales y comerciales en Córdoba. Reducí costos energéticos y accedé a beneficios fiscales.",
};

export default function SolucionesEmpresas() {
  return (
    <ServiceLayout
      tag="Industrial & Comercial"
      title="Soluciones para"
      subtitle="Empresas."
      description="Diseñamos sistemas fotovoltaicos de gran escala para industrias, comercios, supermercados y campos en Córdoba. Reducí tus costos energéticos hasta un 70% y accedé a beneficios impositivos nacionales para la inversión en energías renovables."
      stats={[
        { value: "70%", label: "Reducción en costos energéticos" },
        { value: "4 años", label: "Recupero de inversión promedio" },
        { value: "500 kW+", label: "Capacidad máxima instalada" },
        { value: "30%", label: "Beneficio fiscal disponible (Ley 27.191)" },
      ]}
      features={[
        {
          icon: "🏭",
          title: "Sistemas a medida",
          desc: "Desde 20 kW hasta 500 kW. Diseñamos la solución exacta para tu industria, campo o comercio según tu demanda real.",
        },
        {
          icon: "🏛️",
          title: "Beneficios fiscales (Ley 27.191)",
          desc: "Accedé al bono fiscal del 30% del monto invertido y amortización acelerada del activo en el impuesto a las ganancias.",
        },
        {
          icon: "⚡",
          title: "Reducción de demanda pico",
          desc: "Optimizamos el sistema para reducir la potencia pico contratada, uno de los mayores costos en tarifas industriales.",
        },
        {
          icon: "🔋",
          title: "Sistemas con baterías",
          desc: "Opción de almacenamiento energético para garantizar continuidad operativa ante cortes de red o para uso nocturno.",
        },
        {
          icon: "📊",
          title: "Informe de ROI detallado",
          desc: "Análisis financiero completo: TIR, VAN, payback y proyección de ahorros a 25 años para presentar a inversores o socios.",
        },
        {
          icon: "🤝",
          title: "Financiación corporativa",
          desc: "Acceso a líneas de crédito del BNA y BICE específicas para proyectos de energía renovable con tasas preferenciales.",
        },
      ]}
      process={[
        {
          title: "Auditoría energética",
          desc: "Analizamos tus facturas de los últimos 12 meses, medimos la demanda real y relevamos la infraestructura eléctrica existente.",
          icon: "🔍",
        },
        {
          title: "Ingeniería y diseño",
          desc: "Nuestro equipo de ingenieros diseña el sistema optimizado: string sizing, layout de paneles, protecciones y diagrama unifilar.",
          icon: "📐",
        },
        {
          title: "Gestión de permisos",
          desc: "Tramitamos las habilitaciones municipales, la conexión con la distribuidora y toda la documentación técnica requerida.",
          icon: "📑",
        },
        {
          title: "Instalación certificada",
          desc: "Equipo propio de instaladores matriculados. Trabajo en altura, sistemas trifásicos y cumplimiento de normas IRAM/IEC.",
          icon: "🏗️",
        },
        {
          title: "Puesta en marcha y capacitación",
          desc: "Comisionamiento completo del sistema, configuración del SCADA de monitoreo y capacitación al personal técnico de tu empresa.",
          icon: "🚀",
        },
        {
          title: "Mantenimiento preventivo",
          desc: "Plan de mantenimiento anual: limpieza de paneles, revisión de conexiones, actualización de firmware y reporte de performance.",
          icon: "🔧",
        },
      ]}
      cta={{
        primary: "Hablar con un asesor empresarial",
        secondary: "Ver proyectos industriales",
        secondaryHref: "/#proyectos",
        ctaDesc: "Contanos el rubro de tu empresa y tu consumo mensual estimado. Armamos una propuesta técnica y financiera sin costo en 48 hs.",
        ctaButton: "Solicitar auditoría energética gratis",
      }}
      nextService={{
        title: "Monitoreo Inteligente",
        href: "/servicios/monitoreo-inteligente",
      }}
    />
  );
}
