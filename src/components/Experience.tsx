'use client'

import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const experienceData = [
  {
    id: 1,
    company: "Roblox",
    title: "Freelance Game Developer",
    date: "Dec. 2017 - May 2024",
    location: "Remote",
    description: "Developed an interactive game with over 1.3 million users at a 76% satisfaction rate.",
    logo: "/roblox_logo.png", // Replace with actual path
  },

  {
    id: 2,
    company: "Florida International University",
    title: "Instructional Design Intern",
    date: "Jul. 2022 - Aug. 2022",
    location: "Miami, FL",
    description: "Created H5P framework-based interactive projects with accessible standards for university courses", 
    logo: "/fiu_logo.jpg", // Replace with actual path
  },
  // Add more experience entries here
];

export default function Experience() {
  return (
    <main className="w-full mt-2 mb-8 bg-muted/10 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Bordered area around experience items */}
          <div className="w-full p-8 rounded-2xl border-4 border-blue-600/10 dark:border-blue-600/20 shadow-lg bg-white dark:bg-gray-800">
            <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-600">
              Experience
            </h1>
            <div className="space-y-8">
              {experienceData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-4 p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-600/10 hover:border-blue-600/30 dark:hover:border-blue-600/30 group cursor-pointer"
                >
                  {/* Logo */}
                  <Image
                    src={item.logo}
                    alt={`${item.company} logo`}
                    width={64}
                    height={64}
                    className="rounded-full object-cover flex-shrink-0 border border-gray-200 dark:border-gray-700"
                  />

                  <div className="flex-grow">
                    {/* Container for Company, Date, Role, and Location in two rows */}
                    <div className="mb-4">
                      {/* First Row: Company and Date */}
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {item.company}
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center flex-shrink-0">
                           <FaCalendarAlt className="mr-1" /> {item.date}
                        </div>
                      </div>
                      {/* Second Row: Role and Location */}
                      <div className="flex justify-between items-center">
                        <p className="text-base text-gray-600 dark:text-gray-300">
                          {item.title}
                        </p>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center flex-shrink-0">
                           <FaMapMarkerAlt className="mr-1" /> {item.location}
                        </div>
                      </div>
                    </div>

                    {/* Description - always visible */}
                    {/* Adjusted margin top for spacing below the details block */}
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
