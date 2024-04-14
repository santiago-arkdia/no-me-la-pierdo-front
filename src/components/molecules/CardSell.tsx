import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ButtonAtom from "../atoms/ButtonsAtom";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { CiCircleAlert } from "react-icons/ci";
import { BiSolidDoorOpen, BiSolidMapPin } from "react-icons/bi";
import { useState } from "react";

export const CardSell = ({ date, data }: any) => {
  const { address, age, image, name, open, passport, price } = data;
  console.log(data);
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
            {/* <ButtonAtom icon={CgMathMinus} />
            <span>0</span>
            <ButtonAtom icon={CgMathPlus} active /> */}
            <ButtonAtom
              icon={CgMathMinus}
              active={count > 0}
              onClick={handleDecrement}
            />
            <span>{count}</span>
            {/* Botón para incrementar */}
            <ButtonAtom icon={CgMathPlus} active onClick={handleIncrement} />
          </div>
          <p className="text-base font-bold mb-2">$ {price}</p>
          {/* <button className="text-white px-6  rounded-full mt-2 border border-blue">
            Comprar
          </button> */}
        </div>
      </article>
    </>
  );
};
