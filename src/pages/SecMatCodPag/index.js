import React, { useState } from 'react'
import Footer from '../../components/Footer'
import { FaUsers, FaUserFriends, FaCarAlt, FaDog } from 'react-icons/fa';
import { MdOutlineFreeCancellation } from 'react-icons/md';
import { BiTransfer } from 'react-icons/bi';
import './style.css'

export default function SecMatCodPag() {

   return (
      <>
         <div className="bg-light" id="layoutSidenav_content">
            <main>
               <div className="container-fluid px-4">
                  <h3 className="mt-4 mb-4 fw-bold texto-roxo">Matriculados x Código de Pagamento</h3>
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
                              <option selected value="1">Selecione o código de pagamento</option>
                              <option value="2">FUND1</option>
                              <option value="3">FUND2</option>
                              <option value="4">BOLSISTA</option>
                           </select>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Matriculados</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <FaUsers size="55px" />
                                    <span className="h1 fw-bold">351</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-blue order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Fichados (Registrados)</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <FaUserFriends color="" size="55px" />
                                    <span className="h1 fw-bold">20</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-red order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Evasão</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <MdOutlineFreeCancellation color="" size="55px" />
                                    <span className="h1 fw-bold">10</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-orange order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">TFA (Tranferência Final de Ano)</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <BiTransfer color="" size="55px" />
                                    <span className="h1 fw-bold">2</span>
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

