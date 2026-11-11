import { useCallback, useState } from 'react';
import { gallery } from '@/content/siteContent';
import { Reveal } from '@/components/ui/Reveal';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { GalleryLightbox } from '@/components/sections/GalleryLightbox';

const spanClass: Record<string, string> = {
  tall: 'row-span-2',
  wide: 'md:col-span-2',
  normal: '',
};

export function Gallery() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const close = useCallback(() => setActiveIndex(null), []);

  return (
    <section id={gallery.id} className="scroll-mt-24 bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <SectionHeader eyebrow={gallery.eyebrow} title={gallery.title} />
        </Reveal>

        <div className="mt-16 grid auto-rows-[200px] grid-cols-2 gap-3 md:auto-rows-[240px] md:grid-cols-4 md:gap-4">
          {gallery.items.map((item, index) => (
            <Reveal key={item.src} delay={(index % 4) * 80} className={`${spanClass[item.span]} h-full`}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`View photo: ${item.caption}`}
                className="group relative block h-full w-full overflow-hidden rounded-lg bg-ink-100 text-left"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-x-0 bottom-0 translate-y-full bg-ink-950/80 px-4 py-3 text-sm font-semibold text-white transition duration-300 group-hover:translate-y-0 group-focus-visible:translate-y-0">
                  {item.caption}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <GalleryLightbox items={gallery.items} index={activeIndex} onClose={close} onNavigate={setActiveIndex} />
      )}
    </section>
  );
}
