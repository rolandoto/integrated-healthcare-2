interface PageHeroProps {
  title: string;
  description: string;
  eyebrow?: string;
  compact?: boolean;
  footerText?: string;
}

export default function PageHero({ title, description, eyebrow, compact = false, footerText }: PageHeroProps) {
  return (
    <section className={`relative overflow-hidden text-white ${compact ? 'py-16' : 'py-20'}`}>
      <div className="absolute inset-0 bg-[url('/image/home.jpeg')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-700/80" />
      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          {eyebrow && <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">{eyebrow}</p>}
          <h1 className="mb-6 font-display text-5xl font-bold md:text-6xl">{title}</h1>
          <p className="text-xl leading-relaxed">{description}</p>
          {footerText && <p className="mt-4 text-sm text-white/80">{footerText}</p>}
        </div>
      </div>
    </section>
  );
}
