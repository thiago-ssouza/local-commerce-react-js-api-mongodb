import React from "react";
import {Link} from "react-router-dom";
function RegisterModal({setLoginForm}){
    return (
        <div className="modal">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="name"/>
                <input type="text" placeholder="phone"/>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>REGISTER</button>
                <Link onClick={setLoginForm}>I have already an account</Link>
            </form>
        </div>
    )
}

export default RegisterModal