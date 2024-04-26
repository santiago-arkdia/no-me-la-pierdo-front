import { useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  name: string;
}

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

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
    } else {
      setUser(null);
      localStorage.removeItem("user");
    }
  };

  return { user, updateUser };
};

export default useAuth;
