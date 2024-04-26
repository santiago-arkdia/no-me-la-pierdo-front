import { useNumberFormatter } from "app/hooks/useNumberFormatter";

export const TableProductTotal = ({ total, totalItems }: any) => {
  return (
    <tr className="border-b text-blue">
      <th
        scope="row"
        className="px-6 py-4 font-medium  whitespace-nowrap pl-20 "
        style={{ width: "50%" }}
      >
        Total
      </th>
      <td className="px-6 py-4 text-center" style={{ width: "16.66%" }}>
        {useNumberFormatter(totalItems)}
      </td>
      <td className="px-6 py-4 " style={{ width: "16.66%" }}>
        $ {useNumberFormatter(total)}
      </td>
    </tr>
  );
};
