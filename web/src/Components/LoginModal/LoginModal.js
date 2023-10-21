import React, {useState, useContext} from "react";
import {Link, useNavigate } from "react-router-dom";
import api from '../../Source/Api'
import { UserContext } from '../../Context/UserContext'

function LoginModal({setRegisterForm}){

    const [userData, setUserData] = useContext(UserContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    async function loginHandler(e) {
        e.preventDefault()
        try{
            const userLoggedData = await api.post('session', {
                email,
                password
            })
            // console.log(userLoggedData.data)

            const userInfo = userLoggedData.data
            // console.log(userInfo)

            setUserData(prevState => ({
                ...prevState,
                isLogged: true,
                email: userInfo.email,
                name: userInfo.name,
                _id: userInfo._id
            }))

            navigate('/dashboard')
        }catch (err){
            alert('Login failed. Try again later')
        }
    }

    return (
        <div className="modal">
            <h1>Login</h1>
            <form>
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value.trim())}
                />
                {/*<p>{email}</p>*/}
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value.trim())}
                />
                {/*<p>{password}</p>*/}
                <button onClick={loginHandler}>LOGIN</button>
                <Link onClick={setRegisterForm}>Create Account</Link>
            </form>
        </div>
    )
}

export default LoginModal