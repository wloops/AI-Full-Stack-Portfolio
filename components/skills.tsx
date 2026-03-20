'use client';

import { motion } from 'motion/react';
import { Terminal, Globe, Database, Sparkles } from 'lucide-react';
import { useLanguage } from '@/components/language-provider';

const skillIcons = [
  <Globe key="1" className="w-6 h-6 text-emerald-400" />,
  <Sparkles key="2" className="w-6 h-6 text-emerald-400" />,
  <Database key="3" className="w-6 h-6 text-emerald-400" />,
  <Terminal key="4" className="w-6 h-6 text-emerald-400" />
];

const skillItems = [
  ['React / Next.js', 'Vue3 / Nuxt', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
  ['LLM APIs (Gemini, OpenAI)', 'RAG Pipelines', 'SSE Streaming', 'Prompt Engineering'],
  ['Node.js', 'FastAPI', 'PostgreSQL', 'Redis', 'GraphQL'],
  ['CI/CD', 'Docker', 'Vercel / Cloudflare', 'Performance Tuning', 'WebSockets']
];

const skillColSpans = [
  'md:col-span-2',
  'md:col-span-1',
  'md:col-span-1',
  'md:col-span-2'
];

export function SkillsSection() {
  const { t } = useLanguage();

  const skills = t.skills.categories.map((cat, i) => ({
    category: cat,
    icon: skillIcons[i],
    items: skillItems[i],
    colSpan: skillColSpans[i]
  }));

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-sans tracking-tight">
            {t.skills.title1} <span className="text-emerald-500">{t.skills.title2}</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            {t.skills.desc}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-panel p-8 rounded-2xl hover:border-emerald-500/30 transition-colors group ${skill.colSpan}`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-zinc-950 rounded-xl border border-zinc-800 group-hover:border-emerald-500/50 transition-colors">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-semibold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 bg-zinc-950 border border-zinc-800 rounded-lg text-sm font-mono text-zinc-300 group-hover:border-zinc-700 transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
