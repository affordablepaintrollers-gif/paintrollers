import { ArrowRight, Check } from 'lucide-react';
import { ctaLabels, hero } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-paper-50 pt-[7.5rem]">
      <div className="grid lg:min-h-[calc(100svh-7.5rem)] lg:grid-cols-12">
        <div className="relative z-10 flex items-center px-6 pb-14 pt-10 lg:col-span-6 lg:px-12 lg:py-24">
          <div className="max-w-xl">
            <Reveal>
              <p className="eyebrow">{hero.eyebrow}</p>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-6 text-5xl font-bold text-ink-950 sm:text-6xl lg:text-[4.25rem]">{hero.headline}</h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-6 text-lg leading-[1.6] text-ink-600">{hero.subheadline}</p>
            </Reveal>

            <Reveal delay={300}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#quote" className="btn-primary group">
                  {ctaLabels.palletQuote}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                </a>
                <a href="#sample-pack" className="btn-outline">
                  {ctaLabels.samplePack}
                </a>
              </div>
            </Reveal>

            <Reveal delay={400}>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {['Lint-free, consistent finish', 'Holds paint well on long runs', 'Wholesale only, pallet minimum', 'Sample packs for testing'].map((point) => (
                  <li key={point} className="flex items-center gap-2.5 text-sm font-semibold text-ink-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-signal-500 text-ink-950">
                      <Check className="h-3 w-3" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="relative min-h-[26rem] lg:col-span-6 lg:min-h-0">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            fetchPriority="high"
            className="absolute inset-0 h-full w-full animate-ken-burns object-cover"
          />
          <div className="absolute inset-x-6 bottom-6 z-10 rounded-lg bg-white p-6 shadow-2xl shadow-ink-950/30 sm:inset-x-auto sm:bottom-10 sm:right-10 sm:w-80 lg:bottom-12 lg:right-12">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-ink-500">{hero.panelTitle}</p>
            <dl className="mt-4 divide-y divide-ink-100">
              {hero.panelRows.map((row) => (
                <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm font-semibold text-ink-700">{row.label}</dt>
                  <dd className="font-display text-3xl font-bold text-ink-950">{row.price}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-2 text-xs text-ink-500">{hero.panelNote}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
