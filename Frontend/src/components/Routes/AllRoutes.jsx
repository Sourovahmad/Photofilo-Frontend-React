import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from '../Auth/Home/Home';
import Login from '../Auth/Login';
import Notfound from '../Errors/Notfound';


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="*" element={<Notfound></Notfound>} />
            </Routes>
        </div>
    );
};


export default AllRoutes;