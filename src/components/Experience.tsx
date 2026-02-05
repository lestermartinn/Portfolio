'use client'

import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experienceData = [

  // add more experiences here

  {
    id: 1,
    company: "Handshake",
    title: "Machine Learning Fellow",
    date: "Feb. 2026 - Present",
    location: "Remote",
    description: "Conducted Reinforcement Learning from Human Feedback (RLHF) on multimodal LLM and vision models, evaluating 200+ prompts to reduce hallucinations and improve model alignment for production deployment pipelines.",
    logo: "/handshakelogo.jpg",
  },

  {
    id: 2,
    company: "AI.Data Lab",
    title: "Software Engineer Intern",
    date: "Jan. 2026 - Present",
    location: "Atlanta, GA",
    description: "Created geospatial analysis methodology for Invest Atlanta using Python and GIS libraries to measure residents' proximity to fresh food access points, integrating 4 datasets to track progress toward 2030 goal of 100\% coverage within 1/2 mile.",
    logo: "/emorycenterforai.png",
  },

  {
    id: 3,
    company: "Cognition and Visualization Lab",
    title: "Undergraduare Researcher",
    date: "Jan. 2026 - Present",
    location: "Atlanta, GA",
    description: "Conducting systematic literature review of bias detection systems (Lumos, rutaBAGA) analyzing 200+ participant studies across visual analytics research to design LLM-powered alternative for real-time bias awareness and mitigation. Engineering a pipeline converting interaction telemetry into natural language prompts for LLM bias analysis.",
    logo: "/cav_logo.png",
  },

  {
    id: 4,
    company: "Emory University",
    title: "Computer Science Lab Engineer",
    date: "Sep. 2025 - Present",
    location: "Atlanta, GA",
    description: "Supported over 100 students each week across multiple programming languages and coursework levels, helping debug code, work through algorithm implementations, and improve software development practices. Built and maintained responsive UI components for the department's research website using React and JavaScript, streamlining content management workflows for staff overseeing PhD programs.",
    logo: "/emory_logo.png",
  },

  {
    id: 5,
    company: "Roblox",
    title: "Fullstack Game Developer",
    date: "Dec. 2017 - May 2024",
    location: "Remote",
    description: "Designed and developed multiple game experiences using Lua and Roblox Studio, scaling systems to support 500+ concurrent users and managing over 1.3 million player interactions with 76% retention. Implemented complete monetization infrastructure including DataStore API integration for persistent player data, dynamic pricing systems, and purchase flows that processed roughly 5,000 transactions.",
    logo: "/roblox_logo.png",
  },

  {
    id: 6,
    company: "Florida International University",
    title: "Educational Technology Intern",
    date: "Jul. 2022 - Aug. 2022",
    location: "Miami, FL",
    description: "Created 15+ interactive learning modules using H5P framework and JavaScript, integrating them into Canvas LMS for over 100 university students. Conducted data analysis using Python and Pandas to evaluate student performance patterns, identifying learning gaps and optimizing module design to achieve 25% improvement in assessment scores and 20% increase in engagement metrics.",
    logo: "/fiu_logo.jpg",
  },
];

export default function Experience() {
  return (
    <main className="w-full mt-2 mb-8 bg-muted/10 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="w-full p-8 rounded-2xl border-4 border-blue-600/10 dark:border-blue-600/20 shadow-lg bg-white dark:bg-gray-800">
            <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-700">
              Experience
            </h1>
            <div className="space-y-8">
              {experienceData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-4 p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-600/10 hover:border-blue-600/30 dark:hover:border-blue-600/30 group cursor-pointer"
                >

                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={64}
                    height={64}
                    className="rounded-full object-cover flex-shrink-0 border border-gray-200 dark:border-gray-700"
                  />

                  <div className="flex-grow">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {item.company}
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center flex-shrink-0">
                          <FaCalendarAlt className="mr-1" /> {item.date}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-base text-gray-600 dark:text-gray-300">
                          {item.title}
                        </p>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center flex-shrink-0">
                          <FaMapMarkerAlt className="mr-1" /> {item.location}
                        </div>
                      </div>
                    </div>
                    <p className="text-muted-foreground dark:text-gray-300 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
