
import React from 'react';
import { Link } from 'react-router-dom';
import './HomeGallery.css';




const HomeGallery = ({projects}) => {


return (

    <>  
        <div id='gallery_area'>
            <div className='container'>
             
                <div className='row'>
                    {
                        projects.map(project => 
                            <div className="col-md-3 col-sm-12"> 
                            <Link to={`/project/${project.id}`} style={{ margin:'15px', textDecoration:"none" }}> 
                                <div className='single_g'>
                                    <img src={project.thumbnail} className="img-fluid" alt="" />
                                    <h3 style={{ margin:'0',fontSize:'16px'  }}>{project.title}</h3>
                                </div>
                            </Link>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>


        </>


    );
};

export default HomeGallery;