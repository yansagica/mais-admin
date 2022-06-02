import React, { useState, useEffect, useContext } from "react";
import Footer from "../../components/Footer";
import "../SecEvasaoCurso/style.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import api from "../../servicos/api";
import { getCnpj, getToken } from "../../servicos/auth";
import jwt_decode from "jwt-decode";

function Configuracoes() {
  const [periodos, setPeriodos] = useState([]);
  const [anoPeriodo, setAnoPeriodo] = useState("");

  const cnpj = getCnpj();
  const chave = jwt_decode(getToken());
  const codmaisad = chave.codmaisad;

  useEffect(() => {
    getTodosPeriodos();
  }, []);

  // useEffect(() => {
  //   let c = anoPeriodo;
  //   let res = c.substring(1, 7);
  //   anoPeriodo = anoPeriodo.replace("deletar", "");
  //   anoPeriodo = anoPeriodo.replace("gravarr", "");

  //   if (res === "deletar") {
  //     deleteAnoPeriodo();
  //   } else {
  //     gravaAnoPeriodo();
  //   }
  // }, [anoPeriodo]);

  const getTodosPeriodos = async () => {
    const response = await api.get(`secretaria/periodos/${cnpj}`);
    setPeriodos(response.data);
  };

  const gravaAnoPeriodo = async () => {
    const periodo = anoPeriodo.split("/");

    await api.post(`anoper/${codmaisad}`, {
      codmaisad: codmaisad,
      ano: periodo[0],
      seqano: periodo[1],
    });

    console.log(periodo[0], periodo[1]);
  };

  const deleteAnoPeriodo = async () => {
    const periodo = anoPeriodo.split("/");
    console.log(periodo[0], periodo[2], codmaisad);
    await api.delete(`anoper/${codmaisad}/${periodo[0]}/${periodo[1]}`);
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
                <h3 className="mt-4 mb-4 fw-bold texto-roxo">Configurações</h3>
                <hr />

                <div className="row">
                  <label className="fw-bold mb-4 small">
                    * Selecione os períodos que serão considerados para pesquisa
                  </label>
                  {periodos.map((p, index) => (
                    <div key={index} className="col-md-6 col-xl-3">
                      <div className="card bg-c-roxo order-card">
                        <div className="card-block">
                          <div className="d-flex align-items-center justify-content-center">
                            <div className="form-check form-switch h3">
                              <input
                                className="form-check-input sel"
                                type="checkbox"
                                id="flexSwitchCheckDefault"
                                value={anoPeriodo}
                                onChange={(e) => {
                                  console.log(e.target.value);
                                  if (e.target.value == "0") {
                                    deleteAnoPeriodo();
                                  } else {
                                    gravaAnoPeriodo();
                                  }
                                }}
                              />
                              <label
                                className="form-check-label fw-bold text-white"
                                htmlFor="flexSwitchCheckDefault"
                              >
                                {p.ano}/{p.seqano}
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
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

export default Configuracoes;
