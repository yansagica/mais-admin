import { createContext } from "react";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const dados = {
    nome: "Yan Sagica",
    cnpj: "04159727000177",
  };

  return <AuthContext.Provider value={dados}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
