import React, { useContext, useEffect, useState } from "react";
import "./style.css";
import { GiExitDoor } from "react-icons/gi";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../servicos/auth";
import jwt_decode from "jwt-decode";
import { getToken } from "../../servicos/auth";

export default function Header() {
  const navigate = useNavigate();

  const chave = jwt_decode(getToken());
  const nome = chave.nome;

  const Logout = async () => {
    logout();
    navigate("/");
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-roxo">
        <Link to="/dashboard" className="navbar-brand ps-3">
          MaisAdmin
        </Link>

        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
          onClick={() => console.log("clic")}
        >
          <i className="fas fa-bars"></i>
        </button>

        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <p className="navbar-brand ps-3 m-5">Olá, {nome}</p>
          </div>
        </form>

        <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <a className="navbar-brand ps-3"></a>
        </div>
        <div className="px-3" onClick={Logout}>
          <GiExitDoor size={30} color="#fff" />
        </div>
      </nav>
    </>
  );
}
