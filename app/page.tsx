export default function Home() {
return ( <main className="min-h-screen bg-slate-950 text-white">
{/* NAVBAR */} <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur"> <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"> <a
         href="#home"
         className="text-2xl font-extrabold tracking-wide text-blue-400"
       >
WOYESA<span className="text-white">.</span> </a>
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

      <a
        href="#contact"
        className="rounded-full bg-blue-500 px-5 py-2 text-sm font-semibold transition hover:bg-blue-600"
      >
        Let&apos;s Talk
      </a>
    </div>
  </nav>

  {/* HERO */}
  <section
    id="home"
    className="relative overflow-hidden px-6 py-24 md:py-32"
  >
    <div className="absolute left-10 top-20 h-40 w-40 animate-pulse rounded-full bg-blue-500/10 blur-3xl" />

    <div className="absolute bottom-10 right-10 h-56 w-56 animate-pulse rounded-full bg-purple-500/10 blur-3xl" />

    <div className="relative mx-auto grid max-w-6xl items-center gap-14 md:grid-cols-2">
      <div className="animate-pulse">
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
            className="rounded-full bg-blue-500 px-7 py-3 font-bold transition duration-300 hover:-translate-y-2 hover:scale-105 hover:bg-blue-600"
          >
            🚀 Projects Koo
          </a>

          <a
            href="#about"
            className="rounded-full border border-gray-600 px-7 py-3 font-bold transition hover:-translate-y-1 hover:border-blue-400 hover:text-blue-400"
          >
            👨‍💻 Waa&apos;ee Koo
          </a>
        </div>
      </div>

      {/* PROFILE CARD */}
      <div className="flex justify-center">
       <div className="mx-auto h-40 w-40 overflow-hidden rounded-full border-4 border-blue-500 shadow-lg">
  <img
    src="/profile.png"
    alt="Woyesa Abdo"
    className="h-full w-full object-cover animate-pulse"

  />
</div>
        <div className="relative">
          <div className="absolute -inset-4 animate-pulse rounded-[2rem] bg-blue-500/20 blur-2xl" />

          <div className="relative w-72 rounded-[2rem] border border-white/10 bg-slate-900 p-8 text-center shadow-2xl  transition hover:-translate-y-2">

            <h2 className="mt-6 text-2xl font-bold">
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
            className="rounded-2xl border border-white/10 bg-slate-900 p-6 text-center font-semibold transition hover:-translate-y-2 hover:border-blue-500 hover:text-blue-400"
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
        <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-2 hover:border-blue-500">
          <p className="text-sm text-blue-400">PROJECT 01</p>

          <h3 className="mt-3 text-2xl font-bold">
            Woyu App
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            Next.js fayyadamuun application web ijaarame.
          </p>

          <button className="mt-6 rounded-full border border-blue-500 px-5 py-2 text-sm text-blue-400 transition hover:bg-blue-500 hover:text-white">
            View Project →
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-950 p-7 transition hover:-translate-y-2 hover:border-purple-500">
          <p className="text-sm text-purple-400">PROJECT 02</p>

          <h3 className="mt-3 text-2xl font-bold">
            Portfolio Website
          </h3>

          <p className="mt-4 leading-7 text-gray-400">
            Website kun waa&apos;ee koo, skills koo fi projects
            koo agarsiisa.
          </p>

          <button className="mt-6 rounded-full border border-purple-500 px-5 py-2 text-sm text-purple-400 transition hover:bg-purple-500 hover:text-white">
            View Project →
          </button>
        </div>
      </div>
    </div>
  </section>

  {/* CONTACT */}
  <section id="contact" className="px-6 py-24 text-center">
    <p className="mb-3 text-blue-400">GET IN TOUCH</p>
    <p className="mb-3 text-blue-400">GET IN TOUCH</p>
   <div className="mt-8 flex justify-center gap-4">
  <a
    href="https://facebook.com/100070993058443/posts/1113985064311252?app=fbl"
    className="rounded-full border border-blue-500 px-5 py-3 text-blue-400 transition hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
  >
    Facebook
  </a>

  <a
    href="https://t.me/woyesaAi"
    className="rounded-full border border-blue-500 px-5 py-3 text-blue-400 transition hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
  >
    Telegram
  </a>

  <a
    href="https://github.com/woyesaabdo63-ai"
    className="rounded-full border border-blue-500 px-5 py-3 text-blue-400 transition hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
  >
    GitHub
  </a>

  <a
    href="https://vm.tiktok.com/ZS9DmXRpcJQua-a8Mux"
    className="rounded-full border border-blue-500 px-5 py-3 text-blue-400 transition hover:-translate-y-1 hover:bg-blue-500 hover:text-white"
  >
    TikTok
  </a>
</div>
    <h2 className="text-4xl font-bold md:text-5xl">
      Let&apos;s Work Together
    </h2>

    <p className="mx-auto mt-6 max-w-xl text-gray-400">
      Project tokko waliin hojjechuu ykn waa&apos;ee programming
      dubbachuu yoo barbaadde, na qunnami.
    </p>

    <a
      href="mailto:woyesaabdo63@gmail.com"
      className="mt-8 inline-block rounded-full bg-blue-500 px-8 py-3 font-bold transition hover:bg-blue-600"
    >
      📧 Contact Me
    </a>
  </section>

  {/* FOOTER */}
  <footer className="border-t border-white/10 py-8 text-center text-gray-500">
    © 2026 Woyesa Abdo. Built with Next.js.
  </footer>
</main>

);
}
