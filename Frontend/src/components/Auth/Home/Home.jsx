import React from 'react';
import { Link } from 'react-router-dom';
import FooterSection from './FooterSection/FooterSection';
import GallerySection from './GallerySection/GallerySection';
import MainSection from './MainSection/MainSection';

const Home = () => {
    return (
        <>
        <Link to="/profile"> Go to Profile </Link>
            <MainSection /> 
            <GallerySection />
            <FooterSection />  
        </>
    );
};

export default Home;