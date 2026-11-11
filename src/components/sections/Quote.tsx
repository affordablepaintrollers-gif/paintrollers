import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { quote } from '@/content/siteContent';
import { Field, SizeCheckboxes } from '@/components/ui/Field';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { readSizes, readText, submitQuoteRequest } from '@/lib/requestForms';

export function Quote() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const sizes = readSizes(data);
    const palletCount = Number(readText(data, 'pallet_count'));

    if (sizes.length === 0) {
      setError('Please select at least one size.');
      return;
    }
    if (!Number.isInteger(palletCount) || palletCount < 1) {
      setError('Please enter at least one pallet.');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      await submitQuoteRequest({
        name: readText(data, 'name'),
        company: readText(data, 'company'),
        email: readText(data, 'email'),
        phone: readText(data, 'phone'),
        sizes,
        palletCount,
        message: readText(data, 'message'),
      });
      form.reset();
      setSubmitted(true);
    } catch {
      setError('We could not send your request. Please try again or call us directly.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section id={quote.id} className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-12 lg:gap-12 lg:px-10">
        <Reveal className="lg:col-span-5">
          <SectionHeader eyebrow={quote.eyebrow} title={quote.title} intro={quote.intro} />

          <div className="mt-10 overflow-hidden rounded-xl bg-ink-900 text-white">
            <img src={quote.image} alt={quote.imageAlt} loading="lazy" decoding="async" className="aspect-[16/9] w-full object-cover" />
            <dl className="divide-y divide-white/10 p-6 sm:p-8">
              {quote.contactRows.map((row) => (
                <div key={row.label} className="grid gap-1 py-4 first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="text-sm text-ink-300">{row.label}</dt>
                  <dd className="font-semibold text-white">
                    {'href' in row && row.href ? (
                      <a href={row.href} className="transition hover:text-signal-300">
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>

        <Reveal delay={150} className="lg:col-span-6 lg:col-start-7">
          <div className="rounded-xl border border-ink-100 bg-paper-50 p-6 sm:p-10">
            {submitted ? (
              <div role="status" className="py-12 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-700">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-3xl font-bold text-ink-950">Quote request received</h3>
                <p className="mt-3 leading-[1.6] text-ink-600">
                  A member of our sales team will reply with pricing and delivery dates within one business day.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-outline mt-8">
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-ink-950">Your pallet details</h3>
                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="quote-name">
                      <input id="quote-name" name="name" type="text" autoComplete="name" required className="field-input" placeholder="Jane Smith" />
                    </Field>
                    <Field label="Company" htmlFor="quote-company">
                      <input id="quote-company" name="company" type="text" autoComplete="organization" required className="field-input" placeholder="Smith Painting Co." />
                    </Field>
                    <Field label="Work email" htmlFor="quote-email">
                      <input id="quote-email" name="email" type="email" autoComplete="email" required className="field-input" placeholder="jane@company.com" />
                    </Field>
                    <Field label="Phone" htmlFor="quote-phone">
                      <input id="quote-phone" name="phone" type="tel" autoComplete="tel" required className="field-input" placeholder="(555) 000-0000" />
                    </Field>
                  </div>

                  <fieldset>
                    <legend className="mb-3 text-sm font-semibold text-ink-800">Product sizes</legend>
                    <SizeCheckboxes options={quote.sizeOptions} />
                  </fieldset>

                  <Field label="Number of pallets" htmlFor="quote-pallets">
                    <input id="quote-pallets" name="pallet_count" type="number" min={1} step={1} defaultValue={1} required className="field-input sm:max-w-[200px]" />
                  </Field>

                  <Field label="Message" htmlFor="quote-message">
                    <textarea id="quote-message" name="message" rows={4} maxLength={2000} className="field-input resize-y" placeholder="Delivery timing, ship-to address, or questions about private labeling" />
                  </Field>

                  {error && (
                    <p role="alert" className="rounded-md border border-error-500/30 bg-error-50 px-4 py-3 text-sm font-medium text-error-700">
                      {error}
                    </p>
                  )}

                  <button type="submit" disabled={submitting} className="btn-primary w-full">
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                    {submitting ? 'Sending request...' : 'Get a Pallet Quote'}
                  </button>
                  <p className="text-center text-xs text-ink-500">Wholesale orders only. Minimum order is one pallet.</p>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
