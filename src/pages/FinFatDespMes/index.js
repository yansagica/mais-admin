import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Pizza from '../../components/Graficos/Pizza';
import { UserData5 } from '../../Data';
import '../FinFatDespMes/style.css'

export default function FinFatDespMes() {

   const [userData, setUserData] = useState({
      labels: UserData5.map((data) => data.year),
      datasets: [{
         label: "userGain",
         data: UserData5.map((data) => data.userGain),
         backgroundColor: [
            "rgba(75,192,192,1)",
            "#FF0000",
         ],

      }]
   });

   return (
      <>
         <div className="bg-light" id="layoutSidenav_content">
            <main>
               <div className="container-fluid px-4">
                  <h3 className="mt-4 mb-4 fw-bold texto-roxo">Faturamento x Despesas Pagas(Mês)</h3>
                  <hr />
                  <div class="container">
                     <div className='row'>
                        <div className='col-xs-12 col-xl-2'>
                           <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                              <option selected value="1">2020/1</option>
                              <option value="2">2021/1</option>
                              <option value="3">2022/1</option>
                           </select>
                        </div>                        
                        <div className='col-xs-12 col-xl-2'>
                           <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                              <option selected value="1">Janeiro</option>
                              <option value="2">Fevereiro</option>
                              <option value="3">Março</option>
                              <option value="4">Abril</option>
                              <option value="5">Maio</option>
                              <option value="6">Junho</option>
                              <option value="7">Julho</option>
                              <option value="8">Agosto</option>
                              <option value="9">Setembro</option>
                              <option value="10">Outubro</option>
                              <option value="11">Novembro</option>
                              <option value="12">Dezembro</option>
                           </select>
                        </div>                        
                     </div>
                     <div className="row">
                        <div class="col-md-4 col-xl-5">
                           <h5 className='fw-bold'>Mensalidades</h5>
                           <div class="card bg-c-light order-card">
                              <div class="card-block">
                                 <Pizza chartData={userData} />
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-7">
                           <h5 className='fw-bold'>Valores</h5>
                           <div class="card bg-c-green order-card altura-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">Recebidos</h5>
                                 <div className="d-flex align-items-center justify-content-around">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h1 fw-bold">R$ 1.350.000</span>
                                 </div>
                              </div>
                           </div>
                           <div class="card bg-c-red order-card altura-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">Inadimplência</h5>
                                 <div className="d-flex align-items-center justify-content-around">
                                    {/* <HiOutlineTrendingDown size="55px" /> */}
                                    <span className="h1 fw-bold">R$ 130.000</span>
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
   )
}
