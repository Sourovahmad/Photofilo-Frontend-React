import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GallerySection.css';
import { Link } from 'react-router-dom';


const GallerySection = () => {

    //Api Routes 
    const apiRoute = process.env.REACT_APP_API_TO;

    // hook Section
    const [gellaries, setgellaries] = useState([]);
    const [allProjects, setallProjects] = useState([]);
    const [categories, setcategories] = useState([]);

    useEffect(() => {

      axios.get(apiRoute + 'projects')
      .then(res => {
        setgellaries(res.data.allProjects);
        setallProjects(res.data.allProjects);
        setcategories(res.data.categories)

      });

      //eslint-disable-next-line
    }, []);


    function categoryChanger(category_id){
        if (category_id === 'all'){
            setgellaries(allProjects);
        }else{
            axios.get(apiRoute + `category-filter/${category_id}`)
            .then(res =>   setgellaries(res.data.projects))
            .catch(error => console.log(error));
        }
    }

    console.log(allProjects);


    return (
        <>
            <div id='gallery_area'>
            <div className='container'>
                <div className='category'>
                    <ul>
                    <li><button className='btn active' onClick={() => categoryChanger('all')}>Show All</button></li>
                        {
                            categories.map(category =>{ 
                             return <li><button className='btn active' onClick={() => categoryChanger(category.id)} >{category.name}</button></li>
                            })
                        }
                    </ul>  
                </div>

                <div className='d-md-flex d-lg-flex flex-md-wrap flex-lg-wrap gallery'>
                    {
                        gellaries.map(gallery => 
                            <Link to={`project/${gallery.id}`} style={{ margin:'15px' }}> 
                                <div className='single_g'>
                                    <img src={gallery.thumbnail} className="img-fluid" alt="" />
                                    <h3>{gallery.title}</h3>
                                    <p> <a href={gallery.link1}> hi </a><a href={gallery.link2}>hi</a><a href={gallery.link3}>hi</a></p>
                                </div>
                            </Link>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default GallerySection;