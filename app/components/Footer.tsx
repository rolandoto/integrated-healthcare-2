'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle, Instagram, Music2 } from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    alert('Thank you for subscribing. Our team will keep you updated.');
    setEmail('');
    setIsSubmitting(false);
  };

  return (
    <footer className="bg-slate-950 text-slate-200">
      <div className="border-b border-slate-800 bg-gradient-to-r from-primary-900 to-primary-700 py-14">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary-100">Stay Connected</p>
            <h3 className="mb-3 text-3xl font-semibold text-white">Receive updates, resources, and care insights</h3>
            <p className="max-w-xl text-sm text-primary-100/95">
              Subscribe to our newsletter for the latest clinical updates, educational articles, and helpful mental health guidance from our care team.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur-sm sm:flex-row">
            <label htmlFor="newsletter-email" className="sr-only">
              Email
            </label>
            <div className="relative flex-1">
              <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
              <input
                id="newsletter-email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work email"
                required
                className="w-full rounded-lg border border-white/30 bg-white px-10 py-3 text-sm text-slate-900 outline-none ring-primary-300 transition focus:ring-2"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary-800 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Integrated Health Care Group</h4>
          <p className="text-sm text-slate-400">
            Comprehensive, evidence-based psychiatric services for children, adults, and families across Miami-Dade County.
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-300">
            <li>
              <a href="tel:+17865361701" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Phone className="h-4 w-4 text-primary-300" />
                (786) 536-1701
              </a>
            </li>
            <li>
              <a href="mailto:info@integratedhealthcaregroup.com" className="inline-flex items-center gap-2 transition-colors hover:text-white">
                <Mail className="h-4 w-4 text-primary-300" />
                info@integratedhealthcaregroup.com
              </a>
            </li>
            <li className="inline-flex items-start gap-2 text-slate-400">
              <MapPin className="mt-0.5 h-4 w-4 text-primary-300" />
              Miami-Dade County, Florida
            </li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/services" className="text-slate-300 transition-colors hover:text-white">Services</Link></li>
            <li><Link href="/our-team" className="text-slate-300 transition-colors hover:text-white">Our Team</Link></li>
            <li><Link href="/telemedicine" className="text-slate-300 transition-colors hover:text-white">Telemedicine</Link></li>
            <li><Link href="/insurance" className="text-slate-300 transition-colors hover:text-white">Insurance</Link></li>
            <li><Link href="/contact" className="text-slate-300 transition-colors hover:text-white">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-base font-semibold text-white">Policies</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/privacy-policy" className="text-slate-300 transition-colors hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="text-slate-300 transition-colors hover:text-white">Terms & Conditions</Link></li>
            <li>
              <a href="https://wa.me/17868934315" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white">
                <MessageCircle className="h-4 w-4 text-primary-300" />
                WhatsApp
              </a>
            </li>
            <li>
              <a href="https://www.tiktok.com/@integratedhcg" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white">
                <Music2 className="h-4 w-4 text-primary-300" />
                TikTok @integratedhcg
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/integrated_psych/?hl=en" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-slate-300 transition-colors hover:text-white">
                <Instagram className="h-4 w-4 text-primary-300" />
                Instagram @integrated_psych
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800 py-5">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 text-xs text-slate-500 md:flex-row">
          <p>© 2026 Integrated Health Care Group. All rights reserved.</p>
          <p>HIPAA-compliant processes and secure patient communication standards.</p>
        </div>
      </div>
    </footer>
  );
}
