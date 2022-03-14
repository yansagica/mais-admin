import React from 'react'
import Footer from '../../components/Footer'
import '../FinResCaixaDiaForpag/style.css'

export default function FinResCaixaDiaForpag() {

   return (
      <>
         <div className="bg-light" id="layoutSidenav_content">
            <main>
               <div className="container-fluid px-4">
                  <h3 className="mt-4 mb-4 fw-bold texto-roxo">Resumo Caixa por dia x Forma de Pagamento (Últimos 30 dias)</h3>
                  <hr />
                  <div class="container">
                  <div className='row'>
                        <div className='col-2'>
                           <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                              <option selected value="1">2020/1</option>
                              <option value="2">2021/1</option>
                              <option value="3">2022/1</option>
                           </select>
                        </div>
                        <div className='col-10'>
                           <select class="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
                              <option selected value="1">Selecione a forma de pagamento</option>
                              <option value="2">DINHEIRO</option>
                              <option value="3">CARTÃO</option>
                           </select>
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
