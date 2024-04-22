// import { useState, useEffect } from "react";
// // const jwt_decode = require("jwt-decode") as any;
// import * as jwt_decode from "jwt-decode";

// interface User {
//   email: string;
//   name: string;
//   issuedAt: number;
//   expiration: number;
// }

// export const useAuth = () => {
//   const [user, setUser] = useState<User | null>(null);
//   console.log("aca ANdo");
//   useEffect(() => {
//     const token = localStorage.getItem("accessToken");
//     const userToken = localStorage.getItem("user");
//     console.log("token", token);
//     if (token) {
//       try {
//         const decoded: any = jwt_decode(token);
//         if (
//           decoded &&
//           decoded.email &&
//           decoded.name &&
//           decoded.iat &&
//           decoded.exp
//         ) {
//           setUser({
//             email: decoded.email,
//             name: decoded.name,
//             issuedAt: decoded.iat,
//             expiration: decoded.exp,
//           });
//         }
//       } catch (error) {
//         console.error("Failed to decode JWT", error);
//       }
//     }
//   }, []);

//   return user;
// };

// export default useAuth;
// import { useState, useEffect } from "react";

// interface User {
//   id: string;
//   email: string;
//   name: string;
// }

// const useAuth = () => {
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const userFromStorage = localStorage.getItem("user");
//     if (userFromStorage) {
//       setUser(JSON.parse(userFromStorage));
//     }
//   }, []);

//   const updateUser = (userData: any) => {
//     if (userData && userData.data && userData.data.user) {
//       const { id, email, name } = userData.data.user;
//       const user = { id, email, name };
//       setUser(user);
//       localStorage.setItem("user", JSON.stringify(user));
//     } else {
//       setUser(null);
//       localStorage.removeItem("user");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("accessToken");
//     localStorage.removeItem("user");
//     setUser(null);
//   };

//   return { user, updateUser, logout };
// };

// export default useAuth;

import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [userChanged, setUserChanged] = useState<boolean>(false); // Nuevo estado userChanged

  useEffect(() => {
    const userFromStorage = localStorage.getItem("user");
    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, []);

  const updateUser = (userData: any) => {
    if (userData && userData.data && userData.data.user) {
      const { id, email, name } = userData.data.user;
      const user = { id, email, name };
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user));
      setUserChanged(true); // Actualiza userChanged al modificar el usuario
    } else {
      setUser(null);
      localStorage.removeItem("user");
      setUserChanged(true); // Actualiza userChanged al modificar el usuario
    }
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("user");
    setUser(null);
    setUserChanged(true); // Actualiza userChanged al cerrar sesión
  };

  return { user, updateUser, logout, userChanged }; // Devuelve userChanged junto con otros valores
};

export default useAuth;
