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
  const [idAnoPeriodo, setIdAnoPeriodo] = useState([]);

  const cnpj = getCnpj();
  const chave = jwt_decode(getToken());
  const codmaisad = chave.codmaisad;

  useEffect(() => {
    getTodosPeriodos();
  }, []);

  const getTodosPeriodos = async () => {
    const response = await api.get(`anoper/${cnpj}`);
    setPeriodos(response.data);
  };

  const ativaDesativaAnoPeriodo = async (idAnoPeriodo, ativado) => {
    await api.patch(`anoper/${idAnoPeriodo}`, {
      ativado: ativado,
    });
  };

  const handleCheck = (id) => {
    const result = periodos.map((per) => {
      if (per.id == id) {
        per.ativado = per.ativado == 1 ? 0 : 1;
        ativaDesativaAnoPeriodo(id, per.ativado);
      }

      return per;
    });

    setPeriodos(result);
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
                                value={idAnoPeriodo}
                                checked={p.ativado == 1}
                                onChange={() => handleCheck(p.id)}
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
