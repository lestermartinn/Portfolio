// src/components/Projects.tsx
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { FaGithub } from "react-icons/fa";
import { FaFolder, FaFileAlt, FaCode } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="w-full py-16 bg-muted/10">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold mb-12">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {/* Project 1 */}
          <Card className="rounded-2xl shadow-md bg-white flex flex-col justify-between h-full relative">
            <div className="absolute top-4 left-4 text-blue-600">
              <FaFolder size={24} />
            </div>
            <CardContent className="p-5 flex flex-col h-full pt-12">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Portfolio Website</h3>
              <p className="text-muted-foreground mb-6">
              A modern portfolio website built with Next.js, Tailwind CSS, and Shadcn UI.
              </p>
              <div className="mt-auto flex justify-center gap-4">
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → Visit site
                </a>
                <a
                  href="https://github.com/lestermartinn/portfolio"
                  className="text-gray-600 font-medium hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Source"
                >
                  <FaGithub size={18} /> Source
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Project 2 */}
          <Card className="rounded-2xl shadow-md bg-white flex flex-col justify-between h-full relative">
            <div className="absolute top-4 left-4 text-blue-600">
              <FaFileAlt size={24} />
            </div>
            <CardContent className="p-5 flex flex-col h-full pt-12">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Sevenworks</h3>
              <p className="text-muted-foreground mb-6">
              Modern, real-time resume builder. Instantly create, edit, autosave, and download professional resumes with a live preview.
              </p>
              <div className="mt-auto flex justify-center gap-4">
                <a
                  href="https://www.sevenworks.tech/"
                  className="text-blue-600 font-medium hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  → Visit site
                </a>
                <a
                  href="https://github.com/lestermartinn/sevenworks"
                  className="text-gray-600 font-medium hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Source"
                >
                  <FaGithub size={18} /> Source
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Project 3 */}
          <Card className="rounded-2xl shadow-md bg-white flex flex-col justify-between h-full relative">
            <div className="absolute top-4 left-4 text-blue-600">
              <FaCode size={24} />
            </div>
            <CardContent className="p-5 flex flex-col h-full pt-12">
              <h3 className="text-xl font-bold mb-2 text-gray-900">Coming Soon</h3>
              <p className="text-muted-foreground mb-6">
                Stay tuned for more full-stack apps built with Supabase and Next.js.
              </p>
              <div className="mt-auto flex justify-center gap-4">
                <a
                  href="#"
                  className="text-gray-600 font-medium hover:underline flex items-center gap-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Source"
                >
                  <FaGithub size={18} /> Source
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
