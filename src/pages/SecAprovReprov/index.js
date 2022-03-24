import React, { useState } from 'react'
import Footer from '../../components/Footer'
import { FaUsers, FaUserFriends, FaCarAlt, FaDog } from 'react-icons/fa';
import { MdOutlineFreeCancellation, MdRestore } from 'react-icons/md';
import { BiTransfer } from 'react-icons/bi';
import {AiOutlineLike, AiOutlineFileExclamation, AiOutlineDislike} from 'react-icons/ai'
import '../SecAprovReprov/style.css'

export default function SecAprovReprov() {

   return (
      <>
         <div className="bg-light" id="layoutSidenav_content">
            <main>
               <div className="container-fluid px-4">
                  <h3 className="mt-4 mb-4 fw-bold texto-roxo">Aprovados/Reprovados</h3>
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
                              <option selected value="1">Selecione a turma</option>
                              <option value="2">1AM</option>
                              <option value="3">2AM</option>
                           </select>
                        </div>
                     </div>
                     <div class="row">
                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Aprovados</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <AiOutlineLike size="55px" />
                                    <span className="h1 fw-bold">351</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-blue order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Aprovados com dependência</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <AiOutlineFileExclamation color="" size="55px" />
                                    <span className="h1 fw-bold">20</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-orange order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Recuperação</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <MdRestore color="" size="55px" />
                                    <span className="h1 fw-bold">10</span>
                                 </div>
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-red order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Reprovados</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <AiOutlineDislike color="" size="55px" />
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
