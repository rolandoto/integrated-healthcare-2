import { CheckCircle2 } from 'lucide-react';

const servicesEn = [
  {
    title: 'Psychiatric Evaluations',
    description:
      'Thorough psychiatric assessments to establish accurate diagnoses and individualized treatment plans, including diagnostic clarification, risk assessment, and functional evaluation aligned with DSM-5-TR standards.',
  },
  {
    title: 'Medication Management',
    description:
      'Evidence-based psychopharmacologic treatment with monitoring of response, side effects, and long-term safety. Medication plans are reviewed and adjusted regularly to optimize outcomes and adherence.',
  },
  {
    title: 'Treatment of Complex Psychiatric Conditions',
    description:
      'Specialized care for moderate to severe psychiatric disorders, including mood disorders, psychotic disorders, anxiety disorders, trauma-related conditions, personality disorders, and co-occurring substance use disorders.',
  },
  {
    title: 'Longitudinal Care and Monitoring',
    description:
      'Continuity of care through regular follow-up visits, symptom monitoring, and functional assessments focused on long-term stability and relapse prevention.',
  },
  {
    title: 'Care Coordination & Targeted Case Management',
    description:
      'Collaboration with primary care providers, hospitals, therapists, and community services, including transitions from inpatient to outpatient settings and support from specialized social worker services.',
  },
  {
    title: 'Psychosocial Support and Psychoeducation',
    description:
      'Supportive interventions for patients and families that improve understanding, engagement, adherence, and recovery-oriented treatment goals.',
  },
];

const servicesEs = [
  {
    title: 'Evaluaciones Psiquiátricas',
    description:
      'Evaluaciones completas para establecer diagnósticos precisos y diseñar planes de tratamiento individualizados, incluyendo valoración diagnóstica, evaluación de riesgo y análisis funcional conforme a DSM-5-TR.',
  },
  {
    title: 'Manejo Psicofarmacológico',
    description:
      'Tratamiento psicofarmacológico basado en evidencia con monitoreo de respuesta clínica, efectos secundarios y seguridad a largo plazo, con ajustes regulares para optimizar resultados.',
  },
  {
    title: 'Tratamiento de Condiciones Psiquiátricas Complejas',
    description:
      'Manejo especializado de trastornos psiquiátricos de moderada a alta complejidad, incluyendo trastornos del estado de ánimo, trastornos psicóticos, ansiedad, trauma, personalidad y uso concomitante de sustancias.',
  },
  {
    title: 'Seguimiento Longitudinal',
    description:
      'Continuidad del cuidado mediante visitas periódicas, monitoreo de síntomas y evaluación funcional para mantener estabilidad clínica y prevenir recaídas.',
  },
  {
    title: 'Coordinación del Cuidado y Case Management',
    description:
      'Trabajo coordinado con médicos primarios, hospitales, terapeutas y recursos comunitarios, incluyendo transiciones seguras entre niveles de atención y apoyo de trabajadores sociales especializados.',
  },
  {
    title: 'Apoyo Psicosocial y Psicoeducación',
    description:
      'Intervenciones de apoyo para pacientes y familias orientadas a fortalecer la comprensión de la condición, la adherencia terapéutica y la recuperación funcional.',
  },
];

function ServiceColumn({
  title,
  subtitle,
  items,
}: {
  title: string;
  subtitle: string;
  items: { title: string; description: string }[];
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="font-display text-3xl font-bold text-primary-700">{title}</h2>
      <p className="mt-2 text-slate-600">{subtitle}</p>
      <div className="mt-8 space-y-5">
        {items.map((item) => (
          <div key={item.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
            <h3 className="inline-flex items-start gap-2 text-lg font-semibold text-slate-900">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-primary-600" />
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </div>
        ))}
      </div>
    </article>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-700 to-primary-500 py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl font-bold md:text-6xl">Our Services / Nuestros Servicios</h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg leading-relaxed">
            Integrated Healthcare Psychiatric Group delivers comprehensive, evidence-based psychiatric services with clinical rigor, compassion,
            and continuity of care focused on symptom control and long-term functional recovery.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
          <ServiceColumn
            title="English Version"
            subtitle="Comprehensive psychiatric services for children, adults, and families."
            items={servicesEn}
          />
          <ServiceColumn
            title="Versión en Español"
            subtitle="Servicios psiquiátricos integrales con enfoque clínico y humano."
            items={servicesEs}
          />
        </div>
      </section>
    </>
  );
}
