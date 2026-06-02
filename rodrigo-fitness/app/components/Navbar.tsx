"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Inicio",
    "Sobre Mi",
    "Servicios",
    "Cursos",
    "Resultados",
    "Contacto",
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Rodrigo Diaz"
            width={180}
            height={60}
            className="h-auto w-auto"
            priority
          />
        </div>

        <div className="hidden gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="group relative text-sm uppercase tracking-wider text-white"
            >
              {link}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#CDAA54] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <button className="hidden rounded-full bg-[#CDAA54] px-5 py-3 font-semibold text-black transition hover:scale-105 md:block">
          Comenzar
        </button>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
