"use client";

import Link from 'next/link';
import { getLearningData, LearningPath, Level } from '@/data/learningPaths';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ModuleCard } from '@/components/ModuleCard';
import { ProgressBar } from '@/components/ProgressBar';

export default function AreaPage({ params }: { params: { area: string } }) {
  const [learningData, setLearningData] = useState<LearningPath | null>(null);

  useEffect(() => {
    const data = getLearningData(params.area);
    if (!data) {
      notFound();
    } else {
      setLearningData(data);
    }
  }, [params.area]);

  if (!learningData) {
    return <div>Cargando...</div>; // O un spinner
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-2 capitalize">{learningData.title}</h1>
        <p className="text-lg text-text-dark">{learningData.description}</p>
      </header>

      <main>
        <ProgressBar area={params.area} levels={learningData.levels} />

        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-1/4">
            <nav className="sticky top-8 flex flex-col space-y-2">
              {learningData.levels.map((level, index) => (
                <a
                  key={level.title}
                  href={`#level-${index}`}
                  className="p-3 bg-gray-800/50 rounded-lg hover:bg-[var(--accent-color)] hover:text-background-dark transition-colors"
                >
                  {level.title}
                </a>
              ))}
            </nav>
          </aside>

          <section className="flex-1">
            {learningData.levels.map((level, index) => (
              <div key={level.title} id={`level-${index}`} className="mb-12 scroll-mt-24">
                <h2 className="text-3xl font-semibold mb-6 border-b-2 border-[var(--accent-color)] pb-2">{level.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {level.modules.map((module) => (
                    <ModuleCard key={module.title} module={module} area={params.area} />
                  ))}
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      <footer className="text-center mt-16">
        <Link href="/areas" className="text-white hover:text-[var(--accent-color)] transition-colors">
          &larr; Volver a Todas las Áreas
        </Link>
      </footer>
    </div>
  );
}