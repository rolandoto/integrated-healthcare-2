'use client';

import Image from 'next/image';
import {useLocale} from 'next-intl';
import {Users, Award, Heart, Target} from 'lucide-react';
import PageHero from '../components/PageHero';

type Locale = 'en' | 'es';

type Member = {
  name: string;
  image: string;
  imageSize: {width: number; height: number};
  bio: Record<Locale, string>;
  credentials: Array<{title: Record<Locale, string>; detail: Record<Locale, string>}>;
};

const teamMembers: Member[] = [
  {
    name: 'Mayte Ruiz Santiago, MD',
    image: '/image/WhatsApp Image 2026-02-24 at 8.00.23 PM.jpeg',
    imageSize: {width: 1152, height: 768},
    bio: {
      en: 'Board-certified psychiatrist in Miami focused on evidence-based care, diagnostic precision, and long-term recovery for complex mental health conditions.',
      es: 'Psiquiatra certificada en Miami, enfocada en atención basada en evidencia, precisión diagnóstica y recuperación a largo plazo en condiciones de salud mental complejas.'
    },
    credentials: [
      {
        title: {en: 'Board Certified Psychiatrist (MD)', es: 'Psiquiatra Certificada (MD)'},
        detail: {
          en: 'Licensed in Florida with extensive experience in adult and geriatric psychiatry.',
          es: 'Licenciada en Florida con amplia experiencia en psiquiatría de adultos y geriátrica.'
        }
      },
      {
        title: {en: 'Principal Investigator – Magnum Medical Research', es: 'Investigadora Principal – Magnum Medical Research'},
        detail: {
          en: 'Leads clinical research with a patient-first, ethical approach.',
          es: 'Dirige investigación clínica con enfoque ético y centrado en el paciente.'
        }
      }
    ]
  },
  {
    name: 'Ivan Acevedo, APRN',
    image: '/our/ivan.jpeg',
    imageSize: {width: 1152, height: 1536},
    bio: {
      en: 'Family Nurse Practitioner specialized in psychiatry care, providing compassionate and comprehensive support in Miami.',
      es: 'Enfermero practicante familiar especializado en atención psiquiátrica, brindando apoyo compasivo e integral en Miami.'
    },
    credentials: [
      {
        title: {en: 'Master of Science in Nursing (MSN)', es: 'Maestría en Ciencias de Enfermería (MSN)'},
        detail: {
          en: 'Graduated from Walden University with advanced clinical family-practice training.',
          es: 'Graduado de Walden University con formación clínica avanzada en práctica familiar.'
        }
      },
      {
        title: {en: 'Certified Family Nurse Practitioner (FNP-C)', es: 'Nurse Practitioner Familiar Certificado (FNP-C)'},
        detail: {
          en: 'National certification in family nursing practice.',
          es: 'Certificación nacional en práctica de enfermería familiar.'
        }
      }
    ]
  },
  {
    name: 'Yaisel Perea, PMH-NP',
    image: '/our/yaisell.webp',
    imageSize: {width: 1152, height: 1152},
    bio: {
      en: 'Psychiatric Mental Health Nurse Practitioner with focused experience in evaluations and treatment planning.',
      es: 'Nurse Practitioner de Salud Mental Psiquiátrica con experiencia enfocada en evaluaciones y planes de tratamiento.'
    },
    credentials: [
      {
        title: {en: 'Psychiatric Mental Health Nurse Practitioner (PMH-NP)', es: 'Nurse Practitioner de Salud Mental Psiquiátrica (PMH-NP)'},
        detail: {
          en: 'Specialized in psychiatric assessment and treatment.',
          es: 'Especializada en evaluación y tratamiento psiquiátrico.'
        }
      },
      {
        title: {en: 'Advanced Practice Registered Nurse (APRN)', es: 'Enfermera Registrada de Práctica Avanzada (APRN)'},
        detail: {
          en: 'Licensed APRN in Florida delivering patient-centered care.',
          es: 'APRN licenciada en Florida que brinda atención centrada en el paciente.'
        }
      }
    ]
  },
  {
    name: 'Richard Tome, PMH-NP',
    image: '/our/richar.jpeg',
    imageSize: {width: 1152, height: 1152},
    bio: {
      en: 'Board-certified PMHNP providing evidence-based care for adolescents and adults with diverse psychiatric conditions.',
      es: 'PMHNP certificado que brinda atención basada en evidencia a adolescentes y adultos con diversas condiciones psiquiátricas.'
    },
    credentials: [
      {
        title: {en: 'Psychiatric Mental Health Nurse Practitioner (PMH-NP)', es: 'Nurse Practitioner de Salud Mental Psiquiátrica (PMH-NP)'},
        detail: {
          en: 'Expertise in psychiatric diagnosis and treatment.',
          es: 'Experiencia en diagnóstico y tratamiento psiquiátrico.'
        }
      },
      {
        title: {en: 'Advanced Practice Registered Nurse (APRN)', es: 'Enfermero de Práctica Avanzada (APRN)'},
        detail: {en: 'Licensed APRN in Florida.', es: 'APRN licenciado en Florida.'}
      }
    ]
  },
  {
    name: 'Lisyen Perez, PMHNP',
    image: '/our/Lisyen.jpeg',
    imageSize: {width: 1152, height: 1152},
    bio: {
      en: 'PMHNP dedicated to personalized, patient-centered treatment for a broad range of psychiatric needs.',
      es: 'PMHNP dedicada a tratamientos personalizados y centrados en el paciente para una amplia variedad de necesidades psiquiátricas.'
    },
    credentials: []
  },
  {
    name: 'Dasniellis Zoque, APRN',
    image: '/our/Dasniellis.jpeg',
    imageSize: {width: 1152, height: 1152},
    bio: {
      en: 'Psychiatric APRN focused on compassionate, evidence-based evaluation and medication management.',
      es: 'APRN psiquiátrica enfocada en evaluación compasiva y manejo de tratamiento basado en evidencia.'
    },
    credentials: []
  },
  {
    name: 'Yolaine Sierra, APRN',
    image: '/our/Yolaine.jpeg',
    imageSize: {width: 1152, height: 1536},
    bio: {
      en: 'APRN delivering respectful and collaborative psychiatric follow-up care.',
      es: 'APRN que brinda seguimiento psiquiátrico respetuoso y colaborativo.'
    },
    credentials: []
  }
];

