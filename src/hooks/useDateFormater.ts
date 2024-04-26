import { useState, useEffect } from "react";

function useDateFormatter(originalDate: any) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    const año = originalDate.getFullYear();
    const mes = originalDate.getMonth() + 1;
    const día = originalDate.getDate();

    const mesFormateado = mes < 10 ? "0" + mes : mes;
    const díaFormateado = día < 10 ? "0" + día : día;

    const fechaFormateada = `${año}-${mesFormateado}-${díaFormateado}`;

    setFormattedDate(fechaFormateada);
  }, [originalDate]);

  return formattedDate;
}

export default useDateFormatter;
