import React from "react";

function ModalLogout({ isOpen, onClose, handleLogout }: any) {
  if (!isOpen) return null;

  // Función para manejar el clic fuera del contenido del modal
  const handleOutsideClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    onClose(); // Cierra el modal
  };

  // Función para detener la propagación del evento clic dentro del modal
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation(); // Previene que el evento se propague al contenedor
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
      onClick={handleOutsideClick}
    >
      <div
        className="bg-background p-4 rounded-lg shadow-lg w-1/4 h-1/4 relative"
        onClick={handleModalClick}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 px-4 py-2  text-white rounded z-50"
        >
          x
        </button>
        <div className="h-full">
          <h2>Estas seguro de cerrar sesion</h2>
          <button onClick={handleLogout}>si</button>
        </div>
      </div>
    </div>
  );
}

export default ModalLogout;
