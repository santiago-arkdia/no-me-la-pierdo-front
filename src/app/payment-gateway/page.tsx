"use client";
import { TableDescriptionCellText } from "app/components/atoms/TableDescriptionCellText";
import { TableProductSell } from "app/components/atoms/TableProductSell";
import { TableProductTotal } from "app/components/atoms/TableProductTotal";
import { ModalSell } from "app/components/molecules/ModalSell";
import { PaymentHeaderCard } from "app/components/molecules/PaymentHeaderCard";
import { useShoppingCart } from "app/hooks/useShoppingCart";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export default function PaymentGateway() {
  const [isModalOpen, setModalOpen] = useState(false);
  const { cart } = useShoppingCart();
  const [cartItems, setCartItems] = useState(cart);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const { data: session } = useSession();
  const user = session?.user?.id;
  const [name, setName] = useState<string>("");
  const [clientID, setClientID] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [emptyFields, setEmptyFields] = useState<string[]>([]);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const [ticketsData, setTicketsData] = useState({});

  const { addToCart, removeFromCart } = useShoppingCart();

  useEffect(() => {
    setCartItems(cart);
  }, [cart]);

  useEffect(() => {
    const tickets = localStorage.getItem("selectedTickets");
    const loadedTickets = tickets ? JSON.parse(tickets) : {};
    setTicketsData(loadedTickets);
  }, []);

  const handlePayment = () => {
    const emptyFieldsList = [];
    if (!name) emptyFieldsList.push("Nombre completo");
    if (!clientID) emptyFieldsList.push("Número de identificación");
    if (!email) emptyFieldsList.push("Correo electrónico");
    if (!phone) emptyFieldsList.push("Teléfono");
    if (!paymentMethod) emptyFieldsList.push("Método de pago");

    if (emptyFieldsList.length > 0) {
      // console.log("Por favor completa todos los campos antes de pagar.");
      setEmptyFields(emptyFieldsList);
    } else {
      const requestData = {
        userId: user,
        clientName: name,
        clientDocumentNumber: clientID,
        clientEmail: email,
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
            // console.log("La compra se ha realizado exitosamente.");
            openModal();
          } else {
            console.error("Error al realizar la compra:", response.statusText);
          }
        })
        .catch((error) => {
          console.error("Error al realizar la compra:", error);
        });
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    if (emptyFields.includes(fieldName)) {
      setEmptyFields(emptyFields.filter((field) => field !== fieldName));
    }
    switch (fieldName) {
      case "Nombre completo":
        setName(value);
        break;
      case "Número de identificación":
        setClientID(value);
        break;
      case "Correo electrónico":
        setEmail(value);
        break;
      case "Teléfono":
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handlePaymentMethodChange = (value: string) => {
    if (value && emptyFields.includes("Método de pago")) {
      setEmptyFields(emptyFields.filter((field) => field !== "Método de pago"));
    }
    setPaymentMethod(value);
  };

  return (
    <section className="mx-auto w-3/4 rounded-lg bg-black p-14 shadow-xl shadow-black/50">
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
                {cartItems.map((item) => (
                  <>
                    <TableProductSell key={item.id} item={item} />
                  </>
                ))}
                <TableProductTotal total={total} totalItems={totalItems} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="w-1/2 mx-auto mb-8">
        <h2 className="text-center text-3xl">Ingresa tus datos</h2>
        <div className="flex flex-wrap justify-between w-[500px] mx-auto text-sm text-blue">
          <div
            className={`w-full sm:w-1/2 p-2 ${
              emptyFields.includes("Nombre completo") ? " text-red-500" : ""
            }`}
          >
            <label htmlFor="client_name">Nombre completo</label>
            <input
              id="client_name"
              type="text"
              required
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
              onChange={(event) =>
                handleInputChange("Nombre completo", event.target.value)
              }
            />
          </div>
          <div
            className={`w-full sm:w-1/2 p-2 ${
              emptyFields.includes("Número de identificación")
                ? " text-red-500"
                : ""
            }`}
          >
            <label htmlFor="client_document_number">
              Número de identificación
            </label>
            <input
              id="client_document_number"
              type="number"
              required
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
              onChange={(event) =>
                handleInputChange(
                  "Número de identificación",
                  event.target.value
                )
              }
            />
          </div>
          <div
            className={`w-full sm:w-1/2 p-2 ${
              emptyFields.includes("Correo electrónico") ? "text-red-500" : ""
            }`}
          >
            <label htmlFor="client_email">Correo electrónico</label>
            <input
              id="client_email"
              type="email"
              required
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
              onChange={(event) =>
                handleInputChange("Correo electrónico", event.target.value)
              }
            />
          </div>
          <div
            className={`w-full sm:w-1/2 p-2 ${
              emptyFields.includes("Teléfono") ? "text-red-500" : ""
            }`}
          >
            <label htmlFor="client_phone">Teléfono</label>
            <input
              id="client_phone"
              type="number"
              required
              className="bg-transparent border px-4 py-2 rounded shadow-md text-white"
              onChange={(event) =>
                handleInputChange("Teléfono", event.target.value)
              }
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-2 mx-auto w-[292px] mb-6">
          <label
            htmlFor="payment"
            className={`text-blue ${
              emptyFields.includes("Método de pago") ? "text-red-500" : ""
            }`}
          >
            Método de Pago
          </label>
          <select
            required
            name="payment_method"
            id="payment"
            className="bg-transparent focus:ring-2 focus:outline-none focus:ring-blue font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center border shadow-md"
            onChange={(event) => handlePaymentMethodChange(event.target.value)}
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
        {emptyFields.length > 0 && (
          <p className="border border-red-500 px-5 bg-red-400 rounded-lg mb-2">
            Por favor completa los siguientes campos: {emptyFields.join(", ")}
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
