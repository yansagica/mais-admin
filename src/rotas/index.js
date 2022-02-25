import React from "react";
import { Route, Routes } from "react-router-dom";
import SecEvasaoCurso from "../pages/SecEvasaoCurso";
import Principal from "../pages/Principal";


const Rotas = () => {
   return (

      <Routes>
         <Route path="/" element={<Principal />} />
         <Route path="/secevasaocurso" element={<SecEvasaoCurso />} />
      </Routes>

   );
};

export default Rotas;
