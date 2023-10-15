import React from "react";
import logo from "../../assets/local-commerce-logo.png";
function Navbar({openModal}){
    return (
        <div>
            <nav>
                <div className="nav-container">
                    <img src={logo} alt="Local commerce logo"/>
                    <button onClick={openModal}>LOGIN</button>
                </div>
            </nav>
        </div>
    )
}

export default Navbar