const therapyMembers: Member[] = [
  {
    name: 'Modesto Ramos, RMHC',
    image: '/our/WhatsApp Image 2026-02-24 at 7.36.50 PM.jpeg',
    imageSize: {width: 1152, height: 1536},
    bio: {
      en: 'Registered Mental Health Counselor providing structured and compassionate psychotherapy support.',
      es: 'Consejero registrado de salud mental que brinda psicoterapia estructurada y compasiva.'
    },
    credentials: []
  },
  {
    name: 'Marcela Abello, RMHC',
    image: '/our/WhatsApp Image 2026-02-24 at 7.36.50 PM (2).jpeg',
    imageSize: {width: 1152, height: 1536},
    bio: {
      en: 'RMHC focused on emotional wellness, coping skills, and therapeutic growth.',
      es: 'RMHC enfocada en bienestar emocional, habilidades de afrontamiento y crecimiento terapéutico.'
    },
    credentials: []
  },
  {
    name: 'Oscar Mas, LMHC',
    image: '/our/WhatsApp Image 2026-02-24 at 7.36.50 PM (4).jpeg',
    imageSize: {width: 1152, height: 1536},
    bio: {
      en: 'Licensed Mental Health Counselor delivering evidence-based counseling for adolescents and adults.',
      es: 'Consejero de salud mental licenciado que brinda terapia basada en evidencia para adolescentes y adultos.'
    },
    credentials: []
  }
];

