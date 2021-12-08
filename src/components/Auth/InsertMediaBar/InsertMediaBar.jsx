import React from 'react';
import { InlineIcon } from "@iconify/react";
import GridSelectorCard from '../GridSelectorCard/GridSelectorCard';

const InsertMediaBar = ({ setIsInsertMediaBar, isTextBar, isInsertMediaBar, setIsTextBar }) => {


    return (
        <div className="insert__media__bar">
            <div className="bar__wrapper d-flex justify-content-evenly">
                <h4 className="mb-0 me-4">Insert Media</h4>
                <div className="bar__image bar__button">
                    <InlineIcon icon="bi:card-image" />
                    <GridSelectorCard setIsInsertMediaBar={setIsInsertMediaBar} />
                </div>
                <div onClick={()=>setIsTextBar(true)} className="bar__text bar__button">
                    <InlineIcon icon="cil:text" />
                </div>
            </div>
        </div>
    );
};

export default InsertMediaBar;