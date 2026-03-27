import { useId } from 'react';

const SIZE = 52;

/** Distinct minimalist marks — placeholder brand identities (not real trademarks). */
export default function ClientLogoMark({ clientId, className = '' }) {
  const uid = useId().replace(/:/g, '');
  const g1 = `lg-${uid}-v`;
  const g2 = `lg-${uid}-n`;

  const common = 'shrink-0';
  const wrapper = `${common} ${className}`;

  switch (clientId) {
    case 'vertex':
      return (
        <svg className={wrapper} width={SIZE} height={SIZE} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id={g1} x1="8" y1="40" x2="40" y2="8" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B3D91" />
              <stop offset="1" stopColor="#FF6F3C" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="12" fill={`url(#${g1})`} fillOpacity="0.12" />
          <path d="M24 14L34 34H14L24 14Z" stroke={`url(#${g1})`} strokeWidth="2.2" strokeLinejoin="round" fill="none" />
          <path d="M24 20v8" stroke={`url(#${g1})`} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'nordic':
      return (
        <svg className={wrapper} width={SIZE} height={SIZE} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id={g2} x1="0" y1="24" x2="48" y2="24" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B3D91" />
              <stop offset="1" stopColor="#1e5ad4" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="12" fill={`url(#${g2})`} fillOpacity="0.1" />
          <path d="M14 34V14h6l8 14-6 6 6 6 6-6" stroke={`url(#${g2})`} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </svg>
      );
    case 'pulse':
      return (
        <svg className={wrapper} width={SIZE} height={SIZE} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="4" y="4" width="40" height="40" rx="12" fill="#FF6F3C" fillOpacity="0.12" />
          <path
            d="M10 26h6l3-10 4 18 4-14 3 6h8"
            stroke="#FF6F3C"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      );
    case 'helix':
      return (
        <svg className={wrapper} width={SIZE} height={SIZE} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <rect x="4" y="4" width="40" height="40" rx="12" fill="#0B3D91" fillOpacity="0.08" />
          <path
            d="M14 34c0-8 6-14 10-6 4-8 10-2 10 6"
            stroke="#0B3D91"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M14 14c0 8 6 14 10 6 4 8 10 2 10-6"
            stroke="#FF6F3C"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );
    case 'apex':
      return (
        <svg className={wrapper} width={SIZE} height={SIZE} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
          <defs>
            <linearGradient id={`${g1}-apex`} x1="12" y1="36" x2="36" y2="12" gradientUnits="userSpaceOnUse">
              <stop stopColor="#0B3D91" />
              <stop offset="1" stopColor="#FF6F3C" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="12" fill={`url(#${g1}-apex)`} fillOpacity="0.1" />
          <path d="M14 34L24 14l10 20" stroke={`url(#${g1}-apex)`} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          <path d="M18 28h12" stroke={`url(#${g1}-apex)`} strokeWidth="2" strokeLinecap="round" opacity="0.6" />
        </svg>
      );
    default:
      return null;
  }
}
