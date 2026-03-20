'use client';

import { motion } from 'motion/react';
import { ExternalLink, Github, Database, Layout, Zap, Workflow, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/components/language-provider';

const projectIcons = [
  <Workflow key="1" className="w-6 h-6 text-emerald-400" />,
  <Database key="2" className="w-6 h-6 text-emerald-400" />,
  <Layout key="3" className="w-6 h-6 text-emerald-400" />,
  <Zap key="4" className="w-6 h-6 text-emerald-400" />
];

const projectImages = [
  'https://picsum.photos/seed/workflow/800/600?blur=2',
  'https://picsum.photos/seed/rag/800/600?blur=2',
  'https://picsum.photos/seed/ui/800/600?blur=2',
  'https://picsum.photos/seed/canvas2/800/600?blur=2'
];

const projectColSpans = [
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2'
];

export function ProjectsSection() {
  const { t } = useLanguage();

  const projects = t.projects.list.map((p, i) => ({
    ...p,
    icon: projectIcons[i],
    image: projectImages[i],
    colSpan: projectColSpans[i],
    link: '#',
    github: '#'
  }));

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono mb-4 border border-emerald-500/20">
              <Sparkles className="w-4 h-4" />
              <span>{t.projects.badge}</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              {t.projects.title1} <span className="text-emerald-500">{t.projects.title2}</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl">
              {t.projects.desc}
            </p>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-emerald-400 transition-colors font-mono text-sm">
            {t.projects.viewAll} <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass-panel rounded-3xl overflow-hidden flex flex-col relative ${project.colSpan}`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/80 to-transparent" />
              </div>
              
              <div className="relative z-10 p-8 flex-1 flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-zinc-950/80 backdrop-blur-sm rounded-xl border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                    {project.icon}
                  </div>
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <a href={project.github} title={t.projects.source} className="p-2 bg-zinc-900 hover:bg-emerald-500 hover:text-zinc-950 rounded-full transition-colors text-zinc-400">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.link} title={t.projects.demo} className="p-2 bg-zinc-900 hover:bg-emerald-500 hover:text-zinc-950 rounded-full transition-colors text-zinc-400">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <div className="mt-auto">
                  <h3 className="text-2xl font-bold mb-3 text-zinc-100 group-hover:text-emerald-400 transition-colors">{project.title}</h3>
                  <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(tech => (
                      <span key={tech} className="text-xs font-mono px-3 py-1.5 bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 rounded-lg text-zinc-300 group-hover:border-zinc-700 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Add ArrowRight icon for the link
const ArrowRight = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);
