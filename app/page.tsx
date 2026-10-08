"use client";

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <a
            href="#home"
            className="text-2xl font-extrabold tracking-wide text-blue-400"
          >
            WOYESA<span className="text-white">.</span>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden gap-7 text-sm font-medium text-gray-300 md:flex">
            <a href="#home" className="transition hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="transition hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="transition hover:text-blue-400">
              Skills
            </a>
            <a href="#projects" className="transition hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="transition hover:text-blue-400">
              Contact
            </a>
          </div>

          {/* LET'S TALK */}
          <a
            href="#contact"
            className="hidden rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold transition hover:bg-blue-600 md:block"
          >
            Let&apos;s Talk
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg border border-white/10 px-3 py-2 text-xl md:hidden"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="border-t border-white/10 bg-slate-950 px-6 py-5 md:hidden">
            <div className="flex flex-col gap-4 text-sm font-medium text-gray-300">
              <a
                href="#home"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-blue-400"
              >
                Home
              </a>

              <a
                href="#about"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-blue-400"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-blue-400"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-blue-400"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-blue-400"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* HERO / HOME */}
      <section
        id="home"
        className="relative overflow-hidden px-6 py-24 md:py-32"
      >
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div className="transition duration-500">
            <p className="mb-5 text-lg font-medium text-blue-400">
              👋 Baga Nagaan Dhuftan!
            </p>

            <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
              Ani <span className="text-blue-400">Woyesa</span>
              <br />
              <span className="text-white">Software Developer</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-gray-400">
              Web development fi programming barachaa jira.
              Technology fayyadamuun website fi application
              nama fayyadan ijaaruu nan jaalladha.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-full bg-blue-500 px-7 py-3 font-bold transition duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
              >
                🚀 Projects Koo
              </a>

              <a
                href="#about"
                className="rounded-full border border-gray-600 px-7 py-3 font-bold transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400 hover:shadow-lg hover:shadow-blue-500/20"
              >
                👨‍💻 Waa&apos;ee Koo
              </a>
            </div>

            {/* HERO SKILLS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400 hover:text-blue-400">
                Next.js
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400 hover:text-blue-400">
                Java
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300 transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:border-blue-400 hover:text-blue-400">
                JavaScript
              </span>
            </div>
          </div>

          {/* RIGHT - PROFILE */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute -inset-6 rounded-full bg-blue-500/20 blur-3xl" />

              <div className="relative w-80 rounded-[2rem] border border-white/10 bg-slate-900 p-8 text-center shadow-2xl transition duration-500 hover:-translate-y-2 hover:scale-105 hover:border-blue-500/40">
                <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-blue-500 shadow-xl shadow-blue-500/20">
                  <img
                    src="/profile.png"
                    alt="Woyesa Abdo"
                    className="h-full w-full object-cover transition duration-500 hover:scale-110 hover:rotate-2"
                  />
                </div>

                <h2 className="mt-7 text-2xl font-bold">
                  Woyesa Abdo
                </h2>

                <p className="mt-2 text-gray-400">
                  Software Engineering Student
                </p>

                <div className="mt-6 flex justify-center gap-3">
                  <span className="rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
                    Next.js
                  </span>

                  <span className="rounded-full bg-purple-500/10 px-4 py-2 text-sm text-purple-400">
                    Java
                  </span>
                </div>

                <div className="mt-6 text-sm text-gray-500">
                  🚀 Building the future with code
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-blue-400">WHO AM I?</p>

          <h2 className="text-4xl font-bold md:text-5xl">
            About Me
          </h2>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-gray-400">
            Ani Woyesa Abdo. Software Engineering fi web development
            irratti beekumsa koo guddisaa jira. HTML, CSS, JavaScript,
            Java fi Next.js barachaa jira. Kaayyoon koo technology
            fayyadamuun solutions nama fayyadan ijaaruu dha.
          </p>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-blue-400">WHAT I KNOW</p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Skills
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-5 md:grid-cols-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "Java",
              "Next.js",
              "Tailwind CSS",
              "Git",
              "GitHub",
            ].map((skill) => (
              <div
                key={skill}
                className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-center font-semibold transition duration-300 hover:-translate-y-2 hover:border-blue-500 hover:text-blue-400"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-slate-900 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-blue-400">MY WORK</p>

          <h2 className="text-4xl font-bold md:text-5xl">
            My Projects
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* PROJECT 01 */}
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-blue-500">
              <p className="text-sm text-blue-400">PROJECT 01</p>

              <h3 className="mt-3 text-2xl font-bold">
                Woyu App
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Next.js fayyadamuun application web ijaarame.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://woyesa-1e6a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-500"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/woyesaabdo63-ai/woyesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-blue-500 px-5 py-2 text-sm text-blue-400 transition hover:bg-blue-500 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* PROJECT 02 */}
            <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-purple-500">
              <p className="text-sm text-purple-400">PROJECT 02</p>

              <h3 className="mt-3 text-2xl font-bold">
                Portfolio Website
              </h3>

              <p className="mt-4 leading-7 text-gray-400">
                Website kun waa&apos;ee koo, skills koo fi projects
                koo agarsiisa.
              </p>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://woyesa-1e6a.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-purple-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-purple-500"
                >
                  Live Demo
                </a>

                <a
                  href="https://github.com/woyesaabdo63-ai/woyesa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-purple-500 px-5 py-2 text-sm text-purple-400 transition hover:bg-purple-500 hover:text-white"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-blue-400">GET IN TOUCH</p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Contact Me
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Waa&apos;ee project, collaboration ykn coding irratti
            na qunnamuu yoo barbaadde, karaa armaan gadiitiin na qunnami.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-5">
            {/* EMAIL */}
            <a
              href="mailto:woyesaabdo63@gmail.com"
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <p className="text-sm text-blue-400">EMAIL</p>

              <p className="mt-3 break-words font-semibold">
                woyesaabdo63@gmail.com
              </p>
            </a>

            {/* TELEGRAM */}
            <a
              href="https://t.me/woyesaAi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <p className="text-sm text-blue-400">TELEGRAM</p>

              <p className="mt-3 font-semibold">
                @woyesaAi
              </p>
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/woyesaabdo63-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <p className="text-sm text-blue-400">GITHUB</p>

              <p className="mt-3 font-semibold">
                woyesaabdo63-ai
              </p>
            </a>

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/100070993058443/posts/1113985064311252/?app=fbl"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-blue-500"
            >
              <p className="text-sm text-blue-400">FACEBOOK</p>

              <p className="mt-3 font-semibold">
                Facebook
              </p>
            </a>

            {/* TIKTOK */}
            <a
              href="https://vm.tiktok.com/ZS9DmXRpcJQua-a8Mux/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/10 bg-slate-900 p-6 transition duration-300 hover:-translate-y-2 hover:border-pink-500"
            >
              <p className="text-sm text-pink-400">TIKTOK</p>

              <p className="mt-3 font-semibold">
                TikTok
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500">
        © 2026 Woyesa Abdo. Built with Next.js.
      </footer>
    </main>
  );
}