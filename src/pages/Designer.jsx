import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import {
  Palette,
  Image,
  Monitor,
  Trophy,
  ArrowRight,
} from "lucide-react";

const thumbnails = [
  {
    title: "Guilhy - VOD #3",
    image:
      `${import.meta.env.BASE_URL}projects/thumb-guili-1.png`,
  },
  {
    title: "Guilhy - VOD #5",
    image:
      `${import.meta.env.BASE_URL}projects/guili-2.png`,
  },
  {
    title: "Guilhy - VOD #6",
    image:
      `${import.meta.env.BASE_URL}projects/guili-3.png`,
  },
  {
    title: "Guilhy - VOD #7",
    image:
      `${import.meta.env.BASE_URL}projects/guili-4.png`,
  },
  {
    title: "Guilhy - Arknight Endfield - Solo, No Hit",
    image:
      `${import.meta.env.BASE_URL}projects/guili-5.png`,
  },
  {
    title: "GoodGuyAdel - Mano Truta's Adventures",
    image:
      `${import.meta.env.BASE_URL}projects/mano-truta-adventures1.jpg`,
  },
  {
    title: "GoodGuyAdel - Chun-li Combo Trials",
    image:
      `${import.meta.env.BASE_URL}projects/Chun-li-combo-trials.png`,
  },
  {
    title: "GoodGuyAdel - Resident Evil 4",
    image:
      `${import.meta.env.BASE_URL}projects/capa-re4.png`,
  },
  {
    title: "GoodGuyAdel - Resident Evil 5 Co-op",
    image:
      `${import.meta.env.BASE_URL}projects/Resident-Evil-5.png`,
  },

];

const overlays = [
  {
    title: "Arcade Intro + Ranking with StreamElements API",
    image:
      `${import.meta.env.BASE_URL}projects/0607(1).gif`,
  },
  {
    title: "Placar no TSH",
    image:
      `${import.meta.env.BASE_URL}projects/0607.gif`,
  },
];

const socials = [
  {
    title: "GoodGuyAdel - Twitch",
    image:
      `${import.meta.env.BASE_URL}projects/background-stream.png`,
  },
  {
    title: "Guilhy - Youtube",
    image:
      `${import.meta.env.BASE_URL}projects/guili-ytb.png`,
  },
  {
    title: "Augusto Rafael - Youtube",
    image:
      `${import.meta.env.BASE_URL}projects/augusto-canal-banner.png`,
  },
];

const flyers = [
  {
    title: "Guilhy - Tekken Tag 2 F7",
    image:
      `${import.meta.env.BASE_URL}projects/ft7.png`,
  },
  {
    title: "SolarFlash - Campanha de Indicação",
    image:
      `${import.meta.env.BASE_URL}projects/Solarflash - Campanha de Indicação.png`,
  },
  {
    title: "Diana - Costura",
    image:
      `${import.meta.env.BASE_URL}projects/Cópia de Costuras da Di (1).png`,
  },
];

const services = [
  {
    icon: Palette,
    title: "Logos & Branding",
    description:
      "Identidade visual para streamers, criadores de conteúdo e comunidades como a FGC.",
  },
  {
    icon: Monitor,
    title: "Overlays Twitch",
    description:
      "Starting Soon, BRB, Intermission, HUDs e layouts completos.",
  },
  {
    icon: Image,
    title: "Thumbnails",
    description:
      "Miniaturas focadas em CTR para YouTube, Shorts e Highlights.",
  },
  {
    icon: Trophy,
    title: "Flyers e Eventos",
    description:
      "Materiais para campeonatos, torneios e campanhas promocionais.",
  },
];

