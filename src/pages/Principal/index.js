import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { FaUsers, FaUserFriends } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import Pizza from "../../components/Graficos/Pizza";
import "../Principal/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getToken } from "../../servicos/auth";
import jwt_decode from "jwt-decode";

export default function Principal() {
  const [qtdMatriculados, setQtdMatriculados] = useState([]);
  const [qtdFichados, setQtdFichados] = useState([]);
  const [qtdEvasao, setQtdEvasao] = useState([]);
  const [qtdTfa, setQtdTfa] = useState([]);
  const [userData, setUserData] = useState(null);
  const [previstos, setPrevistos] = useState(null);
  const [faturamento, setFaturamento] = useState(null);
  const [recebidos, setRecebidos] = useState(0.0);
  const [inadim, setInadim] = useState([0.0]);
  const [listaPeriodos, setListaPeriodos] = useState([]);

  useEffect(() => {
    getTodosPeriodos();
    getTotalGeral();
  }, []);

  const chave = jwt_decode(getToken());
  const nome = chave.nome;
  const id = chave.userId;
  const cnpj = chave.cnpj;

  const getTodosPeriodos = async () => {
    const response = await api.get(`secretaria/periodos/${cnpj}`);
    setListaPeriodos(response.data);
  };

  const getTotalGeral = async () => {
    const response = await api.get(`secretaria/${cnpj}`);
    const allData = response.data;

    const totalMatric = allData.reduce((total, item) => total + item.qtdmat, 0);
    const totalFichad = allData.reduce((total, item) => total + item.qtdfic, 0);
    const totalEvasao = allData.reduce(
      (total, item) => total + item.qtdcats,
      0
    );
    const totalTfa = allData.reduce((total, item) => total + item.qtdtfa, 0);

    // TOTAL DE RECEBIMENTOS

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

    // TOTAL DE VENCIDOS

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

    // TOTAL DE PREVISTOS

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

    // TOTAL DE A PAGAR

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

    setUserData({
      labels: ["Recebidos", "Vencidos"],
      datasets: [
        {
          label: "userGain",
          data: [
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

    setPrevistos({
      labels: ["Previsto", "Recebido"],
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
          backgroundColor: ["#FF7F50", "#20B2AA"],
        },
      ],
    });

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
          backgroundColor: ["#58a6ff", "#8257e5"],
        },
      ],
    });

    setRecebidos(
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

    setQtdMatriculados(totalMatric);
    setQtdFichados(totalFichad);
    setQtdEvasao(totalEvasao);
    setQtdTfa(totalTfa);
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
                <h3 className="mt-4 mb-4 fw-bold texto-roxo">Resumo Geral</h3>
                <hr />
                <div className="container">
                  <h3 className="mt-4 mb-4 fw-bold text-secondary">
                    Períodos Ativos
                  </h3>
                  <div className="row">
                    {listaPeriodos.map((p, index) => (
                      <div key={index} className="col-md-6 col-xl-3">
                        <div className="card bg-c-roxo order-card">
                          <div className="card-block">
                            <div className="d-flex align-items-center justify-content-center">
                              <span className="h1 fw-bold text-white">
                                {p.ano}/{p.seqano}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <h3 className="mt-4 mb-4 fw-bold text-secondary">
                    Secretaria
                  </h3>
                  <div className="row">
                    <div className="col-md-6 col-xl-3">
                      <div className="card bg-c-green order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Matriculados
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <FaUsers size="55px" />
                            <span className="h1 fw-bold">
                              {qtdMatriculados}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-xl-3">
                      <div className="card bg-c-blue order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Fichados
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <FaUserFriends color="" size="55px" />
                            <span className="h1 fw-bold">{qtdFichados}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-xl-3">
                      <div className="card bg-c-red order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">Evasão</h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <MdOutlineFreeCancellation color="" size="55px" />
                            <span className="h1 fw-bold">{qtdEvasao}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6 col-xl-3">
                      <div className="card bg-c-orange order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Transferência Final de Ano
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            <BiTransfer color="" size="55px" />
                            <span className="h1 fw-bold">{qtdTfa}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="mt-4 mb-4 fw-bold text-secondary">
                    Financeiro
                  </h3>

                  <div className="row">
                    <div className="col-md-4 col-xl-3">
                      <h5 className="fw-bold">Mensalidades</h5>
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {userData && <Pizza chartData={userData} />}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-xl-3">
                      <h5 className="fw-bold">Previsto x Recebido</h5>
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {previstos && <Pizza chartData={previstos} />}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-4 col-xl-3">
                      <h5 className="fw-bold">Receitas x Despesas</h5>
                      <div className="card bg-c-light order-card">
                        <div className="card-block">
                          {faturamento && <Pizza chartData={faturamento} />}
                        </div>
                      </div>
                    </div>

                    <div className="col-md-12 col-xl-3">
                      <h5 className="fw-bold">Valores</h5>
                      <div className="card bg-c-green order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Recebidos
                          </h6>
                          <div className="d-flex align-items-center justify-content-around">
                            {/* <BsCurrencyDollar size="55px" /> */}
                            <span className="h1 fw-bold">
                              {recebidos.toLocaleString("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                              })}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="card bg-c-red order-card">
                        <div className="card-block">
                          <h6 className="m-b-20 fw-bold text-center">
                            Inadimplência
                          </h6>
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
        </div>
      </div>
    </>
  );
}
