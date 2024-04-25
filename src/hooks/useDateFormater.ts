import { useState, useEffect } from "react";

function useDateFormatter(originalDate: any) {
  const [formattedDate, setFormattedDate] = useState("");

  useEffect(() => {
    // Obtener el año, mes y día de la fecha original
    const año = originalDate.getFullYear();
    const mes = originalDate.getMonth() + 1; // Se suma 1 porque los meses en JavaScript van de 0 a 11
    const día = originalDate.getDate();

    // Formatear el mes y el día para que tengan dos dígitos
    const mesFormateado = mes < 10 ? "0" + mes : mes;
    const díaFormateado = día < 10 ? "0" + día : día;

    // Construir la cadena de fecha en el formato deseado (YYYY-MM-DD)
    const fechaFormateada = `${año}-${mesFormateado}-${díaFormateado}`;

    // Actualizar el estado con la fecha formateada
    setFormattedDate(fechaFormateada);
  }, [originalDate]);

  return formattedDate;
}

export default useDateFormatter;
