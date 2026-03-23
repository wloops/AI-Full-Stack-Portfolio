'use client';

import { motion } from 'motion/react';
import { Layout, Image as ImageIcon, Type, MousePointer2, Sparkles, Box, ToggleLeft } from 'lucide-react';

export function AIUIEffect({ className, style }: { className?: string, style?: React.CSSProperties }) {
  return (
    <div className={className} style={style}>
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Main UI Canvas */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="relative w-[280px] h-[380px] bg-zinc-950/60 backdrop-blur-md border border-zinc-800/50 rounded-xl p-4 shadow-[0_0_50px_rgba(16,185,129,0.1)]"
        >
          {/* Skeleton Header */}
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800/30">
            <div className="w-8 h-8 rounded-full bg-zinc-800/50 animate-pulse" />
            <div className="h-4 w-24 bg-zinc-800/50 rounded animate-pulse" />
          </div>

          {/* Skeleton Body */}
          <div className="space-y-4">
            <div className="h-28 w-full bg-zinc-800/30 rounded-lg animate-pulse flex items-center justify-center border border-zinc-800/50">
              <ImageIcon className="w-8 h-8 text-zinc-700" />
            </div>
            <div className="h-3 w-3/4 bg-zinc-800/50 rounded animate-pulse" />
            <div className="h-3 w-1/2 bg-zinc-800/50 rounded animate-pulse" />
            
            <div className="flex gap-2 pt-2">
              <div className="h-8 w-20 bg-emerald-500/20 rounded-md animate-pulse border border-emerald-500/30" />
              <div className="h-8 w-20 bg-zinc-800/50 rounded-md animate-pulse" />
            </div>
          </div>

          {/* Scanning Line */}
          <motion.div
            animate={{ top: ['0%', '100%', '0%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute left-0 right-0 h-[1px] bg-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.8)] z-10"
          />
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[15%] left-[10%] p-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl shadow-xl"
        >
          <Layout className="w-6 h-6 text-emerald-400" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[20%] right-[10%] p-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl shadow-xl"
        >
          <ToggleLeft className="w-6 h-6 text-teal-400" />
        </motion.div>

        <motion.div
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[30%] right-[5%] p-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl shadow-xl"
        >
          <Type className="w-6 h-6 text-emerald-500" />
        </motion.div>

        <motion.div
          animate={{ y: [0, 10, 0], x: [0, -10, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute bottom-[30%] left-[5%] p-3 bg-zinc-900/80 backdrop-blur-md border border-zinc-800 rounded-xl shadow-xl"
        >
          <Box className="w-6 h-6 text-teal-500" />
        </motion.div>

        {/* Cursor */}
        <motion.div
          animate={{ 
            x: [-50, 100, 20, -50],
            y: [-50, 20, 120, -50]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-1/2 z-20 pointer-events-none"
        >
          <MousePointer2 className="w-6 h-6 text-emerald-500 drop-shadow-md" fill="currentColor" />
          <div className="absolute top-6 left-4 bg-emerald-500 text-zinc-950 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1 whitespace-nowrap shadow-lg">
            <Sparkles className="w-3 h-3" />
            Generating UI...
          </div>
        </motion.div>
      </div>
    </div>
  );
}
