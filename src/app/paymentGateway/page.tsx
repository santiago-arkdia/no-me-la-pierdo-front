"use client";
import ButtonAtom from "app/components/atoms/ButtonsAtom";
import { TableProductSell } from "app/components/atoms/TableProductSell";
import { TableProductTotal } from "app/components/atoms/TableProductTotal";
import { ModalSell } from "app/components/molecules/ModalSell";
import Image from "next/image";
import { useState } from "react";
import { BiCategory } from "react-icons/bi";
import { CgMathPlus } from "react-icons/cg";
import { CiCircleAlert } from "react-icons/ci";
import { GoStopwatch } from "react-icons/go";
import { IoMdCalendar } from "react-icons/io";
import { PiMapPinLineFill } from "react-icons/pi";

export default function PaymentGateway() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <section className="mx-auto  w-3/4 rounded-lg bg-black p-14 shadow-lg shadow-cyan-500/50">
      {/* Imagen e info del parque */}
      <div className="mb-6">
        <div className="flex  gap-4 mb-8 ">
          <div>
            <Image
              className="rounded-lg"
              src="/images/jirafa.jpg"
              alt=""
              objectFit="cover"
              width={700}
              height={700}
            />
          </div>
          <div className=" w-full pt-4">
            <div className="text-center text-3xl">
              <h2>Bioparke Ukumari</h2>
            </div>
            <div className="flex justify-center items-start gap-0 mx-auto text-lg pt-10 px-6 font-light">
              <div className="w-2/4">
                <p className="mb-6 flex items-center space-x-2">
                  <PiMapPinLineFill />
                  <span>Lugar: Bioparque Ukumarí</span>
                </p>
                <p className="mb-6 flex items-center space-x-2">
                  <PiMapPinLineFill />
                  <span>Ciudad: Risaralda, Pereira</span>
                </p>
                <p className="mb-6 flex items-center space-x-2">
                  <IoMdCalendar />
                  <span>Fecha: 01 abril, 2024</span>
                </p>
              </div>
              <div className="w-2/4">
                <p className="mb-6 flex items-center space-x-2">
                  <BiCategory />
                  <span>Categoría: Familiar</span>
                </p>
                <p className="mb-6 flex items-center space-x-2">
                  <CiCircleAlert />
                  <span>Edad mínima de ingreso: 5 años</span>
                </p>
                <p className="mb-6 flex items-center space-x-2">
                  <PiMapPinLineFill />
                  <span>
                    Dirección: Kilometro 14 vía cerritos. Entrada por la bomba
                    Santa Barbara.
                  </span>
                </p>
                <p className="mb-6 flex items-center space-x-2">
                  <GoStopwatch />
                  <span>Apertura puertas: 8:00 am</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="bg-blue h-0.5 text-transparent" />
      </div>

      {/* Tus Entrdas */}
      <div className="mb-8">
        <div className="text-center mb-5">
          <h2 className="text-3xl">Tus Entradas</h2>
        </div>
        <div className=" ">
          <div className="relative overflow-x-auto">
            {/* <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-base uppercase">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 border-b-2 border-gray-200"
                  >
                    Descripción
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-b-2 border-gray-200"
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-b-2 border-gray-200"
                  >
                    Valor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-b-2 border-gray-200"
                  ></th>
                </tr>
              </thead>

              <tbody className="text-base">
                <tr className=" border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium  whitespace-nowrap"
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">1000</td>
                  <td className="px-6 py-4">
                    <ButtonAtom icon={CgMathPlus} active />
                  </td>
                </tr>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">1000</td>
                  <td className="px-6 py-4">
                    <ButtonAtom icon={CgMathPlus} active />
                  </td>
                </tr>
                <tr className=" dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">1000</td>
                  <td className="px-6 py-4">
                    <ButtonAtom icon={CgMathPlus} active />
                  </td>
                </tr>
              </tbody>
            </table> */}
            <table className="w-full text-sm text-left rtl:text-right">
              <thead className="text-base uppercase">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 border-b-2 border-gray-200 pl-20"
                    style={{ width: "53%" }}
                  >
                    Descripción
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-b-2 border-gray-200"
                    style={{ width: "16%" }}
                  >
                    Cantidad
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-b-2 border-gray-200"
                    style={{ width: "16%" }}
                  >
                    Valor
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 border-b-2 border-gray-200"
                    style={{ width: "16%" }}
                  ></th>
                </tr>
              </thead>

              <tbody className="text-base">
                <TableProductSell />
                <TableProductSell />
                <TableProductTotal />
              </tbody>
            </table>
          </div>
        </div>
        <hr />
      </div>

      {/* Ingresa tus datos */}
      <div className="w-1/2 mx-auto mb-8">
        <h2 className="text-center text-3xl">Ingresa tus datos</h2>
        <div className="flex flex-wrap justify-between w-[500px] mx-auto text-sm text-blue">
          <div className="w-full sm:w-1/2 p-2 ">
            <label htmlFor="input1">Título 1</label>
            <input
              id="input1"
              type="text"
              className="bg-transparent border px-4  py-2 rounded shadow-md text-white"
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="input2">Título 2</label>
            <input
              id="input2"
              type="text"
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="input3">Título 3</label>
            <input
              id="input3"
              type="text"
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="input4">Título 4</label>
            <input
              id="input4"
              type="text"
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
            />
          </div>
        </div>
        {/* Método de Pago */}
        <div className="flex flex-col justify-center p-2 mx-auto w-[292px] mb-6">
          <label htmlFor="payment" className="text-blue">
            Método de Pago
          </label>
          <select
            required
            name="metodos-pago"
            id="payment"
            className="bg-transparent focus:ring-2 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border shadow-md"
          >
            <option value="" disabled selected className="bg-black text-white">
              Seleciona
            </option>

            <option value="efectivo" className="bg-black text-white">
              Efectivo
            </option>
            <option value="tarjeta" className="bg-black text-white">
              Tarjeta
            </option>
          </select>
        </div>
        <hr />
      </div>

      <div className="flex justify-center items-center">
        <button
          onClick={openModal}
          className="border px-24 py-2 rounded-full border-blue text-blue hover:bg-blue hover:text-black"
        >
          Pagar
        </button>
        <ModalSell isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
}
