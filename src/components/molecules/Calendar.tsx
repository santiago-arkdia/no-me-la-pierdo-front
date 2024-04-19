"use client";

import React, { useState, useEffect } from "react";
import { format, subMonths, addMonths, getDaysInMonth, getDay } from "date-fns";
import { es } from "date-fns/locale";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type DatepickerType = "date" | "month" | "year";

interface CalendarProps {
  onDateSelected: (date: Date) => void;
  selectedDate: Date;
}

const Calendar: React.FC<CalendarProps> = ({
  onDateSelected,
  selectedDate,
}) => {
  const DAYS = ["D", "L", "M", "Mi", "J", "V", "S"];
  const [dayCount, setDayCount] = useState<Array<number>>([]);
  const [blankDays, setBlankDays] = useState<Array<number>>([]);
  const [datepickerHeaderDate, setDatepickerHeaderDate] = useState(new Date());
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
      {/* <div className="mx-auto max-w-md font-normal text-sm w-96 h-96 bg-black rounded-xl flex flex-col mt-4"> */}
      {/* <div className=" font-normal text-sm w-96 h-96 bg-black rounded-xl flex flex-col mt-4 "> */}
      <div className="max-md:mx-auto min-h-96   font-normal text-sm w-96 h-96 bg-black rounded-xl flex flex-col mt-4 ">
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
          <div className="grid grid-cols-7 text-center text-lg">
            {/* {DAYS.map((day) => (
              <div key={day}>{day}</div>
            ))} */}
            {DAYS.map((day) => (
              <div key={day} className={day === "D" ? "text-blue" : ""}>
                {day}
              </div>
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
                      ? "text-blue"
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
