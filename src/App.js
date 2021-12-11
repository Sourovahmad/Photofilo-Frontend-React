import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./components/Routes/AllRoutes";

function App() {

  const apiRoute = process.env.REACT_APP_API_TO;
  const [prfileData, setprfileData] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);


  useEffect(() => {

    const sessionToken = window.sessionStorage.getItem('token');
    if(sessionToken !== undefined){
        const config = {
            headers: { Authorization: `Bearer ${sessionToken}`  }
        };
        axios.get(apiRoute + "checkUser", config)
        .then(res =>{
            setprfileData(res.data.user.projects.reverse());
            setLoggedIn(true);
        })
        .catch(error =>{
            setLoggedIn(false);
            console.log(error);
        });


    }else{
        setLoggedIn(false);
    }
    
 // eslint-disable-next-line
}, []);


  return (
    <div>
      <BrowserRouter>
        <AllRoutes prfileData={prfileData}  loggedIn={loggedIn}></AllRoutes>
      </BrowserRouter>
    </div>
  );
}

export default App;
