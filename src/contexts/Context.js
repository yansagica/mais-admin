// import { createContext, useState } from "react";
// import { getToken } from "../servicos/auth";
// import jwt_decoded from "jwt-decode";

// export const AuthContext = createContext({});

// function AuthProvider({ children }) {
//   const [dadosCnpj, setDadosCnpj] = useState("");
//   const [dadosNome, setDadosNome] = useState("");

//   const token = jwt_decoded(getToken());
//   const cnpj = token.cnpj;
//   const nome = token.nome;

//   setDadosCnpj(cnpj);
//   setDadosNome(nome);

//   const dados = {
//     cnpj: dadosCnpj,
//     nome: dadosNome,
//   };

//   return <AuthContext.Provider value={dados}>{children}</AuthContext.Provider>;
// }

// export default AuthProvider;
