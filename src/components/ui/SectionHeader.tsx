type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
};

export function SectionHeader({ eyebrow, title, intro, align = 'left', tone = 'light' }: SectionHeaderProps) {
  const isDark = tone === 'dark';
  return (
    <div className={`max-w-2xl ${align === 'center' ? 'mx-auto text-center [&_.eyebrow]:justify-center' : ''}`}>
      <p className={`eyebrow ${isDark ? '!text-signal-300 before:bg-signal-400' : ''}`}>{eyebrow}</p>
      <h2 className={`mt-4 text-4xl font-bold sm:text-5xl ${isDark ? 'text-white' : 'text-ink-950'}`}>{title}</h2>
      {intro && (
        <p className={`mt-5 text-lg leading-[1.6] ${isDark ? 'text-ink-200' : 'text-ink-600'}`}>{intro}</p>
      )}
    </div>
  );
}
