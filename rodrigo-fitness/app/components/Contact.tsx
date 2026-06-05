"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, MapPin, Send, Heart } from "lucide-react";

const contactChannels = [
  {
    icon: FaWhatsapp,
    title: "WhatsApp",
    description: "Consultas y asesoramiento personalizado",
    link: "https://wa.me/5492494381416",
    color: "#25D366",
    bgColor: "#25D366/10",
  },
  {
    icon: FaInstagram,
    title: "Instagram",
    description: "Seguime y conocé más sobre mi trabajo",
    link: "https://www.instagram.com/diaz_rodri1",
    color: "#E4405F",
    bgColor: "#E4405F/10",
  },
  {
    icon: FaTiktok,
    title: "TikTok",
    description: "Tips, entrenamientos y contenido fitness",
    link: "https://tiktok.com/@diaz_rodri1",
    color: "#000000",
    bgColor: "#000000/10",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Consultas comerciales y asesoramiento",
    link: "mailto:eldiaz1111@gmail.com",
    color: "#EA4335",
    bgColor: "#EA4335/10",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function Contact() {
  return (
    <section id="contacto" className="relative bg-black py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-40 w-80 h-80 bg-[#1164BC]/10 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-1/3 -right-40 w-80 h-80 bg-[#1164BC]/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="uppercase tracking-[4px] text-[#4BA3FF] text-sm font-bold">
            Contacto
          </span>

          <h2 className="font-heading mt-4 text-5xl uppercase tracking-wide text-white md:text-6xl leading-tight">
            Empezá Tu Cambio{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1164BC] to-[#4BA3FF]">
              Hoy
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Si querés mejorar tu físico, crear hábitos saludables o recibir
            asesoramiento personalizado, podés contactarme por cualquiera de
            estos medios.{" "}
            <span className="text-[#4BA3FF] font-semibold">
              Estoy aquí para ayudarte.
            </span>
          </p>
        </motion.div>

        {/* Contact Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 mb-16"
        >
          {contactChannels.map((channel, index) => {
            const Icon = channel.icon;

            return (
              <motion.a
                key={channel.title}
                variants={itemVariants}
                href={channel.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 20px 40px rgba(17, 100, 188, 0.3)`,
                }}
                whileTap={{ scale: 0.98 }}
                className="
                  group relative rounded-2xl border border-white/10 bg-white/5
                  p-8 backdrop-blur-xl transition-all duration-300
                  hover:border-[#1164BC]/40 hover:bg-white/[0.08]
                  overflow-hidden
                "
              >
                {/* Shine effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-r from-transparent via-white to-transparent group-hover:translate-x-full transition-all duration-500 pointer-events-none"></div>

                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <motion.div className="mb-4 flex justify-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1164BC]/30 to-[#1164BC]/10 group-hover:from-[#1164BC]/40 group-hover:to-[#1164BC]/20 transition-all`}
                    >
                      <Icon size={32} className="text-[#4BA3FF]" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#4BA3FF] transition-colors">
                    {channel.title}
                  </h3>

                  <p className="mt-3 text-gray-400 text-sm">
                    {channel.description}
                  </p>

                  {/* CTA */}
                  <div className="mt-6 flex items-center justify-center gap-2 text-[#4BA3FF] text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Contactame</span>
                    <Send
                      size={16}
                      className="group-hover:translate-x-2 transition-transform"
                    />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Secondary Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[#1164BC]/20 bg-gradient-to-r from-[#1164BC]/10 via-[#1164BC]/5 to-transparent p-8 backdrop-blur-md mb-12"
        >
          <h3 className="text-xl font-bold text-white mb-6">
            Información de Contacto Rápida
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex gap-4 items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1164BC]/20">
                <Phone size={20} className="text-[#4BA3FF]" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Teléfono
                </p>
                <p className="text-white font-semibold">+54 9 2494 381416</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1164BC]/20">
                <Mail size={20} className="text-[#4BA3FF]" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Email
                </p>
                <p className="text-white font-semibold">eldiaz1111@gmail.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1164BC]/20">
                <MapPin size={20} className="text-[#4BA3FF]" />
              </div>
              <div className="text-left">
                <p className="text-xs uppercase tracking-widest text-gray-400">
                  Ubicación
                </p>
                <p className="text-white font-semibold">
                  Buenos Aires, Argentina
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl border-2 border-[#1164BC] bg-gradient-to-r from-[#1164BC]/15 to-transparent p-8 backdrop-blur-md"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Heart size={20} className="text-[#FF6B6B]" />
            <p className="text-[#4BA3FF] text-sm font-bold uppercase tracking-widest">
              Próximo Paso
            </p>
          </div>
          <p className="text-xl md:text-2xl font-bold text-white mb-4">
            No esperes más, tu transformación comienza hoy
          </p>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Cada día que esperas es un día menos para alcanzar tus objetivos.
            Contactame ahora y descubre cómo puedo ayudarte a lograr el cuerpo y
            los hábitos que siempre quisiste.
          </p>
          <motion.a
            href="https://wa.me/5492494381416"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 50px rgba(17, 100, 188, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1164BC] to-[#0D4A8F] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest hover:shadow-lg transition-all"
          >
            <FaWhatsapp size={20} />
            Empezar Ahora
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
