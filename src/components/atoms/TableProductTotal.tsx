import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import ButtonAtom from "./ButtonsAtom";
import { IoMdClose } from "react-icons/io";

export const TableProductTotal = ({ total, totalItems }: any) => {
  console.log(total);
  return (
    <tr className="border-b text-blue">
      <th
        scope="row"
        className="px-6 py-4 font-medium  whitespace-nowrap pl-20"
        style={{ width: "50%" }}
      >
        Total
      </th>
      <td className="px-6 py-4 " style={{ width: "16.66%" }}>
        {totalItems}
      </td>
      <td className="px-6 py-4 " style={{ width: "16.66%" }}>
        {total}
      </td>
    </tr>
  );
};
