// "use client";
// import Image from "next/image";
// import React, { useState } from "react";
// import { FaRegEyeSlash } from "react-icons/fa6";
// import { IoMdEye } from "react-icons/io";

// export default function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   return (
//     <div className="flex min-h-screen">
//       {/* Columna con imagen */}
//       <div className="w-3/5 relative hidden lg:block">
//         <Image
//           src="/images/jirafa.jpg"
//           alt="Imagen de fondo"
//           layout="fill"
//           objectFit="cover"
//         />
//       </div>

//       {/* Columna del formulario de login */}
//       <div className="flex-1 flex justify-center items-center px-8">
//         <div className="w-full max-w-md">
//           {/* <div className="h-36 w-72 relative -mt-96 ">
//             <Image
//               src="/logo.svg"
//               alt="Logo"
//               width={280}
//               height={140}
//               layout="fixed"
//               objectFit="cover"
//             />
//           </div> */}
//           <div className="flex justify-center items-start w-full h-36 relative">
//             <Image
//               src="/logo.svg"
//               alt="Logo"
//               width={280}
//               height={140}
//               layout="fixed"
//               objectFit="cover"
//             />
//           </div>
//           <div className="mb-16 text-center">
//             <h2 className="mt-6  text-3xl font-extrabold text-gray-900 pb-6">
//               Sigue disfrutando lo que más te gusta
//             </h2>
//             <p>Ingresa tus datos</p>
//           </div>
//           {/* Formulario */}
//           <form className="mt-8 space-y-6 mb-8" action="#" method="POST">
//             <input type="hidden" name="remember" value="true" />
//             <div className="rounded-md shadow-sm -space-y-px">
//               <div className="mb-8">
//                 <label htmlFor="email-address" className="text-base text-blue ">
//                   Correo electrónico
//                 </label>
//                 <input
//                   id="email-address"
//                   name="email"
//                   type="email"
//                   autoComplete="email"
//                   required
//                   className="appearance-none rounded-none bg-background relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Correo electrónico"
//                 />
//               </div>
//               <div className="relative">
//                 <label htmlFor="password" className="text-base text-blue">
//                   Contraseña
//                 </label>
//                 <input
//                   id="password"
//                   name="password"
//                   type={showPassword ? "text" : "password"}
//                   autoComplete="current-password"
//                   required
//                   className="appearance-none bg-background rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                   placeholder="Contraseña"
//                 />
//                 <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
//                   {showPassword ? (
//                     <FaRegEyeSlash
//                       className="h-6 w-6 text-gray-700 cursor-pointer"
//                       onClick={() => setShowPassword(false)}
//                     />
//                   ) : (
//                     <IoMdEye
//                       className="h-6 w-6 text-gray-700 cursor-pointer"
//                       onClick={() => setShowPassword(true)}
//                     />
//                   )}
//                 </div>
//                 <p className="text-blue text-xs text-end mt-1">
//                   ¿Olvidaste tu contraseña?
//                 </p>
//               </div>
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="relative w-2/5 flex justify-center py-2 px-4 border border-blue text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-blue hover:text-black"
//               >
//                 Iniciar sesión
//               </button>
//             </div>
//           </form>
//           <hr />
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaRegEyeSlash } from "react-icons/fa6";
import { IoMdEye } from "react-icons/io";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex w-full h-full ">
      {/* Columna con imagen */}
      <div
        className="w-1/2 flex justify-center items-center bg-cover relative rounded-xl"
        // style={{ backgroundImage: "url('/images/jirafa.jpg')" }}
        style={{
          backgroundImage: "url('/images/jirafa.jpg')",
          backgroundSize: "cover", // Asegura que la imagen cubra completamente el div
          //   backgroundPosition: "center", // Centra la imagen en el div
          backgroundRepeat: "no-repeat", // Evita que la imagen se repita
        }}
      >
        {/* Opcionalmente, se puede usar Image de next/image si necesitas optimización */}
      </div>

      {/* Columna del formulario de login */}
      <div className="w-1/2 h-full flex flex-col justify-center items-center px-4">
        <div className="w-full">
          <div className="flex justify-center mb-8">
            {" "}
            {/* Aumentado de mb-2 a mb-8 */}
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
            {" "}
            {/* Aumentado de mb-4 a mb-8 */}
            <h2 className="text-2xl font-bold mb-4 mx-32">
              Sigue disfrutando lo que más te gusta
            </h2>
            <p className="text-sm">Iniciar Sesión</p>
          </div>

          {/* Formulario */}
          <form className="space-y-8 px-32">
            {" "}
            {/* Incrementado space-y-4 a space-y-8 y px-32 posiblemente reducido si es necesario */}
            <div>
              <label
                htmlFor="email-address"
                className="block text-sm font-medium text-blue"
              >
                Usuario
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-2 bg-transparent block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm"
                placeholder="Correo electrónico"
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
          </form>
        </div>
      </div>
    </div>
  );
}
