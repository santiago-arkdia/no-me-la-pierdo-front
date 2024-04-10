"use client";
import { useState, useEffect } from "react";
import { format, subMonths, addMonths, getDaysInMonth, getDay } from "date-fns";
import { es } from "date-fns/locale";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type DatepickerType = "date" | "month" | "year";

export default function Calendar() {
  const DAYS = ["D", "L", "M", "M", "J", "V", "S"];
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

  const setDateValue = (date: number) => () => {
    const newSelectedDate = new Date(
      datepickerHeaderDate.getFullYear(),
      datepickerHeaderDate.getMonth(),
      date
    );
    setSelectedDate(newSelectedDate);
  };

  const getDayCount = (date: Date) => {
    let daysInMonth = getDaysInMonth(date);

    // find where to start calendar day of week
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
    setSelectedDate(new Date()); // Selecciona el día actual por defecto
  }, []);

  useEffect(() => {
    getDayCount(datepickerHeaderDate);
    setSelectedDate(new Date()); // Selecciona el día actual por defecto
  }, [datepickerHeaderDate]);

  const isToday = (date: number) => {
    const today = new Date();
    const currentDate = new Date(
      datepickerHeaderDate.getFullYear(),
      datepickerHeaderDate.getMonth(),
      date
    );
    return (
      today.getDate() === currentDate.getDate() &&
      today.getMonth() === currentDate.getMonth() &&
      today.getFullYear() === currentDate.getFullYear()
    );
  };
  return (
    <>
      {/* <div className="mx-auto max-w-md mt-8 font-normal text-sm w-96 h-72 bg-rgba(0, 0, 0, 0.5) rounded-xl"> */}
      <div className="mx-auto max-w-md mt-8 font-normal text-sm w-96 h-80 bg-black rounded-xl">
        <div className=" p-4 rounded shadow">
          <div className="flex  justify-center items-center  mb-8">
            <button onClick={decrement}>
              <IoIosArrowBack />
            </button>
            {/* <div>{format(datepickerHeaderDate, "MMMM yyyy")}</div> */}
            <div className="font-semibold uppercase px-6 text-xl">
              {format(datepickerHeaderDate, "MMMM yyyy", { locale: es })}
            </div>
            <button onClick={increment}>
              <IoIosArrowForward />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-0 text-center">
            {DAYS.map((day) => (
              <div key={day}>{day}</div>
            ))}
            <hr className="col-span-7 my-2 " />{" "}
            {blankDays.map((_, index) => (
              <div key={index}></div>
            ))}
            {dayCount.map((day) => (
              <div
                key={day}
                className={`cursor-pointer p-2 rounded-full ${
                  isToday(day) ? " border-blue border-2 " : "hover:bg-blue"
                }`}
                onClick={setDateValue(day)}
              >
                {day}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
