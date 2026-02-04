"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Folder } from "lucide-react";

const projects = [
  {
    title: "Algorithmic Solutions Repository",
    description: "A comprehensive collection of C++ solutions for complex data structures and algorithmic problems. Focuses on time complexity optimization and clean code practices.",
    tags: ["C++", "Data Structures", "Algorithms"],
    links: { github: "#", demo: null },
  },
  {
    title: "Modern Student Portfolio",
    description: "A high-performance personal portfolio website built with Next.js 14 and Tailwind CSS. Features dark mode, glassmorphism UI, and smooth Framer Motion animations.",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    links: { github: "#", demo: "#" },
  },
  {
    title: "Python Data Analysis Scripts",
    description: "A set of Python scripts utilizing Pandas and Matplotlib for basic data processing and visualization tasks. Serves as a foundation for future Machine Learning projects.",
    tags: ["Python", "Pandas", "Data Vis"],
    links: { github: "#", demo: null },
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/5">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured <span className="text-gradient">Projects</span></h2>
                <p className="text-muted-foreground max-w-xl">
                    A selection of my academic work and personal explorations in code.
                </p>
            </div>
            <Button variant="outline" className="hidden md:flex" asChild>
                <a href="https://github.com/Nandha-Kumar-I/" target="_blank" rel="noopener noreferrer">View GitHub Profile</a>
            </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <Card className="h-full flex flex-col bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5 group">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary group-hover:text-white group-hover:bg-primary transition-colors">
                        <Folder className="w-5 h-5" />
                    </div>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-3">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="bg-background/50">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-3 pt-0">
                  <Button variant="ghost" size="sm" className="gap-2 px-0 hover:bg-transparent hover:text-primary" asChild>
                    <a href={project.links.github}> <Github className="w-4 h-4" /> Source </a>
                  </Button>
                  {project.links.demo && (
                    <Button variant="ghost" size="sm" className="gap-2 px-0 hover:bg-transparent hover:text-primary" asChild>
                      <a href={project.links.demo}> <ExternalLink className="w-4 h-4" /> Live Demo </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
