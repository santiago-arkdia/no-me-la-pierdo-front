"use client";
// import { useState, useEffect } from "react";
// import { format, subMonths, addMonths, getDaysInMonth, getDay } from "date-fns";
// import { es } from "date-fns/locale";
// import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

// type DatepickerType = "date" | "month" | "year";

// export default function Calendar() {
//   const DAYS = ["D", "L", "M", "Mi", "J", "V", "S"];
//   const [dayCount, setDayCount] = useState<Array<number>>([]);
//   const [blankDays, setBlankDays] = useState<Array<number>>([]);
//   const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [type, setType] = useState<DatepickerType>("date");

//   const decrement = () => {
//     switch (type) {
//       case "date":
//         setDatepickerHeaderDate((prev) => subMonths(prev, 1));
//         break;
//       case "month":
//         setDatepickerHeaderDate((prev) => subMonths(prev, 12));
//         break;
//       case "year":
//         setDatepickerHeaderDate((prev) => subMonths(prev, 12 * 10)); // Substracting 10 years
//         break;
//     }
//   };

//   const increment = () => {
//     switch (type) {
//       case "date":
//         setDatepickerHeaderDate((prev) => addMonths(prev, 1));
//         break;
//       case "month":
//         setDatepickerHeaderDate((prev) => addMonths(prev, 12));
//         break;
//       case "year":
//         setDatepickerHeaderDate((prev) => addMonths(prev, 12 * 10)); // Adding 10 years
//         break;
//     }
//   };

//   const setDateValue = (date: number) => () => {
//     const newSelectedDate = new Date(
//       datepickerHeaderDate.getFullYear(),
//       datepickerHeaderDate.getMonth(),
//       date
//     );
//     const today = new Date();
//     if (
//       newSelectedDate.getMonth() === today.getMonth() &&
//       newSelectedDate.getFullYear() === today.getFullYear() &&
//       date < today.getDate()
//     ) {
//       console.log("No puedes seleccionar días anteriores al actual");
//       return;
//     }
//     setSelectedDate(newSelectedDate);
//     console.log("Fecha seleccionada:", newSelectedDate);
//   };

//   const getDayCount = (date: Date) => {
//     let daysInMonth = getDaysInMonth(date);

//     // find where to start calendar day of week
//     let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
//     let blankdaysArray = [];
//     for (let i = 1; i <= dayOfWeek; i++) {
//       blankdaysArray.push(i);
//     }

//     let daysArray = [];
//     for (let i = 1; i <= daysInMonth; i++) {
//       daysArray.push(i);
//     }

//     setBlankDays(blankdaysArray);
//     setDayCount(daysArray);
//   };

//   useEffect(() => {
//     getDayCount(datepickerHeaderDate);
//   }, [datepickerHeaderDate]);

//   useEffect(() => {
//     console.log("Día de hoy:", selectedDate);
//     setSelectedDate(new Date()); // Selecciona el día actual por defecto
//   }, []);

//   useEffect(() => {
//     getDayCount(datepickerHeaderDate);
//     setSelectedDate(new Date()); // Selecciona el día actual por defecto
//   }, [datepickerHeaderDate]);

//   const handleValidDayClick = (day: number) => () => {
//     const newSelectedDate = new Date(
//       datepickerHeaderDate.getFullYear(),
//       datepickerHeaderDate.getMonth(),
//       day
//     );
//     setSelectedDate(newSelectedDate);
//     console.log("Fecha seleccionada:", newSelectedDate);
//   };

//   const handleInvalidDayClick = () => {
//     console.log("No puedes seleccionar días anteriores al actual");
//   };

//   const isToday = (date: number) => {
//     const currentDate = new Date(
//       selectedDate.getFullYear(),
//       selectedDate.getMonth(),
//       date
//     );

//     return (
//       selectedDate.getDate() === date &&
//       selectedDate.getMonth() === datepickerHeaderDate.getMonth() &&
//       selectedDate.getFullYear() === datepickerHeaderDate.getFullYear()
//     );
//   };
//   return (
//     <>
//       <div className="mx-auto max-w-md font-normal text-sm w-72 h-auto bg-black rounded-xl flex flex-col ">
//         <div className="p-4 rounded shadow">
//           <div className="flex   items-center justify-between  mb-8">
//             <button onClick={decrement}>
//               <IoIosArrowBack />
//             </button>
//             {/* <div>{format(datepickerHeaderDate, "MMMM yyyy")}</div> */}
//             <div className="font-semibold uppercase text-xl">
//               {format(datepickerHeaderDate, "MMMM yyyy", { locale: es })}
//             </div>
//             <button onClick={increment}>
//               <IoIosArrowForward />
//             </button>
//           </div>
//           <div className="grid grid-cols-7 text-center">
//             {DAYS.map((day) => (
//               <div key={day}>{day}</div>
//             ))}
//             <hr className="col-span-7 my-2 " />
//             {blankDays.map((_, index) => (
//               <div key={index}></div>
//             ))}
//             {dayCount.map((day) => {
//               const currentDate = new Date();
//               currentDate.setHours(0, 0, 0, 0); // Establece la hora a 00:00:00:000
//               const currentDay = new Date(
//                 datepickerHeaderDate.getFullYear(),
//                 datepickerHeaderDate.getMonth(),
//                 day
//               );
//               currentDay.setHours(0, 0, 0, 0); // Establece la hora a 00:00:00:000
//               const isPastDay = currentDay < currentDate;

