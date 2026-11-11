import { quality } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Quality() {
  return (
    <section id={quality.id} className="relative isolate scroll-mt-24 overflow-hidden bg-ink-950 py-24 text-white lg:py-32">
      <img
        src={quality.image}
        alt={quality.imageAlt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 -z-10 bg-ink-950/70" />

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:gap-24 lg:px-10">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionHeader tone="dark" eyebrow={quality.eyebrow} title={quality.title} intro={quality.intro} />
          </div>
        </Reveal>

        <dl className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {quality.points.map((point, index) => (
            <Reveal key={point.title} delay={index * 100}>
              <div className="border-t-2 border-signal-500 pt-6">
                <dt className="font-display text-2xl font-bold text-white">{point.title}</dt>
                <dd className="mt-3 leading-[1.6] text-ink-200">{point.body}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
