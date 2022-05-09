import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import Pizza from "../../components/Graficos/Pizza";
import "../FinFatPrevReceb/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";

export default function FinFatPrevReceb() {
  const [faturamento, setFaturamento] = useState(null);
  const [faturaCard, setFaturaCard] = useState(0.0);
  const [recebidoCard, setRecebidoCard] = useState(0.0);
  const [inadim, setInadim] = useState(0.0);
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [mes, setMes] = useState("");
  const [turmas, setTurmas] = useState([]);

  const cnpj = getCnpj();

  useEffect(() => {
    getTodosPeriodos();
    getFaturaPrevRecebMes();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getFaturaPrevRecebMes();
    }
    getFaturaPrevRecebMes();
  }, [anoPeriodo]);

  useEffect(() => {
    if (mes.length > 0) {
      getFaturaPrevRecebMes();
    }
    getFaturaPrevRecebMes();
  }, [mes]);

  const getTodosPeriodos = async () => {
    const response = await api.get(`secretaria/periodos/${cnpj}`);
    setPeriodos(response.data);
  };

  const getFaturaPrevRecebMes = async () => {
    let url = `secretaria/${cnpj}`;
    const periodo = anoPeriodo.split("/");

    if ((anoPeriodo.length > 0) | (mes.length > 0))
      url = `secretaria/${cnpj}/${periodo[0]}/${periodo[1]}`;

    const response = await api.get(url);
    const allData = response.data;

    if (mes === "fat01") {
      const totalFat01 = allData.reduce((total, item) => total + item.fat01, 0);
      const totalRec01 = allData.reduce((total, item) => total + item.rec01, 0);
      setFaturaCard(totalFat01);
      setRecebidoCard(totalRec01);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat01, totalRec01],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat02") {
      const totalFat02 = allData.reduce((total, item) => total + item.fat02, 0);
      const totalRec02 = allData.reduce((total, item) => total + item.rec02, 0);
      setFaturaCard(totalFat02);
      setRecebidoCard(totalRec02);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat02, totalRec02],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat03") {
      const totalFat03 = allData.reduce((total, item) => total + item.fat03, 0);
      const totalRec03 = allData.reduce((total, item) => total + item.rec03, 0);
      setFaturaCard(totalFat03);
      setRecebidoCard(totalRec03);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat03, totalRec03],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat04") {
      const totalFat04 = allData.reduce((total, item) => total + item.fat04, 0);
      const totalRec04 = allData.reduce((total, item) => total + item.rec04, 0);
      setFaturaCard(totalFat04);
      setRecebidoCard(totalRec04);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat04, totalRec04],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat05") {
      const totalFat05 = allData.reduce((total, item) => total + item.fat05, 0);
      const totalRec05 = allData.reduce((total, item) => total + item.rec05, 0);
      setFaturaCard(totalFat05);
      setRecebidoCard(totalRec05);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat05, totalRec05],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat06") {
      const totalFat06 = allData.reduce((total, item) => total + item.fat06, 0);
      const totalRec06 = allData.reduce((total, item) => total + item.rec06, 0);
      setFaturaCard(totalFat06);
      setRecebidoCard(totalRec06);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat06, totalRec06],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat07") {
      const totalFat07 = allData.reduce((total, item) => total + item.fat07, 0);
      const totalRec07 = allData.reduce((total, item) => total + item.rec07, 0);
      setFaturaCard(totalFat07);
      setRecebidoCard(totalRec07);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat07, totalRec07],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat08") {
      const totalFat08 = allData.reduce((total, item) => total + item.fat08, 0);
      const totalRec08 = allData.reduce((total, item) => total + item.rec08, 0);
      setFaturaCard(totalFat08);
      setRecebidoCard(totalRec08);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat08, totalRec08],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat09") {
      const totalFat09 = allData.reduce((total, item) => total + item.fat09, 0);
      const totalRec09 = allData.reduce((total, item) => total + item.rec09, 0);
      setFaturaCard(totalFat09);
      setRecebidoCard(totalRec09);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat09, totalRec09],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat10") {
      const totalFat10 = allData.reduce((total, item) => total + item.fat10, 0);
      const totalRec10 = allData.reduce((total, item) => total + item.rec10, 0);
      setFaturaCard(totalFat10);
      setRecebidoCard(totalRec10);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat10, totalRec10],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat11") {
      const totalFat11 = allData.reduce((total, item) => total + item.fat11, 0);
      const totalRec11 = allData.reduce((total, item) => total + item.rec11, 0);
      setFaturaCard(totalFat11);
      setRecebidoCard(totalRec11);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat11, totalRec11],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else if (mes === "fat12") {
      const totalFat12 = allData.reduce((total, item) => total + item.fat12, 0);
      const totalRec12 = allData.reduce((total, item) => total + item.rec12, 0);
      setFaturaCard(totalFat12);
      setRecebidoCard(totalRec12);
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat12, totalRec12],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    } else {
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

      setFaturaCard(
        totalFat01 +
          totalFat02 +
          totalFat03 +
          totalFat04 +
          totalFat05 +
          totalFat06 +
          totalFat07 +
          totalFat08 +
          totalFat09 +
          totalFat10 +
          totalFat11 +
          totalFat12
      );

      setRecebidoCard(
        totalRec01 +
          totalRec02 +
          totalRec03 +
          totalRec04 +
          totalRec05 +
          totalRec06 +
          totalRec07 +
          totalRec08 +
          totalRec09 +
          totalRec10 +
          totalRec11 +
          totalRec12
      );
      setFaturamento({
        labels: ["Faturamento", "Recebidos"],
        datasets: [
          {
            label: "userGain",
            data: [
              totalFat01 +
                totalFat02 +
                totalFat03 +
                totalFat04 +
                totalFat05 +
                totalFat06 +
                totalFat07 +
                totalFat08 +
                totalFat09 +
                totalFat10 +
                totalFat11 +
                totalFat12,

              totalRec01 +
                totalRec02 +
                totalRec03 +
                totalRec04 +
                totalRec05 +
                totalRec06 +
                totalRec07 +
                totalRec08 +
                totalRec09 +
                totalRec10 +
                totalRec11 +
                totalRec12,
            ],
            backgroundColor: ["#20B2AA", "#e9a64c"],
          },
        ],
      });
    }
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
                  Faturamento Previsto x Recebidos/Parcela
                </h3>
                <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-xl-2">
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
                    <div className="col-xs-12 col-xl-2">
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                        value={mes}
                        onChange={(e) => setMes(e.target.value)}
                      >
                        <option value="">...</option>
                        <option value="fat01">Janeiro</option>
                        <option value="fat02">Fevereiro</option>
                        <option value="fat03">Março</option>
                        <option value="fat04">Abril</option>
                        <option value="fat05">Maio</option>
                        <option value="fat06">Junho</option>
                        <option value="fat07">Julho</option>
                        <option value="fat08">Agosto</option>
                        <option value="fat09">Setembro</option>
                        <option value="fat10">Outubro</option>
                        <option value="fat11">Novembro</option>
                        <option value="fat12">Dezembro</option>
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-xl-5">
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {faturamento && <Pizza chartData={faturamento} />}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-7">
                      <div className="card bg-c-green order-card altura-card">
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">
                            Faturamento
                          </h5>
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
                      <div className="card bg-c-orange order-card altura-card">
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">
                            Recebidos
                          </h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <HiOutlineTrendingDown size="55px" /> */}
                            <span className="h1 fw-bold">
                              {recebidoCard.toLocaleString("pt-BR", {
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
