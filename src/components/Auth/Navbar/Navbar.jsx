import React from 'react';
import {Outlet,Link} from "react-router-dom";
import logo from '../../../Images/Logo.png';
import { InlineIcon } from '@iconify/react';
import profile_image from '../../../Images/taha/84f03913-87eb-4488-a72e-c1f4061ac16c.jpg'
const Navbar = () => {
    return (
        <>
            <nav className="navbar MainNavbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <Link to='/'>   
                        <img src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarNav">
                        {/* first element of Navbar */}
                        <ul className="navbar-nav start-element">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Explore
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">
                                    Hire Photographer
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Find Work
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">
                                    Shop
                                </Link>
                            </li>
                        </ul>

                        {/* Middle element of Navbar */}
                        <ul className="navbar-nav middle-element align-items-center">
                            <li className="nav-item">
                                <div className="input-group">
                                    <span className="input-group-text">
                                        {" "}
                                        <InlineIcon icon="bx:bx-search" />{" "}
                                    </span>
                                    <input type="text" className="form-control" placeholder="Search" />
                                </div>
                            </li>
                            <li className="nav-item ms-2">
                                <Link to="/create"> 
                                <button className="theme-btn btn py-2">
                                    <InlineIcon icon="fa-solid:plus" className="text-light" /> Create Page
                                </button>
                                </Link>
                            </li>
                        </ul>

                        {/* Flex end element for Navbar */}
                        <ul className="navbar-nav end-element">
                            <li className="nav-item">
                                <Link className="nav-link" to="/profile">
                                    <div className="profile">
                                        <img src={profile_image} alt="" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    );
};

export default Navbar;