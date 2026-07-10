import type { SVGProps } from 'react';

type IconProps = SVGProps<SVGSVGElement>;
const base = {
  viewBox: '0 0 64 32',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};
export function OxfordIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 23c7-2 10-12 19-12 9 0 12 8 18 9l12 2c3 1 4 6-1 6H9c-4 0-6-3-4-5Z" />
      <path d="m20 14 5 6m-8-3 7 2m4-5 3 7" />
    </svg>
  );
}
export function LoaferIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 24c8-1 10-13 22-13h10c5 0 8 5 16 8 7 2 6 9-1 9H9c-4 0-6-2-4-4Z" />
      <path d="M24 15h16l4 6H22Z" />
    </svg>
  );
}
export function ShoeLastIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M7 23c9-3 11-12 24-12h11c7 0 10 4 15 7l-2 8H9Z" />
      <path d="M28 11v12m13-12v11" />
    </svg>
  );
}
export function StitchingIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path strokeDasharray="3 4" d="M3 16c14-11 35 11 58 0" />
      <path d="m3 13 3 3-3 3m55-3 3-3m-3 3 3 3" />
    </svg>
  );
}
export function BrushIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="m5 24 27-14 9 15-27 3Z" />
      <path d="m39 13 13-7 7 13-15 6" />
      <path d="m8 27 2 3m4-4 2 3m4-4 2 3m4-4 2 3" />
    </svg>
  );
}
