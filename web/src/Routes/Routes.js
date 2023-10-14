import React from "react";
//import {BrowserRouter, Route, Switch } from 'react-router-dom' Switch not working
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Dashboard from '../Pages/Dashboard/Dashboard'

function RoutesPages(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/dashboard' element={<Dashboard/>}/>
                {/* Error route */}
                {/*<Route path="*" element={<NotFound />} />*/}
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesPages