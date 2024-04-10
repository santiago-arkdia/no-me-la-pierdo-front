import { CardSell } from "./CardSell";
import { format } from "date-fns";

const CardSellContainer = ({ selectedDate }: any) => {
  // Supongamos que cardData es un array que contiene los datos para cada CardSell
  const cardData = [
    /* Aquí irían los datos de cada CardSell */
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  ];

  return (
    <div
      className="w-850 h-831 overflow-auto bg-gray-100 p-4"
      style={{ maxHeight: "831px", maxWidth: "850px" }}
    >
      {/* <h1> holi {selectedDate ? format(selectedDate, "dd/MM/yyyy") : ""}</h1> */}
      {cardData.map((data, index) => (
        <CardSell key={index} date={selectedDate} data={data} />
      ))}
    </div>
  );
};

export default CardSellContainer;
