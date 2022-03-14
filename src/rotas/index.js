import React from "react";
import { Route, Routes } from "react-router-dom";
import SecEvasaoCurso from "../pages/SecEvasaoCurso";
import Principal from "../pages/Principal";
import SecEvasaoTurma from "../pages/SecEvasaoTurma";
import SecMatCodPag from "../pages/SecMatCodPag";
import SecAprovReprov from "../pages/SecAprovReprov";
import FinFatInaGer from "../pages/FinFatInaGer";
import FinFatInaCur from "../pages/FinFatInaCur";
import FinFatDespMes from "../pages/FinFatDespMes";
import FinFatPrevReceb from "../pages/FinFatPrevReceb";
import FinFatDia from "../pages/FinFatDia";
import FinInaTurma from "../pages/FinInaTurma";
import FinResCaixaDia from "../pages/FinResCaixaDia";
import FinResCaixaDiaForpag from "../pages/FinResCaixaDiaForpag";
import { Login } from "../pages/Login";


const Rotas = () => {
   return (

      <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/home" element={<Principal />} />
         <Route path="/secevasaocurso" element={<SecEvasaoCurso />} />
         <Route path="/secevasaoturma" element={<SecEvasaoTurma />} />
         <Route path="/secmatcodpag" element={<SecMatCodPag />} />
         <Route path="/secaprovreprov" element={<SecAprovReprov />} />
         <Route path="/finfatinager" element={<FinFatInaGer />} />
         <Route path="/finfatinacur" element={<FinFatInaCur />} />
         <Route path="/finfatdespmes" element={<FinFatDespMes />} />
         <Route path="/finfatprevreceb" element={<FinFatPrevReceb />} />
         <Route path="/finfatdia" element={<FinFatDia />} />
         <Route path="/fininaturma" element={<FinInaTurma />} />
         <Route path="/finrescaixadia" element={<FinResCaixaDia />} />
         <Route path="/finrescaixadiaforpag" element={<FinResCaixaDiaForpag />} />
      </Routes>

   );
};

export default Rotas;
