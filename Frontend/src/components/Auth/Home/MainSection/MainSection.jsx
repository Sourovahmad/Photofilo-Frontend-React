
import React, { useState } from 'react';
import './Main.css';
import main from '../../../../Images/PortfolioGallery/main-home-slider-img-10.png';
import cloud from '../../../../Images/PortfolioGallery/h13-slider-img-2.png';
import logo from '../../../../Images/PortfolioGallery/logo-dark.png';


const MainSection = () => {

    const [navToggle, setNavToggle] = useState(false);
    const [toggle, setToggle] = useState(false);

    const handleToggle = (value) => {
        toggle === false ? setToggle(value) : setToggle(false);
        if(value) {
            setNavToggle(true);
        }
    }

    return (
        <>
            <div id="main_area">
            <div className='container overflow-hidden'>
                <div className='navArea'>
                    <a href="#">
                        <img src={logo} className='img-fluid' />
                    </a>

                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <button onClick={() => handleToggle(true)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {toggle &&
                            <div>
                            <ul class="navbar-nav">
                                {navToggle &&   
                                    <div className='d-md-flex d-lg-flex'>
                                        <li><a href='/'>HOME</a></li>
                                        <li><a href='/'>PAGES</a></li>
                                        <li><a href='/'>PORTFOLIO</a></li>
                                        <li><a href='/'>BLOG</a></li>
                                        <li><a href='/'>SHOP</a></li>
                                        <li><a href='/'>ELEMENTS</a></li>
                                    </div>
                                }
                                <li><button className='btn extra' onClick={() => navToggle === false ? setNavToggle(true) : setNavToggle(false)}>MENU</button></li>
                            </ul>
                            </div>
                        }
                    </nav>
                </div>

                <div className='mainInner'>
                    <div className="row d-flex align-items-center">
                        <div className='col-md-6'>
                            <img src={cloud} className="cloud img-fluid" />

                            <div className='mainInfo'>
                                <p>Smart Theme For Creatives</p>
                                <h1>Welcome to Måne</h1>
                                <a href="/">View More</a>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <img src={main} className='bg img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MainSection;