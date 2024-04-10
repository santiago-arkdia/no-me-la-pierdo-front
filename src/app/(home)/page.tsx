// import Calendar from "app/components/molecules/Calendar";
// import { CardSell } from "app/components/molecules/CardSell";

// export default function Home() {
//   return (
//     <main className="">
//       <div>
//         {/* <section className="flex justify-center items-center px-48">
//           <div className="w-1/3">
//             <Calendar />
//           </div>
//           <div className="w-2/3">
//             <CardSell />
//           </div>
//         </section> */}
//         <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4 md:px-48">
//           <div className="w-full md:w-1/3">
//             <Calendar />
//           </div>
//           <div className="w-full md:w-2/3">
//             <CardSell />
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
"use client";
// import { useState } from "react";
// import { format } from "date-fns"; // Importa la función format
// import Calendar from "app/components/molecules/Calendar";
// import { CardSell } from "app/components/molecules/CardSell";

// export default function Home() {
//   const [selectedDate, setSelectedDate] = useState<Date>();

//   const handleDateSelected = (date: Date) => {
//     setSelectedDate(date);
//   };

//   return (
//     <main className="">
//       <div>
//         <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4 md:px-48">
//           <div className="w-full md:w-1/3">
//             <Calendar onDateSelected={handleDateSelected} />
//           </div>
//           <div className="w-full md:w-2/3">
//             {/* Muestra la fecha formateada en el h1 */}
//             <h1>{selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}</h1>
//             <CardSell />
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }
import { useState } from "react";
import { format } from "date-fns"; // Importa la función format
import Calendar from "app/components/molecules/Calendar";
import { CardSell } from "app/components/molecules/CardSell";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date()); // Establece la fecha actual como valor por defecto

  const handleDateSelected = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <main className="">
      <div>
        <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4 md:px-48">
          <div className="w-full md:w-1/3">
            <Calendar onDateSelected={handleDateSelected} />
          </div>
          <div className="w-full md:w-2/3">
            {/* Muestra la fecha formateada en el h1 */}
            <h1>{selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}</h1>
            <CardSell />
          </div>
        </section>
      </div>
    </main>
  );
}
