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
  //   setUserData({
  //     labels: ["Recebidos", "Vencidos"],
  //     datasets: [
  //       {
  //         label: "userGain",
  //         data: [
  //           totalRec01 +
  //             totalRec02 +
  //             totalRec03 +
  //             totalRec04 +
  //             totalRec05 +
  //             totalRec06 +
  //             totalRec07 +
  //             totalRec08 +
  //             totalRec09 +
  //             totalRec10 +
  //             totalRec11 +
  //             totalRec12,

  //           totalDeb01 +
  //             totalDeb02 +
  //             totalDeb03 +
  //             totalDeb04 +
  //             totalDeb05 +
  //             totalDeb06 +
  //             totalDeb07 +
  //             totalDeb08 +
  //             totalDeb09 +
  //             totalDeb10 +
  //             totalDeb11 +
  //             totalDeb12,
  //         ],
  //         backgroundColor: ["rgba(75,192,192,1)", "#FF0000"],
  //       },
  //     ],
  //   });

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
                {/* <div className="col-md-4 col-xl-3">
                  <h5 className="fw-bold">Mensalidades</h5>
                  <div className="card bg-c-light order-card">
                    <div className="card-block">
                      {userData && <Pizza chartData={userData} />}
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
