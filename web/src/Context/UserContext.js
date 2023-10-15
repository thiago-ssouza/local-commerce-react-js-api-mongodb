// All the states will be stored here and every component will be able to access the state, without needs
// to pass as props

import React, {createContext, useState} from "react";

//create the context (Consumer)
export const UserContext = createContext()
export function UserProvider(props){

    const [userData, setUserData] = useState({
        isLogged: false,
        message: 'Olá',
    })

    return (
        //
        <UserContext.Provider value={[userData, setUserData]}>
            {/*everything that is inside can utilise the states*/}
            {props.children}
        </UserContext.Provider>
    )
}