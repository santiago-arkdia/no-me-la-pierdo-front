"use client";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import ButtonAtom from "./ButtonsAtom";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

export const TableProductSell = ({ ticket, updateTicketsData }: any) => {
  const { count, date, name, price } = ticket;
  console.log("TableProductSell", ticket);

  const [countT, setCountT] = useState(count);

  const updateLocalStorage = (newCount: number) => {
    const tickets = JSON.parse(localStorage.getItem("selectedTickets") || "{}");

    // Actualizar el conteo del ticket actual
    if (tickets[name]) {
      tickets[name].count = newCount;
      localStorage.setItem("selectedTickets", JSON.stringify(tickets));
      updateTicketsData(tickets); // Esto también actualizará el estado global si es necesario
    }
  };

  // // Función para incrementar el contador
  // const handleIncrement = () => {
  //   setCountT((prevCount: number) => prevCount + 1);
  // };

  // // Función para decrementar el contador
  // const handleDecrement = () => {
  //   setCountT((prevCount: number) => prevCount - 1);
  // };

  const handleIncrement = () => {
    setCountT((prevCount: number) => {
      const newCount = prevCount + 1;
      updateLocalStorage(newCount); // Actualizar localStorage
      return newCount;
    });
  };

  const handleDecrement = () => {
    setCountT((prevCount: number) => {
      const newCount = prevCount - 1;
      updateLocalStorage(newCount); // Actualizar localStorage
      return newCount;
    });
  };
  const handleRemoveTicket = () => {
    const tickets = JSON.parse(localStorage.getItem("selectedTickets") || "{}");

    // Suponiendo que `name` es la clave única para identificar un ticket
    if (tickets[ticket.name]) {
      delete tickets[ticket.name];
      localStorage.setItem("selectedTickets", JSON.stringify(tickets));
      updateTicketsData(tickets); // Actualiza el estado usando la prop pasada
    }
  };
  return (
    <tr className="border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium  whitespace-nowrap pl-20"
        style={{ width: "50%" }}
      >
        {name}
      </th>
      <td className="px-6 py-4" style={{ width: "16.66%" }}>
        <ButtonAtom
          icon={CgMathMinus}
          active={countT > 0}
          onClick={handleDecrement}
        />{" "}
        {countT}{" "}
        <ButtonAtom icon={CgMathPlus} active onClick={handleIncrement} />
      </td>
      <td className="px-6 py-4" style={{ width: "16.66%" }}>
        {price * countT}
      </td>
      <td className="px-6 py-4" style={{ width: "16.66%" }}>
        <ButtonAtom icon={IoMdClose} active onClick={handleRemoveTicket} />
      </td>
    </tr>
  );
};
