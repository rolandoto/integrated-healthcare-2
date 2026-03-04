import Image from 'next/image';
import { Users, Award, Heart, Target } from 'lucide-react';
import PageHero from '../components/PageHero';

const teamMembers = [
  {
    name: 'Ivan Acevedo',
    credentials: 'APRN, FNP-C',
    image: '/image/WhatsApp Image 2026-02-24 at 8.00.24 PM.jpeg',
    alt: 'Ivan Acevedo, APRN in a white coat.',
  },
  { name: 'Yaisel Perea', credentials: 'APRN, FNP' },
  { name: 'Lisyen Pérez', credentials: 'PMHNP' },
  { name: 'Dasniellis Zoque', credentials: 'APRN' },
  {
    name: 'Mayte Ruiz Santiago',
    credentials: 'MD',
    image: '/image/WhatsApp Image 2026-02-24 at 8.00.23 PM.jpeg',
    alt: 'Dr. Mayte Ruiz Santiago seated in her office.',
  },
  {
    name: 'Richard Tome',
    credentials: 'PMH-NP',
    image: '/image/team-placeholder.svg',
    alt: 'Richard Tome, PMH-NP, psychiatric mental health nurse practitioner.',
  },
];

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        title="Our Team"
        description="Meet our dedicated team of psychiatrists and providers committed to your mental wellness."
      />

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-display text-4xl font-bold text-primary-700">Our Team</h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
              Updated clinical team. Temporary images are shown while official provider photos are being added.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {teamMembers.map((member) => (
                <article key={member.name} className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image ?? '/image/team-placeholder.svg'}
                      alt={member.alt ?? `Temporary profile photo for ${member.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-slate-900">{member.name}</h3>
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-primary-600">{member.credentials}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <article className="mb-12 rounded-3xl bg-slate-50 p-6 text-center md:p-10">
              <div className="mx-auto mb-8 w-full max-w-4xl overflow-hidden rounded-[3rem]">
                <Image
                  src="/image/WhatsApp Image 2026-02-24 at 8.00.24 PM.jpeg"
                  alt="Ivan Acevedo, APRN"
                  width={1152}
                  height={1536}
                  className="h-auto w-full object-cover"
                />
              </div>

              <h3 className="font-display text-4xl font-bold text-stone-500">Ivan Acevedo, APRN</h3>

              <p className="mx-auto mt-8 max-w-4xl text-3xl leading-relaxed text-slate-600">
                <strong>Ivan Acevedo, APRN, FNP-C</strong>, is a <strong>Family Nurse Practitioner</strong> specializing in
                <strong> psychiatry care</strong> at <strong>Integrated Healthcare Group</strong> in <strong>Miami, Florida</strong>.
                With over two years of experience, Ivan is dedicated to delivering compassionate and comprehensive mental
                health services to his patients.
              </p>

              <h4 className="mt-8 text-3xl font-semibold text-slate-700">Education and Certification:</h4>

              <p className="mx-auto mt-6 max-w-4xl text-3xl leading-relaxed text-slate-600">
                <strong>Master of Science in Nursing (MSN):</strong> Ivan earned his MSN from <strong>Walden University</strong>,
                equipping him with advanced clinical skills and knowledge in family practice.
              </p>

              <p className="mx-auto mt-6 max-w-4xl text-3xl leading-relaxed text-slate-600">
                <strong>Certified Family Nurse Practitioner (FNP-C):</strong> He holds the FNP-C certification, demonstrating
                his expertise in family nursing practice.
              </p>
            </article>

            <article className="rounded-3xl bg-slate-50 p-6 md:p-10 text-center">
              <div className="mx-auto mb-8 w-full max-w-4xl overflow-hidden rounded-[3rem]">
                <Image
                  src="/image/team-placeholder.svg"
                  alt="Yaisel Perea, APRN"
                  width={1152}
                  height={1152}
                  className="h-auto w-full object-cover"
                />
              </div>

              <h3 className="font-display text-4xl font-bold text-stone-500">Yaisel Perea, APRN</h3>

              <p className="mx-auto mt-8 max-w-4xl text-3xl leading-relaxed text-slate-600">
                <strong>Yaisel Perea, APRN, FNP</strong>, is a dedicated <strong>Family Nurse Practitioner</strong>
                specializing in <strong>psychiatry</strong> at <strong>Integrated Health Care Group</strong> in
                <strong> Miami, Florida</strong>. With over three years of clinical experience, Yaisel is committed to
                delivering compassionate and comprehensive mental health care to her patients.
              </p>

              <h4 className="mt-8 text-3xl font-semibold text-slate-700">Education and Certification:</h4>

              <p className="mx-auto mt-6 max-w-4xl text-3xl leading-relaxed text-slate-600">
                <strong>Advanced Practice Registered Nurse (APRN):</strong> Yaisel is a licensed APRN in the state of
                Florida, with a specialization in family practice and psychiatry.
              </p>

              <p className="mx-auto mt-6 max-w-4xl text-3xl leading-relaxed text-slate-600">
                <strong>Family Nurse Practitioner (FNP):</strong> She holds certification as a Family Nurse
                Practitioner, demonstrating her expertise in providing holistic care across the lifespan.
              </p>
            </article>

            <article className="mt-12 rounded-3xl bg-slate-50 p-6 text-center md:p-10">
              <div className="mx-auto mb-8 w-full max-w-4xl overflow-hidden rounded-[3rem]">
                <Image
                  src="/image/team-placeholder.svg"
                  alt="Richard Tome, PMH-NP"
                  width={1152}
                  height={1152}
                  className="h-auto w-full object-cover"
                />
              </div>

              <h3 className="font-display text-4xl font-bold text-stone-500">Richard Tome, PMH-NP</h3>

              <p className="mx-auto mt-8 max-w-4xl text-3xl leading-relaxed text-slate-600">
                <strong>Richard Tome, PMH-NP</strong>, is a board-certified <strong>Psychiatric Mental Health Nurse Practitioner</strong>{' '}
                serving patients at <strong>Integrated Health Care Group</strong> in <strong>Miami, Florida</strong>. With specialized
                training in diagnosing and treating psychiatric disorders, Richard provides evidence-based, compassionate care to
                adolescents and adults experiencing a wide range of mental health conditions.
              </p>

              <h4 className="mt-8 text-3xl font-semibold text-slate-700">Education and Certification:</h4>

              <ul className="mx-auto mt-6 max-w-4xl list-disc space-y-4 pl-8 text-left text-3xl leading-relaxed text-slate-600">
                <li>
                  <strong>Psychiatric Mental Health Nurse Practitioner (PMH-NP):</strong> Richard holds certification in psychiatric
                  mental health nursing, equipping him with specialized skills to assess, diagnose, and treat mental health disorders.
                </li>
                <li>
                  <strong>Advanced Practice Registered Nurse (APRN):</strong> He is a licensed APRN in the state of Florida, allowing
                  him to provide advanced clinical care to his patients.
                </li>
              </ul>
            </article>

            <article className="mt-12 rounded-3xl bg-slate-50 p-6 md:p-10 text-center">
              <div className="mx-auto mb-8 w-full max-w-4xl overflow-hidden rounded-[3rem]">
                <Image
                  src="/image/WhatsApp Image 2026-02-24 at 8.00.23 PM.jpeg"
                  alt="Dr. Mayte Ruiz Santiago in consultation office"
                  width={1152}
                  height={768}
                  className="h-auto w-full object-cover"
                />
              </div>

              <h3 className="font-display text-4xl font-bold uppercase tracking-wide text-stone-500">MAYTE RUIZ SANTIAGO, MD</h3>
              <p className="mx-auto mt-8 max-w-4xl text-3xl leading-relaxed text-slate-600">
                Dr. Mayte Ruiz Santiago is a highly experienced, Board Certified psychiatrist based in Miami, FL, with a deep commitment to
                clinical research and patient care. She earned her medical degree from the Instituto Superior de Ciencias Médicas de la Habana
                in 2012 and has since gained extensive expertise in the treatment of mental health disorders, including:
              </p>

              <ul className="mt-8 space-y-2 text-4xl font-bold leading-tight text-slate-700">
                <li>Bipolar Disorder</li>
                <li>Obsessive-Compulsive Disorder (OCD)</li>
                <li>Schizophrenia</li>
                <li>ADHD (Predominantly Inattentive Type)</li>
              </ul>

              <p className="mx-auto mt-8 max-w-5xl text-3xl leading-relaxed text-slate-600">
                Dr. Ruiz Santiago also has a strong focus on geriatric psychiatry, ensuring comprehensive care for aging populations dealing
                with complex mental health challenges. As the Principal Investigator at Magnum Medical Research, she leads our clinical trials
                with precision, integrity, and a patient-first approach, ensuring that every study meets the highest ethical and regulatory
                standards.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="bg-primary-50 rounded-2xl p-8">
                <Users className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Expert Professionals
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Our team consists of board-certified psychiatrists and psychiatric nurse practitioners with extensive experience in treating a wide range of mental health conditions.
                </p>
              </div>

              <div className="bg-accent-50 rounded-2xl p-8">
                <Heart className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Compassionate Care
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Every member of our team is dedicated to providing empathetic, patient-centered care that respects your unique journey and individual needs.
                </p>
              </div>

              <div className="bg-primary-50 rounded-2xl p-8">
                <Award className="w-12 h-12 text-primary-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Evidence-Based Treatment
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We utilize the latest clinical research and best practices to ensure you receive the most effective, up-to-date treatment available.
                </p>
              </div>

              <div className="bg-accent-50 rounded-2xl p-8">
                <Target className="w-12 h-12 text-accent-500 mb-4" />
                <h3 className="font-display text-2xl font-bold text-primary-700 mb-4">
                  Personalized Approach
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  We understand that every patient is unique. Our team works collaboratively to create customized treatment plans tailored to your specific needs and goals.
                </p>
              </div>
            </div>

            {/* Team Philosophy */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white rounded-2xl p-10">
              <h2 className="font-display text-3xl font-bold mb-6">
                Our Commitment to You
              </h2>
              <p className="text-lg leading-relaxed mb-4">
                At Integrated Health Care Group Psychiatry, our team is united by a shared commitment to excellence, compassion, and integrity. We believe that mental health care should be accessible, respectful, and effective for everyone.
              </p>
              <p className="text-lg leading-relaxed mb-4">
                Our clinicians bring diverse backgrounds and specialties, allowing us to provide comprehensive care for a wide range of mental health conditions. From depression and anxiety to complex psychiatric disorders, we have the expertise and experience to help you achieve lasting wellness.
              </p>
              <p className="text-lg leading-relaxed">
                When you choose Integrated Health Care Group, you're not just getting a provider—you're gaining a partner in your healing journey. We're here to listen, support, and empower you every step of the way.
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
