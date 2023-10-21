import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import api from '../../Source/Api'

function RegisterModal({setLoginForm}){

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)

    //when load the page it is activated and take the locationg
    useEffect(() => {
        getUserLocation()
    }, [])

    async function registerHandler(e) {
        e.preventDefault()

        try{
            await api.post('user', {
                name,
                phone,
                email,
                password,
                latitude,
                longitude

            })

            alert('User successfully registered! You can access your account')
            setName('')
            setPhone('')
            setEmail('')
            setPassword('')

        }catch (err){
            alert('User register failed. Try again later')
        }
    }

    async function getUserLocation(){
        navigator.geolocation.getCurrentPosition((position)=>{
            const {latitude, longitude} = position.coords
            //console.log(latitude,longitude)
            setLatitude(latitude)
            setLongitude(longitude)
        }, (err) => {
            console.log(err)
        }, {timeout: 10000})
    }


    return (
        <div className="modal">
            <h1>Register</h1>
            <form>
                <input
                    type="text"
                    placeholder="name"
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="phone"
                    value={phone}
                    onChange={e=>setPhone(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="email"
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <button onClick={registerHandler}>REGISTER</button>
                <Link onClick={setLoginForm}>I have already an account</Link>
            </form>
        </div>
    )
}

export default RegisterModal