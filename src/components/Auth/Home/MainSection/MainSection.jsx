
import React, { useState } from 'react';
import './Main.css';
import main from '../../../../Images/PortfolioGallery/main-home-slider-img-10.png';
import logo from '../../../../Images/PortfolioGallery/logo-dark.png';
import { Link } from 'react-router-dom';


const MainSection = () => {

    const [navToggle, setNavToggle] = useState(true);
    const [toggle, setToggle] = useState(true);

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

                    <Link to='/'> 
                        <img src={logo} className='img-fluid' alt="" />
                    </Link>

                    <nav class="navbar navbar-expand-lg navbar-light ">
                        <button onClick={() => handleToggle(true)} class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {toggle &&
                            <div>
                            <ul class="navbar-nav">
                                {navToggle &&   
                                    <div className='d-md-flex d-lg-flex me-5'>
                                        <li><Link to="/profile">   Profile  </Link></li>
                                    </div>
                                }
                            </ul>
                            </div>
                        }
                    </nav>
                </div>

                <div className='mainInner'>
                    <div className="row d-flex align-items-center">
                        <div className='col-md-6'>
                
                            <div className='mainInfo'>
                                <p>Smart Theme For Creatives</p>
                                <h1>Welcome to Måne</h1>
                                <a href="/">View More</a>
                            </div>
                        </div>

                        <div className='col-md-6'>
                            <img src={main} className='bg img-fluid' alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default MainSection;