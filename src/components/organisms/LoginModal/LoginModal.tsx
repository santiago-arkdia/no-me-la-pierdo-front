"use client";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";

export default function LoginModal() {
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    // console.log(responseNextAuth);

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }
  };

  return (
    <div className="flex w-full h-full ">
      {/* Columna con imagen */}
      <div
        className="w-1/2 flex justify-center items-center bg-cover relative rounded-xl"
        style={{
          backgroundImage: "url('/images/jirafa.jpg')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Columna del formulario de login */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center px-4">
        <div className="w-full">
          <div className="flex justify-center mb-8">
            <Image
              src="/logo.svg"
              alt="Logo"
              width={200}
              height={140}
              layout="fixed"
              objectFit="cover"
            />
          </div>
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-4 mx-32">
              Sigue disfrutando lo que más te gusta
            </h2>
            <p className="text-sm">Iniciar Sesión</p>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-8 px-32">
            <div>
              <label
                htmlFor="emai"
                className="block text-sm font-medium text-blue"
              >
                Usuario
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Correo electrónico"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-blue"
              >
                Contraseña
              </label>
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                className="mt-1 bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Contraseña"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {showPassword ? (
                  <FaRegEyeSlash
                    className="h-5 w-5 text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <IoMdEye
                    className="h-5 w-5 text-gray-700 cursor-pointer"
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </div>
              <p className="text-xs text-end text-blue mt-2">
                ¿Olvidaste tu contraseña?
              </p>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="relative w-2/5 flex justify-center py-2 px-2 border border-blue text-sm font-medium rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-blue hover:text-black"
              >
                Ingresar
              </button>
            </div>
            <hr />
            {errors.length > 0 && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded-md">
                <ul className="list-disc ml-4">
                  {errors.map((error) => (
                    <li key={error}>{error}</li>
                  ))}
                </ul>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
