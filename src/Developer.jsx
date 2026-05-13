import {
  FaGithub,
  FaLinkedinIn,
  FaBehance,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaWordpress,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import {
  TbBrandAdobePhotoshop,
  TbBrandAdobeIllustrator,
} from "react-icons/tb";

import { HiOutlineColorSwatch } from "react-icons/hi";

export default function App() {
  const skills = [
    {
      icon: <FaReact />,
      name: "React",
    },

    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },

    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },

    {
      icon: <FaNodeJs />,
      name: "Node.js",
    },

    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },

    {
      icon: <FaFigma />,
      name: "Figma",
    },

    {
      icon: <TbBrandAdobePhotoshop />,
      name: "Photoshop",
    },

    {
      icon: <TbBrandAdobeIllustrator />,
      name: "Illustrator",
    },

    {
      icon: <FaWordpress />,
      name: "WordPress",
    },
  ];

  const projects = [
    {
      title: "RSCOOP15",
      category: "UI • Institucional",

      description:
        "Projeto de identidade visual moderna com foco em presença digital e comunicação sofisticada.",

      image: "/projects/rscoop15.webp",

      link:
        "https://www.behance.net/gallery/222592133/RSCOOP15",
    },

    {
      title: "Instituto Abilio Pontes",
      category: "UI • Social",

      description:
        "Desenvolvimento visual institucional com foco em impacto social e comunicação humanizada.",

      image: "/projects/abilio-pontes.webp",

      link:
        "https://www.behance.net/gallery/222583439/Instituto-Abilio-Pontes",
    },

    {
      title: "ASBENFAM",
      category: "UI • Social",

      description:
        "Projeto visual focado em organização social com identidade moderna e acessível.",

      image: "/projects/asbenfam.webp",

      link:
        "https://www.behance.net/gallery/222583363/ASBENFAM",
    },

    {
      title: "Doce Mimos",
      category: "UI • E-Commerce • Joalheria",

      description:
        "E-Commerce com visual delicado e moderno.",

      image: "/projects/doce-mimos.webp",

      link:
        "https://www.behance.net/gallery/222582571/Doce-Mimos",
    },

    {
      title: "Família na Mesa",
      category: "UI • Social",

      description:
        "Projeto visual voltado para conexão familiar e comunicação acolhedora.",

      image: "/projects/familia-na-mesa.webp",

      link:
        "https://www.behance.net/gallery/222582551/Familia-na-Mesa",
    },

    {
      title: "Instituto Agrosolar",
      category: "UI • Institucional",

      description:
        "Identidade visual clean e tecnológica voltada para sustentabilidade e inovação.",

      image: "/projects/instituto-agrosolar.webp",

      link:
        "https://www.behance.net/gallery/222582179/Instituto-Agrosolar",
    },
  ];

  return (
    <div className="bg-[#07111f] text-[#ffffff] overflow-hidden">
      {/* BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* BLUE */}
        <div className="absolute top-[-200px] left-[-100px] w-[700px] h-[700px] bg-[#1559db]/20 rounded-full blur-3xl"></div>

        {/* GOLD */}
        <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-[#db9614]/10 rounded-full blur-3xl"></div>

        {/* GRID */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-[#07111f]/70 border-b border-white/5">
        <div className="max-w-[1500px] mx-auto px-8 h-24 flex items-center justify-between">
          {/* LOGO */}
          <h1 className="text-4xl font-black tracking-tight">
            Kaue
            <span className="text-[#1559db] terminal-dot">
              .
            </span>
          </h1>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-12">
            <a href="#inicio" className="text-white/70 hover:text-white transition">
              Início
            </a>

            <a href="#sobre" className="text-white/70 hover:text-white transition">
              Sobre
            </a>

            <a href="#skills" className="text-white/70 hover:text-white transition">
              Skills
            </a>

            <a href="#projetos" className="text-white/70 hover:text-white transition">
              Projetos
            </a>

            <a href="#contato" className="text-white/70 hover:text-white transition">
              Contato
            </a>
          </nav>

          {/* BUTTON */}
          <a
            href="/designer"
            target="_blank"
            rel="noopener noreferrer"
            className="
              hidden
              md:flex
              items-center
              justify-center
              w-14
              h-14
              rounded-full
              border
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:bg-[#1559db]
              hover:border-[#1559db]
              transition
              duration-300
              text-2xl
            "
          >
            <HiOutlineColorSwatch />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="min-h-screen pt-32 px-8 flex items-center overflow-hidden"
      >
        <div className="max-w-[1500px] mx-auto grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center w-full">
          {/* LEFT */}
          <div className="relative z-10">
            {/* SMALL TEXT */}
            <span className="text-[#db9614] uppercase tracking-[0.35em] text-sm font-semibold">
              Desenvolvedor Web & UI Designer
            </span>

            {/* TITLE */}
            <h2 className="mt-8 leading-[0.9]">
              <span className="block text-[80px] xl:text-[110px] font-black text-white">
                Criando
              </span>

              <span className="block text-[80px] xl:text-[110px] font-black text-[#1559db]">
                Experiências
              </span>
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 text-white/60 text-xl leading-relaxed max-w-[620px]">
              Desenvolvimento de aplicações modernas, interfaces premium e
              experiências digitais focadas em performance, design e usabilidade.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5 mt-14">
              <button className="px-10 py-5 rounded-full bg-[#1559db] hover:bg-[#0f47b3] transition text-lg font-medium shadow-2xl shadow-blue-500/20">
                Ver Projetos
              </button>

              <button className="px-10 py-5 rounded-full border border-white/10 hover:border-[#db9614] hover:text-[#db9614] transition text-lg font-medium">
                Sobre Mim
              </button>
            </div>

            {/* SOCIAL */}
            <div className="flex items-center gap-6 mt-16">
              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-[#1559db] transition">
                <FaGithub />
              </button>

              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-[#1559db] transition">
                <FaLinkedinIn />
              </button>

              <button className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-xl hover:bg-[#db9614] transition">
                <FaBehance />
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center lg:justify-end">
            {/* BLUE GLOW */}
            <div className="absolute w-[500px] h-[500px] bg-[#1559db]/20 rounded-full blur-3xl"></div>

            {/* GOLD GLOW */}
            <div className="absolute bottom-10 right-0 w-[180px] h-[180px] bg-[#db9614]/20 rounded-full blur-3xl"></div>

            {/* IMAGE CONTAINER */}
            <div className="relative">
              {/* BORDER */}
              <div className="absolute inset-0 border border-white/10 rounded-[40px] rotate-6 scale-[1.02]"></div>

              {/* IMAGE */}
              <div className="relative w-[480px] h-[580px] rounded-[40px] overflow-hidden border border-white/10 bg-[#0d1729]">
                <img
                  src="/kaue-2.jpeg"
                  alt="Kaue"
                  className="
                    w-full
                    h-full
                    object-cover
                    scale-[1.35]
                    -translate-y-20
                    object-[58%_10%]
                    group-hover:scale-[1.4]
                    transition
                    duration-700
                  "
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/10 to-transparent"></div>

                {/* INFO */}
                <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                  <span className="text-[#db9614] uppercase tracking-[0.3em] text-xs">
                    Desenvolvedor Full Stack
                  </span>

                  <h3 className="text-5xl font-black mt-3 leading-none">
                    Kaue Dartora
                  </h3>

                  <p className="text-white/60 mt-4 text-lg">
                    React • Next.js • UI/UX • Node.js
                  </p>
                </div>
              </div>

              {/* EXPERIENCE CARD */}
              <div
                className="
                  absolute
                  -right-10
                  top-20
                  bg-[#0d1729]/95
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  px-6
                  py-5
                  shadow-2xl
                  z-20
                  w-[200px]
                "
              >
                <span className="text-[#db9614] uppercase tracking-[0.3em] text-[10px]">
                  Experiência
                </span>

                <h3 className="text-4xl font-black mt-2">
                  5+
                </h3>

                <p className="text-white/60 mt-3 text-sm leading-relaxed">
                  Anos criando experiências digitais modernas
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-32 px-8 relative overflow-hidden">
        {/* GLOW */}
        <div className="absolute left-0 top-20 w-[400px] h-[400px] bg-[#1559db]/10 rounded-full blur-3xl"></div>

        <div className="max-w-[1500px] mx-auto">
          {/* TOP */}
          <div className="max-w-[900px]">
            <span className="text-[#db9614] uppercase tracking-[0.3em] text-sm font-semibold">
              Sobre Mim
            </span>

            <h2 className="text-6xl md:text-7xl font-black mt-8 leading-[1]">
              Desenvolvendo experiências digitais com design e performance.
            </h2>

            <p className="mt-10 text-white/60 text-xl leading-relaxed max-w-[800px]">
              Sou desenvolvedor web e designer focado na criação de interfaces
              modernas, experiências premium e aplicações escaláveis com foco
              em performance, estética e usabilidade.
            </p>
          </div>

          {/* GRID */}
          <div className="grid lg:grid-cols-3 gap-8 mt-24">
            {/* CARD 1 */}
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl hover:border-[#1559db] transition duration-500">
              <span className="text-[#db9614] uppercase tracking-[0.3em] text-xs">
                Experiência
              </span>

              <h3 className="text-7xl font-black mt-6 text-[#1559db]">
                5+
              </h3>

              <p className="text-white/60 text-lg leading-relaxed mt-6">
                Anos criando aplicações modernas, interfaces premium e soluções digitais.
              </p>
            </div>

            {/* CARD 2 */}
            <div className="bg-[#1559db] rounded-[40px] p-10 relative overflow-hidden">
              {/* BG */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1559db] to-[#0d1729] opacity-80"></div>

              <div className="relative z-10">
                <span className="text-[#db9614] uppercase tracking-[0.3em] text-xs">
                  Especialidades
                </span>

                <div className="mt-8 flex flex-wrap gap-4">
                  {[
                    "React",
                    "Next.js",
                    "UI/UX",
                    "Node.js",
                    "Figma",
                    "WordPress",
                    "TypeScript",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="px-5 py-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p className="text-white/70 text-lg leading-relaxed mt-10">
                  Desenvolvimento focado em experiências modernas, branding visual e interfaces escaláveis.
                </p>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-xl hover:border-[#db9614] transition duration-500">
              <span className="text-[#db9614] uppercase tracking-[0.3em] text-xs">
                Projetos
              </span>

              <h3 className="text-7xl font-black mt-6 text-[#db9614]">
                20+
              </h3>

              <p className="text-white/60 text-lg leading-relaxed mt-6">
                Projetos desenvolvidos para empresas, instituições e marcas digitais.
              </p>
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <div className="grid lg:grid-cols-2 gap-16 mt-24">
            <div>
              <h3 className="text-4xl font-black leading-tight">
                Experiência unindo desenvolvimento e design.
              </h3>
            </div>

            <div>
              <p className="text-white/60 text-lg leading-relaxed">
                Meu foco é criar experiências digitais visualmente fortes,
                modernas e intuitivas, combinando design estratégico com
                desenvolvimento de alta performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="py-32 px-8">
        <div className="max-w-[1500px] mx-auto">
          <span className="text-[#db9614] uppercase tracking-[0.3em] text-sm font-semibold">
            Skills
          </span>

          <h2 className="text-6xl font-black mt-8">
            Tecnologias & Ferramentas
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-10 hover:border-[#1559db] hover:-translate-y-2 transition duration-300 group backdrop-blur-xl"
              >
                <div className="text-6xl text-[#1559db] group-hover:text-[#db9614] transition duration-300">
                  {skill.icon}
                </div>

                <h3 className="text-3xl font-bold mt-8">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJETOS */}
      <section id="projetos" className="py-32 px-8">
        <div className="max-w-[1500px] mx-auto">
          <span className="text-[#db9614] uppercase tracking-[0.3em] text-sm font-semibold">
            Projetos
          </span>

          <h2 className="text-6xl font-black mt-8">
            Trabalhos em Destaque
          </h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-20">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:border-[#1559db] transition duration-500 backdrop-blur-xl"
              >
                {/* IMAGE */}
                <div className="relative h-[260px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07111f] via-[#07111f]/20 to-transparent"></div>

                  {/* CATEGORY */}
                  <div className="absolute top-5 left-5">
                    <span className="px-4 py-2 rounded-full bg-[#07111f]/80 backdrop-blur-xl border border-white/10 text-xs text-[#db9614] tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-7">
                  <h3 className="text-3xl font-black group-hover:text-[#1559db] transition leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-white/60 text-base leading-relaxed mt-5">
                    {project.description}
                  </p>

                  <div className="mt-8 flex items-center gap-3 text-[#db9614] font-semibold tracking-wide">
                    Ver Projeto

                    <span className="group-hover:translate-x-2 transition">
                      →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-32 px-8">
        <div className="max-w-[1100px] mx-auto text-center">
          <span className="text-[#db9614] uppercase tracking-[0.3em] text-sm font-semibold">
            Contato
          </span>

          <h2 className="text-7xl font-black mt-8 leading-tight">
            Vamos criar algo incrível juntos?
          </h2>

          <p className="text-white/60 text-xl leading-relaxed mt-10 max-w-[700px] mx-auto">
            Disponível para projetos freelance, desenvolvimento web,
            UI/UX Design e criação de experiências digitais modernas.
          </p>

          <button className="mt-14 px-12 py-6 rounded-full bg-[#1559db] hover:bg-[#0f47b3] transition text-xl font-semibold shadow-2xl shadow-blue-500/20">
            Entrar em Contato
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 py-10 px-8">
        <div className="max-w-[1500px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <h3 className="text-2xl font-black">
            Kaue
            <span className="text-[#1559db] terminal-dot">
              .
            </span>
          </h3>

          <p className="text-white/50">
            © 2026 Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-5 text-xl">
            <button className="hover:text-[#1559db] transition">
              <FaGithub />
            </button>

            <button className="hover:text-[#1559db] transition">
              <FaLinkedinIn />
            </button>

            <button className="hover:text-[#db9614] transition">
              <FaBehance />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}