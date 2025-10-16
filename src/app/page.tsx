"use client";

import Link from 'next/link';
import { Robot } from '@/components/RobotIcon';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Fondo animado con gradiente para modo claro y oscuro */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-sky-100 via-violet-100 to-blue-200 dark:from-primary-blue dark:via-deep-violet dark:to-metal-gray bg-[length:400%_400%] animate-gradient-bg"></div>

      {/* Contenedor principal centrado */}
      <main className="flex flex-col items-center justify-center min-h-screen text-center p-4 z-10">
        <div className="mb-8">
          <Robot className="h-24 w-24 text-primary-blue dark:text-bright-cyan animate-pulse" />
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-text-light mb-4">
          Bienvenido a DIGITAL TOOL BOX
        </h1>

        <p className="text-lg md:text-2xl text-gray-600 dark:text-text-dark mb-8">
          Tu camino hacia la tecnología del futuro.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Link
            href="/areas"
            className="block bg-primary-blue hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors duration-300 ease-in-out shadow-lg"
          >
            Comenzar a aprender
          </Link>
        </motion.div>

        <footer className="absolute bottom-8 text-center text-gray-600 dark:text-text-dark text-sm">
          <p>Desarrollado por estudiantes de la <b>Universidad Nacional de Juliaca</b> — <b>Ingeniería de Software y Sistemas</b>.</p>
        </footer>
      </main>
    </div>
  );
}