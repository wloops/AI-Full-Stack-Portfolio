'use client';

import { Navbar } from '@/components/navbar';
import { HeroSection } from '@/components/hero';
import { SkillsSection } from '@/components/skills';
import { ExperienceSection } from '@/components/experience';
import { ProjectsSection } from '@/components/projects';
import { AiChatSection } from '@/components/ai-chat';
import { useLanguage } from '@/components/language-provider';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-zinc-950 selection:bg-emerald-500/30">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <AiChatSection />
      <SkillsSection />
      <ExperienceSection />
      
      <footer className="py-8 text-center border-t border-zinc-900 mt-20">
        <p className="text-zinc-600 font-mono text-sm">
          {t.footer}
        </p>
      </footer>
    </main>
  );
}