//               return (
//                 <div
//                   key={day}
//                   className={`cursor-pointer p-2 rounded-full ${
//                     isToday(day) ? " border-blue border " : "hover:bg-blue"
//                   } ${
//                     getDay(
//                       new Date(
//                         datepickerHeaderDate.getFullYear(),
//                         datepickerHeaderDate.getMonth(),
//                         day
//                       )
//                     ) === 0
//                       ? "text-blue-500"
//                       : ""
//                   } ${isPastDay ? "invalid-day" : ""}`}
//                   onClick={
//                     isPastDay ? handleInvalidDayClick : handleValidDayClick(day)
//                   }
//                 >
//                   {day}
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import { format, subMonths, addMonths, getDaysInMonth, getDay } from "date-fns";
import { es } from "date-fns/locale";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type DatepickerType = "date" | "month" | "year";

interface CalendarProps {
  onDateSelected: (date: Date) => void;
}

const Calendar: React.FC<CalendarProps> = ({ onDateSelected }) => {
  const DAYS = ["D", "L", "M", "Mi", "J", "V", "S"];
  const [dayCount, setDayCount] = useState<Array<number>>([]);
  const [blankDays, setBlankDays] = useState<Array<number>>([]);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [type, setType] = useState<DatepickerType>("date");

  const decrement = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => subMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => subMonths(prev, 12));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => subMonths(prev, 12 * 10)); // Substracting 10 years
        break;
    }
  };

  const increment = () => {
    switch (type) {
      case "date":
        setDatepickerHeaderDate((prev) => addMonths(prev, 1));
        break;
      case "month":
        setDatepickerHeaderDate((prev) => addMonths(prev, 12));
        break;
      case "year":
        setDatepickerHeaderDate((prev) => addMonths(prev, 12 * 10)); // Adding 10 years
        break;
    }
  };

  const handleValidDayClick = (day: number) => () => {
    const newSelectedDate = new Date(
      datepickerHeaderDate.getFullYear(),
      datepickerHeaderDate.getMonth(),
      day
    );
    setSelectedDate(newSelectedDate);
    onDateSelected(newSelectedDate); // Pasar la fecha seleccionada al componente padre
    console.log("Fecha seleccionada:", newSelectedDate);
  };

  const handleInvalidDayClick = () => {
    console.log("No puedes seleccionar días anteriores al actual");
  };

  const getDayCount = (date: Date) => {
    let daysInMonth = getDaysInMonth(date);

    let dayOfWeek = getDay(new Date(date.getFullYear(), date.getMonth(), 1));
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    setBlankDays(blankdaysArray);
    setDayCount(daysArray);
  };

  useEffect(() => {
    getDayCount(datepickerHeaderDate);
  }, [datepickerHeaderDate]);

  useEffect(() => {
    setSelectedDate(new Date());
  }, []);

  useEffect(() => {
    getDayCount(datepickerHeaderDate);
    setSelectedDate(new Date());
  }, [datepickerHeaderDate]);

  const isToday = (date: number) => {
    const currentDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      date
    );

    return (
      selectedDate.getDate() === date &&
      selectedDate.getMonth() === datepickerHeaderDate.getMonth() &&
      selectedDate.getFullYear() === datepickerHeaderDate.getFullYear()
    );
  };

  return (
    <>
      <div className="mx-auto max-w-md font-normal text-sm w-72 h-auto bg-black rounded-xl flex flex-col ">
        <div className="p-4 rounded shadow">
          <div className="flex   items-center justify-between  mb-8">
            <button onClick={decrement}>
              <IoIosArrowBack />
            </button>
            <div className="font-semibold uppercase text-xl">
              {format(datepickerHeaderDate, "MMMM yyyy", { locale: es })}
            </div>
            <button onClick={increment}>
              <IoIosArrowForward />
            </button>
          </div>
          <div className="grid grid-cols-7 text-center">
            {DAYS.map((day) => (
              <div key={day}>{day}</div>
            ))}
            <hr className="col-span-7 my-2 " />
            {blankDays.map((_, index) => (
              <div key={index}></div>
            ))}
            {dayCount.map((day) => {
              const currentDate = new Date();
              currentDate.setHours(0, 0, 0, 0);
              const currentDay = new Date(
                datepickerHeaderDate.getFullYear(),
                datepickerHeaderDate.getMonth(),
                day
              );
              currentDay.setHours(0, 0, 0, 0);
              const isPastDay = currentDay < currentDate;

              return (
                <div
                  key={day}
                  className={`cursor-pointer p-2 rounded-full ${
                    isToday(day) ? " border-blue border " : "hover:bg-blue"
                  } ${
                    getDay(
                      new Date(
                        datepickerHeaderDate.getFullYear(),
                        datepickerHeaderDate.getMonth(),
                        day
                      )
                    ) === 0
                      ? "text-blue-500"
                      : ""
                  } ${isPastDay ? "invalid-day" : ""}`}
                  onClick={
                    isPastDay ? handleInvalidDayClick : handleValidDayClick(day)
                  }
                >
                  {day}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Calendar;
