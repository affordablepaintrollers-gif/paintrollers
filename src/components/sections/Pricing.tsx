import { ArrowRight, Info } from 'lucide-react';
import { ctaLabels, pricing } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';

export function Pricing() {
  return (
    <section id={pricing.id} className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <Reveal>
            <SectionHeader eyebrow={pricing.eyebrow} title={pricing.title} />
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-[1.6] text-ink-600 lg:justify-self-end">{pricing.intro}</p>
          </Reveal>
        </div>

        <div className="mt-16 space-y-6">
          {pricing.products.map((product, index) => (
            <Reveal key={product.name} delay={index * 120}>
              <article className="group grid overflow-hidden rounded-xl border border-ink-100 bg-paper-50 md:grid-cols-5">
                <div className="relative aspect-[4/3] overflow-hidden bg-ink-100 md:col-span-2 md:aspect-auto">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-between gap-8 p-8 md:col-span-3 lg:p-12">
                  <div>
                    <h3 className="text-3xl font-bold text-ink-950">{product.name}</h3>
                    <p className="mt-4 max-w-lg leading-[1.6] text-ink-600">{product.description}</p>
                  </div>
                  <div className="flex flex-wrap items-end justify-between gap-6 border-t border-ink-200 pt-8">
                    <div>
                      <p className="font-display text-6xl font-bold leading-none tracking-tight text-ink-950">{product.price}</p>
                      <p className="mt-2 text-sm font-medium text-ink-600">per roller cover, pallet minimum</p>
                    </div>
                    <a href="#quote" className="btn-dark group/btn">
                      {ctaLabels.palletQuote}
                      <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-1" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-12 overflow-x-auto rounded-xl border border-ink-100">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <caption className="sr-only">Wholesale pricing and pallet details</caption>
              <thead className="bg-ink-900 text-sm text-white">
                <tr>
                  {pricing.tableHeaders.map((header) => (
                    <th key={header} scope="col" className="px-6 py-4 font-semibold">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-ink-100 text-ink-800">
                {pricing.products.map((product) => {
                  const [size] = product.name.split(' ');
                  return (
                    <tr key={product.name} className="transition hover:bg-paper-100">
                      <th scope="row" className="px-6 py-5 font-semibold text-ink-950">
                        {size}
                      </th>
                      <td className="px-6 py-5 font-display text-2xl font-bold text-ink-950">{product.price}</td>
                      <td className="px-6 py-5">1 pallet</td>
                      <td className="px-6 py-5">{product.palletCovers} covers</td>
                      <td className="px-6 py-5">{pricing.leadTime}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-ink-500">{pricing.tableNote}</p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-10 flex items-start gap-4 rounded-xl border-l-4 border-signal-500 bg-signal-50 p-6">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-signal-700" aria-hidden="true" />
            <div>
              <p className="font-semibold text-ink-950">{pricing.bulkOnly.title}</p>
              <p className="mt-1 text-ink-700">{pricing.bulkOnly.body}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
