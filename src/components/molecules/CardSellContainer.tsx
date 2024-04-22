// import Link from "next/link";
// import { CardSell } from "./CardSell";

// // https://colombia-ticket-be.onrender.com/api/ticket

// const CardSellContainer = ({ selectedDate }: any) => {
//   const cardData = [
//     {
//       name: "Bioparke Ukumari",
//       passport: "Pasaporte: Persona con discapacidad o adulto mayor",
//       age: "Edad mínima de ingreso: 5 años",
//       address:
//         "Dirección: Kilometro 14 vía cerritos,Entrada por la bomba Santa Barbara.",
//       open: "Apertura puertas: 8:00 am",
//       price: "40000",
//       image: "/images/jirafa.jpg",
//     },
//     {
//       name: "Bioparke Ukumari",
//       passport: "Pasaporte: Elefante",
//       age: "Edad mínima de ingreso: 5 años",
//       address:
//         "Dirección: Kilometro 14 vía cerritos,Entrada por la bomba Santa Barbara.",
//       open: "Apertura puertas: 8:00 am",
//       price: "40000",
//       image: "/images/elephant.jpg",
//     },
//     {
//       name: "Bioparke Ukumari",
//       passport: "Pasaporte: Suricata",
//       age: "Edad mínima de ingreso: 5 años",
//       address:
//         "Dirección: Kilometro 14 vía cerritos,Entrada por la bomba Santa Barbara.",
//       open: "Apertura puertas: 8:00 am",
//       price: "40000",
//       image: "/images/suricata.jpg",
//     },
//   ];

//   return (
//     <div className="w-11/12 p-4">
//       <div
//         className="overflow-auto custom-scrollbar"
//         style={{
//           height: "650px",
//           maxHeight: "800px",
//           maxWidth: "850px",
//         }}
//       >
//         {cardData.map((data, index) => (
//           <div className="mr-4" key={index}>
//             <CardSell date={selectedDate} data={data} />
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center ">
//         <Link
//           className="text-white px-20 py-2  rounded-full  border border-blue hover:bg-blue hover:text-black"
//           href="/paymentGateway"
//         >
//           Comprar entradas
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CardSellContainer;
"use client";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { CardSell } from "./CardSell";
// import { LoaderCardHome } from "../atoms/LoaderCardHome";

// const CardSellContainer = ({ selectedDate }: any) => {
//   const [cardData, setCardData] = useState([]);

//   useEffect(() => {
//     fetch("https://colombia-ticket-be.onrender.com/api/ticket")
//       .then((response) => {
//         console.log("HTTP Response", response);
//         console.log(response);
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Data Received", data);
//         setCardData(data); // Asegúrate de que esto es un array.
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);

//   console.log("cardData", cardData);

//   return (
//     <div className="w-11/12 p-4">
//       <div
//         className="overflow-auto custom-scrollbar"
//         style={{
//           height: "650px",
//           maxHeight: "800px",
//           maxWidth: "850px",
//         }}
//       >
//         {cardData.map((data, index) => (
//           <div className="mr-4" key={index}>
//             <CardSell date={selectedDate} data={data} />
//             <LoaderCardHome />
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-center">
//         <Link
//           className="text-white px-20 py-2 rounded-full border border-blue hover:bg-blue hover:text-black"
//           href="/paymentGateway"
//         >
//           Comprar entradas
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default CardSellContainer;
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CardSell } from "./CardSell";
import { LoaderCardHome } from "../atoms/LoaderCardHome";
import useAuth from "app/hooks/useAuth";
import { ButtonBuy } from "./ButtonBuy";

const CardSellContainer = ({ selectedDate }: any) => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Estado para manejar la carga

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

  const { user, logout, userChanged } = useAuth();
  useEffect(() => {}, [userChanged]);

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
        <ButtonBuy />
      </div>
    </div>
  );
};

export default CardSellContainer;
