/** Full Manarix Solutions wordmark (PNG in /public). */
export default function BrandLogo({ className = '' }) {
  return (
    <img
      src="/manarix-logo.png"
      alt=""
      width={200}
      height={56}
      className={`w-auto object-contain object-left ${className}`}
      decoding="async"
      fetchPriority="high"
    />
  );
}
