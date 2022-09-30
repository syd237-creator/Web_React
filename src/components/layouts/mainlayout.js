import React from "react";
import { Outlet } from "react-router-dom";
import "./mainlayout.scss"

const MainLayout = (props)=>{
    return (
    <div>
      <div className="blog-container">
        <div className="navbar">
          <div className="brand">SeoBlog</div>
          <div className="navRight">
            <div className="navLinks">
              <a href="#">Facebook</a>
            </div>
            <div className="navLinks">
              <a href="#">Twitter</a>
            </div>
            <div className="navLinks">
              <a href="#">LinkedIn</a>
            </div>
          </div>
        </div>
        {props.children}
      </div>
      <Outlet/>
    </div>
    );
}

export default MainLayout