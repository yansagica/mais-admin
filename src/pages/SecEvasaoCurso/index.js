import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { FaUsers, FaUserFriends, FaCarAlt, FaDog } from "react-icons/fa";
import { MdOutlineFreeCancellation } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import "../SecEvasaoCurso/style.css";
import axios from "axios";

var id = 1;

export default function SecEvasaoCurso() {
  const [qtdMatriculados, setQtdMatriculados] = useState([]);
  const [qtdFichados, setQtdFichados] = useState([]);
  const [qtdEvasao, setQtdEvasao] = useState([]);
  const [qtdTfa, setQtdTfa] = useState([]);
  const [registros, setRegistros] = useState([]);
  const [anoPeriodo, setAnoPeriodo] = useState([]);

  useEffect(() => {
    getMatriculados();
    getFichados();
    getEvasao();
    getTfa();
  }, []);

  useEffect(async () => {
    const response = await axios.get(`http://localhost:5000/secretaria`);
    setRegistros(response.data);
  }, []);

  const getMatriculados = async () => {
    const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
    const allData = response.data;
    setQtdMatriculados(allData.qtdmat);
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
                    value={anoPeriodo}
                    onChange={(e) => setAnoPeriodo(e.target.value)}
                    className="form-select form-select-lg mb-3"
                    aria-label="form-select-lg example"
                  >
                    <option value="0">Selecione o ano período</option>
                    {registros.map((registro) => (
                      <option key={registro.id} value={registro.id}>
                        {registro.ano}/{registro.seqano}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-9">
                  <select
                    className="form-select form-select-lg mb-3"
                    aria-label="form-select-lg example"
                  >
                    <option value="0">Selecione o curso</option>
                    {registros.map((registro) => (
                      <option key={registro.id} value={registro.id}>
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
