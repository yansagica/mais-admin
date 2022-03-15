import React, { useEffect, useState } from 'react'
import Footer from '../../components/Footer'
import { FaUsers, FaUserFriends, FaCarAlt, FaDog } from 'react-icons/fa';
import { MdOutlineFreeCancellation } from 'react-icons/md';
import { BiTransfer } from 'react-icons/bi';
import Pizza from '../../components/Graficos/Pizza';
import { UserData, UserData2, UserData3 } from '../../Data';
import '../Principal/style.css';

import axios from 'axios';

var id = 1;

export default function Principal() {

   const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [{
         label: "userGain",
         data: UserData.map((data) => data.userGain),
         backgroundColor: [
            "rgba(75,192,192,1)",
            "#1E90FF",
            "#FF0000",
         ],

      }]
   });

   const [userData2, setUserData2] = useState({
      labels: UserData2.map((data) => data.year),
      datasets: [{
         label: "Users Gain",
         data: UserData2.map((data) => data.userGain),
         backgroundColor: [
            "#FF7F50",
            "#20B2AA", //verde
         ],

      }]
   });

   const [userData3, setUserData3] = useState({
      labels: UserData3.map((data) => data.year),
      datasets: [{
         label: "Users Gain",
         data: UserData3.map((data) => data.userGain),
         backgroundColor: [
            "#20B2AA",
            "#FFD700",
         ],

      }]
   });

   const [qtdMatriculados, setQtdMatriculados] = useState([]);
   const [qtdFichados, setQtdFichados] = useState([]);
   const [qtdEvasao, setQtdEvasao] = useState([]);
   const [qtdTfa, setQtdTfa] = useState([]);

   useEffect(() => {
      getMatriculados();
      getFichados();
      getEvasao();
      getTfa();
   }, [])

   const getMatriculados = async () => {
      const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
      const allData = response.data;

      console.log(response.data);

      setQtdMatriculados(allData.qtdmat);
   }

   const getFichados = async () => {
      const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
      const allData = response.data;

      setQtdFichados(allData.qtdfic);
   }

   const getEvasao = async () => {
      const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
      const allData = response.data;

      setQtdEvasao(allData.qtdcats);
   }

   const getTfa = async () => {
      const response = await axios.get(`http://localhost:5000/secretaria/${id}`);
      const allData = response.data;

      setQtdTfa(allData.qtdtfa);
   }

   return (
      <>
         <div className="bg-light" id="layoutSidenav_content">
            <main>
               <div className="container-fluid px-4">
                  <h3 className="mt-4 mb-4 fw-bold texto-roxo">Resumo Geral</h3>
                  <hr />
                  <div class="container">
                     <h3 className="mt-4 mb-4 fw-bold text-secondary">Secretaria</h3>
                     <div class="row">
                        <div class="col-md-4 col-xl-3">
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Matriculados</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    <FaUsers size="55px" />
                                    <span className="h1 fw-bold">{qtdMatriculados}</span>
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
                                    <span className="h1 fw-bold">{qtdFichados}</span>
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
                                    <span className="h1 fw-bold">{qtdEvasao}</span>
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
                                    <span className="h1 fw-bold">{qtdTfa}</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>

                     <h3 className="mt-4 mb-4 fw-bold text-secondary">Financeiro</h3>

                     <div className="row">

                        <div class="col-md-4 col-xl-3">
                           <h5 className='fw-bold'>Mensalidades</h5>
                           <div class="card bg-c-light order-card">
                              <div class="card-block">
                                 <Pizza chartData={userData} />
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <h5 className='fw-bold'>Previsto x Recebido</h5>
                           <div class="card bg-c-light order-card">
                              <div class="card-block">
                                 <Pizza chartData={userData2} />
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <h5 className='fw-bold'>Receitas x Despesas</h5>
                           <div class="card bg-c-light order-card">
                              <div class="card-block">
                                 <Pizza chartData={userData3} />
                              </div>
                           </div>
                        </div>

                        <div class="col-md-4 col-xl-3">
                           <h5 className='fw-bold'>Valores</h5>
                           <div class="card bg-c-green order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Recebidos</h6>
                                 <div className="d-flex align-items-center justify-content-around">
                                    {/* <BsCurrencyDollar size="55px" /> */}
                                    <span className="h1 fw-bold">R$ 1.350.000</span>
                                 </div>
                              </div>
                           </div>

                           <div class="card bg-c-red order-card">
                              <div class="card-block">
                                 <h6 class="m-b-20 fw-bold text-center">Inadimplência</h6>
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
