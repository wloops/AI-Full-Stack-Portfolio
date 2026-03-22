'use client';

import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon, Github, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectModalProps {
  project: {
    title: string;
    description: string;
    tech: string[];
    images?: string[];
    github?: string;
    demo?: string;
  };
  onClose: () => void;
  t: any;
}

export function ProjectModal({ project, onClose, t }: ProjectModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const nextImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev + 1) % project.images!.length);
    }
  };

  const prevImage = () => {
    if (project.images) {
      setCurrentImageIndex((prev) => (prev - 1 + project.images!.length) % project.images!.length);
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-5xl bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-zinc-800">
            <h3 className="text-xl font-bold text-zinc-100">{project.title}</h3>
            <button
              onClick={onClose}
              className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6">
            {/* Image Gallery */}
            {project.images && project.images.length > 0 ? (
              <div className="relative w-full aspect-video bg-zinc-950 rounded-xl overflow-hidden mb-8 group">
                <Image
                  src={project.images[currentImageIndex]}
                  alt={`${project.title} screenshot ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
                
                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-950/50 hover:bg-emerald-500 text-zinc-300 hover:text-zinc-950 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-zinc-950/50 hover:bg-emerald-500 text-zinc-300 hover:text-zinc-950 rounded-full backdrop-blur-sm transition-all opacity-0 group-hover:opacity-100"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {project.images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          className={`w-2 h-2 rounded-full transition-all ${
                            idx === currentImageIndex ? 'bg-emerald-500 w-4' : 'bg-zinc-500/50 hover:bg-zinc-400'
                          }`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            ) : (
              <div className="w-full aspect-video bg-zinc-950 rounded-xl flex flex-col items-center justify-center text-zinc-600 mb-8">
                <ImageIcon className="w-12 h-12 mb-4 opacity-50" />
                <p>No images available</p>
              </div>
            )}

            {/* Description & Tech */}
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-mono text-emerald-500 mb-2 uppercase tracking-wider">Description</h4>
                <p className="text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div>
                <h4 className="text-sm font-mono text-emerald-500 mb-3 uppercase tracking-wider">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string) => (
                    <span key={tech} className="text-sm font-mono px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-zinc-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {(project.github || project.demo) && (
                <div className="pt-4 flex gap-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 rounded-lg transition-colors text-sm font-medium">
                      <Github className="w-4 h-4" />
                      {t.projects.source}
                    </a>
                  )}
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 rounded-lg transition-colors text-sm font-medium border border-emerald-500/20">
                      <ExternalLink className="w-4 h-4" />
                      {t.projects.demo}
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
