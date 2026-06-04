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
    { name: "Inicio", href: "#inicio" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Servicios", href: "#servicios" },
    { name: "Certificaciones", href: "#certificaciones" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-500 ${
        scrolled
          ? "bg-black/40 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center px-6 py-5">
        <div className="flex items-center">
          <Image
            src="/logo11.png"
            alt="Rodrigo Diaz"
            width={180}
            height={60}
            className="h-auto w-auto"
            priority
          />
        </div>

        <div className="hidden justify-center md:flex">
          <div className="flex gap-8">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-sm uppercase tracking-wider text-white transition-colors hover:text-[#4BA3FF]"
              >
                {link.name}

                <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-[#1164BC] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>

        <button onClick={() => setOpen(!open)} className="text-white md:hidden">
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
