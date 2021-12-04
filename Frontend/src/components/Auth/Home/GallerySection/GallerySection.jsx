import React from 'react';
import './GallerySection.css';

import g1 from '../../../../Images/PortfolioGallery/Gallery/1.jpg';
import g2 from '../../../../Images/PortfolioGallery/Gallery/2.jpg';
import g3 from '../../../../Images/PortfolioGallery/Gallery/3.jpg';
import g4 from '../../../../Images/PortfolioGallery/Gallery/4.jpg';
import g5 from '../../../../Images/PortfolioGallery/Gallery/5.jpg';
import g6 from '../../../../Images/PortfolioGallery/Gallery/6.jpg';
import g7 from '../../../../Images/PortfolioGallery/Gallery/7.jpg';
import g8 from '../../../../Images/PortfolioGallery/Gallery/8.jpg';
import g9 from '../../../../Images/PortfolioGallery/Gallery/9.jpg';
import g10 from '../../../../Images/PortfolioGallery/Gallery/10.jpg';
import g11 from '../../../../Images/PortfolioGallery/Gallery/11.jpg';
import g12 from '../../../../Images/PortfolioGallery/Gallery/12.jpg';

const gallerys = [
    {
        img: g1,
        title: 'designing dreams',
        link1: 'media / ',
        link2: 'modeling / ',
        link3: 'showcase'
    },
    {
        img: g2,
        title: 'drinking moon wine',
        link1: 'media / ', 
        link2: 'print / ', 
        link3: 'showcase'
    },
    {
        img: g3,
        title: 'need to see',
        link1: 'media / ',
        link2: 'print / ',
        link3: 'typography'
    },
    {
        img: g4,
        title: 'green for green',
        link1: 'modeling / ',
        link2: 'natural',
    },
    {
        img: g5,
        title: 'want some apple?',
        link1: 'colors / ', 
        link2: 'modeling / ', 
        link3: 'natural'
    },
    {
        img: g6,
        title: 'new phone design',
        link1: 'morning / ', 
        link2: 'natural / ', 
        link3: 'print'
    },
    {
        img: g7,
        title: 'taking steps',
        link1: 'colors / ', 
        link2: 'modeling', 
    },
    {
        img: g8,
        title: 'technology',
        link1: 'colors / ',
        link2: 'modeling / ', 
        link3: 'print'
    },
    {
        img: g9,
        title: 'printing design',
        link1: 'colors / ', 
        link2: 'modeling / ', 
        link3: 'print'
    },
    {
        img: g10,
        title: 'wooden toys',
        link1: 'modeling / ', 
        link2: 'natural / ', 
        link3: 'wood'
    },
    {
        img: g11,
        title: 'sweetness approved',
        link1: 'colors / ', 
        link2: 'modeling / ', 
        link3: 'natural'
    },
    {
        img: g12,
        title: 'brash playing',
        link1: 'modeling / ', 
        link2: 'point',
    },
];







const GallerySection = () => {
    return (
        <>
            <div id='gallery_area'>
            <div className='container'>
                <div className='category'>
                    <ul>
                        <li><button className='btn active'>Show All</button></li>
                        <li><button className='btn'>Colors</button></li>
                        <li><button className='btn'>Natural</button></li>
                        <li><button className='btn'>Print</button></li>
                        <li><button className='btn'>Wood</button></li>
                    </ul>  
                </div>

                <div className='d-md-flex d-lg-flex flex-md-wrap flex-lg-wrap justify-content-between gallery'>
                    {
                        gallerys.map(gallery => 
                            <a href="/">
                                <div className='single_g'>
                                    <img src={gallery.img} className="img-fluid" />
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