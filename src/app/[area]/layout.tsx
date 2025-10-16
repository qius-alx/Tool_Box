import { getThemeColors } from '@/lib/theme';
import React from 'react';

export default function AreaLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { area: string };
}) {
  const { main, accent } = getThemeColors(params.area);

  const layoutStyle = {
    '--main-color': main,
    '--accent-color': accent,
  } as React.CSSProperties;

  return (
    <div style={layoutStyle} className="bg-[var(--main-color)] text-text-light min-h-screen">
      {children}
    </div>
  );
}