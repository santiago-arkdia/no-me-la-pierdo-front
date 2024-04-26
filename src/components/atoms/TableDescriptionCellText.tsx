import React from "react";

export const TableDescriptionCellText = () => {
  return (
    <thead className="text-base uppercase">
      <tr>
        <th
          scope="col"
          className="px-6 py-3 border-b-2 border-gray-200 pl-20"
          style={{ width: "53%" }}
        >
          Descripción
        </th>
        <th
          scope="col"
          className="px-6 py-3 border-b-2 border-gray-200"
          style={{ width: "16%" }}
        >
          Cantidad
        </th>
        <th
          scope="col"
          className="px-6 py-3 border-b-2 border-gray-200"
          style={{ width: "16%" }}
        >
          Valor
        </th>
        <th
          scope="col"
          className="px-6 py-3 border-b-2 border-gray-200"
          style={{ width: "16%" }}
        ></th>
      </tr>
    </thead>
  );
};
