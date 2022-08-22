import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import "../FinFatDespMes/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj } from "../../servicos/auth";

export default function FinMovFon() {
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [mes, setMes] = useState("");
  const [resultados, setResultados] = useState([]);

  const cnpj = getCnpj();

  useEffect(() => {
    getTodosPeriodos();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getMovFon();
    }
  }, [anoPeriodo]);

  useEffect(() => {
    if (mes.length > 0) {
      getMovFon();
    }
  }, [mes]);

  const getTodosPeriodos = async () => {
    const response = await api.get(`anoper/${cnpj}/1`);
    setPeriodos(response.data);
  };

  const getMovFon = async () => {
    let url = `movfon/${cnpj}`;
    const periodo = anoPeriodo;

    let mesSelecionado = parseInt(mes);

    if ((anoPeriodo.length > 0) | (mes.length > 0))
      url = `movfon/${cnpj}/${periodo}/${mesSelecionado}`;

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
                  Movimentação x Fontes
                </h3>
                <hr />
                <div className="container">
                  <div className="row">
                    <div className="col-xs-12 col-xl-2">
                      <label className="fw-bold">Ano</label>
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
                  </div>
                  <div className="row">
                    {resultados.map((r, index) => (
                      <div className="col-6" key={index}>
                        <table className="table">
                          <thead>
                            <tr>
                              <th style={{ color: "#8257E5" }} scope="col">
                                {r.fonte}
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td
                                scope="row"
                                className="bg-secondary bg-opacity-25 fw-bold"
                              >
                                Saldo Inicial
                              </td>
                              <td className="fw-bold bg-secondary bg-opacity-25">
                                {r.saldoini.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">Dinheiro</td>
                              <td className="fw-bold">
                                {r.saldoinidin.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">Cheque</td>
                              <td className="fw-bold">
                                {r.saldoinichq.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td
                                scope="row"
                                className="bg-secondary bg-opacity-25 fw-bold"
                              >
                                Entradas
                              </td>
                              <td
                                scope="row"
                                className="bg-secondary bg-opacity-25 fw-bold"
                              ></td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-success fw-bold">
                                Dinheiro
                              </td>
                              <td className="fw-bold">
                                {r.entradadin.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-success fw-bold">
                                Cheque
                              </td>
                              <td className="fw-bold">
                                {r.entradachq.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-success fw-bold">
                                Cartão
                              </td>
                              <td className="fw-bold">
                                {r.entradacar.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-success fw-bold">
                                Transferência
                              </td>
                              <td className="fw-bold">
                                {r.entradatrf.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-success fw-bold">
                                Outros
                              </td>
                              <td className="fw-bold">
                                {r.entradaout.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td
                                scope="row"
                                className="bg-secondary bg-opacity-25 fw-bold"
                              >
                                Saídas
                              </td>
                              <td
                                scope="row"
                                className="bg-secondary bg-opacity-25 fw-bold"
                              ></td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-danger fw-bold">
                                Dinheiro
                              </td>
                              <td className="fw-bold">
                                {r.saidadin.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-danger fw-bold">
                                Cheque
                              </td>
                              <td className="fw-bold">
                                {r.saidachq.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-danger fw-bold">
                                Transferência
                              </td>
                              <td className="fw-bold">
                                {r.saidatrf.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row" className="text-danger fw-bold">
                                Outras
                              </td>
                              <td className="fw-bold">
                                {r.saidaout.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td
                                scope="row"
                                className="bg-secondary bg-opacity-25 fw-bold"
                              >
                                Saldo Final
                              </td>
                              <td
                                scope="row"
                                className="bg-secondary bg-opacity-25 fw-bold"
                              >
                                {r.saldofin.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">Dinheiro</td>
                              <td className="fw-bold">
                                {r.saldofindin.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                            <tr>
                              <td scope="row">Cheque</td>
                              <td className="fw-bold">
                                {r.saldofinchq.toLocaleString("pt-BR", {
                                  style: "currency",
                                  currency: "BRL",
                                })}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ))}
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
