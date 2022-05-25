import React from "react";

export const frasePeriodo = (pmes) => {
  let frase = "";
  switch (pmes) {
    case 0:
      frase = "* Serão considerados os valores de Janeiro";
      break;
    case 1:
      frase = "* Serão considerados os valores de Janeiro à Fevereiro";
      break;
    case 2:
      frase = "* Serão considerados os valores de Janeiro à Março";
      break;
    case 3:
      frase = "* Serão considerados os valores de Janeiro à Abril";
      break;
    case 4:
      frase = "* Serão considerados os valores de Janeiro à Maio";
      break;
    case 5:
      frase = "* Serão considerados os valores de Janeiro à Junho";
      break;
    case 6:
      frase = "* Serão considerados os valores de Janeiro à Julho";
      break;
    case 7:
      frase = "* Serão considerados os valores de Janeiro à Agosto";
      break;
    case 8:
      frase = "* Serão considerados os valores de Janeiro à Setembro";
      break;
    case 9:
      frase = "* Serão considerados os valores de Janeiro à Outubro";
      break;
    case 10:
      frase = "* Serão considerados os valores de Janeiro à Novembro";
      break;
    default:
      frase = "* Serão considerados os valores de Janeiro à Dezembro";
      break;
  }
  return frase;
};
