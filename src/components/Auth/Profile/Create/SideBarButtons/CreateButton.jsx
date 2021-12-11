import { InlineIcon } from "@iconify/react";
import { useEffect, useState } from "react";
import ImageUploaderThumb from "../../../../BuildingElement/ImageThumb/ImageThumb";
import plus_icon from "../../../../../Images/plus 10.svg";
import axios from "axios";

const CreateButton = () => {

  const sessionToken = window.sessionStorage.getItem('token');
  const apiRoute = process.env.REACT_APP_API_TO;
  const config = {
    headers: { Authorization: `Bearer ${sessionToken}`  }
  };

    // ALl States 
  const [categories, setCategories] = useState([]);
  const [projecTitle, setprojecTitle] = useState('');
  const [selectedThumb, setSelectedThumb] = useState('');
  const [isFormActive, setIsFormActive] = useState(false);
  const [isCurrentProject, setCurrentProject] = useState(false);
  const [selectedCategories, setSelectedCategory] = useState([]);

  //Hook Secton
  useEffect(() => {
    axios.get(apiRoute + "categories").then((res) => {
      setCategories(res.data.reverse());
    });

    const currentProjectId = window.sessionStorage.getItem('current_project_id');
    setCurrentProject(true);

    if( currentProjectId !== undefined){

      axios.get(apiRoute + `project/${currentProjectId}`, config)
      .then(res => {
        setprojecTitle(res.data.project.title);
        setSelectedCategory(res.data.categories);
        setSelectedThumb(res.data.project.thumbnail);
      })
      .catch(error=> {
        console.log(error);
      })
    }
 // eslint-disable-next-line
  }, []);


  //Function Sectoin
  function thumbUploaderButton() {
    document.getElementById("thumbnail_image").click();
  }

  function categorySelector() {
    const selectorValue = parseInt(
      document.getElementById("categorySelector").value
    );

    if(selectorValue !== 125000){

          const newFound = categories.find((e) => e.id === selectorValue);
          const alreadyExist = selectedCategories.find((e)=> e.id === newFound.id);
            if(alreadyExist === undefined){
                setSelectedCategory([...selectedCategories, newFound]);
                console.log(selectedCategories);
            }
    }

  }

  function categoryRemover(id) {
    const newArray = selectedCategories.filter((e) => e.id !== id);
    setSelectedCategory(newArray);
  }

  function fileUploadCalled(e){

    const fileData = e.target.files[0]
    const formData = new FormData();
    formData.append("file", fileData);
    
      axios.post(apiRoute + "thumbnail-upload", formData)
      .then(response => setSelectedThumb(response.data.imageName))
      .catch(error => console.log(error));
  }

  function projectCreateHandle(){

    if(projecTitle === '' ){
        alert("Check Write A Title")
    }else if(selectedCategories.length <= 0){
        alert("Please Select A Category");
    }else if(selectedThumb === ''){
        alert("Please Chose A Thumbnail")
    }else{
      const formData = {
        title: projecTitle,
        categories: selectedCategories,
        thumbnail:selectedThumb
      }

      axios.post(apiRoute + "project-save", formData, config)
      .then(res => {
        console.log(res);
        window.sessionStorage.setItem('current_project_id', res.data.project_id);
        alert("Project Created Successfully");
        setIsFormActive(false);

      }
        )
      .catch(error => console.log(error));
    }
  
  }


  function projectUpdateHandle(){

    if(projecTitle === '' ){
      alert("Please Write A Title")
    }else if(selectedCategories.length <= 0){
        alert("Please Select A Category");
    }else if(selectedThumb === ''){
        alert("Please Chose A Thumbnail")
    }else{
      const formData = {
        title: projecTitle,
        categories: selectedCategories,
        thumbnail:selectedThumb
      }
      const currentProjectId = window.sessionStorage.getItem('current_project_id');

      axios.post(apiRoute + `project-update/${currentProjectId}`, formData, config)
      .then(res => {
        console.log(res);
        window.sessionStorage.setItem('current_project_id', res.data.project_id);
        alert("Project Updated Successfully");
        setIsFormActive(false);

      }
        )
      .catch(error => console.log(error));
    }

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
            placeholder="Add Project Titel ..."
            value={projecTitle}
            onChange={(e)=> setprojecTitle(e.target.value)}
            className=" border-bottom rounded-0 fw-bolder form-control form__input"
          />

  <div className="category col-6">
        <select
              style={{ padding: "2px" }}
              name="categories"
              id="categorySelector"
              onChange={() => categorySelector()}
              className=" form-select mt-2 form-select-sm small small px-3 rounded-pill"
            >
              <option selected value="125000"> Category</option>

              {categories.reverse().map((e) => (
                <option value={e.id}> {e.name}</option>
              ))}
            </select>
    
          </div>

          <div className="TagsItems d-flex mt-2" style={{ flexWrap:"wrap", flexDirection:"inherit" }}>
            {selectedCategories.map((e) => (
              <span className="badge bg-light text-dark m-1 p-1">
                {e.name}
                <i
                  style={{ cursor: "pointer", marginLeft:"2px", color:"red", fontStyle:"inherit" }}
                  onClick={() => categoryRemover(e.id)}
                >
                  x
                </i>
              </span>
            ))}

    </div> 
          <div className="mt-3 text-muted">
            <h6 className="small">Add Project image or thumbnail</h6>
            <div className="row">
              <form id="fileInputForm">
                <input
                  type="file"
                  name="thumbnail_image"
                  onChange={(e) => fileUploadCalled(e)}
                  id="thumbnail_image"
                  accept="image/png, image/gif, image/jpeg, image/jpg"
                  hidden
                />
              </form>
              <div
                className="col-8 p-4 py-1"
                onClick={() => thumbUploaderButton()}
                style={{ cursor: "pointer" }}
              >
                <ImageUploaderThumb thumbnail={selectedThumb} />
              </div>
            </div>
          </div>
          <div className="text-end pb-2">
            {
              isCurrentProject ? 
              <button className="theme-btn btn-small small rounded" onClick={()=>projectUpdateHandle()}>Update</button>
              :
              <button className="theme-btn btn-small small rounded" onClick={()=>projectCreateHandle()}>Save</button>
            }
            
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
