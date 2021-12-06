import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Test from '../../Test/Test';
import Home from '../Auth/Home/Home';
import Login from '../Auth/Login';
import Create from '../Auth/Profile/Create/Create';
import Profile from '../Auth/Profile/Profile';
import Notfound from '../Errors/Notfound';


const AllRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home></Home>} />
                <Route path="/profile" element={<Profile></Profile>} />
                <Route path="/create" element={<Create></Create>} />
                <Route path="/login" element={<Login></Login>} />
                <Route path="/test" element={<Test></Test>} />
                <Route path="*" element={<Notfound></Notfound>} />
            </Routes>
        </div>
    );
};


export default AllRoutes;