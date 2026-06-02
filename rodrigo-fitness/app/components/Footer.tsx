import { AtSign, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#030712]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:flex-row md:justify-between">
        <div>
          <h2 className="text-3xl font-black text-white">
            RODRIGO<span className="text-green-400">DIAZ</span>
          </h2>

          <p className="mt-4 max-w-sm text-gray-400">
            Entrenamiento personalizado, nutrición y seguimiento profesional
            para alcanzar tu mejor versión.
          </p>
        </div>

        <div>
          <h3 className="mb-4 font-bold text-white">Contacto</h3>

          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-2">
              <Phone size={18} />
              +54 9 2983 000000
            </p>

            <p className="flex items-center gap-2">
              <Mail size={18} />
              contacto@rodrigodiaz.com
            </p>

            <p className="flex items-center gap-2">
              <AtSign size={18} />
              @rodrigodiaz
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 text-center text-sm text-gray-500">
        © 2026 RodrigoDiaz. Todos los derechos reservados.
      </div>
    </footer>
  );
}
