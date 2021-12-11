import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './GallerySection.css';


const GallerySection = () => {

    //Api Routes 
    const apiRoute = process.env.REACT_APP_API_TO;

    // hook Section
    const [gellaries, setgellaries] = useState([]);
    const [allProjects, setallProjects] = useState([]);
    const [categories, setcategories] = useState([]);
    const [projectHasCategories, setprojectHasCategories] = useState([]);

    useEffect(() => {

      axios.get(apiRoute + 'projects')
      .then(res => {
        setgellaries(res.data.allProjects);
        setallProjects(res.data.allProjects);
        setcategories(res.data.categories);
        setprojectHasCategories(res.data.categoryHasproject)
      });

      //eslint-disable-next-line
    }, []);


    function categoryChanger(category_id){
        console.log(category_id);
    }



    return (
        <>
            <div id='gallery_area'>
            <div className='container'>
                <div className='category'>
                    <ul>
                    <li><button className='btn active'>Show All</button></li>
                        {
                            categories.map(category =>{ 
                             return <li><button className='btn active'onClick={() => categoryChanger(category.id)} >{category.name}</button></li>
                            })
                        }
                        
                      
                    </ul>  
                </div>

                <div className='d-md-flex d-lg-flex flex-md-wrap flex-lg-wrap justify-content-between gallery'>
                    {
                        gellaries.map(gallery => 
                            <a href="/">
                                <div className='single_g'>
                                    <img src={gallery.thumbnail} className="img-fluid" alt="" />
                                    <h3>{gallery.title}</h3>
                                    <p><a href={gallery.link1}>{gallery.link1}</a><a href={gallery.link2}>{gallery.link2}</a><a href={gallery.link3}>{gallery.link3}</a></p>
                                </div>
                            </a>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default GallerySection;