import axios from 'axios';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import HomeGallery from './HomeGallery/HomeGallery';
import HomeMain from './HomeMain';

const FreelancerHome = () => {

    const {userId} = useParams();
    const [userProjects, setUserProjects] = useState([]);
    const apiRoute = process.env.REACT_APP_API_TO


    useEffect(() => {
        axios.get(apiRoute + `user-projects/${userId}`)
        .then(res => setUserProjects(res.data.projects))
        .catch(error => console.log(error, "getting user projects"));
    }, []);

    return (
        <div>
            <HomeMain></HomeMain>
            <HomeGallery projects={userProjects}></HomeGallery>
        </div>
    );
};

export default FreelancerHome;