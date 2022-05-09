import React from "react";
import { Link } from "react-router-dom";
import { FcBullish, FcInspection, FcStatistics } from "react-icons/fc";

export default function Sidebar() {
  return (
    <>
      <nav
        className="sb-sidenav accordion sb-sidenav-light mt-3"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            {/* <div className="sb-sidenav-menu-heading">Core</div> */}
            <Link className="nav-link" to="/dashboard">
              <div className="sb-nav-link-icon">
                <FcStatistics size={20} />
              </div>
              Resumo Geral
            </Link>

            {/* <div className="sb-sidenav-menu-heading">Interface</div> */}
            <a
              className="nav-link collapsed"
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
                {/* <Link className="nav-link" to="/secmatcodpag">
                  Matriculados x Código de Pagamento
                </Link> */}
                <Link className="nav-link" to="/secaprovreprov">
                  Aprovados/Reprovados
                </Link>
              </nav>
            </div>

            <a
              className="nav-link collapsed"
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
                <Link className="nav-link" to="/finfatprevreceb">
                  Faturamento Previsto x Recebido / Parcela
                </Link>
                {/* <Link className="nav-link" to="/finfatdia">
                  Faturamento Dia (Últimos 30 dias)
                </Link> */}
                <Link className="nav-link" to="/fininaturma">
                  Inadimplência por Turma
                </Link>
                <Link className="nav-link" to="/finrescaixadia">
                  Resumo Caixa por Mês/Dia
                </Link>
                {/* <Link className="nav-link" to="/finrescaixadiaforpag">
                  Resumo Caixa por dia x Forma de Pagamento (Últimos 30 dias)
                </Link> */}

                <a className="nav-link" href="layout-sidenav-light.html"></a>
                <a className="nav-link" href="layout-sidenav-light.html"></a>
              </nav>
            </div>
          </div>
        </div>
        {/* <div className="sb-sidenav-footer">
               <div className="small">Logged in as:</div>
               Start Bootstrap
            </div> */}
      </nav>
    </>
  );
}
