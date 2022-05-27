import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import { FaUsers, FaUserFriends } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import { BsBook } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { GiPapers } from "react-icons/gi";
import "../SecEvasaoCurso/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";

export default function Biblioteca() {
  const [qtdObras, setQtdObras] = useState([]);
  const [qtdObrasExe, setQtdObrasExe] = useState([]);
  const [qtdPeriodicos, setQtdPeriodicos] = useState([]);
  const [qtdPeriodicosExe, setQtdPeriodicosExe] = useState([]);

  const cnpj = getCnpj();

  useEffect(() => {
    getTodosRegistros();
  }, []);

  const getTodosRegistros = async () => {
    const resp = await api.get(`bib/${cnpj}`);
    const allDados = resp.data;

    setQtdObras(resp.data[0].qtdobr);
    setQtdObrasExe(resp.data[0].qtdobrexe);
    setQtdPeriodicos(resp.data[0].qtdper);
    setQtdPeriodicosExe(resp.data[0].qtdperexe);
  };

  return (
    <>
      <div className="sb-nav-fixed">
        <Header />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <div className="bg-light" id="layoutSidenav_content">
            <main>
              <div className="container-fluid px-4">
                <h3 className="mt-4 mb-4 fw-bold texto-roxo">Acervo</h3>
                <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-xl-3">
                      <div className="card bg-c-green order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">Obras</h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <BsBook size="55px" />
                            <span className="h1 fw-bold">{qtdObras}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-xl-3">
                      <div className="card bg-c-blue order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Exemplares de Obras
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <ImBooks color="" size="55px" />
                            <span className="h1 fw-bold">{qtdObrasExe}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-xl-3">
                      <div className="card bg-c-red order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Periódicos
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <GiPapers color="" size="55px" />
                            <span className="h1 fw-bold">{qtdPeriodicos}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-xl-3">
                      <div className="card bg-c-orange order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Exemplares de Periódicos
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <ImBooks color="" size="55px" />
                            <span className="h1 fw-bold">
                              {qtdPeriodicosExe}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}
