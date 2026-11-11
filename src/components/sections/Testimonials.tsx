import { Quote as QuoteIcon, Star } from 'lucide-react';
import { testimonials } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

function Stars() {
  return (
    <div className="flex gap-1 text-signal-500" role="img" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }, (_, star) => (
        <Star key={star} className="h-4 w-4 fill-current" aria-hidden="true" />
      ))}
    </div>
  );
}

export function Testimonials() {
  const [featured, ...others] = testimonials.items;

  return (
    <section id={testimonials.id} className="scroll-mt-24 bg-paper-100 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader eyebrow={testimonials.eyebrow} title={testimonials.title} />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <figure className="flex h-full flex-col overflow-hidden rounded-xl bg-ink-900 text-white sm:flex-row">
              <img
                src={featured.image}
                alt={featured.imageAlt}
                loading="lazy"
                decoding="async"
                className="aspect-square w-full object-cover sm:w-2/5"
              />
              <div className="flex flex-1 flex-col justify-between gap-8 p-8 lg:p-10">
                <div>
                  <QuoteIcon className="h-8 w-8 text-signal-400" aria-hidden="true" />
                  <blockquote className="mt-5 font-display text-2xl font-semibold leading-[1.25] text-white">
                    &ldquo;{featured.quote}&rdquo;
                  </blockquote>
                </div>
                <figcaption>
                  <Stars />
                  <p className="mt-3 font-semibold text-white">{featured.name}</p>
                  <p className="text-sm text-ink-300">{featured.role}</p>
                </figcaption>
              </div>
            </figure>
          </Reveal>

          <div className="flex flex-col gap-6 lg:col-span-2">
            {others.map((item, index) => (
              <Reveal key={item.name} delay={(index + 1) * 120} className="flex-1">
                <figure className="flex h-full flex-col justify-between rounded-xl bg-white p-8">
                  <blockquote className="leading-[1.6] text-ink-800">&ldquo;{item.quote}&rdquo;</blockquote>
                  <figcaption className="mt-6 flex items-center gap-4 border-t border-ink-100 pt-6">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-ink-950">{item.name}</p>
                      <p className="text-sm text-ink-600">{item.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
