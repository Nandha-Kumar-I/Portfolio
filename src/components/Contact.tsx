"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
        {/* Background decorative blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />

      <div className="container px-6 mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let&apos;s <span className="text-gradient">Connect</span></h2>
          <p className="text-muted-foreground">
            I&apos;m currently looking for internship opportunities and open source collaborations.
          </p>
        </div>

        <Card className="bg-card/40 backdrop-blur-md border-border/50">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Get in touch</h3>
                <p className="text-muted-foreground">
                  Have a question or want to work together? Feel free to reach out.
                </p>
                
                <div className="space-y-4">
                  <a href="mailto:i.nandhakumar0065@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="w-5 h-5 text-blue-400" />
                    <span>i.nandhakumar0065@gmail.com</span>
                  </a>
                  <a href="https://www.linkedin.com/in/nandha-kumar-0690a0382/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Linkedin className="w-5 h-5 text-blue-400" />
                    <span>LinkedIn Profile</span>
                  </a>
                  <a href="https://github.com/Nandha-Kumar-I/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                    <Github className="w-5 h-5 text-blue-400" />
                    <span>github.com/Nandha-Kumar-I</span>
                  </a>
                </div>
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Input placeholder="Name" className="bg-background/50 border-input/50 focus:border-primary/50" />
                  </div>
                  <div className="space-y-2">
                    <Input placeholder="Email" type="email" className="bg-background/50 border-input/50 focus:border-primary/50" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input placeholder="Subject" className="bg-background/50 border-input/50 focus:border-primary/50" />
                </div>
                <div className="space-y-2">
                  <Textarea placeholder="Message" className="min-h-[120px] bg-background/50 border-input/50 focus:border-primary/50" />
                </div>
                <Button className="w-full bg-gradient-to-r from-blue-600 to-violet-600 hover:opacity-90 transition-opacity">
                  Send Message
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>

        <footer className="mt-20 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Nandha Kumar. Built with Next.js & Tailwind.</p>
        </footer>
      </div>
    </section>
  );
}
