import { SubMenuHeader } from "app/components/molecules/SubMenuHeader";
import Image from "next/image";

export const Header = () => {
  return (
    <header>
      <nav>
        <div className="max-w-6xl mx-auto px-4 ">
          <div className="flex justify-between items-center text-xl ">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <div>
                <a href="#" className="flex items-center py-5 px-2">
                  <Image
                    src={"/logo.svg"}
                    alt="Logo Tiketera"
                    width={184}
                    height={90}
                  />
                </a>
              </div>
            </div>

            <div className="flex-1"></div>

            {/* Primary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3 text-blue">
                Inicio
              </a>
              <a href="#" className="py-5 px-3   hover:text-blue">
                Eventos
              </a>
              <a href="#" className="py-5 px-3   hover:text-blue">
                Noticias
              </a>
              <a href="#" className="py-5 px-3   hover:text-blue">
                Contacto
              </a>
            </div>

            {/* Separador */}
            <div className="flex-1"></div>

            {/* Secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a
                href=""
                className="py-2 px-3  rounded-md transition duration-300"
              >
                Iniciar sesión
              </a>
              <a
                href=""
                className="py-2 px-3 bg-blue rounded-lg transition duration-300"
              >
                Regístrate
              </a>
            </div>

            {/* Mobile button */}
            <div className="md:hidden flex items-center ">
              <button className="mobile-menu-button">
                <svg
                  className="w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="mobile-menu hidden md:hidden">
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Features
          </a>
          <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">
            Pricing
          </a>
        </div>
      </nav>
      <SubMenuHeader />
    </header>
  );
};
