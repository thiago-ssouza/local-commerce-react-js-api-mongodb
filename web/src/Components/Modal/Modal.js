// To do the state control
import React, {useState} from "react";
import LoginModal from '../../Components/LoginModal/LoginModal'
import RegisterModal from "../RegisterModal/RegisterModal";
function Modal({closeModal}){

    // state is just a variable that's it
    const[isLogin, setIsLogion] = useState(true)

    // two functions to manager the state. If I click on Create Account goes to Register and vice versa
    function setLoginForm(){
        setIsLogion(true)
    }

    function  setRegisterForm(){
        setIsLogion(false)
    }

    return (
        <div className="backdrop">
            <button className="close-modal-btn" onClick={closeModal}>Close</button>
            {/*passing by props*/}
            {isLogin ? <LoginModal setRegisterForm={setRegisterForm}/> : <RegisterModal setLoginForm={setLoginForm}/>}

        </div>
    )
}

export default Modal