import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Pizza from "../../components/Graficos/Pizza";
import "../FinFatDespMes/style.css";
import axios from "axios";

var cnpj = "83369678000173";

export default function FinFatDespMes() {
  const [faturamento, setFaturamento] = useState(null);
  const [faturaCard, setFaturaCard] = useState(0.0);
  const [apagarCard, setApagarCard] = useState(0.0);
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [mes, setMes] = useState("");

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
      getFaturaDespesaPagaMes();
    }
    getFaturaDespesaPagaMes();
  }, [mes]);

  const getTodosPeriodos = async () => {
    const response = await axios.get(
      `http://localhost:5000/secretaria/periodos/${cnpj}`
    );
    setPeriodos(response.data);
  };

  const getFaturaDespesaPagaMes = async () => {
    let url = `http://localhost:5000/secretaria/${cnpj}`;
    const periodo = anoPeriodo.split("/");

    if ((anoPeriodo.length > 0) | (mes.length > 0))
      url = `http://localhost:5000/secretaria/${cnpj}/${periodo[0]}/${periodo[1]}`;

    const response = await axios.get(url);
    const allData = response.data;

    if (mes === "fat01") {
      const totalFat01 = allData.reduce((total, item) => total + item.fat01, 0);
      const totalApa01 = allData.reduce((total, item) => total + item.apa01, 0);
      setFaturaCard(totalFat01);
      setApagarCard(totalApa01);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat01, totalApa01],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat02") {
      const totalFat02 = allData.reduce((total, item) => total + item.fat02, 0);
      const totalApa02 = allData.reduce((total, item) => total + item.apa02, 0);
      setFaturaCard(totalFat02);
      setApagarCard(totalApa02);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat02, totalApa02],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat03") {
      const totalFat03 = allData.reduce((total, item) => total + item.fat03, 0);
      const totalApa03 = allData.reduce((total, item) => total + item.apa03, 0);
      setFaturaCard(totalFat03);
      setApagarCard(totalApa03);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat03, totalApa03],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat04") {
      const totalFat04 = allData.reduce((total, item) => total + item.fat04, 0);
      const totalApa04 = allData.reduce((total, item) => total + item.apa04, 0);
      setFaturaCard(totalFat04);
      setApagarCard(totalApa04);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat04, totalApa04],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat05") {
      const totalFat05 = allData.reduce((total, item) => total + item.fat05, 0);
      const totalApa05 = allData.reduce((total, item) => total + item.apa05, 0);
      setFaturaCard(totalFat05);
      setApagarCard(totalApa05);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat05, totalApa05],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat06") {
      const totalFat06 = allData.reduce((total, item) => total + item.fat06, 0);
      const totalApa06 = allData.reduce((total, item) => total + item.apa06, 0);
      setFaturaCard(totalFat06);
      setApagarCard(totalApa06);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat06, totalApa06],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat07") {
      const totalFat07 = allData.reduce((total, item) => total + item.fat07, 0);
      const totalApa07 = allData.reduce((total, item) => total + item.apa07, 0);
      setFaturaCard(totalFat07);
      setApagarCard(totalApa07);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat07, totalApa07],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat08") {
      const totalFat08 = allData.reduce((total, item) => total + item.fat08, 0);
      const totalApa08 = allData.reduce((total, item) => total + item.apa08, 0);
      setFaturaCard(totalFat08);
      setApagarCard(totalApa08);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat08, totalApa08],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat09") {
      const totalFat09 = allData.reduce((total, item) => total + item.fat09, 0);
      const totalApa09 = allData.reduce((total, item) => total + item.apa09, 0);
      setFaturaCard(totalFat09);
      setApagarCard(totalApa09);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat09, totalApa09],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat10") {
      const totalFat10 = allData.reduce((total, item) => total + item.fat10, 0);
      const totalApa10 = allData.reduce((total, item) => total + item.apa10, 0);
      setFaturaCard(totalFat10);
      setApagarCard(totalApa10);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat10, totalApa10],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat11") {
      const totalFat11 = allData.reduce((total, item) => total + item.fat11, 0);
      const totalApa11 = allData.reduce((total, item) => total + item.apa11, 0);
      setFaturaCard(totalFat11);
      setApagarCard(totalApa11);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat11, totalApa11],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    } else if (mes === "fat12") {
      const totalFat12 = allData.reduce((total, item) => total + item.fat12, 0);
      const totalApa12 = allData.reduce((total, item) => total + item.apa12, 0);
      setFaturaCard(totalFat12);
      setApagarCard(totalApa12);
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
        datasets: [
          {
            label: "userGain",
            data: [totalFat12, totalApa12],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
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

      setApagarCard(
        totalApa01 +
          totalApa02 +
          totalApa03 +
          totalApa04 +
          totalApa05 +
          totalApa06 +
          totalApa07 +
          totalApa08 +
          totalApa09 +
          totalApa10 +
          totalApa11 +
          totalApa12
      );
      setFaturamento({
        labels: ["Faturamento", "Despesas"],
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

              totalApa01 +
                totalApa02 +
                totalApa03 +
                totalApa04 +
                totalApa05 +
                totalApa06 +
                totalApa07 +
                totalApa08 +
                totalApa09 +
                totalApa10 +
                totalApa11 +
                totalApa12,
            ],
            backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
          },
        ],
      });
    }
  };

  return (
    <>
      <div className="bg-light" id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h3 className="mt-4 mb-4 fw-bold texto-roxo">
              Faturamento x Despesas Pagas(Mês)
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
                  <h5 className="fw-bold">Valores</h5>
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
                  <div className="card bg-c-red order-card altura-card">
                    <div className="card-block">
                      <h5 className="m-b-20 fw-bold text-center">Despesas</h5>
                      <div className="d-flex align-items-center justify-content-around">
                        {/* <HiOutlineTrendingDown size="55px" /> */}
                        <span className="h1 fw-bold">
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
    </>
  );
}
