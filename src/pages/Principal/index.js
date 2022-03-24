import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { FaUsers, FaUserFriends } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import Pizza from "../../components/Graficos/Pizza";
import { UserData, UserData2, UserData3 } from "../../Data";
import "../Principal/style.css";
import axios from "axios";

var id = 1;

export default function Principal() {
  const [qtdMatriculados, setQtdMatriculados] = useState([]);
  const [qtdFichados, setQtdFichados] = useState([]);
  const [qtdEvasao, setQtdEvasao] = useState([]);
  const [qtdTfa, setQtdTfa] = useState([]);
  const [userData, setUserData] = useState(null);
  const [previstos, setPrevistos] = useState(null);
  const [faturamento, setFaturamento] = useState(null);
  const [recebidos, setRecebidos] = useState(0.0);
  const [inadim, setInadim] = useState(0.0);

  useEffect(() => {
    getMatriculados();
    getFichados();
    getEvasao();
    getTfa();
    getRecebidos();
  }, []);

  useEffect(() => {
    getInadim();
  }, []);

  const getMatriculados = async () => {
    const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
    const allData = response.data;

    setQtdMatriculados(allData.qtdmat);

    setUserData({
      labels: ["Pagamentos", "Vencidos"],
      datasets: [
        {
          label: "userGain",
          data: [
            Number(allData.rec01) +
              Number(allData.rec02) +
              Number(allData.rec03) +
              Number(allData.rec04) +
              Number(allData.rec05) +
              Number(allData.rec06) +
              Number(allData.rec07) +
              Number(allData.rec08) +
              Number(allData.rec09) +
              Number(allData.rec10) +
              Number(allData.rec11) +
              Number(allData.rec12),

            Number(allData.deb01) +
              Number(allData.deb02) +
              Number(allData.deb03) +
              Number(allData.deb04) +
              Number(allData.deb05) +
              Number(allData.deb06) +
              Number(allData.deb07) +
              Number(allData.deb08) +
              Number(allData.deb09) +
              Number(allData.deb10) +
              Number(allData.deb11) +
              Number(allData.deb12),
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
            Number(allData.fat01) +
              Number(allData.fat02) +
              Number(allData.fat03) +
              Number(allData.fat04) +
              Number(allData.fat05) +
              Number(allData.fat06) +
              Number(allData.fat07) +
              Number(allData.fat08) +
              Number(allData.fat09) +
              Number(allData.fat10) +
              Number(allData.fat11) +
              Number(allData.fat12),

            Number(allData.rec01) +
              Number(allData.rec02) +
              Number(allData.rec03) +
              Number(allData.rec04) +
              Number(allData.rec05) +
              Number(allData.rec06) +
              Number(allData.rec07) +
              Number(allData.rec08) +
              Number(allData.rec09) +
              Number(allData.rec10) +
              Number(allData.rec11) +
              Number(allData.rec12),
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
            Number(allData.fat01) +
              Number(allData.fat02) +
              Number(allData.fat03) +
              Number(allData.fat04) +
              Number(allData.fat05) +
              Number(allData.fat06) +
              Number(allData.fat07) +
              Number(allData.fat08) +
              Number(allData.fat09) +
              Number(allData.fat10) +
              Number(allData.fat11) +
              Number(allData.fat12),

            Number(allData.apa01) +
              Number(allData.apa02) +
              Number(allData.apa03) +
              Number(allData.apa04) +
              Number(allData.apa05) +
              Number(allData.apa06) +
              Number(allData.apa07) +
              Number(allData.apa08) +
              Number(allData.apa09) +
              Number(allData.apa10) +
              Number(allData.apa11) +
              Number(allData.apa12),
          ],
          backgroundColor: ["#58a6ff", "#8257e5"],
        },
      ],
    });
  };

  const getFichados = async () => {
    const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
    const allData = response.data;

    setQtdFichados(allData.qtdfic);
  };

  const getEvasao = async () => {
    const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
    const allData = response.data;

    setQtdEvasao(allData.qtdcats);
  };

  const getTfa = async () => {
    const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
    const allData = response.data;

    setQtdTfa(allData.qtdtfa);
  };

  const getRecebidos = async () => {
    const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
    const allData = response.data;

    setRecebidos(
      Number(allData.rec01) +
        Number(allData.rec02) +
        Number(allData.rec03) +
        Number(allData.rec04) +
        Number(allData.rec05) +
        Number(allData.rec06) +
        Number(allData.rec07) +
        Number(allData.rec08) +
        Number(allData.rec09) +
        Number(allData.rec10) +
        Number(allData.rec11) +
        Number(allData.rec12)
    );
  };

  const getInadim = async () => {
    const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
    const allData = response.data;

    setInadim(
      Number(allData.deb01) +
        Number(allData.deb02) +
        Number(allData.deb03) +
        Number(allData.deb04) +
        Number(allData.deb05) +
        Number(allData.deb06) +
        Number(allData.deb07) +
        Number(allData.deb08) +
        Number(allData.deb09) +
        Number(allData.deb10) +
        Number(allData.deb11) +
        Number(allData.deb12)
    );
  };

  return (
    <>
      <div className="bg-light" id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h3 className="mt-4 mb-4 fw-bold texto-roxo">Resumo Geral</h3>
            <hr />
            <div className="container">
              <h3 className="mt-4 mb-4 fw-bold text-secondary">Secretaria</h3>
              <div className="row">
                <div className="col-md-6 col-xl-3">
                  <div className="card bg-c-green order-card">
                    <div className="card-block">
                      <h6 className="m-b-20 fw-bold text-center">
                        Matriculados
                      </h6>
                      <div className="d-flex align-items-center justify-content-around">
                        <FaUsers size="55px" />
                        <span className="h1 fw-bold">{qtdMatriculados}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-xl-3">
                  <div className="card bg-c-blue order-card">
                    <div className="card-block">
                      <h6 className="m-b-20 fw-bold text-center">Fichados</h6>
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
                        TFA (Tranferência Final de Ano)
                      </h6>
                      <div className="d-flex align-items-center justify-content-around">
                        <BiTransfer color="" size="55px" />
                        <span className="h1 fw-bold">{qtdTfa}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="mt-4 mb-4 fw-bold text-secondary">Financeiro</h3>

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
                      <h6 className="m-b-20 fw-bold text-center">Recebidos</h6>
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
    </>
  );
}
