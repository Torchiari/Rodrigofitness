"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#030712] py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/about1.png"
            alt="Rodrigo Diaz"
            width={600}
            height={700}
            className="rounded-3xl object-cover shadow-[0_0_40px_rgba(17,100,188,0.25)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[4px] text-[#1164BC]">
            Sobre Mí
          </span>

          <h2 className="font-heading mt-4 text-5xl uppercase tracking-wide text-white md:text-6xl">
            Ayudo A Personas A Transformar Su Físico Y Sus Hábitos
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400">
            Soy Rodrigo Díaz, Personal Trainer y Profesor de Entrenamiento
            Funcional certificado. Actualmente me encuentro cursando la carrera
            de Nutrición para complementar mi formación y brindar un enfoque
            integral en la mejora de la composición corporal y la salud.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-400">
            Mi trabajo está orientado a ayudarte a perder grasa, ganar masa
            muscular y construir hábitos sostenibles mediante entrenamiento
            personalizado, educación nutricional y seguimiento constante.
          </p>

          {/* <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl transition-all duration-300 hover:border-[#1164BC]/40 hover:bg-white/[0.08]">
              ✔ Personal Trainer Certificado
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl transition-all duration-300 hover:border-[#1164BC]/40 hover:bg-white/[0.08]">
              ✔ Profesor de Entrenamiento Funcional
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl transition-all duration-300 hover:border-[#1164BC]/40 hover:bg-white/[0.08]">
              ✔ Formación Académica en Nutrición
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-xl transition-all duration-300 hover:border-[#1164BC]/40 hover:bg-white/[0.08]">
              ✔ Asesoramiento Online Personalizado
            </div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
}
