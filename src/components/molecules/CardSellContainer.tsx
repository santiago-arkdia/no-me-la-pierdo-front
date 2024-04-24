"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CardSell } from "./CardSell";
import { LoaderCardHome } from "../atoms/LoaderCardHome";
import { useSession } from "next-auth/react";
import Modal from "./ModalLogin";

const CardSellContainer = ({ selectedDate }: any) => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga
  const { data: session } = useSession();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  useEffect(() => {
    fetch("https://colombia-ticket-be.onrender.com/api/ticket")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setCardData(data);
        setIsLoading(false); // Actualiza el estado de carga cuando los datos están listos
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Actualiza el estado de carga incluso si hay un error
      });
  }, []);

  return (
    <div className="w-11/12 p-4">
      <div
        className="overflow-auto custom-scrollbar"
        style={{
          height: "650px",
          maxHeight: "800px",
          maxWidth: "850px",
        }}
      >
        {isLoading ? (
          <>
            <LoaderCardHome />
            <LoaderCardHome />
            <LoaderCardHome />
          </>
        ) : (
          cardData.map((data, index) => (
            <div className="mr-4" key={index}>
              <CardSell date={selectedDate} data={data} />
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center">
        {session?.user ? (
          <>
            <Link
              className="text-white px-20 py-2 rounded-full border border-blue hover:bg-blue hover:text-black"
              href="/payment-gateway"
            >
              Comprar entradas
            </Link>
          </>
        ) : (
          <>
            <div>
              <button
                onClick={openModal}
                className="text-white px-20 py-2 rounded-full border border-blue hover:bg-blue hover:text-black"
              >
                Comprar entradas
              </button>
              <Modal isOpen={isModalOpen} onClose={closeModal} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardSellContainer;
