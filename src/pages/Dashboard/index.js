import React from "react";
import "./style.css";
import "./script";
import Header from "../../components/Header";
import Content from "../../components/Content";
import Sidebar from "../../components/Sidebar";
import Rotas from "../../routes";

export default function Dashboard() {
  return (
    <>
      <div className="sb-nav-fixed">
        <Header />
        <div id="layoutSidenav">
          <div id="layoutSidenav_nav">
            <Sidebar />
          </div>
          <Rotas />
        </div>
      </div>
    </>
  );
}
