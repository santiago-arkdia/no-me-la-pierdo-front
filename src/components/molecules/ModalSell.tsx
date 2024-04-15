import MessageSuccessfulSell from "../atoms/MessageSuccessfulSell";

// export function ModalSell({ isOpen, onClose }: any) {
//   if (!isOpen) return null;
//   // Función para manejar el clic fuera del contenido del modal
//   const handleOutsideClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     onClose(); // Cierra el modal
//   };

//   // Función para detener la propagación del evento clic dentro del modal
//   const handleModalClick = (
//     event: React.MouseEvent<HTMLDivElement, MouseEvent>
//   ) => {
//     event.stopPropagation(); // Previene que el evento se propague al contenedor
//   };
//   return (
//     <div
//       onClick={handleOutsideClick}
//       className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
//     >
//       <div
//         onClick={handleModalClick}
//         className="bg-background p-2 rounded-lg shadow-lg w-1/3 h-2/5  relative"
//       >
//         <button
//           onClick={onClose}
//           className="absolute right-4 top-4 px-4 py-2 bg-red-500 text-white rounded z-50"
//         >
//           x
//         </button>
//         <MessageSuccessfulSell />
//       </div>
//     </div>
//   );
// }
export function ModalSell({ isOpen, onClose }: any) {
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
      onClick={handleOutsideClick}
      className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center"
    >
      <div
        onClick={handleModalClick}
        className="bg-background p-2 rounded-lg shadow-lg w-1/3 relative"
      >
        <div className="">
          {" "}
          {/* Margin-bottom para espacio entre el mensaje y el botón */}
          <MessageSuccessfulSell onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
