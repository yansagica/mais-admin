import React from 'react'
import{FcBullish, FcReading, FcFolder, FcInspection, FcStatistics} from 'react-icons/fc'

export default function Sidebar() {
   return (
      <>
         <nav class="sb-sidenav accordion sb-sidenav-light mt-3" id="sidenavAccordion">
            <div class="sb-sidenav-menu">
               <div class="nav">
                  {/* <div class="sb-sidenav-menu-heading">Core</div> */}
                  <a class="nav-link" href="index.html">
                     <div class="sb-nav-link-icon"><FcStatistics size={20}/></div>
                     Resumo Geral
                  </a>
                  {/* <div class="sb-sidenav-menu-heading">Interface</div> */}
                  <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                     <div class="sb-nav-link-icon"><FcInspection size={20}/></div>
                     Secretaria
                     <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div class="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                     <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="layout-static.html">Matriculados x Evasão (Geral)</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Matriculados x Evasão (Curso)</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Matriculados x Evasão (Turma)</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Matriculados x Código de Pagamento</a>                        
                        <a class="nav-link" href="layout-sidenav-light.html">Aprovados/Reprovados</a>
                     </nav>
                  </div>

                  <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts2" aria-expanded="false" aria-controls="collapseLayouts2">
                     <div class="sb-nav-link-icon"><FcBullish size={20}/></div>                     
                     Financeiro
                     <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                  </a>
                  <div class="collapse" id="collapseLayouts2" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                     <nav class="sb-sidenav-menu-nested nav">
                        <a class="nav-link" href="layout-static.html">Faturamento x Inadimplência Geral)</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Faturamento x Inadimplência (Curso)</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Faturamento x Despesas pagas (Mês)</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Faturamento Previsto x  Recebido / Parcela</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Faturamento Dia (Últimos 30 dias)</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Inadimplência por Turma</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Resumo Caixa por dia x Últimos 30 dias</a>
                        <a class="nav-link" href="layout-sidenav-light.html">Resumo Caixa por dia x Forma de Pagamento (Últimos 30 dias)</a>
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
