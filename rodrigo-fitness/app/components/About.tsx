"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#030712] py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Image
            src="/about.jpg"
            alt="Coach"
            width={600}
            height={700}
            className="rounded-3xl object-cover shadow-[0_0_50px_rgba(0,255,136,0.2)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-green-400 uppercase tracking-[4px]">
            Sobre mí
          </span>

          <h2 className="mt-4 text-5xl font-black text-white">
            Más de 8 años ayudando a transformar vidas
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-400">
            Mi misión es ayudarte a construir un físico fuerte, saludable y
            sostenible mediante programas diseñados específicamente para tus
            objetivos.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-xl border border-white/10 p-4 text-white">
              ✔ Personal Trainer Certificado
            </div>

            <div className="rounded-xl border border-white/10 p-4 text-white">
              ✔ Coach Deportivo
            </div>

            <div className="rounded-xl border border-white/10 p-4 text-white">
              ✔ Nutrición Deportiva
            </div>

            <div className="rounded-xl border border-white/10 p-4 text-white">
              ✔ Preparación Física Avanzada
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
