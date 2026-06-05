"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: "url('/hero1.png')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-[#030712]" />

      <motion.div
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 max-w-4xl px-6 text-center pt-24 md:pt-0"
      >
        <h1 className="font-heading mt-8 text-6xl leading-[0.9] tracking-wider text-white md:text-8xl">
          TRANSFORMÁ TU
          <span className="block bg-gradient-to-r from-[#1164BC] to-[#4BA3FF] bg-clip-text text-transparent">
            MEJOR VERSIÓN
          </span>
        </h1>

        <span className="inline-flex items-center rounded-full border border-[#1164BC]/30 bg-[#1164BC]/10 px-5 py-2 text-sm uppercase tracking-[3px] text-[#4BA3FF] backdrop-blur-xl">
          Personal Trainer • Entrenador Funcional
        </span>

        <div className="mt-8 text-center uppercase tracking-[2px]">
          <p className="mx-auto mt-8 max-w-2xl text-lg font-light tracking-[2px] uppercase text-gray-400 md:text-xl">
            <span className="block">Pérdida de grasa • Ganancia muscular</span>

            <span className="mt-2 block text-[#4BA3FF]">
              Hábitos saludables
            </span>
          </p>
        </div>
      </motion.div>
    </section>
  );
}
