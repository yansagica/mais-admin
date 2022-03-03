import React from "react";
import { Route, Routes } from "react-router-dom";
import SecEvasaoCurso from "../pages/SecEvasaoCurso";
import Principal from "../pages/Principal";
import SecEvasaoTurma from "../pages/SecEvasaoTurma";
import SecMatCodPag from "../pages/SecMatCodPag";
import SecAprovReprov from "../pages/SecAprovReprov";


const Rotas = () => {
   return (

      <Routes>
         <Route path="/" element={<Principal />} />
         <Route path="/secevasaocurso" element={<SecEvasaoCurso />} />
         <Route path="/secevasaoturma" element={<SecEvasaoTurma />} />
         <Route path="/secmatcodpag" element={<SecMatCodPag />} />
         <Route path="/secaprovreprov" element={<SecAprovReprov />} />
      </Routes>

   );
};

export default Rotas;
