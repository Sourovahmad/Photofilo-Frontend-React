import { InlineIcon } from "@iconify/react";
import { useState } from "react";
import ImageUploaderThumb from "../../../../BuildingElement/ImageThumb/ImageThumb";
import plus_icon from '../../../../../Images/plus 10.svg'

const CreateButton = () => {
    const [isFormActive, setIsFormActive] = useState(false);
    return (
<div className="option-button create-button">
            <div onClick={() => setIsFormActive(true)} className="button__image">
                <img src={plus_icon} alt="" />
            </div>
            <div className={`${isFormActive ? "d-none" : ""} popover-line`}>
                <h5 className="mb-0">Add New</h5>
            </div>

            <div className={`${isFormActive ? "active" : ""} create-button-form`}>
                <div className="form__wrapper">
                    <input type="text" placeholder="Add Project Title ..." className=" border-bottom rounded-0 fw-bolder form-control form__input" />
                    <div className="category col-6">
                        <select style={{ padding: "2px" }} name="" id="" className=" form-select mt-2 form-select-sm small small px-3 rounded-pill">
                            {[...new Array(10)].map((item, index) => (
                                <option>{index}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-3 text-muted">
                        <h6 className="small">Add Project image or thumbnail</h6>
                        <div className="row">
                            <div className="col-6 p-4 py-1">
                                <ImageUploaderThumb />
                            </div>
                        </div>
                    </div>
                    <div className="text-end pb-2">
                        <button className="theme-btn btn-small small rounded">Save</button>
                    </div>

                    <InlineIcon onClick={() => setIsFormActive(false)} className="position-absolute top-0 end-0 mt-2 me-2" icon="la:times" />
                </div>
            </div>
        </div>
    );
};

export default CreateButton;