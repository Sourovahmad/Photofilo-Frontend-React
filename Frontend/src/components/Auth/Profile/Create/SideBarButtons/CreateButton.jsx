import { InlineIcon } from "@iconify/react";
import { useEffect, useState } from "react";
import ImageUploaderThumb from "../../../../BuildingElement/ImageThumb/ImageThumb";
import plus_icon from "../../../../../Images/plus 10.svg";
import axios from "axios";

const CreateButton = () => {

    // ALl States 
  const apiRoute = process.env.REACT_APP_API_TO;
  const [categories, setCategories] = useState([]);
  const [selectedFile, setSelectedFile] = useState('');
  const [isFormActive, setIsFormActive] = useState(false);
  const [selectedCategories, setSelectedCategory] = useState([]);

  //Hook Secton
  useEffect(() => {
    axios.get(apiRoute + "categories").then((res) => {
      setCategories(res.data.reverse());
    });
  }, []);


  //Function Sectoin
  function thumbUploaderButton() {
    document.getElementById("thumbnail_image").click();
  }

  function categorySelector() {
    const selectorValue = parseInt(
      document.getElementById("categorySelector").value
    );
    const newFound = categories.find((e) => e.id === selectorValue);
    setSelectedCategory([...selectedCategories, newFound]);
    console.log(selectedCategories);
  }

  function categoryRemover(id) {
    const newArray = selectedCategories.filter((e) => e.id !== id);
    setSelectedCategory(newArray);
  }

  function fileUploadCalled(e){

    const token = document.head.querySelector('meta[name="csrf-token"]');


    const fileData = e.target.files[0]
    const formData = new FormData();
    formData.append("file", fileData);
    

    const congfig = {
        headers:{
            "Content-Type": "application/json",
            "X-CSRF-TOKEN'": token
        }

      }

      axios.post(apiRoute + "thumbnail-upload", formData,congfig)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }

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
          <input
            type="text"
            placeholder="Add Project Title ..."
            className=" border-bottom rounded-0 fw-bolder form-control form__input"
          />
          <div className="category col-6">
            {selectedCategories.map((e) => (
              <span>
                {" "}
                {e.name}{" "}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => categoryRemover(e.id)}
                >
                  x
                </span>{" "}
              </span>
            ))}

            <select
              style={{ padding: "2px" }}
              name="categories"
              id="categorySelector"
              onChange={() => categorySelector()}
              className=" form-select mt-2 form-select-sm small small px-3 rounded-pill"
            >
              <option selected> Category</option>

              {categories.reverse().map((e) => (
                <option value={e.id}> {e.name}</option>
              ))}
            </select>
          </div>
          <div className="mt-3 text-muted">
            <h6 className="small">Add Project image or thumbnail</h6>
            <div className="row">
              <form id="fileInputForm">
                <input
                  type="file"
                  name="thumbnail_image"
                  value={selectedFile}
                  onChange={(e) => fileUploadCalled(e)}
                  id="thumbnail_image"
                  hidden
                />
              </form>
              <div
                className="col-6 p-4 py-1"
                onClick={() => thumbUploaderButton()}
                style={{ cursor: "pointer" }}
              >
                <ImageUploaderThumb />
              </div>
            </div>
          </div>
          <div className="text-end pb-2">
            <button className="theme-btn btn-small small rounded">Save</button>
          </div>

          <InlineIcon
            onClick={() => setIsFormActive(false)}
            className="position-absolute top-0 end-0 mt-2 me-2"
            icon="la:times"
          />
        </div>
      </div>
    </div>
  );
};

export default CreateButton;
