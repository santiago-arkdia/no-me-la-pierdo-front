"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const ButtonBuy = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const token = window.localStorage.getItem("accessToken");

  useEffect(() => {
    if (typeof window !== "undefined") {
      //   const token = window.localStorage.getItem("accessToken");
      setIsAuthenticated(!!token);
      console.log("token", token);
    }
  }, [token]);
  return (
    <>
      {isAuthenticated ? (
        <Link
          className="text-white px-20 py-2 rounded-full border border-blue hover:bg-blue hover:text-black"
          href="/paymentGateway"
        >
          Comprar entradas
        </Link>
      ) : // <p className="text-white px-20 py-2 rounded-full border border-blue hover:bg-red-500 hover:text-black">
      //   Comprar entradas
      // </p>
      null}
    </>
  );
};
