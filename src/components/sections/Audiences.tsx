import { ArrowRight, Check } from 'lucide-react';
import { audiences } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Audiences() {
  return (
    <section id={audiences.id} className="scroll-mt-24 bg-paper-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader eyebrow={audiences.eyebrow} title={audiences.title} />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {audiences.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 120}>
              <article className="group flex h-full flex-col overflow-hidden rounded-xl border border-ink-100 bg-white transition duration-500 hover:shadow-2xl hover:shadow-ink-900/10">
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={group.image}
                    alt={group.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8 lg:p-10">
                  <h3 className="text-3xl font-bold text-ink-950">{group.title}</h3>
                  <p className="mt-4 leading-[1.6] text-ink-600">{group.body}</p>
                  <ul className="mt-6 space-y-3">
                    {group.points.map((point) => (
                      <li key={point} className="flex items-start gap-3 text-ink-800">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-signal-600" strokeWidth={2.5} aria-hidden="true" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a href="#quote" className="mt-auto inline-flex items-center gap-2 pt-10 font-semibold text-ink-950 transition hover:text-signal-700">
                    {group.cta}
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
