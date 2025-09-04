// src/components/Projects.tsx
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { FaGithub } from "react-icons/fa";
import { FaFolder, FaFileAlt, FaCode } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiTailwindcss, SiFirebase, SiShadcnui, SiPython, SiFastapi, SiSqlite } from "react-icons/si";

export default function Projects() {
  return (
    <section id="projects" className="w-full mt-2 mb-8 bg-muted/10 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="w-full p-4 md:p-8 rounded-2xl border-4 border-blue-700/10 dark:border-blue-700/20 shadow-lg bg-white dark:bg-gray-800">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-8 md:mb-12 text-center text-blue-700">Projects</h2>
          <div className="grid gap-6 md:gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center">
            {/* Project 1 */}
            <Card className="w-full max-w-sm rounded-2xl shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between h-full relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-700/10 hover:border-blue-700/30 group">
              <div className="absolute top-4 left-4 text-blue-700">
                <FaFolder size={24} />
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2 text-blue-700">
                <SiNextdotjs size={20} title="Next.js" />
                <SiReact size={20} title="React" />
                <SiTailwindcss size={20} title="Tailwind CSS" />
                <SiShadcnui size={20} title="Shadcn UI" />
              </div>
              <CardContent className="p-4 md:p-5 flex flex-col h-full pt-16 md:pt-12">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-700 transition-colors duration-300">Portfolio Website</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6">
                  A virtual portfolio showcasing my current projects, experience, and community involvement.
                </p>
                <div className="mt-auto flex justify-center gap-4">
                  {/*<a
                    href="#"
                    className="text-blue-700 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → Visit site
                  </a> */}
                  <a
                    href="https://github.com/lestermartinn/portfolio"
                    className="text-gray-600 dark:text-gray-300 font-medium hover:underline flex items-center gap-1"
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
            <Card className="w-full max-w-sm rounded-2xl shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between h-full relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-700/10 hover:border-blue-700/30 group">
              <div className="absolute top-4 left-4 text-blue-700">
                <FaFileAlt size={24} />
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2 text-blue-700">
                <SiNextdotjs size={20} title="Next.js" />
                <SiReact size={20} title="React" />
                <SiTailwindcss size={20} title="Tailwind CSS" />
                <SiFirebase size={20} title="Firebase" />
              </div>
              <CardContent className="p-4 md:p-5 flex flex-col h-full pt-16 md:pt-12">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-700 transition-colors duration-300">Sevenworks</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6">
                  Modern, real-time resume builder. Instantly create, edit, and download professional resumes with a live preview and AI-powered chatbox.
                </p>
                <div className="mt-auto flex justify-center gap-4">
                  <a
                    href="https://www.sevenworks.tech/"
                    className="text-blue-700 font-medium hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    → Visit site
                  </a>
                  <a
                    href="https://github.com/lestermartinn/sevenworks"
                    className="text-gray-600 dark:text-gray-300 font-medium hover:underline flex items-center gap-1"
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
            <Card className="w-full max-w-sm rounded-2xl shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between h-full relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-700/10 hover:border-blue-700/30 group">
              <div className="absolute top-4 left-4 text-blue-700">
                <FaCode size={24} />
              </div>
              <div className="absolute top-4 right-4 flex flex-wrap gap-2 text-blue-700">
                <SiPython size={20} title="Python" />
                <SiFastapi size={20} title="FastAPI" />
                <SiSqlite size={20} title="SQLite" />
                <SiReact size={20} title="React" />
              </div>
              <CardContent className="p-4 md:p-5 flex flex-col h-full pt-16 md:pt-12">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-700 transition-colors duration-300">DevLook</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6">
                  Privacy-first productivity dashboard that tracks application usage and developer workflows, providing real-time analytics and visual reports.
                </p>
                <div className="mt-auto flex justify-center gap-4">
                  <a
                    href="https://github.com/lestermartinn/devlook"
                    className="text-gray-600 dark:text-gray-300 font-medium hover:underline flex items-center gap-1"
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
      </div>
    </section>
  )
}
