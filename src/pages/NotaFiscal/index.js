import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";

import "../FinInaTurma/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";
import Barra from "../../components/Graficos/Barra";
import "./NotaFiscal.css";

export default function NotaFiscal() {
  const [transmitidoCard, setTransmitidoCard] = useState(0.0);
  const [pagamentosCard, setPagamentosCard] = useState(0.0);
  const [issCard, setIssCard] = useState(0.0);
  const [notasFiscais, setNotasFiscais] = useState(null);

  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [turma, setTurma] = useState("");
  const [turmas, setTurmas] = useState([]);
  const [mes, setMes] = useState("");

  const cnpj = getCnpj();

  useEffect(() => {
    getTodosPeriodos();
    getNotasFiscaisGeral();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getNotasFiscaisGeral();
      getTurmas();
    }
  }, [anoPeriodo]);

  useEffect(() => {
    getNotasFiscaisGeral();
  }, [turma]);

  useEffect(() => {
    getNotasFiscaisGeral();
  }, [mes]);

  const getTodosPeriodos = async () => {
    const response = await api.get(`notafiscal/periodos/${cnpj}`);
    setPeriodos(response.data);
  };

  const getTurmas = async () => {
    const periodo = anoPeriodo.split("/");
    const response = await api.get(
      `notafiscal/turmas/${cnpj}/${periodo[0]}/${periodo[1]}`
    );
    setTurmas(response.data);
  };

  const getNotasFiscaisGeral = async () => {
    let url = `notafiscal/${cnpj}`;
    const periodo = anoPeriodo.split("/");
    const compete = parseInt(mes);

    if (anoPeriodo.length > 0)
      url = `notafiscal/${cnpj}/${periodo[0]}/${periodo[1]}`;

    if (turma.length > 0)
      url = `notafiscal/turmas/${cnpj}/${periodo[0]}/${periodo[1]}/${turma}`;

    if (mes.length > 0)
      url = `notafiscal/${cnpj}/${periodo[0]}/${periodo[1]}/${turma}/${compete}`;

    const response = await api.get(url);
    const allData = response.data;

    const valorTotalNfse = allData.reduce(
      (total, item) => total + item.valornfse,
      0
    );

    const valorTotalPag = allData.reduce(
      (total, item) => total + item.valorpag,
      0
    );

    const valorTotalIss = allData.reduce(
      (total, item) => total + item.valoriss,
      0
    );

    setTransmitidoCard(valorTotalNfse);
    setPagamentosCard(valorTotalPag);
    setIssCard(valorTotalIss);

    setNotasFiscais({
      labels: ["Transmitidos", "Pagamentos", "ISS"],
      datasets: [
        {
          label: "Valor",
          data: [valorTotalNfse, valorTotalPag, valorTotalIss],
          backgroundColor: ["#58a6ff", "#20b2aa", "#8257e5"],
        },
      ],
    });
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
                <h3 className="mt-4 mb-2 fw-bold texto-roxo">Notas Fiscais</h3>
                <label className="fw-bold small">
                  * Informações transmitidas a partir do sistema MaisNFSe para a
                  SEFIN
                </label>
                <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-12 col-lg-3 col-xl-2">
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
                    <div className="col-12 col-lg-9 col-xl-4">
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

                    <div className="col-xs-12 col-xl-2">
                      <label className="fw-bold">Mês</label>
                      <select
                        className="form-select form-select-lg mb-3"
                        aria-label=".form-select-lg example"
                        value={mes}
                        onChange={(e) => setMes(e.target.value)}
                      >
                        <option value="">...</option>
                        <option value="1">Janeiro</option>
                        <option value="2">Fevereiro</option>
                        <option value="3">Março</option>
                        <option value="4">Abril</option>
                        <option value="5">Maio</option>
                        <option value="6">Junho</option>
                        <option value="7">Julho</option>
                        <option value="8">Agosto</option>
                        <option value="9">Setembro</option>
                        <option value="10">Outubro</option>
                        <option value="11">Novembro</option>
                        <option value="12">Dezembro</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mt-3">
                    <div className="col-12 col-md-12 col-lg-7 col-xl-5">
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {notasFiscais && <Barra chartData={notasFiscais} />}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-lg-5 col-xl-7">
                      <div
                        style={{ backgroundColor: "#58a6ff" }}
                        className="card order-card mb-3"
                      >
                        <div className="p-2">
                          <h5 className="fw-bold text-center">Transmitidos</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h4 fw-bold">
                              {transmitidoCard.toLocaleString("pt-BR", {
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
                          <h5 className="fw-bold text-center">Pagamentos</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h4 fw-bold">
                              {pagamentosCard.toLocaleString("pt-BR", {
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
                          <h5 className="fw-bold text-center">ISS</h5>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h4 fw-bold">
                              {issCard.toLocaleString("pt-BR", {
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
