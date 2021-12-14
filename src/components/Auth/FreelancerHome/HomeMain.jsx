import React, {useState, useEffect} from 'react';
import logo from '../../../Images/HomeMain/FreelancerMain/logo-dark.png';
import Typist from 'react-typist';
import './HomeMain.css';


const HomeMain = () => {
    const [navToggle, setNavToggle] = useState(false);
    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log('Count' + count);
        setCount(1);
    }, [count])

    return (
        
<div className='freelancerMain_area'>
            <div className='freelancer_navArea'>
                <a href="#" className='logo'>
                    <img src={logo} className='img-fluid' />
                </a>

                <div className='navInner'>
                    <ul className=''>
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
            </div>

            <div className='container'>
                <div className='showcase'>
                    <h2 className='d-flex justify-content-center'>Showcase 
                        <span className='ps-4'>
                            {count &&
                                <Typist avgTypingDelay={100} onTypingDone={() => setCount(0)} cursor={{element: '_'}} className=''>
                                    <span> your skills</span>
                                    <Typist.Backspace loop={1} count={12} delay={300} />
                                    <span> your brand</span>
                                    <Typist.Backspace count={11} delay={300} />
                                    <span> your work</span>
                                    <Typist.Backspace count={10} delay={300} />
                                </Typist>
                            }
                        </span>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default HomeMain;