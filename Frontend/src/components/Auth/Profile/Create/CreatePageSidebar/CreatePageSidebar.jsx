import React, { useState } from "react";
import ADD_PHOTO_ICON from '../../../../../Images/image-icon.svg'

import CreateButton from "../SideBarButtons/CreateButton";
import TEXT_IMAGE_ICON from '../../../../../Images/text-icon.svg';
import AddPhotoButton from "../SideBarButtons/AddPhotoButton";
import TextButton from "../SideBarButtons/TextButton";


const CreatePageSidebar = ({ setIsInsertMediaBar, setIsTextBar }) => {
    const [clicked, setClicked] = useState("");
 
 
    return (
        <div id="create-page-sidebar">
            <CreateButton />
            <AddPhotoButton  setIsInsertMediaBar={setIsInsertMediaBar} icon={ADD_PHOTO_ICON} clicked={clicked} setClicked={setClicked} id="add_image_button__" />
             {/* eslint-disable-next-line */}
            <TextButton setIsInsertMediaBar={setIsInsertMediaBar} setIsTextBar={setIsTextBar} setIsInsertMediaBar={setIsInsertMediaBar} icon={TEXT_IMAGE_ICON} clicked={clicked} setClicked={setClicked} id="grid_layout_button__" />
        </div>
    );
};

export default CreatePageSidebar;