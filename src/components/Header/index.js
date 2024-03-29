import React, { useContext, useEffect, useState } from "react";
import { GiExitDoor } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../servicos/auth";
import jwt_decode from "jwt-decode";
import { getToken } from "../../servicos/auth";
import api from "../../servicos/api";
import { BiRefresh } from "react-icons/bi";
import "./style.css";

export default function Header() {
  const navigate = useNavigate();
  const [ultimaAtu, setUltimaAtu] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const chave = jwt_decode(getToken());
  const nome = chave.nome;
  const id = chave.userId;
  const cnpj = chave.cnpj;

  // const getUltAtu = async () => {
  //   const resp = await api.get(`user/users/${cnpj}/${id}`);
  //   const dados = resp.data.ultatu;
  //   setUltimaAtu(dados);
  // };

  const Logout = async () => {
    logout();
    navigate("/");
  };

  const menuToggle = (event) => {
    event.preventDefault();
    document.body.classList.toggle("sb-sidenav-toggled");
    localStorage.setItem(
      "sb|sidebar-toggle",
      document.body.classList.contains("sb-sidenav-toggled")
    );
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-roxo">
        <div>
          <Link
            to="/dashboard"
            className="d-flex justify-content-center align-items-center navbar-brand ps-3 fw-bold"
          >
            MaisAdmin
          </Link>
        </div>

        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
          onClick={menuToggle}
        >
          <i className="fas fa-bars"></i>
        </button>
        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <span className="h5 fw-bold text-white">Bem-vindo, {nome}</span>
          </div>
        </form>

        <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <a className="navbar-brand ps-3"></a>
        </div>
        <button
          className="px-3 btn"
          style={{ cursor: "pointer" }}
          data-toggle="tooltip"
          title="Sair do Sistema"
          onClick={Logout}
        >
          <GiExitDoor size={30} color="#fff" />
        </button>
      </nav>
    </>
  );
}
