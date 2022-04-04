import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Pizza from "../../components/Graficos/Pizza";
import "../FinFatInaGer/style.css";
import axios from "axios";

var cnpj = "83369678000173";

export default function FinFatInaGer() {
  const [faturamento, setFaturamento] = useState(null);
  const [faturaCard, setFaturaCard] = useState(0.0);
  const [inadim, setInadim] = useState(0.0);
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);

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
    const response = await axios.get(
      `http://localhost:5000/secretaria/periodos/${cnpj}`
    );
    setPeriodos(response.data);
  };

  const getFaturaInadim = async () => {
    let url = `http://localhost:5000/secretaria/${cnpj}`;
    const periodo = anoPeriodo.split("/");

    if (anoPeriodo.length > 0)
      url = `http://localhost:5000/secretaria/${cnpj}/${periodo[0]}/${periodo[1]}`;
    const response = await axios.get(url);
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

    setFaturamento({
      labels: ["Faturamento", "Inadimplência"],
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

            totalDeb01 +
              totalDeb02 +
              totalDeb03 +
              totalDeb04 +
              totalDeb05 +
              totalDeb06 +
              totalDeb07 +
              totalDeb08 +
              totalDeb09 +
              totalDeb10 +
              totalDeb11 +
              totalDeb12,
          ],
          backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
        },
      ],
    });

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

    setInadim(
      totalDeb01 +
        totalDeb02 +
        totalDeb03 +
        totalDeb04 +
        totalDeb05 +
        totalDeb06 +
        totalDeb07 +
        totalDeb08 +
        totalDeb09 +
        totalDeb10 +
        totalDeb11 +
        totalDeb12
    );
  };

  return (
    <>
      <div className="bg-light" id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h3 className="mt-4 mb-4 fw-bold texto-roxo">
              Faturamento x Inadimplência(Geral)
            </h3>
            <hr />
            <div class="container">
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
              </div>
              <div className="row">
                <div class="col-md-4 col-xl-5">
                  {/* <h5 className="fw-bold">Faturamento x Inadimplência</h5> */}
                  <div class="card bg-c-light order-card">
                    <div class="card-block">
                      {faturamento && <Pizza chartData={faturamento} />}
                    </div>
                  </div>
                </div>
                <div class="col-md-4 col-xl-7">
                  {/* <h5 className="fw-bold">Valores</h5> */}
                  <div class="card bg-c-green order-card altura-card">
                    <div class="card-block">
                      <h5 class="m-b-20 fw-bold text-center">Faturamento</h5>
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
                  <div class="card bg-c-red order-card altura-card">
                    <div class="card-block">
                      <h5 class="m-b-20 fw-bold text-center">Inadimplência</h5>
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
    </>
  );
}
