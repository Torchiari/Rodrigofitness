"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Juan Pérez",
    text: "Perdí 12kg en 4 meses y mejoré mi condición física.",
  },
  {
    name: "María González",
    text: "El seguimiento fue increíble y logré resultados que nunca había conseguido.",
  },
  {
    name: "Lucas Fernández",
    text: "Pasé de entrenar sin rumbo a tener un plan claro y efectivo.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-16 text-center text-5xl font-black text-white">
          Historias de Éxito
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
            >
              <p className="mb-6 text-gray-300">"{item.text}"</p>

              <h3 className="font-bold text-green-400">{item.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
