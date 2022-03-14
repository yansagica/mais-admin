import { useState } from 'react';
import './style.css';

export const Login = () => {

   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');

   const handleButtonEnter = () => {
      alert(`Email: : ${email} Senha: ${senha}`);
   }

   return (
      <>
         <section class="vh-100 login-style">
            <div class="container-fluid h-costum">
               <div class="row vh-100 d-flex justify-content-center align-items-center">
                  <div class="col-sm-5 col-md-5 col-lg-6 col-xl-5">
                     <img src="foto-login.svg" class="img-fluid"
                        alt="Sample image" />
                  </div>
                  <div class="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                     <form>
                        <div class="d-flex-column text-center align-items-center justify-content-center">
                           <h1 class="fw-bold">MaisAdmin</h1>
                           <label class="form-label" for="form3Example3">Sistema de Administração</label>
                        </div>

                        <div class="divider d-flex align-items-center my-4"></div>

                        <div class="form-outline mb-4">
                           <label class="form-label" for="form3Example3">E-mail</label>
                           <input type="email" id="form3Example3" class="form-control form-control-lg mb-3"
                              placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div class="form-outline mb-3">
                           <label class="form-label" for="form3Example4">Senha</label>
                           <input type="password" id="form3Example4" class="form-control form-control-lg mb-3"
                              placeholder="" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <div class="text-center text-lg-start mt-3 pt-2">
                           <button type="button" class="btn botao-login btn-lg text-white col-12 col-xl-12"
                              onClick={handleButtonEnter}>Login</button>
                        </div>
                        <div className='text-center mt-4 footer-login'><a className='text-decoration-none text-muted small' href=''>Desenvolvido por Path Informática</a></div>
                     </form>
                  </div>
               </div>               
            </div>

         </section>
      </>
   );
}