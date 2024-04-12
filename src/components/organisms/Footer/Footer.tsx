import { FooterMenuList } from "app/components/molecules/FooterMenuList";
import Image from "next/image";
import { BiLogoTiktok } from "react-icons/bi";
import { FaDiscord, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const dataFooter = {
  footer: {
    sections: [
      {
        title: "Enlaces rápidos",
        list: [
          { name: "¡Recoge tus boletas!", type: "list" },
          { name: "Puntos de venta", type: "list" },
          { name: "Ticketera News", type: "list" },
          { name: "Promociones", type: "list" },
        ],
      },
      {
        title: "",
        list: [
          { name: "Política de privacidad", type: "list" },
          { name: "Términos y Condiciones", type: "list" },
          { name: "PQRS", type: "list" },
          { name: "SIC", type: "list" },
        ],
      },
      {
        title: "Información",
        list: [
          { name: "312 8952369", type: "phone" },
          { name: "hello@ticketera.com", type: "mail" },
          { name: "Calle 109 # 18B - 32, Bogotá D.C.", type: "addres" },
        ],
      },
    ],
  },
};

export const Footer = () => {
  return (
    <footer>
      {/* Icono */}
      <div className="flex justify-center items-center">
        <a href="#" className="flex items-center py-5 px-2">
          <Image
            src={"/logo.svg"}
            alt="Logo Tiketera"
            width={184}
            height={90}
          />
        </a>
      </div>
      {/*  Logos Redes  Sociales */}
      <div className="inline-flex w-full items-center justify-center">
        <div className="flex justify-center gap-x-6 absolute bg-background px-10">
          <a href="#" className="hover:text-blue">
            <FaFacebookF size={24} />
          </a>
          <a href="#" className="hover:text-blue">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="hover:text-blue">
            {" "}
            <FaXTwitter size={24} />
          </a>
          <a href="#" className="hover:text-blue">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="hover:text-blue">
            {" "}
            <BiLogoTiktok size={24} />
          </a>
          <a href="#" className="hover:text-blue">
            {" "}
            <FaDiscord size={24} />
          </a>
        </div>
        <hr className="my-8 h-px w-5/6  sm:mx-auto lg:my-8  " />
      </div>
      {/*  Menu */}
      {/* <div className="flex  items-center justify-center">
        <div>
          <div className="grid grid-cols-3 gap-8 px-8 py-6 md:grid-cols-3 lg:py-8 sm:grid-cols-2 ">
            {dataFooter.footer.sections.map((section, index) => (
              <FooterMenuList key={index} section={section} />
            ))}
          </div>
        </div>
      </div> */}
      <div className="flex items-center justify-center">
        <div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-8 py-6 lg:py-8">
            {dataFooter.footer.sections.map((section, index) => (
              <FooterMenuList key={index} section={section} />
            ))}
          </div>
        </div>
      </div>
      {/*  Descarga App */}
      <div className="text-center">
        <p>Descarga nuestra aplicación móvil</p>
        <div className="inline-flex w-full items-center justify-center">
          <div className="flex justify-center gap-x-2 absolute bg-background px-4">
            <Image
              src={"/images/appstore.png"}
              alt=""
              width={126}
              height={42}
            />
            <Image
              src={"/images/playstore.png"}
              alt=""
              width={126}
              height={42}
            />
          </div>
          <hr className="my-8 h-px w-5/6 border-gray-200 sm:mx-auto lg:my-8  " />
        </div>
      </div>
      {/*  Derechos de autor */}
      <div className=" text-center mt-10">
        {/* <div className=" px-96 text-center my-10"> */}
        <div className="px-96">
          <hr className="  border-gray-200 sm:mx-auto  " />
        </div>
        <aside className=" text-lg font-medium py-4">
          <p>Copyright 2022 © Todos los derechos reservados</p>
        </aside>
      </div>
    </footer>
  );
};
