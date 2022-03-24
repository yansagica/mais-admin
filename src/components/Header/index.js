import React from "react";
import "./style.css";
import { GiExitDoor } from "react-icons/gi";

export default function Header() {
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
          {/* <div className="input-group">
            <p className="navbar-brand ps-3 m-5">Período: 2022/1</p>
          </div> */}
        </form>
        {/* 
            <div className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
               <a className="navbar-brand ps-3">
                  EDUARDO CAMPOS
               </a>
            </div> */}
        <div className="px-3">
          <GiExitDoor size={30} color="#fff" />
        </div>
      </nav>
    </>
  );
}
