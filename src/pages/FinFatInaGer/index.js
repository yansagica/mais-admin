import React, { useEffect, useState, useContext } from "react";
import Footer from "../../components/Footer";
import Pizza from "../../components/Graficos/Pizza";
import "../FinFatInaGer/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";
import { frasePeriodo } from "../../Funcoes";
import "./style.css";
import Barra from "../../components/Graficos/Barra";

export default function FinFatInaGer() {
  const [faturamento, setFaturamento] = useState(null);
  const [faturaCard, setFaturaCard] = useState(0.0);
  const [recebidoCard, setRecebidoCard] = useState(0.0);
  const [aVencerCard, setaVencerCard] = useState(0.0);
  const [inadim, setInadim] = useState(0.0);
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [frase, setFrase] = useState("");

  const cnpj = getCnpj();

  useEffect(() => {
    getTodosPeriodos();
    getFaturaInadim();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getFaturaInadim();
    }
    getFaturaInadim();
  }, [anoPeriodo]);

  const getTodosPeriodos = async () => {
    // const response = await api.get(`secretaria/periodos/${cnpj}`);
    const response = await api.get(`anoper/${cnpj}/1`);
    setPeriodos(response.data);
  };

  const getFaturaInadim = async () => {
    let url = `secretaria/${cnpj}`;
    const periodo = anoPeriodo.split("/");

    if (anoPeriodo.length > 0)
      url = `secretaria/${cnpj}/${periodo[0]}/${periodo[1]}`;
    const response = await api.get(url);
    const allData = response.data;

    const data = new Date();
    const mes = data.getMonth();

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

    // A VENCER

    const totalAve01 = allData.reduce((total, item) => total + item.ave01, 0);
    const totalAve02 = allData.reduce((total, item) => total + item.ave02, 0);
    const totalAve03 = allData.reduce((total, item) => total + item.ave03, 0);
    const totalAve04 = allData.reduce((total, item) => total + item.ave04, 0);
    const totalAve05 = allData.reduce((total, item) => total + item.ave05, 0);
    const totalAve06 = allData.reduce((total, item) => total + item.ave06, 0);
    const totalAve07 = allData.reduce((total, item) => total + item.ave07, 0);
    const totalAve08 = allData.reduce((total, item) => total + item.ave08, 0);
    const totalAve09 = allData.reduce((total, item) => total + item.ave09, 0);
    const totalAve10 = allData.reduce((total, item) => total + item.ave10, 0);
    const totalAve11 = allData.reduce((total, item) => total + item.ave11, 0);
    const totalAve12 = allData.reduce((total, item) => total + item.ave12, 0);

    const arrayAveMes = [
      totalAve01,
      totalAve02,
      totalAve03,
      totalAve04,
      totalAve05,
      totalAve06,
      totalAve07,
      totalAve08,
      totalAve09,
      totalAve10,
      totalAve11,
      totalAve12,
    ];

    var totalAve = 0;

    for (let i = 0; i <= mes; i++) {
      totalAve = totalAve + arrayAveMes[i];
    }

    setFaturamento({
      labels: ["Faturamento", "Recebido", "A vencer", "Inadimplência"],
      datasets: [
        {
          label: "Valor",
          data: [totalFat, totalRec, totalAve, totalDeb],
          backgroundColor: ["#58a6ff", "#20b2aa", "#f09c0c", "#FF0000"],
        },
      ],
    });

    setFaturaCard(totalFat);
    setRecebidoCard(totalRec);
    setaVencerCard(totalAve);
    setInadim(totalDeb);
    setFrase(frasePeriodo(mes));

    console.log(aVencerCard);
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
                  Faturamento x Inadimplência (Geral)
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
                    <div className="mb-2">{frase}</div>
                  </div>
                  <div className="row flex justify-content-between align-items-center">
                    <div className="col-md-4 col-xl-6">
                      {/* <h5 className="fw-bold">Faturamento x Inadimplência</h5> */}
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {faturamento && <Barra chartData={faturamento} />}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-xl-6">
                      <div
                        style={{ backgroundColor: "#58a6ff" }}
                        className="card order-card mb-2"
                      >
                        <div className="p-1">
                          <h5 className="fw-bold text-center">
                            Faturamento (Com desconto)
                          </h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h4 fw-bold">
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
                        className="card order-card mb-2"
                      >
                        <div className="p-1">
                          <h5 className="fw-bold text-center">Recebido</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h4 fw-bold">
                              {recebidoCard.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div
                        style={{ backgroundColor: "#f09c0c" }}
                        className="card order-card mb-2"
                      >
                        <div className="p-1">
                          <h5 className="fw-bold text-center">A vencer</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h4 fw-bold">
                              {aVencerCard.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="card bg-c-red order-card">
                        <div className="p-1">
                          <h5 className="fw-bold text-center">Inadimplência</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <HiOutlineTrendingDown size="55px" /> */}
                            <span className="h4 fw-bold">
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
