import React from 'react';
import { Routes,Route, Link } from 'react-router-dom';
import Home from '../pages/home/Home';
import Items from '../pages/items/items';


const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<Home></Home>}/>
        {/* <Route path="/item:id" element={<Items></Items>}/> */}
    </Routes>
    );
};

export default Router;
