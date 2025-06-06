'use client'

import Image from "next/image";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";

const involvementData = [
  {
    id: 7,
    organization: "Emory Computer Science Club",
    role: "Co-President",
    date: "Aug. 2023 - Present",
    location: "Emory University",
    description: "Organize and lead weekly meetings, coordinate speaker events and hackathons, and facilitate collaboration between members interested in computer science research, industry, and career development.",
    logo: "/csclub_logo.png", // Replace with actual path
  },
  {
    id: 6,
    organization: "ColorStack Emory",
    role: "Member",
    date: "Nov. 2024 - Present",
    location: "Emory University",
    description: "Participate in initiatives supporting underrepresented students in tech through networking events, technical workshops, and community-building activities.",
    logo: "/colorstack_logo.jpg", // Replace with actual path
  },
  {
    id: 5,
    organization: "Project Emory",
    role: "Member",
    date: "Sep. 2024 - Present",
    location: "Emory University",
    description: "Engage in interdisciplinary projects focused on social good, collaborating with peers on software development and design solutions for nonprofit and community partners.",
    logo: "/pe_logo.png", // Replace with actual path
  },
  {
    id: 4,
    organization: "Emory Programming Club",
    role: "Member",
    date: "Sep. 2024 - Present",
    location: "Emory University",
    description: "Attend coding workshops and collaborative coding challenges, with a focus on improving technical proficiency and preparing for competitive programming and technical interviews.",
    logo: "/epc_logo2.png", // Replace with actual path
  },
  {
    id: 3,
    organization: "National Honor Society",
    role: "President",
    date: "Aug. 2022 - Jun. 2023",
    location: "Southwest Miami Senior High School",
    description: "Led a team of student officers, organized community service events, and oversaw membership requirements while promoting academic excellence and civic responsibility.",
    logo: "/nhs_logo2.png", // Replace with actual path
  },
  {
    id: 2,
    organization: "Mu Alpha Theta",
    role: "Vice President",
    date: "Aug. 2021 - Jun. 2023",
    location: "Southwest Miami Senior High School",
    description: "Helped coordinate math competitions and tutoring sessions, fostered a collaborative learning environment, and supported the chapter’s organizational initiatives.",
    logo: "/mao_logo.png", // Replace with actual path
  },
  {
    id: 1,
    organization: "Westwood Veterinary Clinic",
    role: "Volunteer",
    date: "May 2021 - May 2023",
    location: "Miami, FL",
    description: "Assisted veterinarians with basic animal care tasks, maintained clean and safe workspaces, and helped ensure smooth day-to-day clinic operations.",
    logo: "/vet_logo1.png", // Replace with actual path
  },
  // Add more involvement entries here
];

export default function Involvement() {
  return (
    <main className="w-full mt-2 mb-8 bg-muted/10 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Bordered area around involvement items */}
          <div className="w-full p-8 rounded-2xl border-4 border-blue-600/10 dark:border-blue-600/20 shadow-lg bg-white dark:bg-gray-800">
            <h1 className="text-4xl font-extrabold mb-12 text-center text-blue-600">
              Involvement
            </h1>
            <div className="space-y-8">
              {involvementData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start space-x-4 p-5 rounded-2xl shadow-md bg-white dark:bg-gray-800 relative transition-all duration-300 hover:scale-105 hover:shadow-xl border-4 border-blue-600/10 hover:border-blue-600/30 dark:hover:border-blue-600/30 group cursor-pointer"
                >
                  {/* Logo */}
                  <Image
                    src={item.logo}
                    alt={`${item.organization} logo`}
                    width={64}
                    height={64}
                    className="rounded-full object-cover flex-shrink-0 border border-gray-200 dark:border-gray-700"
                  />

                  <div className="flex-grow">
                    {/* Container for Organization, Date, Role, and Location in two rows */}
                    <div className="mb-4">
                      {/* First Row: Organization and Date */}
                      <div className="flex justify-between items-center mb-1">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {item.organization}
                        </h3>
                        <div className="text-sm text-gray-600 dark:text-gray-300 flex items-center flex-shrink-0">
                           <FaCalendarAlt className="mr-1" /> {item.date}
                        </div>
                      </div>
                      {/* Second Row: Role and Location */}
                      <div className="flex justify-between items-center">
                        <p className="text-base text-gray-600 dark:text-gray-300">
                          {item.role}
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
