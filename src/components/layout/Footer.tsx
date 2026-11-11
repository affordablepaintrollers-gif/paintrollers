import { Facebook, Instagram, Linkedin, PaintRoller } from 'lucide-react';
import { brand, ctaLabels, footer, navLinks } from '@/content/siteContent';

const socialIcons = {
  LinkedIn: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
} as const;

export function Footer() {
  return (
    <footer className="bg-ink-950 text-ink-300">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-b border-white/10 px-6 py-14 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p className="font-display text-3xl font-bold text-white">{footer.ctaTitle}</p>
          <p className="mt-2 text-ink-300">{footer.ctaBody}</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a href="#sample-pack" className="btn-light">
            {ctaLabels.samplePack}
          </a>
          <a href="#quote" className="btn-primary">
            {ctaLabels.palletQuote}
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:grid-cols-2 lg:grid-cols-12 lg:px-10">
        <div className="sm:col-span-2 lg:col-span-4">
          <a href="#top" className="flex items-center gap-3" aria-label={`${brand.name} home`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-signal-500 text-ink-950">
              <PaintRoller className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold text-white">{brand.shortName}</span>
          </a>
          <p className="mt-5 max-w-xs leading-[1.6]">{brand.tagline}</p>
          <div className="mt-6 flex gap-3">
            {footer.socials.map((social) => {
              const Icon = socialIcons[social.label as keyof typeof socialIcons];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-md bg-white/5 text-white transition hover:bg-signal-500 hover:text-ink-950"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {footer.columns.map((column) => (
          <nav key={column.title} aria-label={column.title} className="lg:col-span-2">
            <p className="font-semibold text-white">{column.title}</p>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-signal-300">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="lg:col-span-3">
          <p className="font-semibold text-white">Contact</p>
          <ul className="mt-5 space-y-3 leading-[1.6]">
            <li>
              <a href={brand.phoneHref} className="transition hover:text-signal-300">
                {brand.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${brand.email}`} className="transition hover:text-signal-300">
                {brand.email}
              </a>
            </li>
            <li>{brand.address}</li>
            <li className="text-sm text-ink-400">{brand.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-6 py-6 text-sm text-ink-400 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>{brand.copyright}</p>
          <p>Wholesale orders only. Minimum order is one pallet.</p>
        </div>
      </div>
    </footer>
  );
}
