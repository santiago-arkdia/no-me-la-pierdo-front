import Link from "next/link";
import { CardSell } from "./CardSell";

const CardSellContainer = ({ selectedDate }: any) => {
  const cardData = [
    {
      name: "Bioparke Ukumari",
      passport: "Pasaporte: Persona con discapacidad o adulto mayor",
      age: "Edad mínima de ingreso: 5 años",
      address:
        "Dirección: Kilometro 14 vía cerritos,Entrada por la bomba Santa Barbara.",
      open: "Apertura puertas: 8:00 am",
      price: "40.000",
      image: "/images/jirafa.jpg",
    },
    {
      name: "Bioparke Ukumari",
      passport: "Pasaporte: Elefante",
      age: "Edad mínima de ingreso: 5 años",
      address:
        "Dirección: Kilometro 14 vía cerritos,Entrada por la bomba Santa Barbara.",
      open: "Apertura puertas: 8:00 am",
      price: "40.000",
      image: "/images/elephant.jpg",
    },
    {
      name: "Bioparke Ukumari",
      passport: "Pasaporte: Suricata",
      age: "Edad mínima de ingreso: 5 años",
      address:
        "Dirección: Kilometro 14 vía cerritos,Entrada por la bomba Santa Barbara.",
      open: "Apertura puertas: 8:00 am",
      price: "40.000",
      image: "/images/suricata.jpg",
    },
    // {
    //   name: "Bioparke Ukumari",
    //   passport: "Pasaporte: Persona con discapacidad o adulto mayor",
    //   age: "Edad mínima de ingreso: 5 años",
    //   address:
    //     "Dirección: Kilometro 14 vía cerritos,Entrada por la bomba Santa Barbara.",
    //   open: "Apertura puertas: 8:00 am",
    //   price: "40.000",
    //   image: "/images/suricata.jpg",
    // },
    // {
    //   name: "Bioparke Ukumari",
    //   passport: "Pasaporte: Elefante",
    //   age: "Edad mínima de ingreso: 5 años",
    //   address:
    //     "Dirección: Kilometro 14 vía cerritos,Entrada por la bomba Santa Barbara.",
    //   open: "Apertura puertas: 8:00 am",
    //   price: "40.000",
    //   image: "/images/suricata.jpg",
    // },
  ];

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
        {cardData.map((data, index) => (
          <div className="mr-4" key={index}>
            <CardSell date={selectedDate} data={data} />
          </div>
        ))}
      </div>
      <div className="flex justify-center ">
        <Link
          className="text-white px-20 py-2  rounded-full  border border-blue hover:bg-blue hover:text-black"
          href="/paymentGateway"
        >
          Comprar entradas
        </Link>
      </div>
    </div>
  );
};

export default CardSellContainer;
