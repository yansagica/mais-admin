import React, { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import { FaUsers, FaUserFriends, FaCarAlt, FaDog } from "react-icons/fa";
import { MdOutlineFreeCancellation, MdRestore } from "react-icons/md";
import { BiTransfer } from "react-icons/bi";
import {
  AiOutlineLike,
  AiOutlineFileExclamation,
  AiOutlineDislike,
} from "react-icons/ai";
import "../SecAprovReprov/style.css";
import Pizza from "../../components/Graficos/Pizza";
import axios from "axios";

var cnpj = "83369678000173";

export default function SecAprovReprov() {
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
  const [aprovados, setAprovados] = useState(null);
  const [reprovados, setReprovados] = useState(null);

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
    getTotalRegistros();
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

    const totalAprov = allData.reduce((total, item) => total + item.qtdapr, 0);
    const totalReprov = allData.reduce((total, item) => total + item.qtdrep, 0);

    setAprovados({
      labels: ["Aprovados", "Reprovados"],
      datasets: [
        {
          label: "userGain",
          data: [totalAprov, totalReprov],
          backgroundColor: ["#007fff", "#FF0000"],
        },
      ],
    });
  };

  return (
    <>
      <div className="bg-light" id="layoutSidenav_content">
        <main>
          <div className="container-fluid px-4">
            <h3 className="mt-4 mb-4 fw-bold texto-roxo">
              Aprovados/Reprovados
            </h3>
            <hr />
            <div className="container">
              <div className="row">
                <div className="col-2">
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
                <div className="col-10">
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
                <div className="d-flex justify-content-center align-items-center col-md-4 col-lg-12 col-xl-12">
                  <div className="card order-card col-xl-5">
                    <div className="card-block">
                      {aprovados && <Pizza chartData={aprovados} />}
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
