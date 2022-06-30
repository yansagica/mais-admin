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
  const [resultados, setResultados] = useState([]);

  const cnpj = getCnpj();
  const data = new Date();
  const mes_frase = 11;

  useEffect(() => {
    getTodosPeriodos();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getDespOrdGrand();
    }
  }, [anoPeriodo]);

  useEffect(() => {
    if (mes.length > 0) {
      getDespOrdGrand();
    }
  }, [mes]);

  const getTodosPeriodos = async () => {
    const response = await api.get(`anoper/${cnpj}/1`);
    setPeriodos(response.data);
  };

  const getDespOrdGrand = async () => {
    let url = `apacon/${cnpj}`;
    const periodo = anoPeriodo;

    let mesSelecionado = parseInt(mes);

    if ((anoPeriodo.length > 0) | (mes.length > 0))
      url = `apacon/${cnpj}/${periodo}/${mesSelecionado}`;

    const response = await api.get(url);
    const allData = response.data;
    setResultados(allData);
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
                  Despesas por Ordem de Grandeza
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
                          <option key={index} value={p.ano}>
                            {p.ano}
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
                    <div className="container">
                      <table className="table table-striped">
                        <thead>
                          <tr>
                            <th style={{ color: "#8257E5" }} scope="col">
                              Código
                            </th>
                            <th style={{ color: "#8257E5" }} scope="col">
                              Conta
                            </th>
                            <th style={{ color: "#8257E5" }} scope="col">
                              Valor
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {resultados.map((d, index) => (
                            <tr key={index}>
                              <th scope="row">{d.conta}</th>
                              <td>{d.desconta}</td>
                              <td>
                                {d.valor.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
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
