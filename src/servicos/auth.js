import jwt_decode from "jwt-decode";
export const TOKEN_KEY = "path-token";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);

export const login = (token) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const getCnpj = () => {
  const chave = jwt_decode(getToken());
  return chave.cnpj;
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};
