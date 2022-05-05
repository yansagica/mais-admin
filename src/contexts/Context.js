import { createContext } from "react";

// var cnpj = "83369678000173";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  return (
    <AuthContext.Provider
      value={{ cnpj: "04159727000177", nome: "Yan Sagica" }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
