import React from 'react';
import FooterSection from './FooterSection/FooterSection';
import GallerySection from './GallerySection/GallerySection';
import MainSection from './MainSection/MainSection';

const Home = () => {
    return (
        <>
            <MainSection /> 
            <GallerySection />
            <FooterSection />  
        </>
    );
};

export default Home;