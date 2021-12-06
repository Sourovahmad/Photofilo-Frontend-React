import React from 'react';
import image_uploader_thumb_image from '../../../Images/image-uploader-thumb.svg';

const ImageUploaderThumb = ({isText,textClassName,thumbnail}) => {
    return (
        <div className="image-uploader-thumb">
            <img src={ thumbnail ? thumbnail : image_uploader_thumb_image} alt="" />
            <p className={`${isText ? "" : "d-none"} ${textClassName} mt-2`}>
                Drag and drop an Image, or <span className="theme-color">Browse</span>{" "}
            </p>
        </div>
    );
};

export default ImageUploaderThumb;