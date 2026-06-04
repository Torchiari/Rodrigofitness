"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-10 px-6 py-12 md:flex-row">
        <div>
          <Image
            src="/logo11.png"
            alt="Rodrigo Diaz"
            width={180}
            height={60}
            className="h-auto w-auto"
          />
        </div>

        <div className="max-w-lg text-center md:text-right">
          <p className="text-lg text-gray-300">
            Entrenamiento personalizado, seguimiento online y hábitos saludables
            para ayudarte a alcanzar tu mejor versión.
          </p>

          <p className="mt-3 text-sm uppercase tracking-[3px] text-[#4BA3FF]">
            Personal Trainer • Entrenador Funcional
          </p>
        </div>
      </div>

      <div className="border-t border-white/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 text-center md:flex-row">
          <p className="text-sm text-gray-500">
            © 2026 Rodrigo Díaz. Todos los derechos reservados.
          </p>

          <p className="text-sm text-gray-500">
            Diseñado y desarrollado por{" "}
            <a
              href="https://daneltorchiari.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4BA3FF] transition hover:text-white"
            >
              Danel Torchiari
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
