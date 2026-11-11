import { useEffect } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

type LightboxItem = { src: string; alt: string; caption: string };

type GalleryLightboxProps = {
  items: LightboxItem[];
  index: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
};

export function GalleryLightbox({ items, index, onClose, onNavigate }: GalleryLightboxProps) {
  const item = items[index];
  const total = items.length;

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onNavigate((index + 1) % total);
      if (event.key === 'ArrowLeft') onNavigate((index - 1 + total) % total);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [index, total, onClose, onNavigate]);

  return (
    <div role="dialog" aria-modal="true" aria-label={item.caption} className="fixed inset-0 z-[70] flex flex-col bg-ink-950/95 backdrop-blur-sm">
      <div className="flex items-center justify-between px-6 py-5 text-white">
        <p className="text-sm text-ink-300">
          {index + 1} / {total}
        </p>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close gallery"
          className="flex h-11 w-11 items-center justify-center rounded-full text-white transition hover:bg-white/10"
        >
          <X className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <div className="relative flex flex-1 items-center justify-center px-16 pb-4">
        <img key={item.src} src={item.src} alt={item.alt} className="max-h-full max-w-full rounded-lg object-contain" />
        <button
          type="button"
          onClick={() => onNavigate((index - 1 + total) % total)}
          aria-label="Previous photo"
          className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <ChevronLeft className="h-6 w-6" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={() => onNavigate((index + 1) % total)}
          aria-label="Next photo"
          className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        >
          <ChevronRight className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>

      <p className="px-6 pb-8 text-center font-semibold text-white">{item.caption}</p>
    </div>
  );
}
