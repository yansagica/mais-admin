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
         <section className="vh-100 login-style bg-light">
            <div className="container-fluid h-costum">
               <div className="row vh-100 d-flex justify-content-center align-items-center">
                  <div className="col-sm-5 col-md-5 col-lg-6 col-xl-5">
                     <img src="foto-login.svg" className="img-fluid"
                        alt="Sample image" />
                  </div>
                  <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
                     <form>
                        <div className="d-flex-column text-center align-items-center justify-content-center">
                           <h1 className="fw-bold">MaisAdmin</h1>
                           <label className="form-label" htmlFor="form3Example3">Sistema de Administração</label>
                        </div>

                        <div className="divider d-flex align-items-center my-4"></div>

                        <div className="form-outline mb-4">
                           <label className="form-label" htmlFor="form3Example3">E-mail</label>
                           <input type="email" id="form3Example3" className="form-control form-control-lg mb-3"
                              placeholder="" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="form-outline mb-3">
                           <label className="form-label" htmlFor="form3Example4">Senha</label>
                           <input type="password" id="form3Example4" className="form-control form-control-lg mb-3"
                              placeholder="" value={senha} onChange={(e) => setSenha(e.target.value)} />
                        </div>

                        <div className="text-center text-lg-start mt-3 pt-2">
                           <button type="button" className="btn botao-login btn-lg text-white col-12 col-xl-12"
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