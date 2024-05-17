import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";

export const ImageCarousel = ({ data }: any) => {
  return (
    <div className="relative w-full h-full">
      <Image
        className="absolute inset-0 z-0"
        src={data.image}
        alt="@"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-r from-background via-transparent to-background opacity-100"></div>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-gradient-to-t from-background via-transparent to-background opacity-50"></div>
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-end px-6 pb-6 text-center ">
        <h2 className="text-5xl mb-4 w-80  tracking-widest">{data.name}</h2>
        <div className="flex  mb-28  justify-between w-80 font-light ">
          <p className="flex items-center">
            <IoMdCalendar className="mr-2" />
            {data.date}
          </p>
          <p className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            {data.place}
          </p>
        </div>
        {/* <button
          type="button"
          className="  border-blue border-2  hover:text-blue focus:ring-1 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-base px-6 py-1 text-center me-2 mb-2 "
        >
          Comprar Entrada
        </button> */}
      </div>
    </div>
  );
};
