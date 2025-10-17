'use client'

import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const involvementData = [
  {
    id: 4,
    organization: "Emory Computer Science Club",
    role: "Co-President",
    date: "Aug. 2023 - Present",
    location: "Emory University",
    description: "Organized and led weekly meetings, coordinated speaker events and hackathons, and facilitated collaboration between members interested in computer science research, industry, and career development.",
    logo: "/csclub_logo.png",
  },
  {
    id: 3,
    organization: "ColorStack Emory",
    role: "Member",
    date: "Nov. 2024 - Present",
    location: "Emory University",
    description: "Participated in initiatives supporting underrepresented students in tech through networking events, technical workshops, and community-building activities.",
    logo: "/colorstack_logo.jpg",
  },
  {
    id: 2,
    organization: "Project Emory",
    role: "Member",
    date: "Sep. 2024 - Present",
    location: "Emory University",
    description: "Engaged in interdisciplinary projects and hackathons focused on social good, collaborating with peers on software development and design solutions for nonprofit and community partners.",
    logo: "/pe_logo.png",
  },
  {
    id: 1,
    organization: "Emory Programming Club",
    role: "Member",
    date: "Sep. 2024 - Present",
    location: "Emory University",
    description: "Attended coding workshops and collaborative coding challenges, with a focus on improving technical proficiency and preparing for competitive programming and technical interviews.",
    logo: "/epc_logo2.png",
  },
  // add more involvement things here
];

export default function Involvement() {
  return (
    <main className="w-full mt-2 mb-8 bg-muted/10 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="w-full p-8 rounded-2xl border-4 border-blue-600/10 dark:border-blue-600/20 shadow-lg bg-white dark:bg-gray-800">
            <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-700">
              Involvement
            </h1>
            <div className="space-y-8">
              {involvementData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-4 p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-600/10 hover:border-blue-600/30 dark:hover:border-blue-600/30 group cursor-pointer"
                >
                  <Image
                    src={item.logo}
                    alt={`${item.organization} logo`}
                    width={64}
                    height={64}
                    className="rounded-full object-cover flex-shrink-0 border border-gray-200 dark:border-gray-700"
                  />

                  <div className="flex-grow">
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {item.organization}
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center flex-shrink-0">
                          <FaCalendarAlt className="mr-1" /> {item.date}
                        </div>
                      </div>
                      <div className="flex justify-between items-center">
                        <p className="text-base text-gray-600 dark:text-gray-300">
                          {item.role}
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
