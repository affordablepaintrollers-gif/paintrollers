import { trustStats } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';

export function TrustBar() {
  return (
    <section aria-label="Key buying facts" className="bg-ink-950 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
        {trustStats.map((stat, index) => (
          <Reveal key={stat.value} delay={index * 80}>
            <div className="h-full border-b border-white/10 px-6 py-8 sm:px-8 lg:border-b-0 lg:border-r lg:last:border-r-0 lg:px-10">
              <p className="font-display text-2xl font-bold text-signal-300 sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-sm text-ink-300">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
