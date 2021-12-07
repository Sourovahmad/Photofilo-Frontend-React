import React from 'react';
import logo from '../../../../Images/PortfolioGallery/Footer/footer-logo-4.png';
import './FooterSection.css'


const FooterSection = () => {
    return (
        <>
        <div id="footer_area">
            <div className='container'>
                <div className='row'>
                    <div className='offset-md-2 col-md-8'>
                        <div className='footerInfo'>
                            <a href="/">
                                <img src={logo} className='img-fluid' alt="" />
                            </a>

                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/">About</a></li>
                                    <li><a href="/">Gallery</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a className='last' href="/">Shop</a></li>
                                </ul>
                            </nav>

                            <div className='socialArea'>
                                <a href='https://www.tumblr.com/'> <i class="fab fa-facebook"></i> </a>
                                <a href='https://twitter.com/'>   <i class="fab fa-twitter"></i>  </a>
                                <a href='https://www.tumblr.com/'> <i class="fab fa-tumblr"></i> </a>
                                <a href='https://www.facebook.com/'> <i class="fab fa-facebook"></i>  </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
            
        </>
    );
};

export default FooterSection;