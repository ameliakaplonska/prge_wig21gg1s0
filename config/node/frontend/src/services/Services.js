import React from "react";
import { Link } from "react-router-dom";

import "./Services.css";

import wat_promocja from "./wat_promocja.png";

function Services() {
  return (
    <div className="services">
      {/* utworze górny */}

      <div className="services_bottom">
        <div className="services_bottomLeft">
          <div className="services_top">
            <h1 className="home_title">Dostępne usługi</h1>
          </div>
          <div className="services_buttons">
            <Link to="map">
              <button className="services_button" id="mapa">
                MAPA
              </button>
            </Link>
            <Link to="militaryunits">
              <button className="services_button" id="lista">
                WYKAZ lub lista CZEGOŚ
              </button>
            </Link>
          </div>
        </div>
        <div className="services_bottomRight">
          <div className="services_imageItem">
            <img src={wat_promocja} alt="" />
          </div>
          <div className="services_imageItem">
            <img src={wat_promocja} alt="" />
          </div>
          <div className="services_imageItem">
            <img src={wat_promocja} alt="" />
          </div>
          <div className="services_imageItem">
            <img src={wat_promocja} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
