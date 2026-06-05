"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Dumbbell,
  Flame,
  HeartPulse,
  MessageCircle,
  ChevronDown,
  TrendingUp,
  Utensils,
  Target,
} from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Pérdida de Grasa",
    subtitle: "Definite y Mejora tu Composición",
    shortDesc: "Planificación personalizada para reducir grasa corporal",
    fullDescription:
      "Diseño de planes nutricionales y entrenamientos específicos para maximizar la pérdida de grasa sin perder masa muscular. Incluye seguimiento semanal, ajustes de macros y coaching continuo.",
    highlights: [
      "Planes de déficit calórico personalizado",
      "Seguimiento de composición corporal",
      "Coaching nutricional semanal",
      "Adaptación continua según resultados",
    ],
    color: "#FF6B6B",
  },
  {
    icon: Dumbbell,
    title: "Ganancia Muscular",
    subtitle: "Construye el Cuerpo que Deseas",
    shortDesc: "Programas diseñados para desarrollar masa muscular",
    fullDescription:
      "Entrenamientos avanzados con progresión de carga, nutrición enfocada en anabolismo y suplementación estratégica. Perfecto para quienes buscan ganar volumen muscular de calidad.",
    highlights: [
      "Programas de periodización",
      "Progresión de carga estructurada",
      "Planes de nutrición hipercalóricos",
      "Seguimiento de fuerza y volumen",
    ],
    color: "#4BA3FF",
  },
  {
    icon: HeartPulse,
    title: "Hábitos Saludables",
    subtitle: "Cambios que Duran Toda la Vida",
    shortDesc: "Construcción de rutinas sostenibles a largo plazo",
    fullDescription:
      "Transformación integral de tu estilo de vida. No solo buscamos resultados rápidos, sino crear hábitos que se mantengan para siempre. Educación, seguimiento y motivación constante.",
    highlights: [
      "Planificación de hábitos del 80/20",
      "Educación nutricional completa",
      "Estrategias anti-recaída",
      "Seguimiento motivacional diario",
    ],
    color: "#51CF66",
  },
  {
    icon: MessageCircle,
    title: "Seguimiento Online",
    subtitle: "Entrenador en tu Bolsillo",
    shortDesc: "Acompañamiento personalizado 24/7",
    fullDescription:
      "Acceso directo conmigo mediante WhatsApp, seguimiento de entrenamientos en tiempo real, ajustes rápidos y motivación diaria. Tu coach siempre disponible cuando lo necesites.",
    highlights: [
      "Respuestas en menos de 24hs",
      "Ajustes de entrenamientos en vivo",
      "Videos explicativos personalizados",
      "Soporte emocional y motivacional",
    ],
    color: "#FFD93D",
  },
];

export default function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="servicios"
      className="relative bg-[#030712] py-20 md:py-32 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-80 h-80 bg-[#1164BC]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 bg-[#1164BC]/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:mb-20 text-center"
        >
          <span className="uppercase tracking-[4px] text-[#4BA3FF] text-xs md:text-sm font-bold">
            Servicios
          </span>

          <h2 className="font-heading mt-4 text-4xl sm:text-5xl md:text-6xl uppercase tracking-wide text-white leading-tight">
            Cómo Puedo{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1164BC] to-[#4BA3FF]">
              Ayudarte
            </span>
          </h2>

          <p className="mx-auto mt-4 md:mt-6 max-w-3xl text-sm md:text-lg text-gray-300">
            Programas diseñados y personalizados para ayudarte a alcanzar tus
            objetivos físicos mediante entrenamiento de calidad, hábitos
            saludables y seguimiento continuo.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-2 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-start"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group"
              >
                <motion.button
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                  whileTap={{ scale: 0.98 }}
                  className={`
  relative w-full rounded-2xl border transition-all duration-300
  ${
    isExpanded
      ? "border-[#1164BC]/50 bg-gradient-to-br from-[#1164BC]/15 to-[#1164BC]/5 ring-2 ring-[#1164BC]/30"
      : "border-white/10 bg-white/5 hover:border-[#1164BC]/30 hover:bg-white/[0.08]"
  }
  backdrop-blur-xl p-4 md:p-6 text-left overflow-hidden
`}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent group-hover:translate-x-full transition-all duration-500 pointer-events-none"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-2 flex h-9 w-9 md:h-12 md:w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1164BC]/30 to-[#1164BC]/10 group-hover:from-[#1164BC]/40 group-hover:to-[#1164BC]/20 transition-all">
                      <Icon size={18} className="text-[#4BA3FF]" />
                    </div>

                    <h3 className="mb-1 text-lg md:text-xl font-bold text-white group-hover:text-[#4BA3FF] transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-xs font-semibold text-[#4BA3FF] mb-3 uppercase tracking-wider">
                      {service.subtitle}
                    </p>

                    <p className="text-xs md:text-sm leading-relaxed text-gray-300 mb-2">
                      {service.shortDesc}
                    </p>

                    {/* Expand indicator */}
                    <div className="flex items-center justify-between mt-2 pt-2 md:mt-4 md:pt-4 border-t border-white/10">
                      <span className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
                        {isExpanded ? "Menos detalles" : "Ver más"}
                      </span>
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={16} className="text-[#4BA3FF]" />
                      </motion.div>
                    </div>

                    {/* Expanded content */}
                    <motion.div
                      initial={false}
                      animate={{
                        opacity: isExpanded ? 1 : 0,
                        height: isExpanded ? "auto" : 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-[#1164BC]/20">
                        <p className="text-sm text-gray-300 mb-4">
                          {service.fullDescription}
                        </p>
                        <ul className="space-y-2">
                          {service.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#4BA3FF] font-bold mt-0.5">
                                ✓
                              </span>
                              <span className="text-sm text-gray-300">
                                {highlight}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </div>
                </motion.button>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 rounded-3xl border border-[#1164BC]/20 bg-gradient-to-r from-[#1164BC]/10 via-[#1164BC]/5 to-transparent p-6 md:p-8 backdrop-blur-md"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-5 md:mb-6">
            ¿Qué Obtenés con Cada Servicio?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="flex gap-3">
              <TrendingUp className="text-[#4BA3FF] flex-shrink-0" size={18} />
              <div>
                <p className="font-semibold text-white text-sm md:text-base">
                  Resultados Medibles
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  Seguimiento semanal de tu progreso
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Target className="text-[#4BA3FF] flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-white text-sm md:text-base">
                  Planes Personalizados
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  Diseñado según tus necesidades
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Utensils className="text-[#4BA3FF] flex-shrink-0" size={22} />
              <div>
                <p className="font-semibold text-white text-sm md:text-base">
                  Asesoramiento Nutricional
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  Guía completa en alimentación
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <MessageCircle
                className="text-[#4BA3FF] flex-shrink-0"
                size={22}
              />
              <div>
                <p className="font-semibold text-white text-sm md:text-base">
                  Soporte Continuo
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  Disponible cuando lo necesitás
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
