"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Award,
  GraduationCap,
  Dumbbell,
  Zap,
  CheckCircle2,
} from "lucide-react";

const certifications = [
  {
    icon: Award,
    title: "Personal Trainer",
    organization: "Certificación Profesional",
    description:
      "Certificación profesional en entrenamiento físico y musculación orientada al desarrollo de programas personalizados.",
    highlights: [
      "Programación de entrenamientos",
      "Evaluación física",
      "Nutrición básica",
    ],
    year: "2023",
  },
  {
    icon: Dumbbell,
    title: "Entrenamiento Funcional",
    organization: "Especialización Avanzada",
    description:
      "Formación especializada en movimientos funcionales, acondicionamiento físico y mejora del rendimiento general.",
    highlights: [
      "Movimientos complejos",
      "Prevención de lesiones",
      "Rendimiento deportivo",
    ],
    year: "2023",
  },
  {
    icon: GraduationCap,
    title: "Nutrición",
    organization: "En Curso",
    description:
      "Formación académica en Nutrición actualmente en curso, complementando el entrenamiento con un enfoque integral sobre hábitos y composición corporal.",
    highlights: [
      "Bioquímica nutricional",
      "Nutrición clínica",
      "Dietética deportiva",
    ],
    year: "2023",
  },
];

export default function Certifications() {
  return (
    <section
      id="certificaciones"
      className="relative bg-[#030712] py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-80 h-80 bg-[#1164BC]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-40 -left-40 w-80 h-80 bg-[#1164BC]/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <span className="uppercase tracking-[4px] text-[#4BA3FF] text-sm font-bold">
            Formación Profesional
          </span>

          <h2 className="font-heading mt-4 text-5xl uppercase tracking-wide text-white md:text-6xl leading-tight">
            Certificaciones Y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1164BC] to-[#4BA3FF]">
              Estudios
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300">
            Mi formación continua está enfocada en brindar herramientas
            actualizadas para ayudarte a alcanzar resultados físicos de forma
            segura, efectiva y sostenible.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;

            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="
                  group relative rounded-2xl border transition-all duration-300
                  border-[#1164BC]/20 bg-gradient-to-br from-[#1164BC]/10 to-transparent
                  p-8 backdrop-blur-md hover:border-[#1164BC]/50 hover:from-[#1164BC]/15
                "
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent group-hover:translate-x-full transition-all duration-500 pointer-events-none rounded-2xl"></div>

                <div className="relative z-10">
                  {/* Year Badge */}
                  <div className="absolute -top-3 -right-3 bg-[#1164BC] text-white px-3 py-1 rounded-full text-xs font-bold">
                    {cert.year}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1164BC]/30 to-[#1164BC]/10 group-hover:from-[#1164BC]/40 group-hover:to-[#1164BC]/20 transition-all">
                    <Icon size={28} className="text-[#4BA3FF]" />
                  </div>

                  {/* Title and Organization */}
                  <h3 className="mb-1 text-2xl font-bold text-white group-hover:text-[#4BA3FF] transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-xs uppercase tracking-widest text-[#4BA3FF] font-semibold mb-4">
                    {cert.organization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-[#1164BC]/20">
                    {cert.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <CheckCircle2
                          size={16}
                          className="text-[#4BA3FF] flex-shrink-0"
                        />
                        <span className="text-sm text-gray-300">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certificates Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Documentos Certificados
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-[#1164BC]/20 hover:border-[#1164BC]/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden bg-black">
                <Image
                  src="/certificado-personal-trainer.png"
                  alt="Certificación Personal Trainer"
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">
                    Certificación Personal Trainer
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-2xl border border-[#1164BC]/20 hover:border-[#1164BC]/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden bg-black">
                <Image
                  src="/certificado-funcional.png"
                  alt="Certificación Entrenamiento Funcional"
                  width={1000}
                  height={700}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold">
                    Certificación Entrenamiento Funcional
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Education Timeline / Stats */}
        {/* <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#1164BC]/20 bg-gradient-to-r from-[#1164BC]/10 to-transparent p-8 backdrop-blur-md"
        >
          <h3 className="text-2xl font-bold text-white mb-6">
            Compromiso con la Excelencia
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
              <Zap className="text-[#4BA3FF]" size={32} />
              <p className="text-2xl font-bold text-white">+10</p>
              <p className="text-sm text-gray-400 text-center">
                Años de Experiencia
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="text-[#4BA3FF]" size={32} />
              <p className="text-2xl font-bold text-white">3+</p>
              <p className="text-sm text-gray-400 text-center">
                Certificaciones Activas
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <GraduationCap className="text-[#4BA3FF]" size={32} />
              <p className="text-2xl font-bold text-white">∞</p>
              <p className="text-sm text-gray-400 text-center">
                Aprendizaje Continuo
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Dumbbell className="text-[#4BA3FF]" size={32} />
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-sm text-gray-400 text-center">
                Dedicación Total
              </p>
            </div>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
