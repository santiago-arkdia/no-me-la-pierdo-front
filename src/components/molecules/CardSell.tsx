"use client";
import Image from "next/image";
import { useEffect } from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ButtonAtom from "../atoms/ButtonsAtom";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { CiCircleAlert } from "react-icons/ci";
import { BiSolidDoorOpen, BiSolidMapPin } from "react-icons/bi";
import { useState } from "react";

export const CardSell = ({ date, data }: any) => {
  const { address, age, image, name, open, passport, price } = data;
  // console.log(data);
  // Estado para manejar el contador
  const [count, setCount] = useState(0);

  // Función para incrementar el contador
  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Función para decrementar el contador
  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  useEffect(() => {
    const saveToLocalStorage = () => {
      let events;
      try {
        events = JSON.parse(localStorage.getItem("selectedTickets") || "{}");
      } catch (error) {
        console.error("Error parsing JSON from localStorage:", error);
        events = {}; // En caso de error, reinicia el objeto
      }

      if (count > 0) {
        events[passport] = {
          count,
          price,
          name: passport, // Puede ser mejor usar un campo `name` si está disponible
          date,
        };
      } else {
        delete events[passport];
      }

      localStorage.setItem("selectedTickets", JSON.stringify(events));
    };

    saveToLocalStorage();
  }, [count, passport, price, date]); // Dependencias completas
  return (
    <>
      <article className="grid grid-cols-[1fr_2fr_1fr] gap-4 rounded-xl p-4 mb-4 bg-black">
        {/* Primera columna (imagen) */}
        <div className="h-200 relative rounded-lg overflow-hidden">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        {/* Segunda columna (información central) */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold mb-2">{passport}</h2>
          <div className="flex flex-col space-y-2 text-sm pl-2 ">
            <p className="flex items-center">
              <CiCircleAlert className="text-xl mx-1" /> {age}
            </p>
            <p className="flex items-center">
              <BiSolidMapPin className="text-xl mx-1" /> {address}
            </p>
            <p className="flex items-center">
              <BiSolidDoorOpen className="text-xl mx-1" />
              {open}
            </p>
          </div>
        </div>
        {/* Tercera columna (fecha, contador y botón) */}
        <div className="flex flex-col justify-center items-center mr-2 ">
          <h3
            className={`text-end font-bold mb-4 ${
              date && format(date, "dd MMMM yyyy", { locale: es }).length > 12
                ? "text-3xl"
                : "text-2xl"
            }`}
          >
            {date ? format(date, "dd MMMM yyyy", { locale: es }) : ""}
          </h3>
          <div className="flex items-center space-x-4 mb-4">
            <ButtonAtom
              icon={CgMathMinus}
              active={count > 0}
              onClick={handleDecrement}
            />
            <span>{count}</span>
            {/* Botón para incrementar */}
            <ButtonAtom icon={CgMathPlus} active onClick={handleIncrement} />
          </div>
          <p className="text-base font-bold mb-2">
            $ {count === 0 ? price : price * count}
          </p>
        </div>
      </article>
    </>
  );
};
