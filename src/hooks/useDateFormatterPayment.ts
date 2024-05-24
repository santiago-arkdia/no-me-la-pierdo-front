// const useDateFormatterPayment = (dateString: string): string => {
//   const formatDate = (date: string): string => {
//     // Asegúrate de que la fecha se interpreta correctamente
//     const parsedDate = new Date(date + "T00:00:00"); // Agrega "T00:00:00" para fijar la fecha en la hora local
//     const options: Intl.DateTimeFormatOptions = {
//       day: "2-digit",
//       month: "long",
//       year: "numeric",
//     };
//     const formattedDate = parsedDate.toLocaleDateString("es-ES", options);

//     // Divide la cadena de fecha en partes y realiza modificaciones
//     const parts = formattedDate.split(" ");
//     const formattedParts = parts.map((part, index) => {
//       if (index === 0 && part === "de") {
//         return ",";
//       } else if (index === 1 && part === "de") {
//         return "";
//       } else {
//         return part;
//       }
//     });

//     // Une las partes modificadas de nuevo en una cadena
//     const modifiedDate = formattedParts.join(" ");

//     return modifiedDate;
//   };

//   return formatDate(dateString);
// };

// export default useDateFormatterPayment;
const useDateFormatterPayment = (dateString: string): string => {
  const formatDate = (date: string): string => {
    // Asegúrate de que la fecha se interpreta correctamente
    const parsedDate = new Date(date + "T00:00:00"); // Agrega "T00:00:00" para fijar la fecha en la hora local
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "long", // Utiliza "short" para abreviar el nombre del mes
      year: "numeric",
    };
    const formattedDate = parsedDate.toLocaleDateString("es-ES", options);

    // Divide la cadena de fecha en partes y realiza modificaciones
    const parts = formattedDate.split(" ");
    console.log(parts);
    const formattedParts = parts.map((part, index) => {
      if (index === 1 && part === "de") {
        return " ";
      } else if (index === 3 && part === "de") {
        return ",";
      } else {
        return part;
      }
    });

    // Une las partes modificadas de nuevo en una cadena
    const modifiedDate = formattedParts.join(" ");

    return modifiedDate;
  };

  return formatDate(dateString);
};

export default useDateFormatterPayment;
