import { useEffect, useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { isAuthenticated, login } from "../../servicos/auth";
import api from "../../servicos/api";

export const Login = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const Auth = async (e) => {
    e.preventDefault();
    try {
      const resp = await api.post("user/login", {
        usuario: usuario,
        senha: senha,
      });

      login(resp.data.accessToken);

      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        setMsg(error.response.data.msg);
      }
    }
  };

  const Autenticate = () => {
    if (isAuthenticated()) {
      navigate("/dashboard");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    Autenticate();
  }, []);

  return (
    <>
      <section className="vh-100 login-style bg-light">
        <div className="container-fluid h-costum">
          <div className="row vh-100 d-flex justify-content-center align-items-center">
            <div className="col-sm-5 col-md-5 col-lg-6 col-xl-5">
              <img
                src="foto-login.svg"
                className="img-fluid"
                alt="Sample image"
              />
            </div>
            <div className="col-md-6 col-lg-6 col-xl-4 offset-xl-1">
              <form onSubmit={Auth}>
                <div className="d-flex-column text-center align-items-center justify-content-center">
                  <h1 className="fw-bold">MaisAdmin</h1>
                  <label className="form-label" htmlFor="form3Example3">
                    Sistema de Administração
                  </label>
                </div>

                <div className="divider d-flex align-items-center my-4"></div>
                <p className="h3 text-danger text-center">{msg}</p>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form3Example3">
                    Usuário
                  </label>
                  <input
                    type="text"
                    id="form3Example3"
                    className="form-control form-control-lg mb-3"
                    placeholder=""
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                  />
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="form3Example4">
                    Senha
                  </label>
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control form-control-lg mb-3"
                    placeholder=""
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />
                </div>

                <div className="text-center text-lg-start mt-3 pt-2">
                  <button
                    type="submit"
                    className="btn btn-lg text-white col-12 col-xl-12"
                    style={{ backgroundColor: "#6A5ACD" }}
                  >
                    Acessar
                  </button>
                </div>
                <div className="text-center mt-4 footer-login">
                  <a className="text-decoration-none text-muted small" href="">
                    Desenvolvido por Path Informática
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
