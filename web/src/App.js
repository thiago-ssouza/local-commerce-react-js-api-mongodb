import React from 'react'
import RoutesPages from './Routes/Routes'
import  './Styles/main.scss'
import { UserProvider } from './Context/UserContext'

function App() {
  return (
    <UserProvider>
      <RoutesPages/>
    </UserProvider>
  );
}

export default App;
