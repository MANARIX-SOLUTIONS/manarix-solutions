export default function FormField({
  id,
  label,
  children,
  className = '',
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      <label
        htmlFor={id}
        className="block text-sm font-semibold text-[var(--color-text)] tracking-tight"
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export function inputClassName(extra = '') {
  return [
    'input-premium w-full px-4 py-3.5 rounded-xl',
    'border border-gray-200/90 bg-white',
    'text-[var(--color-text)] placeholder:text-[var(--color-gray)]/60',
    'outline-none transition-all duration-300',
    extra,
  ].join(' ');
}
