"use client";

import { AreaCard } from '@/components/AreaCard';
import { CodeIcon } from '@/components/CodeIcon';
import { IotIcon } from '@/components/IotIcon';
import { Robot } from '@/components/RobotIcon';
import { AiIcon } from '@/components/AiIcon';
import Link from 'next/link';
import { motion } from 'framer-motion';

const areas = [
  {
    title: 'Programación',
    icon: <CodeIcon className="h-16 w-16" />,
    colorMain: '#007BFF',
    colorAccent: '#FFD700',
    href: '/programacion',
  },
  {
    title: 'IoT',
    icon: <IotIcon className="h-16 w-16" />,
    colorMain: '#00C853',
    colorAccent: '#40E0D0',
    href: '/iot',
  },
  {
    title: 'Robótica',
    icon: <Robot className="h-16 w-16" />,
    colorMain: '#2E2E2E',
    colorAccent: '#DC2626',
    href: '/robotica',
  },
  {
    title: 'Inteligencia Artificial',
    icon: <AiIcon className="h-16 w-16" />,
    colorMain: '#8E44AD',
    colorAccent: '#00FFFF',
    href: '/ia',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function AreasPage() {
  return (
    <div className="min-h-screen bg-background-dark text-text-light">
      <div className="container mx-auto px-4 py-16">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-2">Elige tu Área de Interés</h1>
          <p className="text-lg text-text-dark">Haz clic en una tarjeta para comenzar tu ruta de aprendizaje.</p>
        </header>

        <motion.main
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {areas.map((area) => (
            <AreaCard key={area.title} {...area} />
          ))}
        </motion.main>

        <footer className="text-center mt-16">
          <Link href="/" className="text-primary-blue hover:underline">
            &larr; Volver al Inicio
          </Link>
        </footer>
      </div>
    </div>
  );
}