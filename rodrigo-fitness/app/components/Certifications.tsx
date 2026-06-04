"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, GraduationCap, Dumbbell } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certificaciones" className="bg-[#030712] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="uppercase tracking-[4px] text-[#1164BC]">
            Formación Profesional
          </span>

          <h2 className="font-heading mt-4 text-5xl uppercase tracking-wide text-white md:text-6xl">
            Certificaciones Y Estudios
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Mi formación está enfocada en brindar herramientas actualizadas para
            ayudarte a alcanzar resultados físicos de forma segura, efectiva y
            sostenible.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "
          >
            <Award className="mb-6 text-[#4BA3FF]" size={36} />

            <h3 className="mb-3 text-2xl font-semibold text-white">
              Personal Trainer
            </h3>

            <p className="text-gray-400">
              Certificación profesional en entrenamiento físico y musculación
              orientada al desarrollo de programas personalizados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-8
              backdrop-blur-xl
            "
          >
            <Dumbbell className="mb-6 text-[#4BA3FF]" size={36} />

            <h3 className="mb-3 text-2xl font-semibold text-white">
              Entrenamiento Funcional
            </h3>

            <p className="text-gray-400">
              Formación especializada en movimientos funcionales,
              acondicionamiento físico y mejora del rendimiento general.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border
              border-[#1164BC]/20
              bg-[#1164BC]/5
              p-8
              backdrop-blur-xl
            "
          >
            <GraduationCap className="mb-6 text-[#4BA3FF]" size={36} />

            <h3 className="mb-3 text-2xl font-semibold text-white">
              Nutrición
            </h3>

            <p className="text-gray-400">
              Formación académica en Nutrición actualmente en curso,
              complementando el entrenamiento con un enfoque integral sobre
              hábitos y composición corporal.
            </p>
          </motion.div>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src="/certificado-personal-trainer.png"
              alt="Certificación Personal Trainer"
              width={1000}
              height={700}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-white/10"
          >
            <Image
              src="/certificado-funcional.png"
              alt="Certificación Entrenamiento Funcional"
              width={1000}
              height={700}
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
