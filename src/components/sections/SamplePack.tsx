import { useState, type FormEvent } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';
import { samplePack } from '@/content/siteContent';
import { Field, SizeCheckboxes } from '@/components/ui/Field';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { readSizes, readText, submitSampleRequest } from '@/lib/requestForms';

export function SamplePack() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const sizes = readSizes(data);

    if (sizes.length === 0) {
      setError('Please select at least one size.');
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      await submitSampleRequest({
        name: readText(data, 'name'),
        company: readText(data, 'company'),
        email: readText(data, 'email'),
        phone: readText(data, 'phone'),
        shippingAddress: readText(data, 'shipping_address'),
        sizes,
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
    <section id={samplePack.id} className="scroll-mt-24 bg-ink-900 py-24 text-white lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <Reveal>
          <div className="lg:sticky lg:top-32">
            <SectionHeader tone="dark" eyebrow={samplePack.eyebrow} title={samplePack.title} intro={samplePack.intro} />

            <div className="mt-10 flex items-end gap-4 border-b border-white/10 pb-8">
              <p className="font-display text-7xl font-bold leading-none text-signal-400">{samplePack.price}</p>
              <p className="pb-2 text-sm text-ink-300">{samplePack.priceNote}</p>
            </div>

            <ul className="mt-8 space-y-4">
              {samplePack.bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-3 text-ink-100">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-signal-400" aria-hidden="true" />
                  {bullet}
                </li>
              ))}
            </ul>

            <img
              src={samplePack.image}
              alt={samplePack.imageAlt}
              loading="lazy"
              decoding="async"
              className="mt-12 hidden aspect-[16/10] w-full rounded-xl object-cover lg:block"
            />
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="rounded-xl bg-paper-50 p-6 text-ink-900 shadow-2xl shadow-black/30 sm:p-10">
            {submitted ? (
              <div role="status" className="py-12 text-center">
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success-50 text-success-700">
                  <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                </span>
                <h3 className="mt-6 text-3xl font-bold text-ink-950">Sample pack request received</h3>
                <p className="mt-3 leading-[1.6] text-ink-600">
                  Thanks for reaching out. We will confirm your shipping details within one business day.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="btn-outline mt-8">
                  Request another sample pack
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-display text-2xl font-bold text-ink-950">Sample pack details</h3>
                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" htmlFor="sample-name">
                      <input id="sample-name" name="name" type="text" autoComplete="name" required className="field-input" placeholder="Jane Smith" />
                    </Field>
                    <Field label="Company" htmlFor="sample-company">
                      <input id="sample-company" name="company" type="text" autoComplete="organization" required className="field-input" placeholder="Smith Painting Co." />
                    </Field>
                    <Field label="Work email" htmlFor="sample-email">
                      <input id="sample-email" name="email" type="email" autoComplete="email" required className="field-input" placeholder="jane@company.com" />
                    </Field>
                    <Field label="Phone" htmlFor="sample-phone">
                      <input id="sample-phone" name="phone" type="tel" autoComplete="tel" required className="field-input" placeholder="(555) 000-0000" />
                    </Field>
                  </div>

                  <Field label="Shipping address" htmlFor="sample-address">
                    <textarea id="sample-address" name="shipping_address" rows={3} autoComplete="street-address" required className="field-input resize-y" placeholder="Street, city, state, ZIP" />
                  </Field>

                  <fieldset>
                    <legend className="mb-3 text-sm font-semibold text-ink-800">Which sizes would you like?</legend>
                    <SizeCheckboxes options={samplePack.sizeOptions} />
                  </fieldset>

                  {error && (
                    <p role="alert" className="rounded-md border border-error-500/30 bg-error-50 px-4 py-3 text-sm font-medium text-error-700">
                      {error}
                    </p>
                  )}

                  <button type="submit" disabled={submitting} className="btn-primary w-full">
                    {submitting && <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />}
                    {submitting ? 'Sending request...' : 'Request a Sample Pack'}
                  </button>
                  <p className="text-center text-xs text-ink-500">One free sample pack per company.</p>
                </form>
              </>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
