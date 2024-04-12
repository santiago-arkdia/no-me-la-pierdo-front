import Image from "next/image";

export default function PaymentGateway() {
  return (
    <section className="mx-auto  w-3/4 rounded-lg bg-black">
      {/* Imagen e info del parque */}
      <div className="p-8 ">
        <div className="flex  gap-4 mb-4 ">
          <div>
            <Image
              className="rounded-lg"
              src="/images/jirafa.jpg"
              alt=""
              objectFit="cover"
              width={600}
              height={600}
            />
          </div>
          <div className="bg-background w-full">
            <div className="text-center">
              <h2>Bioparke Ukumari</h2>
            </div>
            <div className="flex gap-11 ">
              <div>
                <p>Lugar</p>
                <p>Ciudad</p>
                <p>Fecha</p>
              </div>
              <div>
                <p>Categoria</p>
                <p>Edad</p>
                <p>Dirección</p>
                <p>Apertura puertas: 8:00 am</p>
              </div>
            </div>
          </div>
        </div>
        <hr className="text-blue px-8" />
      </div>

      {/* Tus Entrdas */}
      <div>
        <div className="text-center">
          <h2>Tus Entradas</h2>
        </div>
        <div className="bg-red-400 ">
          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left rtl:text-right t">
              <thead className="text-xs  uppercase  ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Product name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Color
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className=" border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Apple MacBook Pro 17
                  </th>
                  <td className="px-6 py-4">Silver</td>
                  <td className="px-6 py-4">Laptop</td>
                  <td className="px-6 py-4">$2999</td>
                </tr>
                <tr className="border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Microsoft Surface Pro
                  </th>
                  <td className="px-6 py-4">White</td>
                  <td className="px-6 py-4">Laptop PC</td>
                  <td className="px-6 py-4">$1999</td>
                </tr>
                <tr className=" dark:bg-gray-800">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    Magic Mouse 2
                  </th>
                  <td className="px-6 py-4">Black</td>
                  <td className="px-6 py-4">Accessories</td>
                  <td className="px-6 py-4">$99</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <hr />
      {/* Ingresa tus datos */}
      <div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>
        <div>
          <input type="text" />
          <input type="text" />
        </div>

        <div>
          <select
            name="metodos-pago"
            id="payment"
            className="text-white bg-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center "
          >
            <option value=""></option>
            <option value="efectivo">Efectivo</option>
            <option value="tarjeta">Tarjeta</option>
          </select>
        </div>
      </div>
      <hr />
      <button>Pagar</button>
    </section>
  );
}
