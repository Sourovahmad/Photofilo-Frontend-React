
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeGallery.css';




const HomeGallery = ({projects}) => {


return (
        <div id='home_gallery_area'>
            <div className='container'>
                

                <div className='row'>
                    {
                        projects.map(project => 
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