'use client';

import { motion } from 'motion/react';
import { useLanguage } from '@/components/language-provider';

export function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 relative z-10 bg-zinc-950/30">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            {t.experience.title1} <span className="text-emerald-500">{t.experience.title2}</span>
          </h2>
        </motion.div>

        <div className="relative border-l border-zinc-800 ml-3 md:ml-0">
          {t.experience.list.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="mb-12 pl-8 relative"
            >
              {/* Timeline dot */}
              <div className="absolute w-6 h-6 bg-zinc-950 border-2 border-emerald-500 rounded-full -left-[13px] top-1 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-2">
                <h3 className="text-2xl font-bold text-zinc-100">{exp.role}</h3>
                <span className="text-emerald-400 font-mono text-sm">{exp.company}</span>
              </div>
              <div className="text-zinc-500 font-mono text-sm mb-4">{exp.period}</div>
              <p className="text-zinc-400 leading-relaxed max-w-2xl">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
