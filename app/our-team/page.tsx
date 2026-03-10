import {useLocale} from 'next-intl';
 import Image from 'next/image';
import { Users, Award, Heart, Target } from 'lucide-react';
import PageHero from '../components/PageHero';

const teamMembers = [
  {
    name: 'Mayte Ruiz Santiago, MD',
    image: '/image/WhatsApp Image 2026-02-24 at 8.00.23 PM.jpeg',
    imageSize: { width: 1152, height: 768 },
    bio: (
      <>
        Dr. Mayte Ruiz Santiago is a highly experienced, Board Certified psychiatrist based in Miami, FL, with a deep commitment to clinical
        research and patient care. She earned her medical degree from the <strong>Instituto Superior de Ciencias Médicas de la Habana</strong> in
        2012 and has since gained extensive expertise in treating mental health disorders including{' '}
        <strong>Bipolar Disorder, OCD, Schizophrenia, and ADHD</strong>. She also has a strong focus on geriatric psychiatry and serves as
        Principal Investigator at Magnum Medical Research.
      </>
    ),
    credentials: [
      {
        title: 'Board Certified Psychiatrist (MD)',
        detail: 'Licensed in Florida and specializing in complex psychiatric disorders across adult and geriatric populations.',
      },
      {
        title: 'Principal Investigator – Magnum Medical Research',
        detail: 'Leads clinical trials with precision and a patient-first approach, ensuring the highest ethical and regulatory standards.',
      },
    ],
  },
  {
    name: 'Ivan Acevedo, APRN',
    image: '/our/ivan.jpeg',
    imageSize: { width: 1152, height: 1536 },
    bio: (
      <>
        <strong>Ivan Acevedo, APRN, FNP-C</strong>, is a <strong>Family Nurse Practitioner</strong> specializing in{' '}
        <strong>psychiatry care</strong> at <strong>Integrated Healthcare Group</strong> in <strong>Miami, Florida</strong>.
        With over two years of experience, Ivan is dedicated to delivering compassionate and comprehensive mental health services to his patients.
      </>
    ),
    credentials: [
      {
        title: 'Master of Science in Nursing (MSN)',
        detail: <>Ivan earned his MSN from <strong>Walden University</strong>, equipping him with advanced clinical skills and knowledge in family practice.</>,
      },
      {
        title: 'Certified Family Nurse Practitioner (FNP-C)',
        detail: 'He holds the FNP-C certification, demonstrating his expertise in family nursing practice.',
      },
    ],
  },
  {
    name: 'Yaisel Perea, PMH-NP',
    image: '/our/yaisell.webp',
    imageSize: { width: 1152, height: 1152 },
    bio: (
      <>
        <strong>Yaisel Perea, PMH-NP</strong>, is a dedicated <strong>Psychiatric Mental Health Nurse Practitioner</strong> specializing in{' '}
        <strong>psychiatry</strong> at <strong>Integrated Health Care Group</strong> in <strong>Miami, Florida</strong>.
        With over three years of clinical experience, Yaisel is committed to delivering compassionate and comprehensive mental health care to her patients.
      </>
    ),
    credentials: [
      {
        title: 'Psychiatric Mental Health Nurse Practitioner (PMH-NP)',
        detail: 'Yaisel is certified as a PMH-NP, with a specialization in psychiatric evaluation and treatment.',
      },
      {
        title: 'Advanced Practice Registered Nurse (APRN)',
        detail: 'She is a licensed APRN in the state of Florida, supporting comprehensive, patient-centered psychiatric care.',
      },
    ],
  },
  {
    name: 'Richard Tome, PMH-NP',
    image: '/our/richar.jpeg',
    imageSize: { width: 1152, height: 1152 },
    bio: (
      <>
        <strong>Richard Tome, PMH-NP</strong>, is a board-certified <strong>Psychiatric Mental Health Nurse Practitioner</strong> serving
        patients at <strong>Integrated Health Care Group</strong> in <strong>Miami, Florida</strong>. With specialized training in diagnosing
        and treating psychiatric disorders, Richard provides evidence-based, compassionate care to adolescents and adults experiencing a wide
        range of mental health conditions.
      </>
    ),
    credentials: [
      {
        title: 'Psychiatric Mental Health Nurse Practitioner (PMH-NP)',
        detail: 'Richard holds certification in psychiatric mental health nursing, equipping him with specialized skills to assess, diagnose, and treat mental health disorders.',
      },
      {
        title: 'Advanced Practice Registered Nurse (APRN)',
        detail: 'He is a licensed APRN in the state of Florida, allowing him to provide advanced clinical care to his patients.',
      },
    ],
  },
  {
    name: 'Lisyen Perez, PMHNP',
    image: '/our/Lisyen.jpeg',
    imageSize: { width: 1152, height: 1152 },
    bio: (
      <>
        <strong>Lisyen Perez, PMHNP</strong> is a <strong>Psychiatric Mental Health Nurse Practitioner</strong> dedicated to providing
        compassionate, patient-centered mental health care. She specializes in the <strong>evaluation, diagnosis, and treatment</strong> of
        a wide range of psychiatric conditions, working closely with patients to develop personalized treatment plans that support their
        emotional well-being and overall quality of life. At <strong>Integrated Healthcare Services</strong>, Liz is committed to delivering
        evidence-based care in a supportive and collaborative environment, helping patients achieve stability, resilience, and long-term
        mental wellness.
      </>
    ),
    credentials: [],
  },
  {
    name: 'Dasniellis Zoque, APRN',
    image: '/our/Dasniellis.jpeg',
    imageSize: { width: 1152, height: 1152 },
    bio: (
      <>
        <strong>Dasniellis Zoque, APRN</strong> is a dedicated psychiatric <strong>Advanced Practice Registered Nurse</strong> committed to
        delivering compassionate, evidence-based mental health care. She specializes in the <strong>evaluation and management</strong> of a
        wide range of psychiatric conditions, working closely with patients to create personalized treatment plans that support emotional
        balance, resilience, and overall well-being. At <strong>Integrated Healthcare Services</strong>, Daphne is passionate about helping
        patients achieve meaningful progress and long-term mental wellness through collaborative and patient-centered care.
      </>
    ),
    credentials: [],
  },
  {
    name: 'Yolaine Sierra, APRN',
    image: '/our/Yolaine.jpeg',
    imageSize: { width: 1152, height: 1152 },
    bio: (
      <>
        <strong>Yolaine Sierra, APRN</strong> is an <strong>Advanced Practice Registered Nurse</strong> dedicated to psychiatric care, with
        extensive experience in <strong>inpatient psychiatry and geriatric mental health</strong>. She specializes in the assessment and
        management of complex psychiatric conditions, particularly in older adults, bringing a thoughtful and compassionate approach to
        patient care. At <strong>Integrated Healthcare Services</strong>, Yolaine is committed to delivering evidence-based, patient-centered
        treatment that promotes stability, dignity, and improved quality of life for every patient she serves.
      </>
    ),
    credentials: [],
  },
];

