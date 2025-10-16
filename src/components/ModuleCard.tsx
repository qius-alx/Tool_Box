"use client";

import { useProgress } from "@/hooks/useProgress";
import type { Module } from "@/data/learningPaths";
import { CheckCircle2 } from "lucide-react";

interface ModuleCardProps {
  module: Module;
  area: string;
}

export const ModuleCard = ({ module, area }: ModuleCardProps) => {
  const moduleId = `${area}-${module.title.replace(/\s+/g, '-')}`;
  const { isCompleted, toggleComplete } = useProgress(moduleId);

  return (
    <div className={`bg-gray-800/60 p-6 rounded-xl shadow-md transition-all duration-300 ${isCompleted ? 'bg-green-900/50 opacity-70' : ''}`}>
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-xl font-bold text-[var(--accent-color)] mb-2">{module.title}</h3>
          <p className="text-text-dark">{module.description}</p>
        </div>
        {isCompleted && <CheckCircle2 className="text-green-400" />}
      </div>
      <button
        onClick={toggleComplete}
        className={`mt-4 w-full text-center border border-[var(--accent-color)] py-2 px-4 rounded-lg transition-colors ${
          isCompleted
            ? 'bg-transparent text-gray-400 border-gray-600'
            : 'bg-transparent text-[var(--accent-color)] hover:bg-[var(--accent-color)] hover:text-background-dark'
        }`}
      >
        {isCompleted ? 'Marcado como completo' : 'Marcar como completo'}
      </button>
    </div>
  );
};