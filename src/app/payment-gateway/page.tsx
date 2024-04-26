"use client";
import { TableDescriptionCellText } from "app/components/atoms/TableDescriptionCellText";
import { TableProductSell } from "app/components/atoms/TableProductSell";
import { TableProductTotal } from "app/components/atoms/TableProductTotal";
import { ModalSell } from "app/components/molecules/ModalSell";
import { PaymentHeaderCard } from "app/components/molecules/PaymentHeaderCard";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

//TODO avisar que campos son los que no tienen datos cambiarlos de color

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

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  // En tu componente de pasarela de pago
  const [ticketsData, setTicketsData] = useState({});

  useEffect(() => {
    const tickets = localStorage.getItem("selectedTickets");
    const loadedTickets = tickets ? JSON.parse(tickets) : {};
    setTicketsData(loadedTickets); // Establece los datos recuperados en el estado
  }, []);

  const handlePayment = () => {
    if (name && clientID && email && phone && paymentMethod) {
      const requestData = {
        userId: user,
        clientName: name,
        clientDocumentNumber: clientID,
        clientEmail: email, //dannystiveng2@gmail.com
        clientPhone: phone,
        paymentMethod: paymentMethod,
        tickets: cart.map((item) => ({
          ticketId: item.id,
          quantity: item.quantity,
        })),
        entryDate: cart[0].date,
      };

      fetch("https://colombia-ticket-be.onrender.com/api/shopping", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      })
        .then((response) => {
          if (response.ok) {
            console.log("La compra se ha realizado exitosamente.");
            openModal();
          } else {
            console.error("Error al realizar la compra:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error al realizar la compra:", error);
        });
    } else {
      console.log("Por favor completa todos los campos antes de pagar.");
      setEmpty(true);
    }
  };
  return (
    <section className="mx-auto w-3/4 rounded-lg bg-black p-14 shadow-xl shadow-black/50">
      {/* Imagen e info del parque */}
      <div className="mb-6">
        <div className="flex  gap-4 mb-8 ">
          <PaymentHeaderCard />
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
              <TableDescriptionCellText />
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
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
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

            <option value="CASH" className="bg-black text-white">
              Efectivo
            </option>
            <option value="TC" className="bg-black text-white">
              Tarjeta
            </option>
          </select>
        </div>
        <hr />
      </div>
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
