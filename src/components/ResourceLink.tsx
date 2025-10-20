"use client";

import { motion } from 'framer-motion';
import { Globe, Video, Github } from 'lucide-react';
import type { Resource } from '@/data/learningPaths';

const icons = {
  web: <Globe size={20} />,
  video: <Video size={20} />,
  repo: <Github size={20} />,
};

export const ResourceLink = ({ resource }: { resource: Resource }) => {
  return (
    <motion.a
      href={resource.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
      className="flex items-center gap-3 p-3 rounded-lg text-text-light transition-colors"
    >
      <span className="text-[var(--accent-color)]">{icons[resource.type]}</span>
      <span>{resource.title}</span>
    </motion.a>
  );
};