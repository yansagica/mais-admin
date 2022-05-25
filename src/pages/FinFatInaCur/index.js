import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import Pizza from "../../components/Graficos/Pizza";
import "../FinFatInaCur/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";
import { frasePeriodo } from "../../Funcoes";

export default function FinFatInaCur() {
  const [faturamento, setFaturamento] = useState(null);
  const [faturaCard, setFaturaCard] = useState(0.0);
  const [inadim, setInadim] = useState(0.0);
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [curso, setCurso] = useState("");
  const [cursos, setCursos] = useState([]);
  const [frase, setFrase] = useState("");
  const [recebidoCard, setRecebidoCard] = useState(0.0);
  const [aVencerCard, setaVencerCard] = useState(0.0);

  const cnpj = getCnpj();
  const data = new Date();
  const mes = data.getMonth();

  useEffect(() => {
    getTodosPeriodos();
    getFaturaInadimCurso();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getCursos();
    }
    getFaturaInadimCurso();
  }, [anoPeriodo]);

  useEffect(() => {
    if (curso.length > 0) {
      getFaturaInadimCurso();
    }
    getFaturaInadimCurso();
  }, [curso]);

  const getTodosPeriodos = async () => {
    const response = await api.get(`secretaria/periodos/${cnpj}`);
    setPeriodos(response.data);
  };

  const getCursos = async () => {
    const periodo = anoPeriodo.split("/");
    const response = await api.get(
      `secretaria/cursos/${cnpj}/${periodo[0]}/${periodo[1]}`
    );
    setCursos(response.data);
  };

  const getFaturaInadimCurso = async () => {
    let url = `secretaria/${cnpj}`;
    const periodo = anoPeriodo.split("/");

    if (anoPeriodo.length > 0)
      url = `secretaria/${cnpj}/${periodo[0]}/${periodo[1]}`;

    if (curso.length > 0)
      url = `secretaria/${cnpj}/${periodo[0]}/${periodo[1]}/${curso}`;

    const response = await api.get(url);
    const allData = response.data;

    // FATURAMENTO

    const totalFat01 = allData.reduce((total, item) => total + item.fat01, 0);
    const totalFat02 = allData.reduce((total, item) => total + item.fat02, 0);
    const totalFat03 = allData.reduce((total, item) => total + item.fat03, 0);
    const totalFat04 = allData.reduce((total, item) => total + item.fat04, 0);
    const totalFat05 = allData.reduce((total, item) => total + item.fat05, 0);
    const totalFat06 = allData.reduce((total, item) => total + item.fat06, 0);
    const totalFat07 = allData.reduce((total, item) => total + item.fat07, 0);
    const totalFat08 = allData.reduce((total, item) => total + item.fat08, 0);
    const totalFat09 = allData.reduce((total, item) => total + item.fat09, 0);
    const totalFat10 = allData.reduce((total, item) => total + item.fat10, 0);
    const totalFat11 = allData.reduce((total, item) => total + item.fat11, 0);
    const totalFat12 = allData.reduce((total, item) => total + item.fat12, 0);

    const arrayFatMes = [
      totalFat01,
      totalFat02,
      totalFat03,
      totalFat04,
      totalFat05,
      totalFat06,
      totalFat07,
      totalFat08,
      totalFat09,
      totalFat10,
      totalFat11,
      totalFat12,
    ];

    var totalFat = 0;

    for (let i = 0; i <= mes; i++) {
      totalFat = totalFat + arrayFatMes[i];
    }

    // RECEBIDO

    const totalRec01 = allData.reduce((total, item) => total + item.rec01, 0);
    const totalRec02 = allData.reduce((total, item) => total + item.rec02, 0);
    const totalRec03 = allData.reduce((total, item) => total + item.rec03, 0);
    const totalRec04 = allData.reduce((total, item) => total + item.rec04, 0);
    const totalRec05 = allData.reduce((total, item) => total + item.rec05, 0);
    const totalRec06 = allData.reduce((total, item) => total + item.rec06, 0);
    const totalRec07 = allData.reduce((total, item) => total + item.rec07, 0);
    const totalRec08 = allData.reduce((total, item) => total + item.rec08, 0);
    const totalRec09 = allData.reduce((total, item) => total + item.rec09, 0);
    const totalRec10 = allData.reduce((total, item) => total + item.rec10, 0);
    const totalRec11 = allData.reduce((total, item) => total + item.rec11, 0);
    const totalRec12 = allData.reduce((total, item) => total + item.rec12, 0);

    const arrayRecMes = [
      totalRec01,
      totalRec02,
      totalRec03,
      totalRec04,
      totalRec05,
      totalRec06,
      totalRec07,
      totalRec08,
      totalRec09,
      totalRec10,
      totalRec11,
      totalRec12,
    ];

    var totalRec = 0;

    for (let i = 0; i <= mes; i++) {
      totalRec = totalRec + arrayRecMes[i];
    }

    // VENCIDOS

    const totalDeb01 = allData.reduce((total, item) => total + item.deb01, 0);
    const totalDeb02 = allData.reduce((total, item) => total + item.deb02, 0);
    const totalDeb03 = allData.reduce((total, item) => total + item.deb03, 0);
    const totalDeb04 = allData.reduce((total, item) => total + item.deb04, 0);
    const totalDeb05 = allData.reduce((total, item) => total + item.deb05, 0);
    const totalDeb06 = allData.reduce((total, item) => total + item.deb06, 0);
    const totalDeb07 = allData.reduce((total, item) => total + item.deb07, 0);
    const totalDeb08 = allData.reduce((total, item) => total + item.deb08, 0);
    const totalDeb09 = allData.reduce((total, item) => total + item.deb09, 0);
    const totalDeb10 = allData.reduce((total, item) => total + item.deb10, 0);
    const totalDeb11 = allData.reduce((total, item) => total + item.deb11, 0);
    const totalDeb12 = allData.reduce((total, item) => total + item.deb12, 0);

    const arrayDebMes = [
      totalDeb01,
      totalDeb02,
      totalDeb03,
      totalDeb04,
      totalDeb05,
      totalDeb06,
      totalDeb07,
      totalDeb08,
      totalDeb09,
      totalDeb10,
      totalDeb11,
      totalDeb12,
    ];

    var totalDeb = 0;

    for (let i = 0; i <= mes; i++) {
      totalDeb = totalDeb + arrayDebMes[i];
    }

    const totalAvencer = totalFat - totalRec - totalDeb;

    setFaturamento({
      labels: ["Recebido", "A vencer", "Inadimplência"],
      datasets: [
        {
          label: "userGain",
          data: [totalRec, totalAvencer, totalDeb],
          backgroundColor: ["#20b2aa", "#eda044", "#FF0000"],
        },
      ],
    });

    setFaturaCard(totalFat);
    setRecebidoCard(totalRec);
    setaVencerCard(totalAvencer);
    setInadim(totalDeb);
    setFrase(frasePeriodo(mes));
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
                <h3 className="mt-4 mb-4 fw-bold texto-roxo">
                  Faturamento x Inadimplência (Curso)
                </h3>
                <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-xl-2">
                      <label className="fw-bold">Ano/período</label>
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label="form-select-lg example"
                        value={anoPeriodo}
                        onChange={(e) => setAnoPeriodo(e.target.value)}
                      >
                        <option value="">...</option>
                        {periodos.map((p, index) => (
                          <option key={index} value={p.ano + "/" + p.seqano}>
                            {p.ano}/{p.seqano}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-xs-12 col-xl-10">
                      <label className="fw-bold">Curso</label>
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label="form-select-lg example"
                        value={curso}
                        onChange={(e) => setCurso(e.target.value)}
                      >
                        <option value="">...</option>
                        {cursos.map((c, index) => (
                          <option key={index} value={c.curso}>
                            {c.curso}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-2">{frase}</div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-xl-5">
                      {/* <h5 className="fw-bold">Faturamento x Inadimplência</h5> */}
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {faturamento && <Pizza chartData={faturamento} />}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-7">
                      {/* <h5 classNameName="fw-bold">Valores</h5> */}
                      <div
                        style={{ backgroundColor: "#58a6ff" }}
                        className="card order-card mb-3"
                      >
                        <div className="p-2">
                          <h5 className="fw-bold text-center">Faturamento</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h1 fw-bold">
                              {faturaCard.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        style={{ backgroundColor: "#20b2aa" }}
                        className="card order-card mb-3"
                      >
                        <div className="p-2">
                          <h5 className="fw-bold text-center">Recebido</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h1 fw-bold">
                              {recebidoCard.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{ backgroundColor: "#eda044" }}
                        className="card order-card mb-3"
                      >
                        <div className="p-2">
                          <h5 className="fw-bold text-center">A vencer</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h1 fw-bold">
                              {aVencerCard.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="card bg-c-red order-card mb-3">
                        <div className="p-2">
                          <h5 className="fw-bold text-center">Inadimplência</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <HiOutlineTrendingDown size="55px" /> */}
                            <span className="h1 fw-bold">
                              {inadim.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
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
