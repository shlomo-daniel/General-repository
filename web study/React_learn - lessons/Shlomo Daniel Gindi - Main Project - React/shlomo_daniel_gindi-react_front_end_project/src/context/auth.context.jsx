import { createContext, useContext, useState } from "react";
import usersService from "../../services/usersService";

export const authContext = createContext({
  user: null,
  login: null,
  logout: null,
  register: null,
});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(usersService.getUser());

  const refreshUser = () => setUser(usersService.getUser());

  const login = async (credentials) => {
    const response = await usersService.logIn(credentials);

    refreshUser();
    return response;
  };

  const logout = () => {
    usersService.logout();
    refreshUser();
  };

  return (
    <authContext.Provider
      value={{
        user,
        login,
        logout,
        register: usersService.createUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
}
export const useAuth = () => useContext(authContext);
