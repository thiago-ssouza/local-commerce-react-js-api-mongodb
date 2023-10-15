import React from "react";
import {Link} from "react-router-dom";
function LoginModal({setRegisterForm}){
    return (
        <div className="modal">
            <h1>Login</h1>
            <form>
                <input type="text" placeholder="email"/>
                <input type="password" placeholder="password"/>
                <button>LOGIN</button>
                <Link onClick={setRegisterForm}>Create Account</Link>
            </form>
        </div>
    )
}

export default LoginModal