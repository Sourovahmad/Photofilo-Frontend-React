import React from 'react';
import { InlineIcon } from "@iconify/react";

import logo from '../../../Images/Logo.png';
import TOKP_img from '../../../Images/teknopark_istanbul.svg'
import Yrk_Img from '../../../Images/yerli_yazilim.svg'

const Footer = () => {
    return (
<footer id="footer" className="">
            <div className=" footer-container">
                <div className="row">
                    <div className="col-md-6">
                        <ul className="row row-cols-3 list-unstyled languages">
                            {[...new Array(17)].map((e,i)=><li className="col language">item {i+1}</li> )}
                        </ul>
                    </div>
                    <div className="col-md-6 text-end intro-side">
                        <img src={logo} alt="" />
                        <p>Merkez Ofis</p>
                        <p className="text-muted small">Teknopark İstanbul</p>
                        <p className="text-muted small">Sanayi Mahallesi Teknopark Bulvarı</p>
                        <p className="text-muted small">4A Apt. No:1/4A/101</p>
                        <p className="text-muted small"> Pendik / İstanbul</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="footer-container">
                    <div className="d-flex w-100 align-items-center">
                        <div className=" logos">
                            <img src={TOKP_img} alt="" />
                            <img src={Yrk_Img} alt="" />
                        </div>
                        <div className="me-auto copyright-text">Copyright © 2020 - Tüm hakları saklıdır.</div>
                        <div className="icons d-flex ms-auto">
                            <div className="icon">
                                <InlineIcon icon="ri:facebook-line" />
                            </div>
                            <div className="icon">
                                <InlineIcon icon="ph:twitter-logo-thin" />
                            </div>
                            <div className="icon">
                                <InlineIcon icon="ph:instagram-logo-thin" />
                            </div>
                            <div className="icon">
                                <InlineIcon icon="ri:linkedin-line" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;