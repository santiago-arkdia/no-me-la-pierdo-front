"use client";

import { useState } from "react";

import Calendar from "app/components/molecules/Calendar";
import CardSellContainer from "app/components/molecules/CardSellContainer";
import HomeCarousel from "app/components/molecules/HomeCarousel";
import { ButtonBuyHomeAtom } from "app/components/atoms/ButtonBuyHomeAtom";

export default function Home() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const handleDateSelected = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <main>
      <div>
        <HomeCarousel />
        <section className="flex flex-col md:flex-row justify-end items-start gap-2 px-4 sm:px-6 md:px-12 lg:px-0">
          <div className="w-full md:w-1/3 lg:mb-0 ">
            <div className="flex justify-end">
              <Calendar
                onDateSelected={handleDateSelected}
                selectedDate={selectedDate}
              />
            </div>
          </div>
          <div className="w-full md:w-2/3 ">
            <CardSellContainer selectedDate={selectedDate} />
          </div>
        </section>
        <ButtonBuyHomeAtom />
      </div>
    </main>
  );
}
