import React from 'react';
import './AddImage.css';

const TopAddImage = () => {
    return (
        <div id='addImage_area'>
            <div className='container'>
                <div className=''>
                    <div className='addIcon'>
                        <i class="fa fa-arrow-circle-down arrowIconTopSection" aria-hidden="true"></i>
                    </div>
                    <p>Add a Banner Image</p>
                    <h6>Optimal dimension is 4444x333</h6>
                </div>
            </div>
        </div>
    );
};

export default TopAddImage;