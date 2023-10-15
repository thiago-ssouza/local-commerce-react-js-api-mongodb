import React, {useContext} from "react";
//import {BrowserRouter, Route, Switch } from 'react-router-dom' Switch not working
import {BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'

import { UserContext } from '../Context/UserContext'

function RoutesPages(){

    const [userData, setUserData] = useContext(UserContext)

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>

                {/*<Route path='/dashboard' element={<Dashboard/>}/>*/}
                {/*only if logged the user will access the dashboard page, if not will Navigate to home*/}
                {userData.isLogged ? <Route path='/dashboard' element={<Dashboard/>}/> : <Route path='/dashboard' element={<Navigate to="/"/>}/>}


                {/* Error route */}
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPages