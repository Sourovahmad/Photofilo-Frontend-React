import React from 'react';
import placeholder_image from '../../Images/image-uploader-thumb.svg';

const TwoLayout = () => {
    return (
        <>
       <div className="row tow__layout_site">
                <div className="col-6 h-50 p-0">
                    <div className="p-2">
                        <div className="image-uploader-area">
                            <img src={placeholder_image} alt="" />
                            <p className="mt-2">
                                Drag and drop an Image, or <span className="theme-color">Browse</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-6 h-50 p-0">
                    <div className="p-2">
                        <div className="image-uploader-area">
                            <img src={placeholder_image} alt="" />
                            <p className="mt-2">
                                Drag and drop an Image, or <span className="theme-color">Browse</span>{" "}
                            </p>
                        </div>
                    </div>
                </div>
            </div>     
        </>
    );
};

export default TwoLayout;