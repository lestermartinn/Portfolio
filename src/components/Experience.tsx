'use client'

import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experienceData = [

  // add more experiences here

  {
    id: 1,
    company: "Emory University",
    title: "Computer Science Lab Representative",
    date: "Sep. 2025 - Present",
    location: "Atlanta, GA",
    description: "Provided academic support to 100+ undergraduates during lab sessions and office hours, assisting with debugging, algorithms, and software development. Collaborated with faculty to prepare lab materials and streamline weekly sessions, improving efficiency and student outcomes. Guided students in core programming tools and best practices, fostering stronger technical skills and assignment success.",
    logo: "/emory_logo.png",
  },

  {
    id: 2,
    company: "Roblox",
    title: "Founder & Lead Game Developer",
    date: "Dec. 2017 - May 2024",
    location: "Remote",
    description: "Developed and published a highly interactive game that attracted over 1.3 million users, achieving a 76% satisfaction rate. Monetized gameplay through in-game purchases, generating over $10,000 in revenue from 1,000+ sales. Led the full game development lifecycle, including 3D modeling, texturing, animation, and user experience design.",
    logo: "/roblox_logo.png",
  },

  {
    id: 3,
    company: "Florida International University",
    title: "Instructional Design Intern",
    date: "Jul. 2022 - Aug. 2022",
    location: "Miami, FL",
    description: "Designed interactive course materials using the H5P framework, aligning with accessibility standards to ensure inclusivity for diverse learners. Integrated multimedia components—graphics, audio, and video—to enhance engagement and retention. Collaborated with faculty to implement best practices in instructional design.",
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
