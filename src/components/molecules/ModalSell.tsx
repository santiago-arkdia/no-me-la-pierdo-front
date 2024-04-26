import MessageSuccessfulSell from "../atoms/MessageSuccessfulSell";

export function ModalSell({ isOpen, onClose }: any) {
  if (!isOpen) return null;

  // Función para detener la propagación del evento clic dentro del modal
  const handleModalClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
      <div
        onClick={handleModalClick}
        className="bg-background p-2 rounded-lg shadow-lg w-1/3 relative"
      >
        <div className="">
          <MessageSuccessfulSell onClose={onClose} />
        </div>
      </div>
    </div>
  );
}
