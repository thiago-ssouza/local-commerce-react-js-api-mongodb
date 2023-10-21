import React, {useContext} from "react";
import logo from "../../assets/local-commerce-logo.png";

// importing the context to use it
import { UserContext } from '../../Context/UserContext'
function Navbar({openModal}){

    const [userData, setUserData] = useContext(UserContext)

    async function logoutHandler(e){
        e.preventDefault()

        setUserData(prevState => ({
            ...prevState,
            isLogged: false,
            email: '',
            name: ''
        }))
    }

    return (
        <div>
            <nav>
                <div className="nav-container">
                    <img src={logo} alt="Local commerce logo"/>
                    {userData.isLogged ? <button onClick={logoutHandler}>SIGN OUT</button> : <button onClick={openModal}>LOGIN</button>}

                </div>
            </nav>
        </div>
    )
}

export default Navbar