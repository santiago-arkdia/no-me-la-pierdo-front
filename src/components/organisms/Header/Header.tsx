"use client";

import React, { useState, useEffect } from "react";
import { SubMenuHeader } from "app/components/molecules/SubMenuHeader";
import Image from "next/image";
import Modal from "app/components/molecules/ModalLogin";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const { data: session } = useSession();

  return (
    <header
      className={`bg-background w-full py-4 transition duration-300 ${
        scrolled ? "fixed top-0 shadow-lg z-50" : ""
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center text-xl">
          {/* Logo */}
          <div className="flex items-center space-x-4 ml-10 mr-10">
            <div>
              <a href="/" className="flex items-center px-2">
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
          <div className="hidden md:flex items-center space-x-1 text-2xl font-bold tracking-widest">
            <a href="/" className="px-3 text-blue">
              Inicio
            </a>
            {/* <a href="#" className="px-3 hover:text-blue">
              Eventos
            </a>
            <a href="#" className="px-3 hover:text-blue">
              Noticias
            </a>
            <a href="#" className="px-3 hover:text-blue">
              Contacto
            </a> */}
          </div>

          {/* Separador */}
          <div className="flex-1"></div>

          {/* Secondary nav */}
          {/* <div className="hidden md:flex items-center space-x-1 text-lg font-bold tracking-widest">
            <a
              href="/login"
              className="py-2 px-3 mr-5 rounded-md transition duration-300 hover:bg-blue"
            >
              Iniciar sesión
            </a>
             <a
              href=""
              className="py-2 px-3 bg-blue rounded-lg transition duration-300"
            >
              Regístrate
            </a>
          </div> */}
          {session?.user ? (
            <>
              <div>
                <button
                  onClick={() => signOut()}
                  className="py-2 px-3 mr-5 rounded-md transition duration-300 hover:bg-red-700 "
                >
                  Signout
                </button>
              </div>
            </>
          ) : (
            <>
              <div>
                <button
                  onClick={openModal}
                  className="py-2 px-3 mr-5 rounded-md tracking-wide border-2 border-blue transition duration-300 hover:bg-blue"
                >
                  Iniciar sesión
                </button>
                <Modal isOpen={isModalOpen} onClose={closeModal} />
              </div>
            </>
          )}
          {/* <div className="hidden md:flex items-center space-x-1 text-lg font-bold tracking-widest">
            <button
              onClick={openModal}
              className="py-2 px-3 mr-5 rounded-md transition duration-300 hover:bg-blue"
            >
              Iniciar sesión
            </button>

            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div> */}

          {/* Mobile button */}
          <div className="md:hidden flex items-center">
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
      </nav>
      {/* <SubMenuHeader /> */}
    </header>
  );
};
// import Image from "next/image";
// import React from "react";

// export const Header = () => {
//   return (
//     <header className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
//         {/* Logo y título centralizados */}
//         <div className="hidden md:flex flex-1 justify-center items-center">
//           <a href="/" className="flex items-center">
//             <Image src="/logo.svg" alt="Logo" width={100} height={50} />
//           </a>
//           <h1 className="ml-4 text-xl font-semibold">Inicio</h1>
//         </div>

//         {/* Botón al final */}
//         <div className="flex-1 flex justify-end">
//           <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
//             Botón
//           </button>
//         </div>

//         {/* Icono de menú para móviles */}
//         <div className="md:hidden">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M4 6h16M4 12h16m-7 6h7"
//             />
//           </svg>
//         </div>
//       </div>
//     </header>
//   );
// };

// "use client";
// import { signOut, useSession } from "next-auth/react";
// import Modal from "app/components/molecules/ModalLogin";
// import Link from "next/link";
// import { useState } from "react";

// export const Header = () => {
//   const { data: session } = useSession();
//   const [isModalOpen, setModalOpen] = useState(false);

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   return (
//     <nav className="bg-gray-800">
//       <div className="container mx-auto px-4 py-2 flex justify-between items-center">
//         <Link
//           href="/"
//           className="text-white text-sm font-semibold hover:text-gray-300 mr-4"
//         >
//           Home
//         </Link>
//         <div>
//           {session?.user ? (
//             <>
//               <Link
//                 href="/dashboard"
//                 className="text-white text-sm font-semibold hover:text-gray-300 mr-4"
//               >
//                 Dashboard
//               </Link>
//               <button
//                 onClick={() => signOut()}
//                 className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-md hover:bg-red-700 mr-4"
//               >
//                 Signout
//               </button>
//             </>
//           ) : (
//             <>
//               <div>
//                 <button
//                   onClick={openModal}
//                   className="py-2 px-3 mr-5 rounded-md transition duration-300 hover:bg-blue"
//                 >
//                   Iniciar sesión
//                 </button>
//                 <Modal isOpen={isModalOpen} onClose={closeModal} />
//               </div>

//               <Link
//                 href="/register"
//                 className="text-white text-sm font-semibold hover:text-gray-300 mr-4"
//               >
//                 Register
//               </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </nav>
//   );
// };
