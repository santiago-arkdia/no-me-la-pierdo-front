import Image from "next/image";

export default function MessageSuccessfulSell({ onClose }: any) {
  return (
    <div className="flex w-full h-full">
      <div
        className="w-1/2 flex justify-center items-center bg-cover rounded-xl"
        style={{
          backgroundImage: "url('/images/jirafa.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      {/* Columna del mensaje  */}
      <div className="w-1/2 h-full flex flex-col px-4">
        <div className="w-full">
          <div className="flex justify-center mb-8">
            <Image
              src="/mail.svg"
              alt="Logo"
              width={80}
              height={80}
              layout="fixed"
              objectFit="cover"
            />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-xl font-bold mb-4">Pago recibido</h2>
            <p className="text-sm">
              Hemos enviado un correo electrónico con un{" "}
              <span className="text-blue">código QR</span> para que puedas
              acceder fácilmente.
            </p>
            <p className="text-sm">¡Disfruta del evento!</p>
          </div>
          <div className="flex justify-center">
            <button
              onClick={onClose}
              className="border border-blue rounded-full px-10 py-2 hover:bg-blue  hover:text-black "
              style={{ zIndex: 10 }}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
