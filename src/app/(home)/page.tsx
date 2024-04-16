"use client";

import { useState } from "react";

import Calendar from "app/components/molecules/Calendar";
import { CardSell } from "app/components/molecules/CardSell";
import CardSellContainer from "app/components/molecules/CardSellContainer";
import HomeCarousel from "app/components/molecules/HomeCarousel";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateSelected = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <main>
      <div>
        <HomeCarousel />
        <section className="flex flex-col md:flex-row justify-center items-start px-4 md:px-48">
          <div className="w-full md:w-1/3 ">
            <Calendar
              onDateSelected={handleDateSelected}
              selectedDate={selectedDate}
            />
          </div>
          <div className="w-full md:w-2/3">
            <CardSellContainer selectedDate={selectedDate} />
          </div>
        </section>
      </div>
    </main>
  );
}
