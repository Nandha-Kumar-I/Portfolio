"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Globe, Layout, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Core Languages",
    icon: <Cpu className="w-5 h-5 text-blue-400" />,
    skills: ["C++", "Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend Development",
    icon: <Globe className="w-5 h-5 text-violet-400" />,
    skills: ["HTML5", "CSS3 / Tailwind", "React.js", "Next.js"],
  },
  {
    title: "AI & Fundamentals",
    icon: <Database className="w-5 h-5 text-green-400" />,
    skills: ["Data Structures", "Algorithms", "OOP", "Basic ML Concepts"],
  },
  {
    title: "Tools & Workflow",
    icon: <Layout className="w-5 h-5 text-orange-400" />,
    skills: ["Git / GitHub", "VS Code", "Linux", "Figma"],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container px-6 mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical <span className="text-gradient">Arsenal</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
                My current toolkit as I explore the intersection of Software Engineering and Artificial Intelligence.
            </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div key={idx} variants={item}>
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/20 transition-colors">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-secondary/50">
                        {category.icon}
                    </div>
                    <CardTitle className="text-lg font-semibold">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="bg-secondary/40 hover:bg-secondary/60 transition-colors">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
