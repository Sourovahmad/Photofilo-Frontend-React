import React from 'react';
import './HomeGallery.css';
import g1 from '../../../../Images/FreelancerMain/h2-portfolio-img-1.jpg';
import g2 from '../../../../Images/FreelancerMain/h2-portfolio-img-2.jpg';


const gallerys = [
    {

        img: g1,
        title: 'Booklet',
        link1: 'branding / ',
        link2: 'design / ',
        link3: 'media / ',
        link4: 'showcase'
    },
    {
        img: g2,
        title: 'Fresh & Easy',
        link1: 'media / ', 
        link2: 'showcase / ', 
        link3: 'web'
    },
];


const HomeGallery = () => {

    
    return (
<div id='home_gallery_area'>
            <div className='container'>
                <div className='category'>
                    <ul>
                        <li><button className='btn active'>Show All</button></li>
                        <li><button className='btn'>BRANDING</button></li>
                        <li><button className='btn'>DESIGN</button></li>
                        <li><button className='btn'>PHOTO</button></li>
                        <li><button className='btn'>WEB</button></li>
                    </ul>  
                </div>

                <div className='row'>
                    {
                        gallerys.map(gallery => 
                            <div className='col-md-6 col-sm-12'>
                                <a href="/" className='gallery'>
                                    <div className='single_g'>
                                        <img src={gallery.img} className="img-fluid" alt=''/>

                                        <div className='hidden'>
                                            <h3>{gallery.title}</h3>
                                            <p><a href={gallery.link1}>{gallery.link1}</a><a href={gallery.link2}>{gallery.link2}</a><a href={gallery.link3}>{gallery.link3}</a><a href={gallery.link4}>{gallery.link4}</a></p>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HomeGallery;