import React from 'react'
import "./Header.css";
import logo from "../assets/logo.svg";
import camera from "../assets/camera.svg";
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div id="main-header">
            <div className="header-content">
                <Link to="/">
                    <img src={logo} alt="instaRockect" />
                </Link>
                <Link to="/new">
                    <img src={camera} alt="enviar publicação" />
                </Link>
            </div>
        </div>
    )
}
