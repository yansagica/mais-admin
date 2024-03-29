import React, { useEffect, useState, useContext } from "react";
import Footer from "../../components/Footer";
import "../SecAprovReprov/style.css";
import Pizza from "../../components/Graficos/Pizza";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";

export default function SecAprovReprov() {
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [seqano, setSeqano] = useState("");
  const [turma, setTurma] = useState("");
  const [turmas, setTurmas] = useState([]);
  const [aprovados, setAprovados] = useState(null);
  const [reprovados, setReprovados] = useState(null);
  const [aprovadosCard, setAprovadosCard] = useState(0);
  const [reprovadosCard, setReprovadosCard] = useState(0);

  const cnpj = getCnpj();

  const getTodosPeriodos = async () => {
    // const response = await api.get(`secretaria/periodos/${cnpj}`);
    const response = await api.get(`anoper/${cnpj}/1`);
    setPeriodos(response.data);
  };

  const getTurmas = async () => {
    const periodo = anoPeriodo.split("/");
    const response = await api.get(
      `secretaria/turmas/${cnpj}/${periodo[0]}/${periodo[1]} `
    );
    setTurmas(response.data);
  };

  useEffect(() => {
    getTodosPeriodos();
    getTotalRegistros();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getTurmas();
    }
    getTotalRegistros();
  }, [anoPeriodo]);

  useEffect(() => {
    if (turma.length > 0) {
      getTotalRegistros();
    }
    getTotalRegistros();
  }, [turma]);

  const getTotalRegistros = async () => {
    let url = `secretaria/${cnpj}`;
    const periodo = anoPeriodo.split("/");

    if (anoPeriodo.length > 0)
      url = `secretaria/${cnpj}/${periodo[0]}/${periodo[1]}`;

    if (turma.length > 0)
      url = `secretaria/turmas/${cnpj}/${periodo[0]}/${periodo[1]}/${turma}`;

    const response = await api.get(url);
    const allData = response.data;

    const totalAprov = allData.reduce((total, item) => total + item.qtdapr, 0);
    const totalReprov = allData.reduce((total, item) => total + item.qtdrep, 0);

    setAprovados({
      labels: ["Aprovados", "Reprovados"],
      datasets: [
        {
          label: "userGain",
          data: [totalAprov, totalReprov],
          backgroundColor: ["#58a6ff", "#f67573"],
        },
      ],
    });

    setAprovadosCard(totalAprov);
    setReprovadosCard(totalReprov);
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
                  Aprovados/Reprovados
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
                    <div className="col-12 col-lg-8 col-xl-10">
                      <label className="fw-bold">Turma</label>
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label="form-select-lg example"
                        value={turma}
                        onChange={(e) => setTurma(e.target.value)}
                      >
                        <option value="">...</option>
                        {turmas.map((t, index) => (
                          <option key={index} value={t.turma}>
                            {t.turma}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-xl-5">
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {aprovados && <Pizza chartData={aprovados} />}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-7">
                      <div
                        className="card order-card"
                        style={{ backgroundColor: "#58a6ff" }}
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">
                            Aprovados
                          </h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h1 fw-bold">{aprovadosCard}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className="card order-card"
                        style={{ backgroundColor: "#f67573" }}
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">
                            Reprovados
                          </h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <HiOutlineTrendingDown size="55px" /> */}
                            <span className="h1 fw-bold">{reprovadosCard}</span>
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
