
import './Allprojects.css';
import profile from '../../../../Images/NewUser/Profile.png.webp'
import { Link } from 'react-router-dom';
import ProfileProject from '../../ProfileProject/ProfileProject';


const AllProjects = ({prfileData}) => {
 
console.log(prfileData);
    return (
    <div id='allProject_area'>
            <div className="container">
                <div className='row'>
                    <div className='col-md-8'>
                        <div className='projectInner'>
                            <nav class="navbar navbar-expand-lg">
                                <ul class="navbar-nav">
                                    <li class="nav-item">
                                        <button className='active btn'>Portfolio</button>
                                    </li>
                                    <li class="nav-item">
                                        <button className='btn'>Livestreams</button>
                                    </li>
                                    <li class="nav-item">
                                        <button className='btn'>Sub Sites</button>
                                    </li>
                                    <li class="nav-item">
                                        <button className='btn'>About Us</button>
                                    </li>
                                </ul>
                            </nav>

                            <div className='d-md-flex flex-md-wrap d-lg-flex flex-lg-wrap projectList'>
                                
                                <Link to="/create" style={{ textDecoration:"none" }}> 
                                    <div className='createProject'>
                                        <div className='addIcon'>
                                            <i class="fas fa-plus-circle"></i>
                                        </div>
                                        <button className='btn d-block'>Create a Project</button>
                                        <p>Get Feedback and show your Skills to everyone.</p>
                                    </div>
                                </Link>



                                {
                                    prfileData.map((data,index)=> 
                                            <ProfileProject project={data} />
                                        )
                                }




                                <div className='emptyProject'>
                                </div>

                                <div className='emptyProject'>
                                </div>

                                
                            </div>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className='userProfile'>
                            <div className='profile'>
                                <img src={profile} class="img-fluid" alt="" />

                                <div className='pIcon'>
                                    <i class="fas fa-plus-circle"></i>
                                </div>
                            </div>

                            <h5>Name</h5>
                            <p>Little description of the Photographer you know know</p>
                        
                            <button className='btn editProfile'> <i class="fas fa-plus-circle"></i> Edit Your Profile</button>
                        
                            <div className='followers'>
                                <div className='d-flex justify-content-between'><p>Followers</p> <p>1,223</p></div>
                                <div className='d-flex justify-content-between'><p>Project Views</p> <p>333</p></div>
                                <div className='d-flex justify-content-between'><p>Following</p> <p>11</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProjects;