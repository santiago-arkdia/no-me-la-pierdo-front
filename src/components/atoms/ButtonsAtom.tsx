import { IconType } from "react-icons";

interface ButtonProps {
  icon: IconType;
  active?: boolean;
  onClick?: () => void; // Propiedad opcional active
}

const ButtonAtom = ({ icon, active, onClick }: ButtonProps) => {
  const IconComponent = icon as IconType;
  return (
    <button
      className={`w-[20px] h-[20px] rounded-md border border-blue ${
        active ? "bg-blue" : "bg-gray-200"
      }`}
      style={{ border: "2px solid #00DBDB" }}
      onClick={onClick}
      disabled={!active}
    >
      <IconComponent />
    </button>
  );
};

export default ButtonAtom;
