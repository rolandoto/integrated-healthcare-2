'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X, Phone, ChevronDown, Clock3, MapPin } from 'lucide-react';

const navigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/our-team', label: 'Our Team' },
  { href: '/services', label: 'Services' },
  { href: '/telemedicine', label: 'Telemedicine' },
  { href: '/insurance', label: 'Insurance' },
  { href: '/locations', label: 'Locations' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFaqsOpen, setIsFaqsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm">
      <div className="hidden border-b border-primary-800/30 bg-primary-900 text-white lg:block">
        <div className="container mx-auto flex items-center justify-between px-4 py-2 text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:+17865361701" className="inline-flex items-center gap-2 transition-colors hover:text-primary-100">
              <Phone className="h-4 w-4" />
              (786) 536-1701
            </a>
            <p className="inline-flex items-center gap-2 text-primary-100">
              <Clock3 className="h-4 w-4" />
              Mon - Sat: 9:00 AM - 5:00 PM
            </p>
          </div>
          <p className="inline-flex items-center gap-2 text-primary-100">
            <MapPin className="h-4 w-4" />
            Miami-Dade County, Florida
          </p>
        </div>
      </div>

      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-6">
          <Link href="/" className="flex items-center" aria-label="Integrated Health Care Group home">
            <div className="relative h-12 w-36 md:h-14 md:w-40">
              <Image
                src="https://img1.wsimg.com/isteam/ip/4fb5bccd-64f7-492b-818a-97bac130d242/PHOTO-2024-07-17-09-47-18.jpg"
                alt="Integrated Health Care Group"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          <div className="hidden items-center gap-5 lg:flex">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-700 transition-colors hover:text-primary-700"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative">
              <button
                onClick={() => setIsFaqsOpen(!isFaqsOpen)}
                className="flex items-center text-sm font-medium text-slate-700 transition-colors hover:text-primary-700"
                aria-expanded={isFaqsOpen}
                aria-controls="desktop-faq-menu"
              >
                Policies
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isFaqsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isFaqsOpen && (
                <div
                  id="desktop-faq-menu"
                  className="absolute right-0 top-full mt-3 w-56 overflow-hidden rounded-xl border border-slate-100 bg-white py-2 shadow-xl"
                >
                  <Link
                    href="/privacy-policy"
                    className="block px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary-700"
                    onClick={() => setIsFaqsOpen(false)}
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    href="/terms-conditions"
                    className="block px-4 py-2 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-primary-700"
                    onClick={() => setIsFaqsOpen(false)}
                  >
                    Terms & Conditions
                  </Link>
                </div>
              )}
            </div>

            <a
              href="tel:+17865361701"
              className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-primary-700"
            >
              <Phone className="h-4 w-4" />
              Schedule Visit
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-slate-700 transition-colors hover:bg-slate-100 lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="mt-4 space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm lg:hidden">
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-700"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-slate-200" />

            <Link
              href="/privacy-policy"
              className="block rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-conditions"
              className="block rounded-md px-2 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 hover:text-primary-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Terms & Conditions
            </Link>

            <a
              href="tel:+17865361701"
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary-600 px-5 py-2.5 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              Schedule Visit
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
