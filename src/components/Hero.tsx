// src/components/Hero.tsx
'use client'

import { Button } from "@/components/ui/button"
import { ArrowDownIcon } from "lucide-react"

export default function Hero() {
  return (
    <section className="w-full py-20 text-center" id="hero">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold sm:text-5xl md:text-6xl">
          Lester Martin
        </h1>
        <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
          Full-Stack Developer | Passionate about building beautiful, scalable web apps using modern technologies like React, Next.js, and Supabase.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild>
            <a href="/projects">View Projects</a>
          </Button>
          <Button variant="ghost" asChild>
            <a href="/contact" className="flex items-center gap-2">
              Contact Me <ArrowDownIcon className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
