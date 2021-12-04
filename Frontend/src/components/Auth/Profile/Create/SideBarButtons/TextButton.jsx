import React from 'react';
import { AppendElement } from '../../../../BuildingElement/BuildingUtility';

const TextButton = ({ id, clicked, setClicked, icon, setIsTextBar, setIsInsertMediaBar }) => {

    const handleButtonClick = () => {
        const appender = new AppendElement()
        appender.removingDefaultPlaceholder()
        setIsInsertMediaBar(true)
        setIsTextBar(true)
    
    }

    return (
        <div id={id} className={`${clicked === id ? "clicked" : ""} option-button`}>
            <div onClick={handleButtonClick} className="button__image">
                <img src={icon} alt="" />
            </div>
        </div>
    );
};

export default TextButton;