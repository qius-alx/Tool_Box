"use client";

import { useProgress } from "@/hooks/useProgress";
import type { Module } from "@/data/learningPaths";
import { CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { ResourceLink } from './ResourceLink';

interface ModuleCardProps {
  module: Module;
  area: string;
  initialOpen?: boolean;
}

export const ModuleCard = ({ module, area, initialOpen = false }: ModuleCardProps) => {
  const moduleId = `${area}-${module.title.replace(/\s+/g, '-')}`;
  const { isCompleted, toggleComplete } = useProgress(moduleId);
  const [isOpen, setIsOpen] = useState(initialOpen);

  const cardStyle = {
    '--accent-color': 'var(--accent-color)',
    '--main-color': 'var(--main-color)',
    border: '1px solid',
    borderImageSource: `linear-gradient(to right, var(--main-color), var(--accent-color))`,
    borderImageSlice: 1,
  } as React.CSSProperties;

  return (
    <motion.div
      layout
      className={`bg-gray-800/30 backdrop-blur-sm rounded-2xl shadow-lg transition-all duration-300 overflow-hidden`}
      style={cardStyle}
      whileHover={{ scale: 1.02, boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' }}
    >
      {/* Encabezado del Módulo */}
      <div
        className="flex justify-between items-center p-5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-[var(--accent-color)]">{module.title}</h3>
        <div className="flex items-center gap-4 text-text-light">
          {isCompleted && <CheckCircle2 className="text-green-400" />}
          <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
            <ChevronDown />
          </motion.div>
        </div>
      </div>

      {/* Contenido Desplegable */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 border-t border-white/10">
              <p className="text-text-dark mt-4 mb-6">{module.description}</p>

              {module.resources && module.resources.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-text-light mb-3">Recursos Recomendados:</h4>
                  <div className="flex flex-col gap-2">
                    {module.resources.map((resource) => (
                      <ResourceLink key={resource.url} resource={resource} />
                    ))}
                  </div>
                </div>
              )}

              <button
                onClick={toggleComplete}
                className={`mt-6 w-full text-center font-semibold py-2 px-4 rounded-lg transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-green-500/20 text-green-300 border border-green-500/50'
                      : 'bg-[var(--accent-color)] text-background-dark border border-transparent hover:bg-transparent hover:border-[var(--accent-color)] hover:text-[var(--accent-color)]'
                  }`}
              >
                {isCompleted ? '✓ Completado' : 'Marcar como Completo'}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};