function TeamMemberCard({member, locale}: {member: Member; locale: Locale}) {
  return (
    <article className="w-full max-w-[320px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative h-80 w-full">
        <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 320px" />
      </div>
      <div className="space-y-3 p-5">
        <h3 className="font-display text-2xl font-bold text-primary-700">{member.name}</h3>
        <p className="text-sm leading-relaxed text-slate-700">{member.bio[locale]}</p>
        {member.credentials.length > 0 && (
          <div className="space-y-2 pt-1">
            {member.credentials.map((credential) => (
              <div key={credential.title.en}>
                <p className="text-sm font-semibold text-primary-700">{credential.title[locale]}</p>
                <p className="text-sm text-slate-600">{credential.detail[locale]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function OurTeamPage() {
  const locale = (useLocale() === 'es' ? 'es' : 'en') as Locale;

  const copy = {
    en: {
      heroTitle: 'Our Team',
      heroDescription: 'Meet our dedicated team of psychiatrists and providers committed to your mental wellness.',
      medicalTeam: 'Psychiatry Team',
      medicalDesc: 'Board-certified psychiatrists and nurse practitioners providing evidence-based mental health care.',
      therapyTeam: 'Therapy Team',
      therapyDesc: 'Licensed therapists and counselors supporting your healing journey with compassionate psychotherapy.',
      highlights: [
        {
          title: 'Expert Professionals',
          text: 'Our clinicians bring extensive training in modern psychiatry and integrated care.'
        },
        {
          title: 'Compassionate Care',
          text: 'We deliver respectful, patient-centered care tailored to each person’s story.'
        },
        {
          title: 'Evidence-Based Treatment',
          text: 'We use best clinical practices and up-to-date standards for safer outcomes.'
        },
        {
          title: 'Personalized Approach',
          text: 'Every plan is individualized based on your goals, symptoms, and life context.'
        }
      ],
      commitmentTitle: 'Our Commitment to You',
      commitmentP1: 'Our team is united by excellence, compassion, and integrity in every encounter.',
      commitmentP2: 'We provide comprehensive support for depression, anxiety, trauma, and complex psychiatric disorders.',
      commitmentP3: 'When you choose us, you gain a long-term partner in your healing process.',
      ctaTitle: 'Ready to Meet Your Care Team?',
      ctaText: 'Schedule a consultation today and take the first step toward better mental health.',
      callButton: 'Call (786) 536-1701',
      contactButton: 'Contact Us'
    },
    es: {
      heroTitle: 'Nuestro Equipo',
      heroDescription: 'Conoce a nuestro equipo de psiquiatras y profesionales comprometidos con tu bienestar mental.',
      medicalTeam: 'Equipo de Psiquiatría',
      medicalDesc: 'Psiquiatras y nurse practitioners certificados que brindan atención de salud mental basada en evidencia.',
      therapyTeam: 'Equipo de Terapia',
      therapyDesc: 'Terapeutas y consejeros licenciados que te acompañan con psicoterapia compasiva.',
      highlights: [
        {
          title: 'Profesionales Expertos',
          text: 'Nuestros clínicos cuentan con amplia formación en psiquiatría moderna y atención integrada.'
        },
        {
          title: 'Atención Compasiva',
          text: 'Brindamos una atención respetuosa y centrada en el paciente, adaptada a cada historia.'
        },
        {
          title: 'Tratamiento Basado en Evidencia',
          text: 'Aplicamos mejores prácticas clínicas y estándares actualizados para resultados más seguros.'
        },
        {
          title: 'Enfoque Personalizado',
          text: 'Cada plan se individualiza según tus metas, síntomas y contexto de vida.'
        }
      ],
      commitmentTitle: 'Nuestro Compromiso Contigo',
      commitmentP1: 'Nuestro equipo está unido por la excelencia, la compasión y la integridad en cada encuentro.',
      commitmentP2: 'Ofrecemos apoyo integral para depresión, ansiedad, trauma y trastornos psiquiátricos complejos.',
      commitmentP3: 'Cuando nos eliges, ganas un aliado a largo plazo en tu proceso de sanación.',
      ctaTitle: '¿Listo para conocer a tu equipo de cuidado?',
      ctaText: 'Agenda una consulta hoy y da el primer paso hacia una mejor salud mental.',
      callButton: 'Llamar (786) 536-1701',
      contactButton: 'Contáctanos'
    }
  }[locale];

  return (
    <>
      <PageHero title={copy.heroTitle} description={copy.heroDescription} />

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-display text-4xl font-bold uppercase tracking-wide text-primary-700">{copy.medicalTeam}</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">{copy.medicalDesc}</p>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary-500" />
            </div>
            <div className="flex flex-wrap gap-10">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} locale={locale} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-display text-4xl font-bold uppercase tracking-wide text-primary-700">{copy.therapyTeam}</h2>
              <p className="mx-auto max-w-2xl text-lg text-slate-600">{copy.therapyDesc}</p>
              <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-primary-500" />
            </div>
            <div className="flex flex-wrap gap-10">
              {therapyMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} locale={locale} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="mb-16 flex flex-wrap gap-8">
              {[
                {icon: <Users className="h-10 w-10 text-primary-500" />, bg: 'bg-primary-50'},
                {icon: <Heart className="h-10 w-10 text-accent-500" />, bg: 'bg-accent-50'},
                {icon: <Award className="h-10 w-10 text-primary-500" />, bg: 'bg-primary-50'},
                {icon: <Target className="h-10 w-10 text-accent-500" />, bg: 'bg-accent-50'}
              ].map((styleCard, index) => {
                const card = copy.highlights[index];
                return (
                  <div key={card.title} className={`${styleCard.bg} flex-1 rounded-2xl p-8`} style={{minWidth: '240px'}}>
                    {styleCard.icon}
                    <h3 className="mt-4 mb-3 font-display text-xl font-bold text-primary-700">{card.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-700">{card.text}</p>
                  </div>
                );
              })}
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-primary-700 to-primary-500 p-10 text-white">
              <h2 className="mb-6 font-display text-3xl font-bold">{copy.commitmentTitle}</h2>
              <p className="mb-4 text-lg leading-relaxed">{copy.commitmentP1}</p>
              <p className="mb-4 text-lg leading-relaxed">{copy.commitmentP2}</p>
              <p className="text-lg leading-relaxed">{copy.commitmentP3}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-display text-4xl font-bold text-primary-700">{copy.ctaTitle}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-700">{copy.ctaText}</p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <a href="tel:+17865361701" className="rounded-full bg-primary-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:scale-105 hover:bg-primary-600">
              {copy.callButton}
            </a>
            <a href="/contact" className="rounded-full border-2 border-primary-500 bg-white px-8 py-4 text-lg font-semibold text-primary-700 transition-all hover:scale-105 hover:bg-primary-50">
              {copy.contactButton}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
