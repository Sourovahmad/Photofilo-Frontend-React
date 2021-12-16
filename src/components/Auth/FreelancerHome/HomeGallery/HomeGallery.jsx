import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './HomeGallery.css';




const HomeGallery = ({projects}) => {

    const {userId} = useParams();
    const [categories, setCategories] = useState([]);
    const [filderData, setFilterData] = useState([]);
    const apiRoute = process.env.REACT_APP_API_TO;

    useEffect(() => {

        axios.get(apiRoute + 'categories')
        .then(res => setCategories(res.data));
        
        axios.get(apiRoute + `user-projects/${userId}`)
        .then(res => setFilterData(res.data.projects));
        //eslint-disable-next-line
    }, [])

    function categoryFilterByUser(category_id){
        if(category_id === 'all'){
            setFilterData(projects);
        }else{
            const formData = new FormData();
            formData.append('user_id', userId);
            formData.append('category_id', category_id);
            axios.post(apiRoute + 'user-category-project-filter',formData)
            .then(res => console.log(res))
        }
    }

    
return (
        <div id='home_gallery_area'>
            <div className='container'>
                <div className='category'>
                    <ul>
                        <li><button className='btn active' onClick={()=>categoryFilterByUser('all') }>Show All</button></li>
                       {
                           categories.map(category => 
                            <li><button className='btn active' onClick={()=>categoryFilterByUser(category.id) }>{category.name}</button></li>
                            )
                       }
                    </ul>  
                </div>

                <div className='row'>
                    {
                        filderData.map(project => 
                            <div className='col-md-3 col-sm-12'>
                                <Link to={`/project/${project.id}`} className='gallery'>
                                    <div className='single_g'>
                                        <img src={project.thumbnail} className="img-fluid" alt=''/>

                                        <div className='hidden'>
                                            <h3>{project.title}</h3>
                                            <p></p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeGallery;