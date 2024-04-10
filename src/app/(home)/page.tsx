import Calendar from "app/components/molecules/Calendar";
import { CardSell } from "app/components/molecules/CardSell";

export default function Home() {
  return (
    <main className="">
      <div>
        {/* <section className="flex justify-center items-center px-48">
          <div className="w-1/3">
            <Calendar />
          </div>
          <div className="w-2/3">
            <CardSell />
          </div>
        </section> */}
        <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 px-4 md:px-48">
          <div className="w-full md:w-1/3">
            <Calendar />
          </div>
          <div className="w-full md:w-2/3">
            <CardSell />
          </div>
        </section>
      </div>
    </main>
  );
}
