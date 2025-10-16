"use client";

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

interface AreaCardProps {
  title: string;
  icon: React.ReactNode;
  colorMain: string;
  colorAccent: string;
  href: string;
}

export const AreaCard = ({ title, icon, colorMain, colorAccent, href }: AreaCardProps) => {
  const cardStyle = {
    '--card-main-color': colorMain,
    '--card-accent-color': colorAccent,
  } as React.CSSProperties;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div variants={cardVariants}>
      <Link href={href} style={cardStyle} className="group relative block w-full max-w-sm overflow-hidden rounded-2xl bg-metal-gray p-8 text-center text-white shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
        <div className="absolute inset-0 bg-[var(--card-main-color)] opacity-80 transition-opacity duration-300 group-hover:opacity-100"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-transparent to-[var(--card-accent-color)] opacity-0 transition-opacity duration-500 group-hover:opacity-30"></div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-4 text-[var(--card-accent-color)] transition-transform duration-300 group-hover:scale-125">
            {icon}
          </div>
          <h3 className="text-3xl font-bold">{title}</h3>
        </div>
      </Link>
    </motion.div>
  );
};