import React from "react";
import "../../App.css";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Rotas from "../../routes";
import { Link } from "react-router-dom";
import { GiExitDoor } from "react-icons/gi";
import { FcBullish, FcInspection, FcStatistics } from "react-icons/fc";

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
