import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";

import { BsBook } from "react-icons/bs";
import { ImBooks } from "react-icons/im";
import { GiPapers } from "react-icons/gi";

import "../SecEvasaoCurso/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";
import "../Biblioteca/style.css";

export default function Biblioteca() {
  const [qtdObras, setQtdObras] = useState([]);
  const [qtdObrasExe, setQtdObrasExe] = useState([]);
  const [qtdPeriodicos, setQtdPeriodicos] = useState([]);
  const [qtdPeriodicosExe, setQtdPeriodicosExe] = useState([]);
  const [obrasMaisEmp1, setObrasMaisEmp1] = useState([]);
  const [obrasMaisEmp2, setObrasMaisEmp2] = useState([]);
  const [obrasMaisEmp3, setObrasMaisEmp3] = useState([]);
  const [obrasMaisEmp4, setObrasMaisEmp4] = useState([]);
  const [obrasMaisEmp5, setObrasMaisEmp5] = useState([]);
  const [alunosMaisEmp1, setAlunosMaisEmp1] = useState([]);
  const [alunosMaisEmp2, setAlunosMaisEmp2] = useState([]);
  const [alunosMaisEmp3, setAlunosMaisEmp3] = useState([]);
  const [alunosMaisEmp4, setAlunosMaisEmp4] = useState([]);
  const [alunosMaisEmp5, setAlunosMaisEmp5] = useState([]);

  const cnpj = getCnpj();

  useEffect(() => {
    getTodosRegistros();
  }, []);

  const getTodosRegistros = async () => {
    const resp = await api.get(`bib/${cnpj}`);
    const allData = resp.data;

    // ESTATISTICA DE OBRAS
    setQtdObras(allData[0].qtdobr);
    setQtdObrasExe(allData[0].qtdobrexe);
    setQtdPeriodicos(allData[0].qtdper);
    setQtdPeriodicosExe(allData[0].qtdperexe);

    // 5 MAIS LIDAS
    setObrasMaisEmp1(allData[0].obramaisemp1);
    setObrasMaisEmp2(allData[0].obramaisemp2);
    setObrasMaisEmp3(allData[0].obramaisemp3);
    setObrasMaisEmp4(allData[0].obramaisemp4);
    setObrasMaisEmp5(allData[0].obramaisemp5);

    // 5 ALUNOS QUE MAIS EMPRESTAM
    setAlunosMaisEmp1(allData[0].alumaisemp1);
    setAlunosMaisEmp2(allData[0].alumaisemp2);
    setAlunosMaisEmp3(allData[0].alumaisemp3);
    setAlunosMaisEmp4(allData[0].alumaisemp4);
    setAlunosMaisEmp5(allData[0].alumaisemp5);
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

                  {/* <div className="row">
                    <div className="col-md-4 col-xl-6">
                      <div className="card bg-c-green order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Qtd. de Empréstimos
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <BiBookHeart size="55px" />
                            <span className="h1 fw-bold">{qtdObras}</span>
                          </div>
                        </div>
                      </div>
                    </div> */}

                  {/* <div className="col-md-4 col-xl-6">
                      <div className="card bg-c-blue order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Qtd. de Consultas
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <BiBookReader color="" size="55px" />
                            <span className="h1 fw-bold">{qtdObrasExe}</span>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
                <h3 className="mt-4 mb-4 fw-bold texto-roxo">Top 5</h3>
                <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-md-4 col-xl-6">
                      <div
                        className="card order-card"
                        style={{ backgroundColor: "#7998cd" }}
                      >
                        <div className="card-block">
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsTrophy size="55px" /> */}
                            <div className="d-flex flex-column justify-content-center">
                              <span className="h2 fw-bold">
                                Os mais emprestados
                              </span>
                              <span className="small fw-bold">
                                {obrasMaisEmp1}
                              </span>
                              <span className="small fw-bold">
                                {obrasMaisEmp2}
                              </span>
                              <span className="small fw-bold">
                                {obrasMaisEmp3}
                              </span>
                              <span className="small fw-bold">
                                {obrasMaisEmp4}
                              </span>
                              <span className="small fw-bold">
                                {obrasMaisEmp5}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-6">
                      <div
                        className="card order-card"
                        style={{ backgroundColor: "#7998cd" }}
                      >
                        <div className="card-block">
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <FaMedal size="55px" /> */}
                            <div className="d-flex flex-column justify-content-center">
                              <span className="h2 fw-bold">
                                Alunos que mais emprestam
                              </span>
                              <span className="small fw-bold">
                                {alunosMaisEmp1}
                              </span>
                              <span className="small fw-bold">
                                {alunosMaisEmp2}
                              </span>
                              <span className="small fw-bold">
                                {alunosMaisEmp3}
                              </span>
                              <span className="small fw-bold">
                                {alunosMaisEmp4}
                              </span>
                              <span className="small fw-bold">
                                {alunosMaisEmp5}
                              </span>
                            </div>
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
