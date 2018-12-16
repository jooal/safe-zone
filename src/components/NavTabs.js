import React from "react";
import { Link } from "react-router-dom";
import "../styles/NavTabs.css"; 

const NavTabs = () => (
  <ul className="nav nav-tabs">
    <li className="nav-item">
      <Link
        to="/map"
        className={
          window.location.pathname === "/map" ? "nav-link active" : "nav-link"
        }
      >
        Map
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/get-alerts"
        className={
          window.location.pathname === "/get-alerts" ? "nav-link active" : "nav-link"
        }
      >
        Get Alerts
      </Link>
    </li>
    <li className="nav-item">
      <Link
        to="/report"
        className={
          window.location.pathname === "/report" ? "nav-link active" : "nav-link"
        }
      >
        Report
      </Link>
    </li>
  </ul>
);

export default NavTabs;
