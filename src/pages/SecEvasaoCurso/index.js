import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { FaUsers, FaUserFriends } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import "../SecEvasaoCurso/style.css";
import axios from "axios";

var cnpj = "83369678000173";

export default function SecEvasaoCurso() {
  const [qtdMatriculados, setQtdMatriculados] = useState([]);
  const [qtdFichados, setQtdFichados] = useState([]);
  const [qtdEvasao, setQtdEvasao] = useState([]);
  const [qtdTfa, setQtdTfa] = useState([]);
  const [registros, setRegistros] = useState([]);
  const [anoPeriodo, setAnoPeriodo] = useState([]);
  const [seqano, setSeqano] = useState([]);
  const [curso, setCurso] = useState([]);

  useEffect(() => {
    getTotalRegistros();
  }, []);

  useEffect(() => {
    const getAnoPeriodo = async () => {
      if (anoPeriodo != 0) {
        const response = await axios.get(
          `http://localhost:5000/secretaria/${cnpj}`
        );
        const dados = response.data;
        const filterAnoPeriodo = dados
          .map((item) => item)
          .filter((item) => `${item.ano}/${item.seqano}` === anoPeriodo);

        const totalMatric = filterAnoPeriodo.reduce(
          (total, item) => total + item.qtdmat,
          0
        );
        const totalFic = filterAnoPeriodo.reduce(
          (total, item) => total + item.qtdfic,
          0
        );
        const totalEva = filterAnoPeriodo.reduce(
          (total, item) => total + item.qtdcats,
          0
        );
        const totalTfa = filterAnoPeriodo.reduce(
          (total, item) => total + item.qtdtfa,
          0
        );

        setQtdMatriculados(totalMatric);
        setQtdFichados(totalFic);
        setQtdEvasao(totalEva);
        setQtdTfa(totalTfa);
      } else if (curso != 0) {
        const response = await axios.get(
          `http://localhost:5000/secretaria/${cnpj}`
        );
        const dados = response.data;
        const filterAnoPeriodo = dados
          .map((item) => item)
          .filter(
            (item) =>
              (`${item.ano}/${item.seqano}` === anoPeriodo) |
              (item.curso === curso)
          );

        const totalMatric = filterAnoPeriodo.reduce(
          (total, item) => total + item.qtdmat,
          0
        );
        const totalFic = filterAnoPeriodo.reduce(
          (total, item) => total + item.qtdfic,
          0
        );
        const totalEva = filterAnoPeriodo.reduce(
          (total, item) => total + item.qtdcats,
          0
        );
        const totalTfa = filterAnoPeriodo.reduce(
          (total, item) => total + item.qtdtfa,
          0
        );
        setQtdMatriculados(totalMatric);
        setQtdFichados(totalFic);
        setQtdEvasao(totalEva);
        setQtdTfa(totalTfa);
      } else {
        getTotalRegistros();
      }
    };
    getAnoPeriodo();
  }, [anoPeriodo, curso]);

  const getTotalRegistros = async () => {
    const response = await axios.get(
      `http://localhost:5000/secretaria/${cnpj}`
    );
    const allData = response.data;
    setRegistros(allData);

    const totalMatric = allData.reduce((total, item) => total + item.qtdmat, 0);
    const totalFic = allData.reduce((total, item) => total + item.qtdfic, 0);
    const totalEva = allData.reduce((total, item) => total + item.qtdcats, 0);
    const totalTfa = allData.reduce((total, item) => total + item.qtdtfa, 0);

    setQtdMatriculados(totalMatric);
    setQtdFichados(totalFic);
    setQtdEvasao(totalEva);
    setQtdTfa(totalTfa);
  };

  return (
    <>
      <div className="bg-light" id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h3 className="mt-4 mb-4 fw-bold texto-roxo">
              Matriculados x Evasão (Curso)
            </h3>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-3">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label="form-select-lg example"
                    value={anoPeriodo}
                    onChange={(e) => setAnoPeriodo(e.target.value)}
                  >
                    <option value="0">SELECIONE ANO PERÍODO</option>
                    {registros.map((registro) => (
                      <option key={registro.id}>
                        {registro.ano}/{registro.seqano}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-9">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label="form-select-lg example"
                    value={curso}
                    onChange={(e) => setCurso(e.target.value)}
                  >
                    <option value="0">SELECIONE O CURSO</option>
                    {registros.map((registro) => (
                      <option key={registro.id} value={registro.curso}>
                        {registro.curso}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-xl-3">
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

                <div className="col-md-4 col-xl-3">
                  <div className="card bg-c-blue order-card">
                    <div className="card-block">
                      <h6 className="m-b-20 fw-bold text-center">
                        Fichados (Registrados)
                      </h6>
                      <div className="d-flex align-items-center justify-content-around">
                        <FaUserFriends color="" size="55px" />
                        <span className="h1 fw-bold">{qtdFichados}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-xl-3">
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

                <div className="col-md-4 col-xl-3">
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
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
