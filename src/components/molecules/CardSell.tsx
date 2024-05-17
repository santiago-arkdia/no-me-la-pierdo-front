import Image from "next/image";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ButtonAtom from "../atoms/ButtonsAtom";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { CiCircleAlert } from "react-icons/ci";
import { BiSolidDoorOpen, BiSolidMapPin } from "react-icons/bi";
import { useEffect, useState } from "react";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import useDateFormatter from "app/hooks/useDateFormater";
import { useNumberFormatter } from "app/hooks/useNumberFormatter";

export const CardSell = ({ date, data }: any) => {
  const formattedDate = useDateFormatter(date);
  const { address, min_age, image, name, opening_time, price, _id: id } = data;
  const [count, setCount] = useState(0);
  const { addToCart } = useShoppingCart();

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if (count > 0) {
      addToCart({ id, name, price, quantity: count, date: formattedDate });
    } else {
      addToCart({ id, name, price, quantity: 0, date: formattedDate });
    }
  }, [count, id, name, price, addToCart, formattedDate]);
  return (
    <>
      <article className="grid grid-cols-[1fr_2fr_1fr] gap-4 rounded-xl p-4 mb-4 bg-black">
        {/* Primera columna (imagen) */}
        <div className="h-200 relative rounded-lg overflow-hidden">
          <Image src={image} alt={name} layout="fill" objectFit="cover" />
        </div>
        {/* Segunda columna (información central) */}
        <div className="flex flex-col items-start">
          <h2 className="text-lg font-bold mb-2">{name}</h2>
          <div className="flex flex-col space-y-2 text-sm pl-2 font-light">
            <p className="flex items-center ">
              <CiCircleAlert className="text-xl mx-1" />{" "}
              {`Edad mínima de ingreso: ${min_age} años`}
            </p>
            <p className="flex items-center">
              <BiSolidMapPin className="text-xl mx-1" /> {address}
            </p>
            <p className="flex items-center">
              <BiSolidDoorOpen className="text-xl mx-1" />
              {`Apertura puertas: ${opening_time}`}
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
            <ButtonAtom icon={CgMathPlus} active onClick={handleIncrement} />
          </div>
          <p className="text-base font-bold mb-2">
            $ {useNumberFormatter(count === 0 ? price : price * count)}
          </p>
        </div>
      </article>
    </>
  );
};
