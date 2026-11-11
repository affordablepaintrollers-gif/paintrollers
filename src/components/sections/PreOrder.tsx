import { ArrowRight } from 'lucide-react';
import { ctaLabels, preOrder } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function PreOrder() {
  return (
    <section id={preOrder.id} className="scroll-mt-24 bg-paper-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-10 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow={preOrder.eyebrow} title={preOrder.title} />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-[1.6] text-ink-600 lg:justify-self-end">{preOrder.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={150}>
          <div className="mt-14 overflow-hidden rounded-xl">
            <img
              src={preOrder.image}
              alt={preOrder.imageAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
            />
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
          {preOrder.steps.map((step, index) => (
            <Reveal key={step.title} delay={index * 120}>
              <li className="relative h-full border-t-2 border-ink-900 pt-8 md:pr-6">
                <span
                  aria-hidden="true"
                  className={`absolute -top-[9px] left-0 h-4 w-4 rounded-full ${
                    index === preOrder.steps.length - 1 ? 'bg-signal-500 ring-4 ring-signal-100' : 'bg-ink-900'
                  }`}
                />
                <p className="font-display text-6xl font-bold leading-none text-ink-200">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-bold text-ink-950">{step.title}</h3>
                <p className="mt-3 leading-[1.6] text-ink-600">{step.body}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={200}>
          <a href="#quote" className="btn-primary group mt-16">
            {ctaLabels.palletQuote}
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
