"use client";

import { motion } from "framer-motion";
import { Dumbbell, Flame, HeartPulse, MessageCircle } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Pérdida de Grasa",
    description:
      "Planificación personalizada para reducir grasa corporal de forma sostenible sin perder masa muscular.",
  },
  {
    icon: Dumbbell,
    title: "Ganancia Muscular",
    description:
      "Programas diseñados para desarrollar masa muscular, mejorar el rendimiento y optimizar tu progreso.",
  },
  {
    icon: HeartPulse,
    title: "Hábitos Saludables",
    description:
      "Construcción de rutinas y hábitos que te permitan mantener resultados reales a largo plazo.",
  },
  {
    icon: MessageCircle,
    title: "Seguimiento Online",
    description:
      "Acompañamiento personalizado mediante mensajería y seguimiento continuo adaptado a tus objetivos.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-[#030712] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 text-center">
          <span className="uppercase tracking-[4px] text-[#1164BC]">
            Servicios
          </span>

          <h2 className="font-heading mt-4 text-5xl uppercase tracking-wide text-white md:text-6xl">
            Cómo Puedo Ayudarte
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Programas diseñados para ayudarte a alcanzar tus objetivos físicos
            mediante entrenamiento, hábitos saludables y seguimiento
            personalizado.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/5
                  p-8
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:border-[#1164BC]/40
                  hover:bg-white/[0.08]
                "
              >
                <div
                  className="
                    mb-6
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    bg-[#1164BC]/10
                  "
                >
                  <Icon size={28} className="text-[#4BA3FF]" />
                </div>

                <h3 className="mb-4 text-2xl font-semibold text-white">
                  {service.title}
                </h3>

                <p className="leading-relaxed text-gray-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
