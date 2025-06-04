// src/components/AboutMe.tsx

import Image from "next/image";

export default function AboutMe() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <Image
            src="/profile.png" // Place this in /public/profile.png
            alt="Lester Martin"
            width={250}
            height={250}
            className="rounded-full shadow-lg mb-6"
          />
        </div>
        {/* Bio Text */}
        <div>
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Hi! I am a third-year Computer Science and Economics student at Emory University, passionate about web development, machine learning, large language models (LLMs), and workflow automation. I enjoy solving real-world problems through code and am always eager to learn new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
