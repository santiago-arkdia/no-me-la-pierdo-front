// import React, { useState } from "react";
// import Modal from "app/components/molecules/ModalLogin";
// import ModalLogout from "app/components/molecules/ModalLogout";
// import useAuth from "app/hooks/useAuth";

// export const AuthButton = () => {
//   const [isModalOpen, setModalOpen] = useState(false);
//   const { user, logout } = useAuth();

//   const openModal = () => setModalOpen(true);
//   const closeModal = () => setModalOpen(false);

//   const handleLogout = () => {
//     logout(); // Llama a la función logout al hacer clic en el botón de cerrar sesión
//     setModalOpen(false); // Cierra el modal al hacer clic en el botón de cerrar sesión
//   };

//   return (
//     <>
//       {typeof window !== "undefined" &&
//       window.localStorage.getItem("accessToken") ? (
//         <>
//           <button
//             className="py-2 px-3 mr-5 rounded-md transition duration-300 bg-red-400 hover:bg-red-600"
//             onClick={openModal}
//           >
//             Cerrar sesión
//           </button>
//           <ModalLogout
//             isOpen={isModalOpen}
//             onClose={closeModal}
//             handleLogout={handleLogout}
//           />
//         </>
//       ) : (
//         <>
//           <button
//             onClick={openModal}
//             className="py-2 px-3 mr-5 rounded-md transition duration-300 hover:bg-blue"
//           >
//             Iniciar sesión
//           </button>
//           <Modal isOpen={isModalOpen} onClose={closeModal} />
//         </>
//       )}
//     </>
//   );
// };
"use client";
import React, { useState, useEffect } from "react";
import Modal from "app/components/molecules/ModalLogin";
import ModalLogout from "app/components/molecules/ModalLogout";
import useAuth from "app/hooks/useAuth";

export const AuthButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const { user, logout, userChanged } = useAuth();
  const token = window.localStorage.getItem("accessToken");

  useEffect(() => {
    if (typeof window !== "undefined") {
      //   const token = window.localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);
    }
    console.log("Efecto", token);
  }, [token]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleLogout = () => {
    console.log("Log Out");
    logout();
    setModalOpen(false);
    setIsAuthenticated(false);
  };

  return (
    <>
      {isAuthenticated ? (
        <>
          <button
            className="py-2 px-3 mr-5 rounded-md transition duration-300 bg-red-400 hover:bg-red-600"
            onClick={openModal}
          >
            Cerrar sesión
          </button>
          <ModalLogout
            isOpen={isModalOpen}
            onClose={closeModal}
            handleLogout={handleLogout}
          />
        </>
      ) : (
        <>
          <button
            onClick={openModal}
            className="py-2 px-3 mr-5 rounded-md transition duration-300 hover:bg-blue"
          >
            Iniciar sesión
          </button>
          <Modal isOpen={isModalOpen} onClose={closeModal} />
        </>
      )}
    </>
  );
};
