import { FaPhoneVolume } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { PiMapPinLineFill } from "react-icons/pi";
import { SiTarget } from "react-icons/si";

export const FooterMenuList = ({ section }: any) => {
  const renderIcon = (type: string) => {
    switch (type) {
      case "list":
        return <SiTarget className="inline-block mr-2" />;
      case "phone":
        return <FaPhoneVolume className="inline-block mr-2 mb-2" size={30} />;
      case "mail":
        return <IoIosMail className="inline-block mr-2 mb-2" size={30} />;
      case "addres":
        return (
          <PiMapPinLineFill className="inline-block mr-2 mb-2" size={30} />
        );
      default:
        return <SiTarget className="inline-block mr-2" />;
    }
  };
  return (
    <div>
      <div className="mb-6 h-8">
        <h3 className="text-sm font-semibold uppercase text-gray-900 dark:text-white">
          {section.title}
        </h3>
      </div>
      <ul className="font-medium text-gray-500 dark:text-gray-400">
        {section.list.map((link: any, index: number) => (
          <li className="mb-4" key={index}>
            <a href="#" className="hover:text-blue ">
              {renderIcon(link.type)}
              <span className="ml-2">{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
