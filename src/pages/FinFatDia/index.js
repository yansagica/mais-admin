import React, { useState } from 'react'
import Footer from '../../components/Footer'
import Pizza from '../../components/Graficos/Pizza';
import { UserData5 } from '../../Data';
import '../FinFatDia/style.css'

export default function FinFatDia() {

   return (
      <>
         <div className="bg-light" id="layoutSidenav_content">
            <main>
               <div className="container-fluid px-4">
                  <h3 className="mt-4 mb-4 fw-bold texto-roxo">Faturamento do Dia (Últimos 30 dias)</h3>
                  <hr />
                  <div class="container">
                  <h5 className='fw-bold'>Data de referência: 08/03/2022</h5>
                     <div className="row">
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="row">
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-md-4 col-xl-2">                           
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h5 class="m-b-20 fw-bold text-center">08/02</h5>
                                 <div className="d-flex align-items-center justify-content-center">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h5 fw-bold">R$ 20.000,00</span>
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
