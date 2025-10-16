const themeConfig: Record<string, { main: string; accent: string }> = {
  programacion: { main: '#007BFF', accent: '#FFD700' },
  iot: { main: '#00C853', accent: '#40E0D0' },
  robotica: { main: '#2E2E2E', accent: '#DC2626' },
  ia: { main: '#8E44AD', accent: '#00FFFF' },
  default: { main: '#0F172A', accent: '#FFFFFF' },
};

export function getThemeColors(area: string) {
  return themeConfig[area] || themeConfig.default;
}