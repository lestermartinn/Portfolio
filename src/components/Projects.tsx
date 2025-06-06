// src/components/Projects.tsx
'use client'

import { Card, CardContent } from "@/components/ui/card"
import { FaGithub } from "react-icons/fa";
import { FaFolder, FaFileAlt, FaCode } from "react-icons/fa";

export default function Projects() {
  return (
    <section id="projects" className="w-full mt-2 mb-8 bg-muted/10 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="w-full p-8 rounded-2xl border-4 border-blue-600/10 dark:border-blue-600/20 shadow-lg bg-white dark:bg-gray-800">
          <h2 className="text-4xl font-extrabold mb-12 text-center text-blue-600">Projects</h2>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 mx-auto justify-items-center">
            {/* Project 1 */}
            <Card className="rounded-2xl shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between h-full relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-600/10 hover:border-blue-600/30 group">
              <div className="absolute top-4 left-4 text-blue-600">
                <FaFolder size={24} />
              </div>
              <CardContent className="p-5 flex flex-col h-full pt-12">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300">Portfolio Website</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6">
                A virtual portfolio showcasing my current projects, experience, and community involvement.
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
            <Card className="rounded-2xl shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between h-full relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-600/10 hover:border-blue-600/30 group">
              <div className="absolute top-4 left-4 text-blue-600">
                <FaFileAlt size={24} />
              </div>
              <CardContent className="p-5 flex flex-col h-full pt-12">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300">Sevenworks</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6">
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
            <Card className="rounded-2xl shadow-md bg-white dark:bg-gray-800 flex flex-col justify-between h-full relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-600/10 hover:border-blue-600/30 group">
              <div className="absolute top-4 left-4 text-blue-600">
                <FaCode size={24} />
              </div>
              <CardContent className="p-5 flex flex-col h-full pt-12">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors duration-300">Under Development</h3>
                <p className="text-muted-foreground dark:text-gray-300 mb-6">
                  Exploring innovative tools and concepts. This section will be updated with a live project showcasing advanced design patterns and real world uses.
                </p>
                <div className="mt-auto flex justify-center gap-4">
                  {/*<a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 font-medium hover:underline flex items-center gap-1"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Source"
                  >
                    <FaGithub size={18} /> Source
                  </a> */}
                </div>
              </CardContent>
            </Card> 
          </div>
        </div>
      </div>
    </section>
  )
}
