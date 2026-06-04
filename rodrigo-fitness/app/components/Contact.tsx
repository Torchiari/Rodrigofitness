"use client";

import { motion } from "framer-motion";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contacto" className="bg-black py-32">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="uppercase tracking-[4px] text-[#1164BC]">
            Contacto
          </span>

          <h2 className="font-heading mt-4 text-5xl uppercase tracking-wide text-white md:text-6xl">
            Empezá Tu Cambio Hoy
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Si querés mejorar tu físico, crear hábitos saludables o recibir
            asesoramiento personalizado, podés contactarme por cualquiera de
            estos medios.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <a
            href="https://wa.me/549XXXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
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
            <FaWhatsapp size={40} className="mx-auto mb-4 text-[#4BA3FF]" />

            <h3 className="text-xl font-semibold text-white">WhatsApp</h3>

            <p className="mt-2 text-gray-400">
              Consultas y asesoramiento personalizado.
            </p>
          </a>

          <a
            href="https://instagram.com/TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
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
            <FaInstagram size={40} className="mx-auto mb-4 text-[#4BA3FF]" />

            <h3 className="text-xl font-semibold text-white">Instagram</h3>

            <p className="mt-2 text-gray-400">
              Seguime y conocé más sobre mi trabajo.
            </p>
          </a>

          <a
            href="https://tiktok.com/@TU_USUARIO"
            target="_blank"
            rel="noopener noreferrer"
            className="
              group
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
            <FaTiktok size={40} className="mx-auto mb-4 text-[#4BA3FF]" />

            <h3 className="text-xl font-semibold text-white">TikTok</h3>

            <p className="mt-2 text-gray-400">
              Tips, entrenamientos y contenido fitness.
            </p>
          </a>

          <a
            href="mailto:correo@ejemplo.com"
            className="
              group
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
            <Mail size={40} className="mx-auto mb-4 text-[#4BA3FF]" />

            <h3 className="text-xl font-semibold text-white">Email</h3>

            <p className="mt-2 text-gray-400">
              Consultas comerciales y asesoramiento.
            </p>
          </a>
        </div>
      </div>
    </section>
  );
}
