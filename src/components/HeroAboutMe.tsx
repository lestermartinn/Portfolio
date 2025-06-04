import Image from "next/image";

export default function HeroAbout() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 bg-white dark:bg-gray-900 pt-12">
      {/* Name at the top */}
      <h1 className="text-4xl md:text-5xl font-bold mb-10 text-center">Lester Martin</h1>

      {/* About Me Section */}
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        
        <div className="flex flex-col items-center">
          <Image
            src="/profile.jpeg"
            alt="Lester Martin"
            width={200}
            height={200}
            className="rounded-full shadow-lg mb-8"
          />
          
          <div className="max-w-2xl mb-8">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed text-left">
              Hi! I'm a third-year Computer Science and Economics student at Emory University,
              passionate about web development, machine learning, large language models (LLMs),
              and workflow automation. I enjoy solving real-world problems through code and am
              always eager to learn new technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="px-6 py-3 bg-black text-white text-sm rounded hover:bg-gray-800 transition">
              View Projects
            </a>
            <a href="#contact" className="px-6 py-3 text-sm border border-black dark:border-white rounded hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              Contact Me ↓
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}



