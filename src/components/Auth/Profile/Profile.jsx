import React from 'react';
import Navbar from '../Navbar/Navbar';
import TopAddImage from './TopAddImage/TopAddImage';
import '../../../Style/Style.css';
import Footer from '../Footer/Footer';
import AllProjects from './AllProjects/AllProjects';

const Profile = ({prfileData}) => {
    return (
        <div>
            <Navbar /> 
                <TopAddImage></TopAddImage>
                <AllProjects prfileData={prfileData}></AllProjects>
            <Footer />
        </div>
    );
};

export default Profile;