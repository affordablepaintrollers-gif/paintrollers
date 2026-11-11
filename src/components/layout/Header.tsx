import { useEffect, useState } from 'react';
import { Menu, PaintRoller, Phone, X } from 'lucide-react';
import { brand, ctaLabels, navLinks } from '@/content/siteContent';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`overflow-hidden bg-ink-950 text-ink-200 transition-all duration-300 ${
          scrolled ? 'max-h-0' : 'max-h-12'
        }`}
      >
        <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-6 text-sm lg:px-10">
          <p className="hidden sm:block">Wholesale only. Pallet minimum. Ships direct to your customer.</p>
          <a href={brand.phoneHref} className="flex items-center gap-2 font-semibold text-white transition hover:text-signal-300">
            <Phone className="h-3.5 w-3.5" aria-hidden="true" />
            {brand.phoneDisplay}
          </a>
        </div>
      </div>

      <div
        className={`bg-paper-50/95 backdrop-blur transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-ink-900/10' : 'border-b border-ink-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#top" onClick={closeMenu} className="flex items-center gap-3" aria-label={`${brand.name} home`}>
            <span className="flex h-10 w-10 items-center justify-center rounded-md bg-ink-900 text-signal-400">
              <PaintRoller className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-display text-xl font-bold tracking-tight text-ink-950">{brand.shortName}</span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-8 xl:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-semibold text-ink-700 transition hover:text-ink-950">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a href="#quote" className="btn-primary hidden !px-5 !py-2.5 text-sm md:inline-flex">
              {ctaLabels.palletQuote}
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-11 w-11 items-center justify-center rounded-md text-ink-900 transition hover:bg-ink-100 xl:hidden"
            >
              {menuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`grid bg-paper-50 transition-[grid-template-rows] duration-300 xl:hidden ${
            menuOpen ? 'grid-rows-[1fr] border-b border-ink-100' : 'grid-rows-[0fr]'
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav aria-label="Mobile" className="flex flex-col px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-ink-100 py-3.5 font-semibold text-ink-800 hover:text-signal-700"
                >
                  {link.label}
                </a>
              ))}
              <a href="#quote" onClick={closeMenu} className="btn-primary mt-5">
                {ctaLabels.palletQuote}
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
