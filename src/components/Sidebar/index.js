import React from 'react';
import { Link } from 'react-router-dom';
import { FcBullish, FcInspection, FcStatistics } from 'react-icons/fc'

export default function Sidebar() {
   return (
      <>
         <nav class="sb-sidenav accordion sb-sidenav-light mt-3" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
               <div class="nav">
                  {/* <div class="sb-sidenav-menu-heading">Core</div> */}
                  <Link className="nav-link" to="/home">
                     <div className="sb-nav-link-icon"><FcStatistics size={20} /></div>
                     Resumo Geral
                  </Link>

                  {/* <div class="sb-sidenav-menu-heading">Interface</div> */}
                  <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                     <div class="sb-nav-link-icon"><FcInspection size={20} /></div>
                     Secretaria
                     <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                     <nav class="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/secevasaocurso">Matriculados x Evasão (Curso)</Link>
                        <Link className="nav-link" to="/secevasaoturma">Matriculados x Evasão (Turma)</Link>
                        <Link className="nav-link" to="/secmatcodpag">Matriculados x Código de Pagamento</Link>
                        <Link className="nav-link" to="/secaprovreprov">Aprovados/Reprovados</Link>
                     </nav>
                  </div>

                  <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts2">
                     <div class="sb-nav-link-icon"><FcBullish size={20} /></div>
                     Financeiro
                     <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div class="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                     <nav class="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/finfatinager">Faturamento x Inadimplência Geral)</Link>
                        <Link className="nav-link" to="/finfatinacur">Faturamento x Inadimplência Curso)</Link>
                        <Link className="nav-link" to="/finfatdespmes">Faturamento x Despesas pagas (Mês)</Link>
                        <Link className="nav-link" to="/finfatprevreceb">Faturamento Previsto x  Recebido / Parcela</Link>                  
                        <Link className="nav-link" to="/finfatdia">Faturamento Dia (Últimos 30 dias)</Link>               
                        <Link className="nav-link" to="/fininaturma">Inadimplência por Turma</Link>                 
                        <Link className="nav-link" to="/finrescaixadia">Resumo Caixa por dia x Últimos 30 dias</Link>                   
                        <Link className="nav-link" to="/finrescaixadiaforpag">Resumo Caixa por dia x Forma de Pagamento (Últimos 30 dias)</Link>                   
                        
                        <a class="nav-link" href="layout-sidenav-light.html"></a>
                        <a class="nav-link" href="layout-sidenav-light.html"></a>
                     </nav>
                  </div>
               </div>
            </div>
            {/* <div class="sb-sidenav-footer">
               <div class="small">Logged in as:</div>
               Start Bootstrap
            </div> */}
         </nav>
      </>
   )
}
