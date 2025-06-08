import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function HeroAbout() {
  return (
    <section className="w-full px-2 mt-2 mb-8 bg-muted/10 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto w-full p-4 md:p-8 rounded-2xl border-4 border-blue-700/10 dark:border-blue-700/20 shadow-lg bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center">
          <Image
            src="/github_picture.jpeg"
            alt="Lester Martin"
            width={200}
            height={200}
            className="rounded-full shadow-lg mb-4 border-2 border-blue-700/20 w-32 h-32 md:w-48 md:h-48"
          />
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-center text-blue-700">Lester Martin</h1>
          
          <div className="max-w-2xl mb-6 px-4">
            <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Hey! I'm a third-year Computer Science and Economics student at Emory University,
              passionate about software engineering. My interests lie in web and game development, 
              machine learning, large language models (LLMs), and workflow automation. I enjoy solving 
              real-world problems through code and am always eager to learn new technologies.
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/lestermartinn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full p-2 md:p-3 transition shadow"
            >
              <FaLinkedin size={24} className="md:w-7 md:h-7" />
            </a>
            <a
              href="https://github.com/lestermartinn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full p-2 md:p-3 transition shadow"
            >
              <FaGithub size={24} className="md:w-7 md:h-7" />
            </a>
            <a
              href="mailto:lestermartingonz@gmail.com"
              aria-label="Email"
              className="text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-full p-2 md:p-3 transition shadow"
            >
              <MdEmail size={24} className="md:w-7 md:h-7" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



