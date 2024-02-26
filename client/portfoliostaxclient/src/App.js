import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from 'react';
import Authorize from './components/Authorize';
import Header from './components/Header';
import ApplicationViews from './components/ApplicationViews';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(true);


    useEffect(() => {
        if (!localStorage.getItem("userProfile")) {
            setIsLoggedIn(false)

        }
    }, [isLoggedIn])

    return (
        <Router>
            <Header isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
            {isLoggedIn ?
                <ApplicationViews/>
                
                :
                <Authorize setIsLoggedIn={setIsLoggedIn} />
            }
        </Router>
    );
}

export default App;


// import React from "react";
// import "./App.css";
// import { BrowserRouter } from 'react-router-dom'
// import UserList from "./components/UserList";

// function App() {
//  return (
// <>
// <BrowserRouter>
//     <UserList />
//   </BrowserRouter>
// </>
// )
// }

// export default App;