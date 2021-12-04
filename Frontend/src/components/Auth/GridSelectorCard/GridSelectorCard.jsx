import React, { useState } from "react";

import SINGLE_GRID_IMAGE from '../../../Images/single_grid.svg';
import DUEL_GRID_IMAGE from '../../../Images/duel_grid.svg';
import ImageUploaderThumb from "../../BuildingElement/ImageThumb/ImageThumb";

import { InlineIcon } from "@iconify/react";
import { AppendElement } from "../../BuildingElement/BuildingUtility";

const GridSelectorCard = ({setIsInsertMediaBar}) => {
    const [isGridSelected, setIsGridSelected] = useState(false);
    const [gridCount, setGridCount] = useState(0);

    const gridSelection = (count) => {
        const appender = new AppendElement();
        setIsInsertMediaBar(true)
        if(count==="1"){
            appender.appendOneGrid()
        } else if(count==="2"){
            appender.appendTwoGrid();
        }
    };

    const restoreState = () => {
        setIsGridSelected(false);
    };

    return (
        <div className={`${isGridSelected ? "active" : ""} select_grid_form rounded`}>
            <div className="one_to_two">
                <div className={`${!isGridSelected ? "active" : ""} one digit`}>1</div>
                <div className={`${isGridSelected ? "active" : ""} two digit`}>2</div>
            </div>
            <p className="text-muted small text-center">Choose Grid</p>

            {!isGridSelected && (
                <div className="select_grid__image">
                    <img onClick={() => gridSelection("1")} src={SINGLE_GRID_IMAGE} alt="" />
                    <img onClick={() => gridSelection("2")} src={DUEL_GRID_IMAGE} alt="" />
                </div>
            )}

            {isGridSelected && (
                <div className="point_2_upload_image text-center py-1 ">
                    <h6 className="small">Upload Image</h6>
                    <div className=" mx-auto">{isGridSelected && [...new Array(gridCount)].map(() => <ImageUploaderThumb textClassName="text" isText={true} />)}</div>
                </div>
            )}
            <InlineIcon onClick={restoreState} className={`${!isGridSelected ? "d-none" : ""} position-absolute top-0 end-0 me-2 mt-2`} icon="la:times" />
        </div>
    );
};

export default GridSelectorCard;