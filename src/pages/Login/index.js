import './style.css';

export const Login = () => {
   return (
      <>
         <section class="vh-100 login-style">
            <div class="container-fluid h-custom">
               <div class="row d-flex justify-content-center align-items-center">
                  <div class="col-md-9 col-lg-6 col-xl-5">
                     <img src="foto-login.svg" class="img-fluid"
                        alt="Sample image" />
                  </div>
                  <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                     <form>
                        <div class="d-flex-column text-center align-items-center justify-content-center">
                           <h1 class="fw-bold">MaisAdmin</h1>
                           <label class="form-label" for="form3Example3">Sistema de Administração</label>
                        </div>

                        <div class="divider d-flex align-items-center my-4"></div>

                        <div class="form-outline mb-4">
                           <label class="form-label" for="form3Example3">E-mail</label>
                           <input type="email" id="form3Example3" class="form-control form-control-lg mb-3"
                              placeholder="" />
                        </div>

                        <div class="form-outline mb-3">
                           <label class="form-label" for="form3Example4">Senha</label>
                           <input type="password" id="form3Example4" class="form-control form-control-lg mb-3"
                              placeholder="" />
                        </div>

                        <div class="text-center text-lg-start mt-4 pt-2">
                           <button type="button" class="btn botao-login btn-lg text-white"
                              style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}>Login</button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
            <div class="d-flex flex-column py-4 px-4 px-xl-5 footer-login">
               <div class="mb-3 mb-md-0 text-center">
                  <a className="text-white text-decoration-none" href="http://pathinformatica.com.br/site/">Path Informática &copy; 2022</a>
               </div>
            </div>
         </section>
      </>
   );
}