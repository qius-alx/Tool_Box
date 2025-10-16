"use client";

import { useEffect, useState } from 'react';
import type { Level } from '@/data/learningPaths';

interface ProgressBarProps {
  area: string;
  levels: Level[];
}

export const ProgressBar = ({ area, levels }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const allModules = levels.flatMap(level => level.modules.map(module => `${area}-${module.title.replace(/\s+/g, '-')}`));
      const totalModules = allModules.length;
      if (totalModules === 0) return 0;

      const storedProgress = JSON.parse(localStorage.getItem('learningProgress') || '{}');
      const completedModules = allModules.filter(id => storedProgress[id]).length;

      setProgress((completedModules / totalModules) * 100);
    };

    calculateProgress();

    // Escuchar cambios en el progreso
    const handleStorageChange = () => calculateProgress();
    window.addEventListener('storage', handleStorageChange);
    // También necesitamos un evento personalizado porque 'storage' no se dispara en la misma pestaña
    window.addEventListener('progressChanged', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('progressChanged', handleStorageChange);
    };
  }, [area, levels]);

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold text-text-light mb-2">Tu Avance Total</h3>
      <div className="w-full bg-gray-700 rounded-full h-4">
        <div
          className="bg-[var(--accent-color)] h-4 rounded-full transition-all duration-500"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-right text-sm text-text-dark mt-1">{Math.round(progress)}% completado</p>
    </div>
  );
};