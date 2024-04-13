import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import ButtonAtom from "./ButtonsAtom";
import { IoMdClose } from "react-icons/io";

export const TableProductSell = () => {
  return (
    <tr className="border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium  whitespace-nowrap pl-20"
        style={{ width: "50%" }}
      >
        Apple MacBook Pro 17
      </th>
      <td className="px-6 py-4" style={{ width: "16.66%" }}>
        Silver
      </td>
      <td className="px-6 py-4" style={{ width: "16.66%" }}>
        <ButtonAtom icon={CgMathMinus} /> 1000 <ButtonAtom icon={CgMathPlus} />
      </td>
      <td className="px-6 py-4" style={{ width: "16.66%" }}>
        <ButtonAtom icon={IoMdClose} />
      </td>
    </tr>
  );
};