const therapyMembers = [
  {
    name: 'Modesto Ramos, RMHC',
    image: '/our/logo.jpeg',
    imageSize: { width: 1152, height: 1152 },
    bio: (<></>),
    credentials: [],
  },
  {
    name: 'Marcela Abello, RMHC',
    image: '/our/logo.jpeg',
    imageSize: { width: 1152, height: 1152 },
    bio: (<></>),
    credentials: [],
  },
  {
    name: 'Oscar Mas, LMHC',
    image: '/our/logo.jpeg',
    imageSize: { width: 1152, height: 1152 },
    bio: (<></>),
    credentials: [],
  },
];

function TeamMemberCard({ member }: { member: typeof teamMembers[0] }) {
  return (
    <article
      className="flex w-full flex-col overflow-hidden rounded-3xl bg-slate-50 shadow-sm md:flex-row"
      style={{ flexBasis: '100%' }}
    >
      {/* Image */}
      <div className="w-full shrink-0 md:w-64 lg:w-80">
        <div className="relative h-72 w-full overflow-hidden md:h-full md:min-h-[380px]">
          <Image
            src={member.image}
            alt={member.name}
            width={member.imageSize.width}
            height={member.imageSize.height}
            className="h-full w-full object-cover object-top"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 md:p-10">
        <h3 className="font-display text-2xl font-bold uppercase tracking-wide text-stone-500 md:text-3xl">
          {member.name}
        </h3>

        {member.bio && (
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            {member.bio}
          </p>
        )}

        {member.credentials.length > 0 && (
          <>
            <h4 className="mt-6 text-sm font-semibold uppercase tracking-widest text-slate-400">
              Education &amp; Certification
            </h4>
            <div className="mt-3 flex flex-wrap gap-4">
              {member.credentials.map((cred) => (
                <div
                  key={cred.title}
                  className="flex-1 rounded-xl border border-slate-200 bg-white p-4"
                  style={{ minWidth: '220px' }}
                >
                  <p className="text-sm font-semibold text-slate-700">{cred.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-500">{cred.detail}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </article>
  );
}

export default function OurTeamPage() {
  const locale = useLocale();
  const hero = locale === 'es' ? {title: 'Nuestro Equipo', description: 'Conoce a nuestro equipo de psiquiatras y profesionales dedicados a tu bienestar mental.'} : {title: 'Our Team', description: 'Meet our dedicated team of psychiatrists and providers committed to your mental wellness.'};

  return (
    <>
      <PageHero
        title={hero.title}
        description={hero.description}
      />

      {/* Psychiatry Team Members */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-wrap gap-10">
              {teamMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Therapy Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">

            {/* Section Header */}
            <div className="mb-12 text-center">
              <h2 className="font-display text-4xl font-bold uppercase tracking-wide text-primary-700 mb-4">
                Therapy Team
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our licensed therapists and counselors provide compassionate, evidence-based therapy to support your mental health journey.
              </p>
              <div className="mt-6 mx-auto h-1 w-24 rounded-full bg-primary-500" />
            </div>
            <div className="flex flex-wrap gap-10">
              {therapyMembers.map((member) => (
                <TeamMemberCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <div className="flex flex-wrap gap-8 mb-16">
              {[
                {
                  icon: <Users className="w-10 h-10 text-primary-500" />,
                  bg: 'bg-primary-50',
                  title: 'Expert Professionals',
                  titleColor: 'text-primary-700',
                  text: 'Our team consists of board-certified psychiatrists and psychiatric nurse practitioners with extensive experience in treating a wide range of mental health conditions.',
                },
                {
                  icon: <Heart className="w-10 h-10 text-accent-500" />,
                  bg: 'bg-accent-50',
                  title: 'Compassionate Care',
                  titleColor: 'text-primary-700',
                  text: 'Every member of our team is dedicated to providing empathetic, patient-centered care that respects your unique journey and individual needs.',
                },
                {
                  icon: <Award className="w-10 h-10 text-primary-500" />,
                  bg: 'bg-primary-50',
                  title: 'Evidence-Based Treatment',
                  titleColor: 'text-primary-700',
                  text: 'We utilize the latest clinical research and best practices to ensure you receive the most effective, up-to-date treatment available.',
                },
                {
                  icon: <Target className="w-10 h-10 text-accent-500" />,
                  bg: 'bg-accent-50',
                  title: 'Personalized Approach',
                  titleColor: 'text-primary-700',
                  text: 'We understand that every patient is unique. Our team works collaboratively to create customized treatment plans tailored to your specific needs and goals.',
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className={`${card.bg} flex-1 rounded-2xl p-8`}
                  style={{ minWidth: '240px' }}
                >
                  {card.icon}
                  <h3 className={`font-display text-xl font-bold ${card.titleColor} mt-4 mb-3`}>
                    {card.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-sm">{card.text}</p>
                </div>
              ))}
            </div>

            {/* Team Philosophy */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white rounded-2xl p-10">
              <h2 className="font-display text-3xl font-bold mb-6">Our Commitment to You</h2>
              <p className="text-lg leading-relaxed mb-4">
                At Integrated Health Care Group Psychiatry, our team is united by a shared commitment to excellence, compassion, and integrity.
                We believe that mental health care should be accessible, respectful, and effective for everyone.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our clinicians bring diverse backgrounds and specialties, allowing us to provide comprehensive care for a wide range of mental
                health conditions. From depression and anxiety to complex psychiatric disorders, we have the expertise to help you achieve
                lasting wellness.
              </p>
              <p className="text-lg leading-relaxed">
                When you choose Integrated Health Care Group, you're not just getting a provider—you're gaining a partner in your healing
                journey. We're here to listen, support, and empower you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold text-primary-700 mb-6">
            Ready to Meet Your Care Team?
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Schedule a consultation today and take the first step toward better mental health with our dedicated professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+17865361701"
              className="bg-primary-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-600 transition-all hover:scale-105"
            >
              Call (786) 536-1701
            </a>
            <a
              href="/contact"
              className="bg-white text-primary-700 border-2 border-primary-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-50 transition-all hover:scale-105"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
