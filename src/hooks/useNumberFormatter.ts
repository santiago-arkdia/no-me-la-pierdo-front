import { useState, useEffect } from "react";

export function useNumberFormatter(originalNumber: number) {
  const [formattedNumber, setFormattedNumber] = useState("");

  useEffect(() => {
    const numberString = originalNumber.toString();

    // expresion regular para agregar puntos cada 3 dígitos
    const regex = /\B(?=(\d{3})+(?!\d))/g;
    const formattedNumberString = numberString.replace(regex, ".");
    setFormattedNumber(formattedNumberString);
  }, [originalNumber]);

  return formattedNumber;
}
