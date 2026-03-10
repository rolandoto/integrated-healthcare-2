import {Phone, Mail, MapPin, Music2, Instagram} from 'lucide-react';
import {useTranslations} from 'next-intl';
import {Link} from '../../i18n/navigation';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto grid gap-10 px-4 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="text-lg font-semibold">Integrated Health Care Group</h3>
          <p className="mt-3 text-sm text-slate-300">{t('description')}</p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-300">{t('quickLinks')}</h4>
          <ul className="mt-4 space-y-2 text-sm text-slate-300">
            <li><Link href="/" className="hover:text-white">{t('home')}</Link></li>
            <li><Link href="/services" className="hover:text-white">{t('services')}</Link></li>
            <li><Link href="/contact" className="hover:text-white">{t('contact')}</Link></li>
            <li><Link href="/locations" className="hover:text-white">{t('locations')}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-300">{t('contactTitle')}</h4>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            <li className="inline-flex items-center gap-2"><Phone className="h-4 w-4 text-primary-300" />(786) 536-1701</li>
            <li className="inline-flex items-center gap-2"><Mail className="h-4 w-4 text-primary-300" />admin@integratedhcg.com</li>
            <li className="inline-flex items-center gap-2"><MapPin className="h-4 w-4 text-primary-300" />Miami-Dade County, FL</li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-300">{t('social')}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li><a href="https://www.tiktok.com/@integratedhcg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white"><Music2 className="h-4 w-4 text-primary-300" />TikTok @integratedhcg</a></li>
            <li><a href="https://www.instagram.com/integrated_psych/?hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white"><Instagram className="h-4 w-4 text-primary-300" />Instagram @integrated_psych</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-xs text-slate-500 md:flex-row">
          <p>{t('copyright')}</p>
          <p>{t('hipaa')}</p>
        </div>
      </div>
    </footer>
  );
}
