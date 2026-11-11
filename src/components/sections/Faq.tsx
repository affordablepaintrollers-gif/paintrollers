import { Plus } from 'lucide-react';
import { ctaLabels, faq } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Faq() {
  return (
    <section id={faq.id} className="scroll-mt-24 bg-paper-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeader eyebrow={faq.eyebrow} title={faq.title} />
            <img
              src={faq.image}
              alt={faq.imageAlt}
              loading="lazy"
              decoding="async"
              className="mt-10 hidden aspect-[4/3] w-full rounded-xl object-cover lg:block"
            />
            <a href="#quote" className="btn-dark mt-8 hidden lg:inline-flex">
              {ctaLabels.palletQuote}
            </a>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <div className="divide-y divide-ink-200 border-y border-ink-200">
            {faq.items.map((item) => (
              <details key={item.q} className="group py-6">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-6 rounded-sm text-left text-lg font-semibold text-ink-950 marker:hidden [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <Plus
                    className="mt-1 h-5 w-5 shrink-0 text-signal-600 transition duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  />
                </summary>
                <p className="mt-4 pr-10 leading-[1.6] text-ink-600">{item.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
