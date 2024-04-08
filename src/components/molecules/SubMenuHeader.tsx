// import { SubMenuHeaderListItems } from "../atoms/SubMenuListItem";

// const dataSubMenu = {
//   menu: {
//     list: [
//       { name: "Conciertos", url: "#", active: "true" },
//       { name: "Deportes", url: "#" },
//       { name: "Teatro", url: "#" },
//       { name: "Cultural", url: "#" },
//       { name: "Comedia", url: "#" },
//       { name: "Familiares", url: "#" },
//       { name: "Festivales", url: "#" },
//     ],
//   },
// };

// export const SubMenuHeader = () => {
//   return (
//     <div className="max-w-4xl mx-auto px-8 pb-6 bg-red-800">
//       <ul className="flex justify-between items-center text-basel ">
//         <li>
//           {dataSubMenu.menu.list.map((dataSub, index) => (
//             <SubMenuHeaderListItems data={dataSub} key={index} />
//           ))}
//         </li>
//       </ul>
//     </div>
//   );
// };

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
    <div className="overflow-x-auto">
      <div className="max-w-4xl mx-auto px-8 pb-4 ">
        <ul className="flex justify-between items-center text-sm">
          {dataSubMenu.menu.list.map((dataSub, index) => (
            <SubMenuHeaderListItems data={dataSub} key={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};
