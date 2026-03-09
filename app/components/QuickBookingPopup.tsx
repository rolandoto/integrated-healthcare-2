'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CalendarCheck2, X } from 'lucide-react';

export default function QuickBookingPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setIsOpen(true), 1200);
    return () => window.clearTimeout(timer);
  }, []);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-900/55 p-4 sm:items-center">
      <div className="relative w-full max-w-md rounded-2xl border border-primary-100 bg-white p-6 shadow-2xl">
        <button
          type="button"
          aria-label="Close quick booking popup"
          onClick={() => setIsOpen(false)}
          className="absolute right-3 top-3 rounded-full p-1.5 text-slate-500 transition hover:bg-slate-100 hover:text-slate-700"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-700">
          <CalendarCheck2 className="h-6 w-6" />
        </div>

        <h3 className="mt-4 text-2xl font-bold text-primary-800">¿Quieres reservar más rápido?</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">
          Ve directo a nuestra página de contacto y agenda tu cita en menos tiempo.
        </p>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="inline-flex flex-1 items-center justify-center rounded-full bg-primary-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-800"
          >
            Ir a Contact
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="inline-flex flex-1 items-center justify-center rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Ahora no
          </button>
        </div>
      </div>
    </div>
  );
}
