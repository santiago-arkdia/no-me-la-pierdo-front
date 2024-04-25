"use client";
import ButtonAtom from "app/components/atoms/ButtonsAtom";
import { TableProductSell } from "app/components/atoms/TableProductSell";
import { TableProductTotal } from "app/components/atoms/TableProductTotal";
import { ModalSell } from "app/components/molecules/ModalSell";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { CgMathPlus } from "react-icons/cg";
import { CiCircleAlert } from "react-icons/ci";
import { GoStopwatch } from "react-icons/go";
import { IoMdCalendar } from "react-icons/io";
import { PiMapPinLineFill } from "react-icons/pi";

export default function PaymentGateway() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { cart } = useShoppingCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { data: session } = useSession();
  const user = session?.user?.id;
  const [name, setName] = useState<string>("");
  const [clientID, setClientID] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [empty, setEmpty] = useState<boolean>(false);

  console.log("Info Usuario", { user });
  console.log("Carro de compras", cart);
  console.log("name", name);
  console.log("clientID", clientID);
  console.log("email", email);
  console.log("phone", phone);
  console.log("paymentMethod", paymentMethod);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // En tu componente de pasarela de pago
  const [ticketsData, setTicketsData] = useState({});

  useEffect(() => {
    const tickets = localStorage.getItem("selectedTickets");
    const loadedTickets = tickets ? JSON.parse(tickets) : {};
    setTicketsData(loadedTickets); // Establece los datos recuperados en el estado
  }, []);

  console.log("ticketsData", ticketsData);

  const updateTicketsData = (updatedTickets: any) => {
    setTicketsData(updatedTickets);
  };

  //   api de compra
  // https://colombia-ticket-be.onrender.com
  // {
  //  "userId":"1",
  //  "clientName":"wer",
  //  "clientDocumentNumber":"wet",
  //  "clientEmail":"sad@asd.com",
  //  "clientPhone":"345345",
  //  "paymentMethod":"CASH|TC",
  //  "tickets":[
  //    {
  //      "ticketId":"661db9f9aee4f04df557c366",
  //      "quantity":"2"
  //    },
  //  {
  //    "ticketId":"661dbd8faee4f04df557c367",
  //    "quantity":"3"
  //   }
  //  ]
  // }

  // const handlePayment = () => {
  //   // Verificar si todos los campos están llenos
  //   if (name && clientID && email && phone && paymentMethod) {
  //     // Si todos los campos están llenos, mostrar mensaje en la consola
  //     console.log("Se ha presionado el botón de Pagar");
  //     setEmpty(false);
  //     openModal();
  //   } else {
  //     // Si algún campo está vacío, mostrar mensaje de error o simplemente no hacer nada
  //     console.log("Por favor completa todos los campos antes de pagar.");
  //     setEmpty(true);
  //   }
  // };
  const handlePayment = () => {
    // Verificar si todos los campos están llenos
    if (name && clientID && email && phone && paymentMethod) {
      // Si todos los campos están llenos, construir el cuerpo de la solicitud
      const requestData = {
        userId: user, // Utiliza el ID de usuario obtenido de la sesión
        clientName: name,
        clientDocumentNumber: clientID,
        clientEmail: email, //dannystiveng2@gmail.com
        clientPhone: phone,
        paymentMethod: paymentMethod,
        tickets: cart.map((item) => ({
          ticketId: item.id,
          quantity: item.quantity,
        })),
        entryDate: "2024-12-12", //fecha de entrada al parque
      };

      // Realizar la petición POST
      fetch("https://colombia-ticket-be.onrender.com/api/shopping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          if (response.ok) {
            // Si la respuesta es exitosa, muestra un mensaje de éxito o realiza cualquier otra acción necesaria
            console.log("La compra se ha realizado exitosamente.");
            // Puedes agregar aquí cualquier lógica adicional después de realizar la compra
            // Por ejemplo, redireccionar a una página de confirmación
          } else {
            // Si hay un error en la respuesta, muestra un mensaje de error
            console.error("Error al realizar la compra:", response.statusText);
          }
        })
        .catch((error) => {
          // Si hay un error al realizar la petición, muestra un mensaje de error
          console.error("Error al realizar la compra:", error);
        });

      // Abrir el modal después de enviar la solicitud
      openModal();
    } else {
      // Si algún campo está vacío, mostrar mensaje de error o simplemente no hacer nada
      console.log("Por favor completa todos los campos antes de pagar.");
      setEmpty(true);
    }
  };
  return (
    <section className="mx-auto w-3/4 rounded-lg bg-black p-14 shadow-xl shadow-black/50">
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
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2589_5973)">
                      <g clip-path="url(#clip1_2589_5973)">
                        <g clip-path="url(#clip2_2589_5973)">
                          <path
                            d="M29.0917 22.067L32.9407 29.975C32.9828 30.0353 33.0062 30.1067 33.008 30.1802C33.0099 30.2537 32.9901 30.3261 32.951 30.3885C32.912 30.4508 32.8556 30.5003 32.7886 30.5308C32.7217 30.5613 32.6473 30.5715 32.5747 30.56H8.42468C8.35203 30.5715 8.27762 30.5613 8.2107 30.5308C8.14378 30.5003 8.08731 30.4508 8.0483 30.3885C8.0093 30.3261 7.98948 30.2537 7.99133 30.1802C7.99317 30.1067 8.01659 30.0353 8.05868 29.975L11.9077 22.067C11.9443 22.001 11.9971 21.9453 12.0611 21.9053C12.1251 21.8652 12.1983 21.8421 12.2737 21.838H15.5737C15.6898 21.8448 15.7991 21.8952 15.8797 21.979C16.1037 22.238 16.3317 22.491 16.5587 22.741C16.7857 22.991 16.9917 23.219 17.2077 23.465H13.2917C13.2163 23.4691 13.1431 23.4922 13.0791 23.5323C13.0151 23.5723 12.9623 23.628 12.9257 23.694L10.3757 28.933H30.6237L28.0737 23.694C28.037 23.628 27.9842 23.5723 27.9202 23.5323C27.8562 23.4922 27.7831 23.4691 27.7077 23.465H23.7827C23.9977 23.219 24.2157 22.978 24.4317 22.741C24.6477 22.504 24.8897 22.241 25.1137 21.979C25.1942 21.8958 25.3031 21.8458 25.4187 21.839H28.7267C28.8018 21.8431 28.8747 21.8662 28.9385 21.9061C29.0023 21.9459 29.055 22.0013 29.0917 22.067ZM26.1597 16.667C26.1597 20.988 22.5597 21.798 20.8707 25.951C20.8423 26.0276 20.7911 26.0936 20.7241 26.1402C20.657 26.1868 20.5773 26.2118 20.4957 26.2118C20.414 26.2118 20.3343 26.1868 20.2673 26.1402C20.2003 26.0936 20.1491 26.0276 20.1207 25.951C18.5947 22.207 15.5207 21.18 14.9307 17.845C14.7843 17.0653 14.7999 16.2638 14.9764 15.4903C15.1529 14.7168 15.4866 13.9879 15.9568 13.3489C16.4269 12.7098 17.0234 12.1743 17.7093 11.7756C18.3952 11.3768 19.1557 11.1234 19.9437 11.031C20.7298 10.9542 21.5233 11.0426 22.2733 11.2906C23.0232 11.5386 23.713 11.9407 24.2984 12.471C24.8837 13.0014 25.3517 13.6483 25.6722 14.3702C25.9928 15.0922 26.1588 15.8731 26.1597 16.663V16.667ZM23.4867 16.667C23.4875 16.0751 23.3126 15.4962 22.9842 15.0037C22.6558 14.5112 22.1887 14.1272 21.6419 13.9004C21.0951 13.6735 20.4934 13.614 19.9128 13.7294C19.3322 13.8447 18.7989 14.1298 18.3804 14.5484C17.9619 14.9671 17.677 15.5005 17.5618 16.0811C17.4467 16.6617 17.5064 17.2635 17.7334 17.8102C17.9604 18.3568 18.3446 18.8239 18.8372 19.1521C19.3298 19.4803 19.9087 19.655 20.5007 19.654C21.2931 19.6527 22.0526 19.337 22.6124 18.7762C23.1722 18.2154 23.4867 17.4554 23.4867 16.663V16.667Z"
                            fill="white"
                          />
                        </g>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2589_5973">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                      <clipPath id="clip1_2589_5973">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                      <clipPath id="clip2_2589_5973">
                        <rect width="40" height="40" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

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
      <div className="mb-8">
        <div className="text-center mb-5">
          <h2 className="text-3xl">Tus Entradas</h2>
        </div>
        <div className="">
          <div className="relative overflow-x-auto">
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
                {cart.map((item, index) => (
                  <>
                    <TableProductSell key={index} item={item} />
                  </>
                ))}
                <TableProductTotal total={total} totalItems={totalItems} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Ingresa tus datos */}
      <div className="w-1/2 mx-auto mb-8">
        <h2 className="text-center text-3xl">Ingresa tus datos</h2>
        <div className="flex flex-wrap justify-between w-[500px] mx-auto text-sm text-blue">
          <div className="w-full sm:w-1/2 p-2 ">
            <label htmlFor="client_name">Nombre completo</label>
            <input
              id="client_name"
              type="text"
              required
              className="bg-transparent border px-4  py-2 rounded shadow-md text-white"
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="client_document_number">
              Número de identificación
            </label>
            <input
              id="client_document_number"
              type="number"
              required
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
              onChange={(event) => setClientID(event.target.value)}
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="client_email">Correo electrónico</label>
            <input
              id="client_email"
              type="email"
              required
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="w-full sm:w-1/2 p-2">
            <label htmlFor="client_phone">Teléfono</label>
            <input
              id="client_phone"
              type="number"
              required
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
              onChange={(event) => setPhone(event.target.value)}
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
            name="payment_method"
            id="payment"
            className="bg-transparent focus:ring-2 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border shadow-md"
            onChange={(event) => setPaymentMethod(event.target.value)}
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

      {/* <div className="flex justify-center items-center">
        <button
          onClick={() => {
            // handlePayment();
            openModal();
          }}
          className="border px-24 py-2 rounded-full border-blue hover:text-black hover:bg-blue "
        >
          Pagar
        </button>
        <ModalSell isOpen={isModalOpen} onClose={closeModal} />
      </div> */}
      <div className="flex justify-center items-center">
        {!empty ? null : (
          <p className="border border-red-500 px-5 bg-red-400 rounded-lg mb-2">
            Por favor completa todos los campos antes de pagar.
          </p>
        )}
      </div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => {
            handlePayment();
          }}
          className="border px-24 py-2 rounded-full border-blue hover:text-black hover:bg-blue "
        >
          Pagar
        </button>

        <ModalSell isOpen={isModalOpen} onClose={closeModal} />
      </div>
    </section>
  );
}
