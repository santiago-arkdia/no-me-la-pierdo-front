import Image from "next/image";
import { format } from "date-fns";

export const CardSell = ({ date }: any) => {
  return (
    <>
      <article className="grid grid-cols-3 gap-4 border border-gray-300 rounded-xl p-4 mb-6">
        <div className="col-span-1">
          {/* Aquí iría la imagen */}
          {/* <Image src={imageSrc} alt={title} width={200} height={150} /> */}
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <h2 className="text-lg font-bold mb-2">title</h2>
          <div className="flex flex-col space-y-2">
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
          </div>
        </div>
        <div className="col-span-1 flex flex-col justify-center">
          <h3 className="text-lg font-bold mb-2">
            {date ? format(date, "dd/MM/yyyy") : ""}
          </h3>
          <div className="flex items-center space-x-2">
            <button className="px-3 py-1 bg-gray-200 rounded-md">-</button>
            <span>number</span>
            <button className="px-3 py-1 bg-gray-200 rounded-md">+</button>
          </div>
          <p className="text-lg font-bold mt-2">price</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2">
            Comprar
          </button>
        </div>
      </article>
    </>
  );
};
