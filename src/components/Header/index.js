import React, { useEffect, useState } from "react";
import "./style.css";
import { GiExitDoor } from "react-icons/gi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";

export default function Header() {
  const [name, setName] = useState([]);
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/user/logout");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-roxo">
        <a className="navbar-brand ps-3" href="index.html">
          MaisAdmin
        </a>

        <button
          className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
          id="sidebarToggle"
          href="#!"
        >
          <i className="fas fa-bars"></i>
        </button>

        <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
          <div className="input-group">
            <p className="navbar-brand ps-3 m-5">Olá, {name}</p>
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
