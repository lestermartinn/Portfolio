import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function HeroAbout() {
  return (
    <section className="w-full px-2 mt-2 mb-8">
      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto w-full p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-lg bg-white dark:bg-gray-800">
        <div className="flex flex-col items-center">
          {/* Profile picture now above name */}
          <Image
            src="/profile.jpeg"
            alt="Lester Martin"
            width={200}
            height={200}
            className="rounded-full shadow-lg mb-4"
          />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Lester Martin</h1>
          
          <div className="max-w-2xl mb-6">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">
              Hi! I'm a third-year Computer Science and Economics student at Emory University,
              passionate about web development, machine learning, large language models (LLMs),
              and workflow automation. I enjoy solving real-world problems through code and am
              always eager to learn new technologies.
            </p>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-4 mt-2">
            <a
              href="https://www.linkedin.com/in/lestermartinn/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-600 hover:text-blue-700 bg-gray-100 hover:bg-blue-100 rounded-full p-3 transition shadow"
            >
              <FaLinkedin size={28} />
            </a>
            <a
              href="https://github.com/lestermartinn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-gray-600 hover:text-black bg-gray-100 hover:bg-gray-200 rounded-full p-3 transition shadow"
            >
              <FaGithub size={28} />
            </a>
            <a
              href="mailto:lestermartingonz@gmail.com"
              aria-label="Email"
              className="text-gray-600 hover:text-red-600 bg-gray-100 hover:bg-red-100 rounded-full p-3 transition shadow"
            >
              <MdEmail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



