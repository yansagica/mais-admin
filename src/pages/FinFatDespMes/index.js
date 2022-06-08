import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import Barra from "../../components/Graficos/Barra";
import "../FinFatDespMes/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";
import { frasePeriodo } from "../../Funcoes";

export default function FinFatDespMes() {
  const [faturamento, setFaturamento] = useState(null);
  const [faturaCard, setFaturaCard] = useState(0.0);
  const [apagarCard, setApagarCard] = useState(0.0);
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [mes, setMes] = useState("");
  const [frase, setFrase] = useState("");
  const [recebidoCard, setRecebidoCard] = useState(0.0);

  const cnpj = getCnpj();
  const data = new Date();
  // const mes_frase = data.getMonth();
  const mes_frase = 11;

  useEffect(() => {
    getTodosPeriodos();
    getFaturaDespesaPagaMes();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getFaturaDespesaPagaMes();
    }
    getFaturaDespesaPagaMes();
  }, [anoPeriodo]);

  useEffect(() => {
    if (mes.length > 0) {
      console.log(mes);
      getFaturaDespesaPagaMes();
    }
    getFaturaDespesaPagaMes();
  }, [mes]);

  const getTodosPeriodos = async () => {
    // const response = await api.get(`secretaria/periodos/${cnpj}`);
    const response = await api.get(`anoper/${cnpj}/1`);
    setPeriodos(response.data);
  };

  const getFaturaDespesaPagaMes = async () => {
    let url = `secretaria/${cnpj}`;
    const periodo = anoPeriodo.split("/");

    if ((anoPeriodo.length > 0) | (mes.length > 0))
      url = `secretaria/${cnpj}/${periodo[0]}/${periodo[1]}`;

    const response = await api.get(url);
    const allData = response.data;

    if (mes === "fat01") {
      const totalFat01 = allData.reduce((total, item) => total + item.fat01, 0);
      const totalRec01 = allData.reduce((total, item) => total + item.rec01, 0);
      const totalApa01 = allData.reduce((total, item) => total + item.apa01, 0);
      setFaturaCard(totalFat01);
      setRecebidoCard(totalRec01);
      setApagarCard(totalApa01);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat01, totalRec01, totalApa01],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat02") {
      const totalFat02 = allData.reduce((total, item) => total + item.fat02, 0);
      const totalRec02 = allData.reduce((total, item) => total + item.rec02, 0);
      const totalApa02 = allData.reduce((total, item) => total + item.apa02, 0);
      setFaturaCard(totalFat02);
      setRecebidoCard(totalRec02);
      setApagarCard(totalApa02);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat02, totalRec02, totalApa02],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat03") {
      const totalFat03 = allData.reduce((total, item) => total + item.fat03, 0);
      const totalRec03 = allData.reduce((total, item) => total + item.rec03, 0);
      const totalApa03 = allData.reduce((total, item) => total + item.apa03, 0);
      setFaturaCard(totalFat03);
      setRecebidoCard(totalRec03);
      setApagarCard(totalApa03);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat03, totalRec03, totalApa03],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat04") {
      const totalFat04 = allData.reduce((total, item) => total + item.fat04, 0);
      const totalRec04 = allData.reduce((total, item) => total + item.rec04, 0);
      const totalApa04 = allData.reduce((total, item) => total + item.apa04, 0);
      setFaturaCard(totalFat04);
      setRecebidoCard(totalRec04);
      setApagarCard(totalApa04);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat04, totalRec04, totalApa04],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat05") {
      const totalFat05 = allData.reduce((total, item) => total + item.fat05, 0);
      const totalRec05 = allData.reduce((total, item) => total + item.rec05, 0);
      const totalApa05 = allData.reduce((total, item) => total + item.apa05, 0);
      setFaturaCard(totalFat05);
      setRecebidoCard(totalRec05);
      setApagarCard(totalApa05);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat05, totalRec05, totalApa05],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat06") {
      const totalFat06 = allData.reduce((total, item) => total + item.fat06, 0);
      const totalRec06 = allData.reduce((total, item) => total + item.rec06, 0);
      const totalApa06 = allData.reduce((total, item) => total + item.apa06, 0);
      setFaturaCard(totalFat06);
      setRecebidoCard(totalRec06);
      setApagarCard(totalApa06);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat06, totalRec06, totalApa06],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat07") {
      const totalFat07 = allData.reduce((total, item) => total + item.fat07, 0);
      const totalRec07 = allData.reduce((total, item) => total + item.rec07, 0);
      const totalApa07 = allData.reduce((total, item) => total + item.apa07, 0);
      setFaturaCard(totalFat07);
      setRecebidoCard(totalRec07);
      setApagarCard(totalApa07);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat07, totalRec07, totalApa07],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat08") {
      const totalFat08 = allData.reduce((total, item) => total + item.fat08, 0);
      const totalRec08 = allData.reduce((total, item) => total + item.rec08, 0);
      const totalApa08 = allData.reduce((total, item) => total + item.apa08, 0);
      setFaturaCard(totalFat08);
      setRecebidoCard(totalRec08);
      setApagarCard(totalApa08);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat08, totalRec08, totalApa08],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat09") {
      const totalFat09 = allData.reduce((total, item) => total + item.fat09, 0);
      const totalRec09 = allData.reduce((total, item) => total + item.rec09, 0);
      const totalApa09 = allData.reduce((total, item) => total + item.apa09, 0);
      setFaturaCard(totalFat09);
      setRecebidoCard(totalRec09);
      setApagarCard(totalApa09);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat09, totalRec09, totalApa09],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat10") {
      const totalFat10 = allData.reduce((total, item) => total + item.fat10, 0);
      const totalRec10 = allData.reduce((total, item) => total + item.rec10, 0);
      const totalApa10 = allData.reduce((total, item) => total + item.apa10, 0);
      setFaturaCard(totalFat10);
      setRecebidoCard(totalRec10);
      setApagarCard(totalApa10);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat10, totalRec10, totalApa10],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat11") {
      const totalFat11 = allData.reduce((total, item) => total + item.fat11, 0);
      const totalRec11 = allData.reduce((total, item) => total + item.rec11, 0);
      const totalApa11 = allData.reduce((total, item) => total + item.apa11, 0);
      setFaturaCard(totalFat11);
      setRecebidoCard(totalRec11);
      setApagarCard(totalApa11);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat11, totalRec11, totalApa11],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
          },
        ],
      });
    } else if (mes === "fat12") {
      const totalFat12 = allData.reduce((total, item) => total + item.fat12, 0);
      const totalRec12 = allData.reduce((total, item) => total + item.rec12, 0);
      const totalApa12 = allData.reduce((total, item) => total + item.apa12, 0);
      setFaturaCard(totalFat12);
      setRecebidoCard(totalRec12);
      setApagarCard(totalApa12);
      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Exibir Gráfico",
            data: [totalFat12, totalRec12, totalApa12],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
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

      for (let i = 0; i <= mes_frase; i++) {
        totalFat = totalFat + arrayFatMes[i];
      }
      setFaturaCard(totalFat);

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

      for (let i = 0; i <= mes_frase; i++) {
        totalRec = totalRec + arrayRecMes[i];
      }

      setRecebidoCard(totalRec);

      const totalApa01 = allData.reduce((total, item) => total + item.apa01, 0);
      const totalApa02 = allData.reduce((total, item) => total + item.apa02, 0);
      const totalApa03 = allData.reduce((total, item) => total + item.apa03, 0);
      const totalApa04 = allData.reduce((total, item) => total + item.apa04, 0);
      const totalApa05 = allData.reduce((total, item) => total + item.apa05, 0);
      const totalApa06 = allData.reduce((total, item) => total + item.apa06, 0);
      const totalApa07 = allData.reduce((total, item) => total + item.apa07, 0);
      const totalApa08 = allData.reduce((total, item) => total + item.apa08, 0);
      const totalApa09 = allData.reduce((total, item) => total + item.apa09, 0);
      const totalApa10 = allData.reduce((total, item) => total + item.apa10, 0);
      const totalApa11 = allData.reduce((total, item) => total + item.apa11, 0);
      const totalApa12 = allData.reduce((total, item) => total + item.apa12, 0);

      const arrayApaMes = [
        totalApa01,
        totalApa02,
        totalApa03,
        totalApa04,
        totalApa05,
        totalApa06,
        totalApa07,
        totalApa08,
        totalApa09,
        totalApa10,
        totalApa11,
        totalApa12,
      ];

      var totalApagar = 0;

      for (let i = 0; i <= mes_frase; i++) {
        totalApagar = totalApagar + arrayApaMes[i];
      }

      setApagarCard(totalApagar);

      setFaturamento({
        labels: ["Faturamento", "Recebido", "Despesas"],
        datasets: [
          {
            label: "Valor",
            data: [totalFat, totalRec, totalApagar],
            backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
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
                  Faturamento x Despesas Pagas (Mês)
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
                    <div className="col-xs-12 col-xl-2">
                      <label className="fw-bold">Mês</label>
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
                    <label className="text-dark">
                      * O faturamento irá acompanhar o mês selecionado
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-xl-5">
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {faturamento && <Barra chartData={faturamento} />}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-7">
                      <div
                        style={{ backgroundColor: "#58a6ff" }}
                        className="card order-card mb-3"
                      >
                        <div className="p-2">
                          <h5 className="m-b-20 fw-bold text-center">
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
                        className="card order-card mb-3"
                      >
                        <div className="p-2">
                          <h5 className="m-b-20 fw-bold text-center">
                            Recebido
                          </h5>
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
                        style={{ backgroundColor: "#8257e5" }}
                        className="card order-card mb-3"
                      >
                        <div className="p-2">
                          <h5 className="m-b-20 fw-bold text-center">
                            Despesas
                          </h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <HiOutlineTrendingDown size="55px" /> */}
                            <span className="h4 fw-bold">
                              {apagarCard.toLocaleString("pt-BR", {
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
