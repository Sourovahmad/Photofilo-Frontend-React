import React from 'react';
import GridSelectorCard from '../../../GridSelectorCard/GridSelectorCard';


const AddPhotoButton = ({ id, clicked, setClicked, icon,setIsInsertMediaBar }) => {
    return (
        <div id={id} className={`${clicked === id ? "clicked" : ""} option-button addPhotoButton`}>
            <div onClick={() => setClicked(id)} className="button__image">
                <img src={icon} alt="" />
            </div>
            <GridSelectorCard setIsInsertMediaBar={setIsInsertMediaBar} />
        </div>
    );
};

export default AddPhotoButton;