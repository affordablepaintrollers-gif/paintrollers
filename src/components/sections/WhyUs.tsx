import { whyUs } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function WhyUs() {
  return (
    <section id={whyUs.id} className="scroll-mt-24 bg-paper-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <div className="overflow-hidden rounded-xl">
            <img
              src={whyUs.image}
              alt={whyUs.imageAlt}
              loading="lazy"
              decoding="async"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal>
            <SectionHeader eyebrow={whyUs.eyebrow} title={whyUs.title} />
          </Reveal>

          <ol className="mt-12 divide-y divide-ink-200 border-y border-ink-200">
            {whyUs.items.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 100}>
                  <li className="group flex gap-6 py-7">
                    <span className="font-display text-sm font-bold text-ink-400 transition group-hover:text-signal-600">
                      0{index + 1}
                    </span>
                    <div className="flex-1">
                      <div className="flex items-center gap-3">
                        <Icon className="h-5 w-5 text-signal-600" aria-hidden="true" />
                        <h3 className="text-2xl font-bold text-ink-950">{item.title}</h3>
                      </div>
                      <p className="mt-2 leading-[1.6] text-ink-600">{item.body}</p>
                    </div>
                  </li>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
