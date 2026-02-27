import Link from 'next/link';
import { Phone, Target, Eye, HeartHandshake, Activity, Users, ShieldCheck } from 'lucide-react';

const coreActivities = [
  'Comprehensive psychiatric evaluations and DSM-5-TR aligned diagnostic reassessments.',
  'Evidence-based psychopharmacologic management with ongoing response and safety monitoring.',
  'Psychotherapeutic and psychosocial interventions delivered directly or through coordinated referrals.',
  'Care coordination across primary care, hospitals, therapists, and community programs.',
  'Management of complex and high-acuity psychiatric populations.',
  'Relapse prevention, clinical stabilization, and functional rehabilitation planning.',
  'Ethics, quality improvement, and outcomes-oriented continuous care.',
];

const socialLinks = [
  { label: 'WhatsApp', href: 'https://wa.me/17868934315' },
  { label: 'TikTok', href: 'https://www.tiktok.com/@integratedhcg' },
  { label: 'Instagram', href: 'https://www.instagram.com/integrated_psych/?hl=en' },
  { label: 'Facebook', href: 'https://www.facebook.com' },
  { label: 'Google Business', href: 'https://www.google.com/search?q=Integrated+Healthcare+Psychiatry+Group' },
];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/image/home.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/85" />
        <div className="hero-aurora pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="hero-aurora pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary-500/25 blur-3xl [animation-delay:1.6s]" />
        <div className="hero-grid pointer-events-none absolute inset-0" />

        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <p className="hero-pill mx-auto inline-flex items-center rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            Compassionate Psychiatry, Measurable Progress
          </p>
          <h1 className="hero-title mt-5 font-display text-5xl font-bold leading-tight md:text-7xl">Integrated Healthcare Group</h1>
          <p className="hero-copy mx-auto mt-6 max-w-3xl text-lg md:text-2xl">
            Comprehensive psychiatric care focused on clinical stability, functional recovery, and long-term quality of life.
          </p>
          <div className="hero-actions mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+17865361701"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary-700 transition hover:bg-slate-100"
            >
              <Phone className="h-5 w-5" />
              Call (786) 536-1701
            </a>
            <Link
              href="/services"
              className="rounded-full border border-white/80 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Services
            </Link>
          </div>
          <div className="hero-kpis mx-auto mt-10 grid max-w-4xl gap-3 text-left sm:grid-cols-3">
            <article className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-bold">24h</p>
              <p className="text-sm text-white/80">Rapid response for appointment requests</p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-bold">Bilingual</p>
              <p className="text-sm text-white/80">Care available in English and Spanish</p>
            </article>
            <article className="rounded-xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur">
              <p className="text-2xl font-bold">Integrated</p>
              <p className="text-sm text-white/80">Coordination with therapists and primary care</p>
            </article>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-primary-100 bg-primary-50 p-8 shadow-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
              <Target className="h-4 w-4" />
              Our Mission
            </p>
            <p className="leading-relaxed text-slate-700">
              We provide comprehensive, evidence-based, and person-centered psychiatric care for children, adults, and families through an ethical,
              collaborative, and biopsychosocial model that promotes clinical stability, functional recovery, and quality of life.
            </p>
          </article>

          <article className="rounded-2xl border border-accent-100 bg-accent-50 p-8 shadow-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
              <Eye className="h-4 w-4" />
              Our Vision
            </p>
            <p className="leading-relaxed text-slate-700">
              To be a trusted center of excellence in comprehensive psychiatry, known for compassionate care, measurable outcomes, and integrated
              pharmacologic, psychotherapeutic, and psychosocial interventions for complex and vulnerable populations.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-4xl font-bold text-primary-700 md:text-5xl">Core Activities</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-slate-600">
            Our psychiatric center model integrates diagnostics, treatment, coordination, and long-term follow-up to support durable recovery.
          </p>

          <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2">
            {coreActivities.map((item, index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
                <p className="inline-flex items-start gap-3">
                  <HeartHandshake className="mt-0.5 h-5 w-5 text-primary-600" />
                  <span>{item}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-4xl font-bold text-primary-700">Our Approach / Nuestro Enfoque</h2>
          <div className="mx-auto mt-10 grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-6">
              <Activity className="mb-3 h-8 w-8 text-primary-600" />
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Evidence-Based Care</h3>
              <p className="text-sm leading-relaxed text-slate-600">Ethical, guideline-informed psychiatry with clear treatment goals and measurable outcomes.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <Users className="mb-3 h-8 w-8 text-primary-600" />
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Collaborative Model</h3>
              <p className="text-sm leading-relaxed text-slate-600">Coordinated care with families, therapists, hospitals, and primary care to improve continuity.</p>
            </div>
            <div className="rounded-2xl border border-slate-200 p-6">
              <ShieldCheck className="mb-3 h-8 w-8 text-primary-600" />
              <h3 className="mb-2 text-xl font-semibold text-slate-900">Functional Recovery</h3>
              <p className="text-sm leading-relaxed text-slate-600">Focused on relapse prevention, stability, and quality of life across the lifespan.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">Connect With Integrated Healthcare Group</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
              >
                {social.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
