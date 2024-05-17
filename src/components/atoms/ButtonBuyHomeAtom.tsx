import { useSession } from "next-auth/react";
import Modal from "../molecules/ModalLogin";
import Link from "next/link";
import { useState } from "react";

export const ButtonBuyHomeAtom = () => {
  const { data: session } = useSession();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <div className=" flex justify-center p-12">
      {session?.user ? (
        <>
          <Link
            href="/payment-gateway"
            className="text-white tracking-widest px-6 py-2 rounded-md border-2 border-blue hover:bg-blue hover:text-black"
          >
            Comprar entradas
          </Link>
        </>
      ) : (
        <>
          <div>
            <button
              onClick={openModal}
              className="text-white tracking-widest px-6 py-2 rounded-md border-2 border-blue hover:bg-blue hover:text-black"
            >
              Comprar entradas
            </button>
            <Modal isOpen={isModalOpen} onClose={closeModal} />
          </div>
        </>
      )}
    </div>
  );
};
