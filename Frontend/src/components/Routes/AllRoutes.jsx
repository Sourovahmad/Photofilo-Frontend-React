import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Routes,Route } from 'react-router-dom';
import Test from '../../Test/Test';
import Home from '../Auth/Home/Home';
import Login from '../Auth/Login';
import Create from '../Auth/Profile/Create/Create';
import Profile from '../Auth/Profile/Profile';
import Notfound from '../Errors/Notfound';


const AllRoutes = () => {

    const apiRoute = process.env.REACT_APP_API_TO;
    const [prfileData, setprfileData] = useState({});
    const [loggedIn, setloggedIn] = useState(false);

    useEffect(() => {
    const sessionToken = window.sessionStorage.getItem('token');
    if(sessionToken != null){
        const config = {
            headers: { Authorization: `Bearer ${sessionToken}`  }
        };
        axios.get(apiRoute + "checkUser", config).then(
            (res) => {
                console.log(res);
                if(res.status === 200){
                   setloggedIn(true);
                   setprfileData(res.data.user);
                }else{
                    setloggedIn(false)
                }
            }
        ).catch((error)=>{
            console.log(error);
        });
    }else{
        setloggedIn(false)
    }

}, []);

      

    return (
        <div>
            <Routes>
                {/* public Compnents */}
                <Route path="/" element={<Home></Home>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="*" element={<Notfound></Notfound>} />
    

                {/* Protected Routes */}
                <Route path="/profile" element={<Profile profileInfo={prfileData}></Profile>
                   
                } />


                <Route path="/create" element={<Create></Create>} />
                <Route path="/test" element={<Test></Test>} />

            </Routes>
        </div>
    );
};


export default AllRoutes;