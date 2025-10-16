"use client";

import { useState, useEffect, useCallback } from 'react';

const getProgress = (): Record<string, boolean> => {
  if (typeof window === 'undefined') return {};
  const progress = localStorage.getItem('learningProgress');
  return progress ? JSON.parse(progress) : {};
};

export const useProgress = (moduleId: string) => {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    const progress = getProgress();
    setIsCompleted(!!progress[moduleId]);
  }, [moduleId]);

  const toggleComplete = useCallback(() => {
    const progress = getProgress();
    const newCompletedState = !progress[moduleId];
    progress[moduleId] = newCompletedState;
    localStorage.setItem('learningProgress', JSON.stringify(progress));
    setIsCompleted(newCompletedState);

    // Disparar un evento personalizado para que otros componentes (como la barra de progreso) puedan reaccionar
    window.dispatchEvent(new CustomEvent('progressChanged'));
  }, [moduleId]);

  return { isCompleted, toggleComplete };
};