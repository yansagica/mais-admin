import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { FaUsers, FaUserFriends, FaCarAlt, FaDog } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import "../SecEvasaoTurma/style.css";
import axios from "axios";

var cnpj = "83369678000173";

export default function SecEvasaoTurma() {
  const [qtdMatriculados, setQtdMatriculados] = useState([]);
  const [qtdFichados, setQtdFichados] = useState([]);
  const [qtdEvasao, setQtdEvasao] = useState([]);
  const [qtdTfa, setQtdTfa] = useState([]);
  const [registros, setRegistros] = useState([]);
  const [anoPeriodo, setAnoPeriodo] = useState("");
  const [periodos, setPeriodos] = useState([]);
  const [seqano, setSeqano] = useState("");
  const [turma, setTurma] = useState("");
  const [turmas, setTurmas] = useState([]);

  const getTodosPeriodos = async () => {
    const response = await axios.get(
      `http://localhost:5000/secretaria/periodos/${cnpj}`
    );
    setPeriodos(response.data);
  };

  const getTurmas = async () => {
    const periodo = anoPeriodo.split("/");
    const response = await axios.get(
      `http://localhost:5000/secretaria/turmas/${cnpj}/${periodo[0]}/${periodo[1]} `
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
  }, [turma]);

  const getTotalRegistros = async () => {
    let url = `http://localhost:5000/secretaria/${cnpj}`;
    const periodo = anoPeriodo.split("/");

    if (anoPeriodo.length > 0)
      url = `http://localhost:5000/secretaria/${cnpj}/${periodo[0]}/${periodo[1]}`;

    if (turma.length > 0)
      url = `http://localhost:5000/secretaria/turmas/${cnpj}/${periodo[0]}/${periodo[1]}/${turma}`;

    const response = await axios.get(url);
    const allData = response.data;
    console.log(allData);
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
              Matriculados x Evasão (Turma)
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
                    <option value="">...</option>
                    {periodos.map((p, index) => (
                      <option key={index} value={p.ano + "/" + p.seqano}>
                        {p.ano}/{p.seqano}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-9">
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
                        Tranferência Final de Ano
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
