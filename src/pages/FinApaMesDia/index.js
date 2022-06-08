import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import "../FinApaMesDia/style.css";
import api from "../../servicos/api";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { getCnpj } from "../../servicos/auth";

export default function FinApaMesDia() {
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [mes, setMes] = useState("");
  const [dia1, setDia1] = useState(0.0);
  const [dia2, setDia2] = useState(0.0);
  const [dia3, setDia3] = useState(0.0);
  const [dia4, setDia4] = useState(0.0);
  const [dia5, setDia5] = useState(0.0);
  const [dia6, setDia6] = useState(0.0);
  const [dia7, setDia7] = useState(0.0);
  const [dia8, setDia8] = useState(0.0);
  const [dia9, setDia9] = useState(0.0);
  const [dia10, setDia10] = useState(0.0);
  const [dia11, setDia11] = useState(0.0);
  const [dia12, setDia12] = useState(0.0);
  const [dia13, setDia13] = useState(0.0);
  const [dia14, setDia14] = useState(0.0);
  const [dia15, setDia15] = useState(0.0);
  const [dia16, setDia16] = useState(0.0);
  const [dia17, setDia17] = useState(0.0);
  const [dia18, setDia18] = useState(0.0);
  const [dia19, setDia19] = useState(0.0);
  const [dia20, setDia20] = useState(0.0);
  const [dia21, setDia21] = useState(0.0);
  const [dia22, setDia22] = useState(0.0);
  const [dia23, setDia23] = useState(0.0);
  const [dia24, setDia24] = useState(0.0);
  const [dia25, setDia25] = useState(0.0);
  const [dia26, setDia26] = useState(0.0);
  const [dia27, setDia27] = useState(0.0);
  const [dia28, setDia28] = useState(0.0);
  const [dia29, setDia29] = useState(0.0);
  const [dia30, setDia30] = useState(0.0);
  const [dia31, setDia31] = useState(0.0);

  const cnpj = getCnpj();

  useEffect(() => {
    getTodosPeriodos();
  }, []);

  useEffect(() => {
    if (anoPeriodo.length > 0) {
      getFinApaMesDia();
    }
  }, [anoPeriodo]);

  useEffect(() => {
    if (mes.length > 0) {
      getFinApaMesDia();
    }
  }, [mes]);

  const getTodosPeriodos = async () => {
    // const response = await api.get(`apadia/periodos/${cnpj}`);
    const response = await api.get(`anoper/${cnpj}/1`);
    setPeriodos(response.data);
  };

  const getFinApaMesDia = async () => {
    // const periodo = anoPeriodo.split("/");

    if (mes.length > 0) {
      const response = await api.get(`apadia/${cnpj}/${anoPeriodo}/${mes}`);
      const allData = response.data;

      setDia1(allData.dia01);
      setDia2(allData.dia02);
      setDia3(allData.dia03);
      setDia4(allData.dia04);
      setDia5(allData.dia05);
      setDia6(allData.dia06);
      setDia7(allData.dia07);
      setDia8(allData.dia08);
      setDia9(allData.dia09);
      setDia10(allData.dia10);
      setDia11(allData.dia11);
      setDia12(allData.dia12);
      setDia13(allData.dia13);
      setDia14(allData.dia14);
      setDia15(allData.dia15);
      setDia16(allData.dia16);
      setDia17(allData.dia17);
      setDia18(allData.dia18);
      setDia19(allData.dia19);
      setDia20(allData.dia20);
      setDia21(allData.dia21);
      setDia22(allData.dia22);
      setDia23(allData.dia23);
      setDia24(allData.dia24);
      setDia25(allData.dia25);
      setDia26(allData.dia26);
      setDia27(allData.dia27);
      setDia28(allData.dia28);
      setDia29(allData.dia29);
      setDia30(allData.dia30);
      setDia31(allData.dia31);
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
                  Pagamentos Efetuados Mês/Dia
                </h3>

                <hr />
                <div className="container">
                  <div className="row">
                    <div className="row">
                      <div className="col-12 col-lg-3 col-xl-2">
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
                      <div className="col-12 col-lg-3 col-xl-2">
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

                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia1 < 0
                            ? "card bg-c-red order-card"
                            : dia1 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">1</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia1 == 0 || dia1 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia1.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia2 < 0
                            ? "card bg-c-red order-card"
                            : dia2 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">2</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia2 == 0 || dia2 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia2.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia3 < 0
                            ? "card bg-c-red order-card"
                            : dia3 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">3</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia3 == 0 || dia3 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia3.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia4 < 0
                            ? "card bg-c-red order-card"
                            : dia4 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">4</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia4 == 0 || dia4 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia4.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia5 < 0
                            ? "card bg-c-red order-card"
                            : dia5 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">5</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia5 == 0 || dia5 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia5.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia6 < 0
                            ? "card bg-c-red order-card"
                            : dia6 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">6</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia6 == 0 || dia6 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia6.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia7 < 0
                            ? "card bg-c-red order-card"
                            : dia7 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">7</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia7 == 0 || dia7 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia7.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia8 < 0
                            ? "card bg-c-red order-card"
                            : dia8 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">8</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia8 == 0 || dia8 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia8.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia9 < 0
                            ? "card bg-c-red order-card"
                            : dia9 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">9</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia9 == 0 || dia9 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia9.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia10 < 0
                            ? "card bg-c-red order-card"
                            : dia10 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">10</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia10 == 0 || dia10 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia10.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia11 < 0
                            ? "card bg-c-red order-card"
                            : dia11 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">11</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia11 == 0 || dia11 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia11.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia12 < 0
                            ? "card bg-c-red order-card"
                            : dia12 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">12</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia12 == 0 || dia12 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia12.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia13 < 0
                            ? "card bg-c-red order-card"
                            : dia13 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">13</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia13 == 0 || dia13 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia13.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia14 < 0
                            ? "card bg-c-red order-card"
                            : dia14 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">14</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia14 == 0 || dia14 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia14.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia15 < 0
                            ? "card bg-c-red order-card"
                            : dia15 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">15</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia15 == 0 || dia15 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia15.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia16 < 0
                            ? "card bg-c-red order-card"
                            : dia16 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">16</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia16 == 0 || dia16 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia16.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia17 < 0
                            ? "card bg-c-red order-card"
                            : dia17 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">17</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia17 == 0 || dia17 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia17.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia18 < 0
                            ? "card bg-c-red order-card"
                            : dia18 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">18</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia18 == 0 || dia18 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia18.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia19 < 0
                            ? "card bg-c-red order-card"
                            : dia19 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">19</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia19 == 0 || dia19 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia19.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia20 < 0
                            ? "card bg-c-red order-card"
                            : dia20 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">20</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia20 == 0 || dia20 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia20.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia21 < 0
                            ? "card bg-c-red order-card"
                            : dia21 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">21</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia21 == 0 || dia21 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia21.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia22 < 0
                            ? "card bg-c-red order-card"
                            : dia22 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">22</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia22 == 0 || dia22 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia22.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia23 < 0
                            ? "card bg-c-red order-card"
                            : dia23 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">23</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia23 == 0 || dia23 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia23.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia24 < 0
                            ? "card bg-c-red order-card"
                            : dia24 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">24</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia24 == 0 || dia24 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia24.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia25 < 0
                            ? "card bg-c-red order-card"
                            : dia25 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">25</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia25 == 0 || dia25 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia25.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia26 < 0
                            ? "card bg-c-red order-card"
                            : dia26 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">26</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia26 == 0 || dia26 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia26.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia27 < 0
                            ? "card bg-c-red order-card"
                            : dia27 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">27</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia27 == 0 || dia27 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia27.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia28 < 0
                            ? "card bg-c-red order-card"
                            : dia28 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">28</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia28 == 0 || dia28 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia28.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia29 < 0
                            ? "card bg-c-red order-card"
                            : dia29 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">29</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia29 == 0 || dia29 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia29.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia30 < 0
                            ? "card bg-c-red order-card"
                            : dia30 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">30</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia30 == 0 || dia30 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia30.toFixed(2)}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 col-xl-2">
                      <div
                        className={
                          dia31 < 0
                            ? "card bg-c-red order-card"
                            : dia31 > 0
                            ? "card bg-c-red order-card"
                            : "card bg-c-light text-black order-card"
                        }
                      >
                        <div className="card-block">
                          <h5 className="m-b-20 fw-bold text-center">31</h5>
                          <div className="d-flex align-items-center justify-content-center">
                            {dia31 == 0 || dia31 === undefined ? (
                              <span className="h5 fw-bold">--</span>
                            ) : (
                              <span className="h5 fw-bold">
                                R$ {dia31.toFixed(2)}
                              </span>
                            )}
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
