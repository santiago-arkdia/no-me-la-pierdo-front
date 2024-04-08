import { SubMenuHeaderListItems } from "../atoms/SubMenuListItem";

const dataSubMenu = {
  menu: {
    list: [
      { name: "Conciertos", url: "#", active: "true" },
      { name: "Deportes", url: "#" },
      { name: "Teatro", url: "#" },
      { name: "Cultural", url: "#" },
      { name: "Comedia", url: "#" },
      { name: "Familiares", url: "#" },
      { name: "Festivales", url: "#" },
    ],
  },
};

export const SubMenuHeader = () => {
  return (
    <div className="max-w-4xl mx-auto px-8 ">
      <ul className="flex justify-between items-center text-basel ">
        <li>
          {dataSubMenu.menu.list.map((dataSub, index) => (
            <SubMenuHeaderListItems data={dataSub} key={index} />
          ))}
        </li>
      </ul>
    </div>
  );
};
