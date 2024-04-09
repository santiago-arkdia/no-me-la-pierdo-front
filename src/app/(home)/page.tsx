import { Calendar } from "app/components/molecules/Calendar";
import { CardSell } from "app/components/molecules/CardSell";

export default function Home() {
  return (
    <main className="">
      <div>
        <h1>Estamos vivos</h1>
        <h2>desde (home)</h2>
        <section>
          <CardSell />
          <Calendar />
        </section>
      </div>
    </main>
  );
}
