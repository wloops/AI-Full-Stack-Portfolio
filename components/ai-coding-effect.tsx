'use client';

import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

const CODE_LINES = [
  "import { Agent } from '@ai-sdk/react';",
  "import { generateText } from 'ai';",
  "",
  "// Initialize AI Agent",
  "const agent = new Agent({",
  "  model: 'gemini-3.1-pro',",
  "  temperature: 0.2,",
  "});",
  "",
  "// Execute low-code generation",
  "await agent.execute({",
  "  task: 'Build responsive dashboard',",
  "  stack: ['Next.js', 'Tailwind', 'PostgreSQL']",
  "});",
  "",
  "> System: Components generated successfully.",
  "> System: Deploying to edge network... [OK]"
];

export function AICodingEffect({ className, style }: { className?: string, style?: React.CSSProperties }) {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);

  useEffect(() => {
    if (currentLineIndex >= CODE_LINES.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentCharIndex(0);
      }, 5000);
      return () => clearTimeout(timeout);
    }

    const currentLine = CODE_LINES[currentLineIndex];

    if (currentCharIndex < currentLine.length) {
      const timeout = setTimeout(() => {
        setDisplayedLines(prev => {
          const newLines = [...prev];
          if (newLines.length <= currentLineIndex) {
            newLines.push('');
          }
          newLines[currentLineIndex] = currentLine.substring(0, currentCharIndex + 1);
          return newLines;
        });
        setCurrentCharIndex(prev => prev + 1);
      }, Math.random() * 30 + 20);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentLineIndex(prev => prev + 1);
        setCurrentCharIndex(0);
        // Ensure empty lines are pushed if the line was empty
        if (currentLine.length === 0) {
          setDisplayedLines(prev => {
            const newLines = [...prev];
            if (newLines.length <= currentLineIndex) {
              newLines.push('');
            }
            return newLines;
          });
        }
      }, 300);
      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex, currentCharIndex]);

  return (
    <div className={className || "w-full h-full"}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="w-full h-full font-mono text-sm p-6 text-left"
        style={style}
      >
        {/* Terminal Header */}
        <div className="flex items-center gap-2 mb-6 pb-4 border-b border-zinc-800/30">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-emerald-500/50" />
          <span className="ml-2 text-zinc-500 text-xs">ai-agent-executor.ts</span>
        </div>

        {/* Code Content */}
        <div className="flex flex-col gap-1.5">
          {displayedLines.map((line, i) => (
            <div key={i} className="flex">
              <span className="text-zinc-700 w-8 select-none">{i + 1}</span>
              <span className={
                line.startsWith('//') ? 'text-zinc-500' :
                line.startsWith('>') ? 'text-emerald-400' :
                'text-zinc-300'
              }>
                {line}
                {i === currentLineIndex && (
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="inline-block w-2 h-4 bg-emerald-500 ml-1 align-middle"
                  />
                )}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
