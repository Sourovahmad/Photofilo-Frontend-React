import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './SingleProject.css'

const SingleProject = () => {

    const { projectId } = useParams();
    const apiRoute = process.env.REACT_APP_API_TO
    const [content, setcontent] = useState([])

    useEffect(() => {
    
        axios.get(apiRoute + `project-content/${projectId}`)
        .then(res => setcontent(res.data.contents))

        return () => {
            setcontent([])
        }
        //eslint-disable-next-line
    }, [])

    console.log(content);
    return (
        <div>
            
                {
                    content.map(project =>{
                        return <div>
                    
                        {
                            project.big_image !== null ?
                            <div className="row">
                            <div className="col-sm-12 col-md-12 text-center containerBigImage">
                            <img src={project.image_big} alt="" />
                            </div> 
                            </div> : ''
                        }
                        <div className="row">
                           
                        {
                            project.grid_image_one !== null ?
                            
                            <div className="col-sm-12 col-md-6 text-center">
                            <img style={{ width:'100%' }} src={project.grid_image_one} alt="" />
                            
                            </div> : ''
                        }
                        {
                            project.grid_image_two !== null ?
                            <div className="col-sm-12 col-md-6 text-center">
                            <img style={{ width:'100%' }} src={project.grid_image_two} alt="" />
                            </div>
                             : ''
                        }
                        </div>
                        {
                            project.text !== null ?
                            <div className="container">
                            <div className="row"> 
                                <div className="col-sm-12 col-md-12 text-center">
                                <p className='textSectionP'>
                                    {
                                        project.text
                                    }
                                </p>
                                </div>
                                </div>
                            </div> : ''
                        }


                    </div>
                    
                    })
                }

        </div>
    );
};

export default SingleProject;