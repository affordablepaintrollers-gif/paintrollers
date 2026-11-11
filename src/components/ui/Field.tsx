import type { ReactNode } from 'react';

type FieldProps = {
  label: string;
  htmlFor: string;
  children: ReactNode;
  className?: string;
};

export function Field({ label, htmlFor, children, className = '' }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink-800">
        {label}
      </label>
      {children}
    </div>
  );
}

export function SizeCheckboxes({ options }: { options: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {options.map((size) => (
        <label
          key={size}
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-md border border-ink-200 bg-white px-4 py-2.5 text-sm font-semibold text-ink-800 transition hover:border-ink-400 has-[:checked]:border-ink-900 has-[:checked]:bg-ink-900 has-[:checked]:text-white"
        >
          <input type="checkbox" name="sizes" value={size} className="h-4 w-4 accent-signal-500" />
          {size} roller cover
        </label>
      ))}
    </div>
  );
}
