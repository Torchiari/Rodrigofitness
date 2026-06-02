"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black/65" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl px-6 text-center"
      >
        <span className="rounded-full border border-[#CDAA54] px-4 py-2 text-sm uppercase tracking-widest text-[#CDAA54]">
          Entrenador Certificado
        </span>

        <h1 className="mt-8 text-5xl font-black text-white md:text-7xl">
          Transforma Tu
          <span className="block text-[#CDAA54]">Mejor Versión</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
          Planes personalizados, entrenamiento online, asesoramiento nutricional
          y seguimiento profesional para lograr resultados reales.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 md:flex-row">
          <button className="rounded-full bg-[#CDAA54] px-8 py-4 font-bold text-black transition hover:scale-105">
            Comenzar Ahora
          </button>

          <button className="rounded-full border border-white/30 px-8 py-4 text-white backdrop-blur-md transition hover:bg-white/10">
            Ver Planes
          </button>
        </div>
      </motion.div>
    </section>
  );
}
