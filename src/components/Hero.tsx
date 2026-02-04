"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Terminal } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] -z-10" />

      <div className="container px-6 mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border mb-6 text-sm text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for Internships
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
        >
          Hi, I&apos;m <span className="text-gradient">Nandha Kumar</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          <p className="mb-2 text-foreground font-medium">B.E. CSE (AIML) Student</p>
          <p>
            Crafting intelligent systems and seamless web experiences with <span className="text-blue-400">Python</span>, <span className="text-blue-400">C++</span>, and <span className="text-violet-400">React</span>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="lg" className="h-12 px-8 text-base bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 transition-opacity border-0" asChild>
            <a href="#projects">
              View Projects <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-8 text-base border-border/50 bg-background/50 hover:bg-secondary/50 backdrop-blur-sm" asChild>
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>

        {/* Tech Stack Icons Floating */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-20 flex justify-center gap-8 text-muted-foreground/20"
        >
            <Code2 className="w-12 h-12" />
            <Terminal className="w-12 h-12" />
        </motion.div>
      </div>
    </section>
  );
}
