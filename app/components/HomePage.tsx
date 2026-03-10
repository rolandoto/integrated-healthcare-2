'use client';

import Link from 'next/link';
import {useTranslations} from 'next-intl';
import {Phone, Target, Eye, HeartHandshake} from 'lucide-react';
import QuickBookingPopup from './QuickBookingPopup';

const socialLinks = [
  {key: 'whatsapp', href: 'https://wa.me/17868934315'},
  {key: 'tiktok', href: 'https://www.tiktok.com/@integratedhcg'},
  {key: 'instagram', href: 'https://www.instagram.com/integrated_psych/?hl=en'},
  {key: 'facebook', href: 'https://www.facebook.com'},
  {key: 'googleBusiness', href: 'https://www.google.com/search?q=Integrated+Healthcare+Psychiatry+Group'}
] as const;

const reviewIndexes = [1, 2, 3, 4, 5, 6] as const;
const coreIndexes = [1, 2, 3, 4, 5, 6, 7] as const;

export default function HomePage() {
  const t = useTranslations('HomePage');

  return (
    <>
      <QuickBookingPopup />
      <section className="relative flex min-h-[520px] items-center justify-center overflow-hidden text-white">
        <div className="absolute inset-0 bg-[url('/image/home.jpeg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/85" />
        <div className="hero-aurora pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
        <div className="hero-aurora pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-primary-500/25 blur-3xl [animation-delay:1.6s]" />
        <div className="hero-grid pointer-events-none absolute inset-0" />

        <div className="relative z-10 container mx-auto px-4 py-24 text-center">
          <p className="hero-pill mx-auto inline-flex items-center rounded-full border border-white/35 bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/90">
            {t('eyebrow')}
          </p>
          <h1 className="hero-title mt-5 font-display text-5xl font-bold leading-tight md:text-7xl">{t('title')}</h1>
          <p className="hero-copy mx-auto mt-6 max-w-3xl text-lg md:text-2xl">{t('subtitle')}</p>
          <div className="hero-actions mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+17865361701"
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-primary-700 transition hover:bg-slate-100"
            >
              <Phone className="h-5 w-5" />
              {t('callButton')}
            </a>
            <Link href="/services" className="rounded-full border border-white/80 px-7 py-3 font-semibold text-white transition hover:bg-white/10">
              {t('viewServices')}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-2">
          <article className="rounded-2xl border border-primary-100 bg-primary-50 p-8 shadow-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
              <Target className="h-4 w-4" />
              {t('mission.title')}
            </p>
            <p className="leading-relaxed text-slate-700">{t('mission.description')}</p>
          </article>

          <article className="rounded-2xl border border-accent-100 bg-accent-50 p-8 shadow-sm">
            <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-primary-700">
              <Eye className="h-4 w-4" />
              {t('vision.title')}
            </p>
            <p className="leading-relaxed text-slate-700">{t('vision.description')}</p>
          </article>
        </div>
      </section>

      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-4xl font-bold text-primary-700 md:text-5xl">{t('core.title')}</h2>
          <div className="mx-auto mt-12 grid max-w-6xl gap-4 md:grid-cols-2">
            {coreIndexes.map((index) => (
              <div key={index} className="rounded-xl border border-slate-200 bg-white p-5 text-slate-700 shadow-sm">
                <p className="inline-flex items-start gap-3">
                  <HeartHandshake className="mt-0.5 h-5 w-5 text-primary-600" />
                  <span>{t(`core.items.${index}`)}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-display text-3xl font-bold md:text-4xl">{t('reviews.title')}</h2>
          <div className="mx-auto mt-10 grid max-w-6xl gap-4 md:grid-cols-2 lg:grid-cols-3">
            {reviewIndexes.map((index) => (
              <article key={index} className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur">
                <p className="text-sm leading-relaxed text-white/95">“{t(`reviews.items.${index}.text`)}”</p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-white/70">{t(`reviews.items.${index}.author`)}</p>
              </article>
            ))}
          </div>

          <h2 className="mt-16 text-center font-display text-3xl font-bold md:text-4xl">{t('socialTitle')}</h2>
          <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
            {socialLinks.map((social) => (
              <a key={social.key} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/30 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10">
                {t(`social.${social.key}`)}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