export default function DesignerPortfolio() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-white/5">
        <div className="max-w-[1500px] mx-auto px-8 h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/designer">
            <img
              src={`${import.meta.env.BASE_URL}projects/logo.png`}
              alt="Kaue"
              className="h-10 md:h-12 w-auto"
            />
          </Link>

          {/* MENU */}
          <nav className="hidden lg:flex items-center gap-12">
            <HashLink smooth to="#inicio"
              className="text-white/70 hover:text-[#0083E4] transition"
            >
              Início
            </HashLink>

            <HashLink smooth to="#servicos"
              className="text-white/70 hover:text-[#0083E4] transition"
            >
              Serviços
            </HashLink>

            <HashLink smooth to="#thumbnails"
              className="text-white/70 hover:text-[#0083E4] transition"
            >
              Thumbnails
            </HashLink>

            <HashLink smooth to="#overlays"
              className="text-white/70 hover:text-[#0083E4] transition"
            >
              Overlays
            </HashLink>

            <HashLink smooth to="#social-media"
              className="text-white/70 hover:text-[#0083E4] transition"
            >
              Capas
            </HashLink>

            <HashLink smooth to="#flyers"
              className="text-white/70 hover:text-[#0083E4] transition"
            >
              Flyers
            </HashLink>

            <HashLink smooth to="#contato"
              className="text-white/70 hover:text-[#0083E4] transition"
            >
              Contato
            </HashLink>
          </nav>

          {/* VOLTAR PARA DEV */}
          <Link
            to="/"
            className="
              flex
              items-center
              justify-center
              w-12
              h-12
              md:w-14
              md:h-14
              rounded-full
              border
              text-white
            hover:text-white
              border-white/10
              bg-white/5
              backdrop-blur-xl
              hover:bg-[#0083E4]
              hover:border-[#0083E4]
              transition
              duration-300
              text-xl
              md:text-2xl
            "
          >
            {"</>"}
          </Link>

        </div>
      </header>
      <main className="bg-black text-white min-h-screen overflow-hidden">
        {/* HERO */}
        <section id="inicio" className=" relative min-h-screen flex items-center justify-center px-5 md:px-6 overflow-hidden">

          <img
            src={`${import.meta.env.BASE_URL}projects/background-pasta.png`}
            alt=""
            className="
            absolute
            inset-0
            w-full
            h-full
            object-cover
          "
          />

          <div
            className="
            absolute
            inset-0
            bg-black/70
          "
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-b
            from-[#0083E4]/20
            via-black/30
            to-black
          "
          />

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-6xl mx-auto text-center z-10"
          >
            <span className="text-[#0083E4] uppercase tracking-[0.3em] text-sm">
              Design para Web
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black mt-6 leading-none">
              Adel's
              <br />
              <span className="text-[#0083E4]">Desing Hub</span>
            </h1>

            <p className="max-w-2xl mx-auto mt-6 text-zinc-400 text-base md:text-lg">
              Logos, overlays, thumbnails, banners e identidades visuais
              desenvolvidas para streamers, comunidades e projetos do universo
              gamer.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <HashLink smooth to="#thumbnails"
                className="
                  px-6 md:px-8 py-4
                  bg-[#0083E4]
                  hover:bg-[#0097ff]
                  transition
                  rounded-xl
                  font-bold
                  inline-flex
                  items-center
                "
              >
                Ver Trabalhos
              </HashLink>

              <HashLink smooth to="#contato"
                className="
                  px-6 md:px-8 py-4
                  border
                  border-zinc-700
                  hover:border-[#0083E4]
                  transition
                  rounded-xl
                  font-bold
                  inline-flex
                  items-center
                "
              >
                Entrar em Contato
              </HashLink>
            </div>
          </motion.div>
        </section>

        {/* SERVIÇOS */}
        <section id="servicos" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-12 md:mb-16">
              O que eu <span className="text-[#0083E4]">crio</span>
            </h2>

            <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-8"
                  >
                    <Icon size={40} className="text-[#0083E4] mb-5" />

                    <h3 className="font-bold text-xl mb-3">
                      {service.title}
                    </h3>

                    <p className="text-zinc-400">
                      {service.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* THUMBNAILS */}
        <section id="thumbnails" className="py-32 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Thumbnails
            </h2>

            <p className="text-zinc-400 mb-12">
              Miniaturas para YouTube, Twitch e Shorts.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {thumbnails.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-3xl bg-zinc-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[220px] md:h-[280px] object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* OVERLAYS */}
        <section id="overlays" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Overlays OBS
            </h2>

            <p className="text-zinc-400 mb-12">
              Layouts completos para transmissões.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              {overlays.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02 }}
                  className="overflow-hidden rounded-3xl bg-zinc-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="
                    w-full
                    aspect-video
                    object-cover
                  "
                  />

                  <div className="p-6">
                    <h3 className="font-bold text-xl md:text-2xl">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* REDES SOCIAIS */}
        <section id="social-media" className="py-32 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Capas para Redes Sociais
            </h2>

            <p className="text-zinc-400 mb-12">
              Twitch, YouTube, Discord e X.
            </p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {socials.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-3xl bg-zinc-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[250px] object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FLYERS */}
        <section id="flyers" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Flyers & Eventos
            </h2>

            <p className="text-zinc-400 mb-12">
              Divulgação de torneios, eventos e campeonatos.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {flyers.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="overflow-hidden rounded-3xl bg-zinc-900"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[350px] md:h-[500px] object-cover"
                  />

                  <div className="p-5">
                    <h3 className="font-bold">
                      {item.title}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESSO */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-black text-center mb-20">
              Processo Criativo
            </h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
              {[
                "Briefing",
                "Pesquisa",
                "Conceito",
                "Entrega",
              ].map((step, index) => (
                <div
                  key={index}
                  className="text-center border border-zinc-800 rounded-2xl p-6 md:p-8"
                >
                  <div className="text-[#0083E4] text-4xl md:text-5xl font-black mb-4">
                    0{index + 1}
                  </div>

                  <h3 className="font-bold text-xl">
                    {step}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contato" className="py-32 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Vamos criar algo
              <span className="text-[#0083E4]"> incrível?</span>
            </h2>

            <p className="text-zinc-400 mt-6 text-base md:text-lg">
              Disponível para projetos de branding, overlays, thumbnails,
              banners e identidades visuais para criadores de conteúdo.
            </p>

            <a
              href="https://wa.me/5551982623732"
              target="_blank"
              rel="noopener noreferrer"
              className="
                mt-10
                inline-flex
                items-center
                gap-3
                px-6 md:px-8 py-4
                bg-[#0083E4]
                rounded-xl
                font-bold
                hover:bg-[#0097ff]
                transition
              "
            >
              Entrar em Contato
              <ArrowRight size={20} />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}