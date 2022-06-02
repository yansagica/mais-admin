import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FcBullish,
  FcInspection,
  FcStatistics,
  FcServices,
  FcContacts,
  FcReading,
  FcCalculator,
} from "react-icons/fc";
import api from "../../servicos/api";
import { getToken } from "../../servicos/auth";
import jwt_decode from "jwt-decode";
import "./Sidebar.css";

export default function Sidebar() {
  const [ultimaAtu, setUltimaAtu] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    getUltAtu();
    getLogo();
  }, []);

  const chave = jwt_decode(getToken());
  const id = chave.userId;
  const cnpj = chave.cnpj;

  const getUltAtu = async () => {
    const resp = await api.get(`user/users/${cnpj}/${id}`);
    const dados = resp.data.ultatu;
    setUltimaAtu(dados);
  };

  const getLogo = async () => {
    const resp = await api.get(`user/users/${cnpj}/${id}`);
    const dados = resp.data.img;
    setLogo(dados);
  };

  return (
    <>
      <nav
        className="sb-sidenav accordion sb-sidenav-light mt-3 bg-light border-end"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <a className="nav-link flex justify-content-center align-items-center">
              <div className="sb-nav-link-icon">
                <img src={logo} width={150} height={150} />
              </div>
            </a>
            <div className="text-center">
              <small className="texto-pequeno text-dark">
                Dados atualizados em:
              </small>
            </div>

            <div className="text-center">
              <small className="texto-pequeno text-dark">{ultimaAtu}</small>
            </div>
            <hr className="text-dark" />

            {/* <Link className="nav-link fw-bold" to="/configuracoes">
              <div className="sb-nav-link-icon">
                <FcServices size={20} />
              </div>
              Configurações
            </Link> */}

            <Link className="nav-link fw-bold" to="/dashboard">
              <div className="sb-nav-link-icon">
                <FcStatistics size={20} />
              </div>
              Resumo Geral
            </Link>

            <a
              className="nav-link collapsed fw-bold"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts"
              aria-expanded="false"
              aria-controls="collapseLayouts"
            >
              <div className="sb-nav-link-icon">
                <FcInspection size={20} />
              </div>
              Secretaria
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              className="collapse"
              id="collapseLayouts"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="/secevasaocurso">
                  Matriculados x Evasão (Curso)
                </Link>
                <Link className="nav-link" to="/secevasaoturma">
                  Matriculados x Evasão (Turma)
                </Link>
                <Link className="nav-link" to="/secaprovreprov">
                  Aprovados/Reprovados
                </Link>
              </nav>
            </div>

            <a
              className="nav-link collapsed fw-bold"
              href="#"
              data-bs-toggle="collapse"
              data-bs-target="#collapseLayouts2"
              aria-expanded="false"
              aria-controls="collapseLayouts2"
            >
              <div className="sb-nav-link-icon">
                <FcBullish size={20} />
              </div>
              Financeiro
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down"></i>
              </div>
            </a>
            <div
              className="collapse"
              id="collapseLayouts2"
              aria-labelledby="headingOne"
              data-bs-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link className="nav-link" to="/finfatinager">
                  Faturamento x Inadimplência (Geral)
                </Link>
                <Link className="nav-link" to="/finfatinacur">
                  Faturamento x Inadimplência (Curso)
                </Link>
                <Link className="nav-link" to="/finfatdespmes">
                  Faturamento x Despesas pagas (Mês)
                </Link>
                {/* <Link className="nav-link" to="/finfatprevreceb">
                  Faturamento Previsto x Recebido / Parcela
                </Link> */}
                {/* <Link className="nav-link" to="/finfatdia">
                  Faturamento Dia (Últimos 30 dias)
                </Link> */}
                <Link className="nav-link" to="/fininaturma">
                  Inadimplência por Turma
                </Link>
                <Link className="nav-link" to="/finrescaixadia">
                  Resumo Caixa por Mês/Dia
                </Link>
                <Link className="nav-link" to="/finapagardia">
                  Pagamentos Efetuados Mês/Dia
                </Link>
                {/* <Link className="nav-link" to="/finrescaixadiaforpag">
                  Resumo Caixa por dia x Forma de Pagamento (Últimos 30 dias)
                </Link> */}

                <a className="nav-link" href="layout-sidenav-light.html"></a>
                <a className="nav-link" href="layout-sidenav-light.html"></a>
              </nav>
            </div>
            <Link className="nav-link fw-bold" to="/bibacervo">
              <div className="sb-nav-link-icon">
                <FcReading size={20} />
              </div>
              Biblioteca
            </Link>

            <Link className="nav-link fw-bold" to="/notafiscal">
              <div className="sb-nav-link-icon">
                <FcCalculator size={20} />
              </div>
              Notas Fiscais
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
