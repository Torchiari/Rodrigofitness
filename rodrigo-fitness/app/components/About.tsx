"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, Zap, Users, Award } from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Certificado",
    description: "Personal Trainer & Entrenamiento Funcional",
  },
  {
    icon: Zap,
    title: "Resultados",
    description: "Transformaciones reales en 8-12 semanas",
  },
  {
    icon: Users,
    title: "+100 Clientes",
    description: "Transformaciones exitosas comprobadas",
  },
  {
    icon: CheckCircle2,
    title: "Integral",
    description: "Entrenamiento + Nutrición + Hábitos",
  },
];

export default function About() {
  return (
    <section
      id="sobre-mi"
      className="relative bg-[#030712] py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1164BC]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1164BC]/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 relative z-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#1164BC]/20 to-transparent rounded-3xl blur-2xl -z-10"></div>
          <Image
            src="/about1.png"
            alt="Rodrigo Diaz"
            width={600}
            height={700}
            className="rounded-3xl object-cover shadow-[0_0_60px_rgba(17,100,188,0.4)] border border-[#1164BC]/20"
          />

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -bottom-6 -right-6 bg-[#1164BC] text-white px-6 py-3 rounded-full font-bold shadow-lg border-4 border-[#030712]"
          >
            +10 Años Exp.
          </motion.div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[4px] text-[#4BA3FF] text-sm font-bold">
            Sobre Mí
          </span>

          <h2 className="font-heading mt-4 text-5xl uppercase tracking-wide text-white md:text-6xl leading-tight">
            Transformo Físicos Y{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1164BC] to-[#4BA3FF]">
              Construyo Hábitos
            </span>
          </h2>

          <p className="mt-8 text-lg leading-relaxed text-gray-300 font-light">
            Soy <span className="text-white font-semibold">Rodrigo Díaz</span>,
            Personal Trainer y Profesor de Entrenamiento Funcional certificado.
            Actualmente me encuentro cursando la carrera de Nutrición para
            complementar mi formación y brindar un enfoque integral en la mejora
            de la composición corporal y la salud.
          </p>

          <p className="mt-6 text-lg leading-relaxed text-gray-300 font-light">
            Mi propósito es ayudarte a{" "}
            <span className="text-white font-semibold">
              perder grasa, ganar masa muscular
            </span>{" "}
            y construir hábitos sostenibles mediante entrenamiento
            personalizado, educación nutricional y seguimiento constante.
          </p>

          {/* Highlights Grid */}
          <div className="mt-12 grid grid-cols-2 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(17, 100, 188, 0.2)",
                  }}
                  className="rounded-2xl border border-[#1164BC]/20 bg-gradient-to-br from-[#1164BC]/10 to-transparent p-4 backdrop-blur-md transition-all duration-300 hover:border-[#1164BC]/50"
                >
                  <div className="flex items-start gap-3">
                    <Icon
                      size={20}
                      className="text-[#4BA3FF] flex-shrink-0 mt-1"
                    />
                    <div>
                      <p className="text-white font-semibold text-sm">
                        {item.title}
                      </p>
                      <p className="text-gray-400 text-xs mt-1">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
