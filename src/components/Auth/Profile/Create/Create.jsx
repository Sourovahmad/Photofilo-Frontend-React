import React from "react";
import { useEffect, useState } from "react";
import { AppendElement } from "../../../BuildingElement/BuildingUtility";
import InsertMediaBar from "../../InsertMediaBar/InsertMediaBar";
import CreatePageSidebar from "./CreatePageSidebar/CreatePageSidebar";
import TextWriterBox from "./TextWriterBox/TextWriterBox";
import placeholder_image from "../../../../Images/image-uploader-thumb.svg";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Create = ({editProject}) => {

    const navigate = useNavigate()
    
    const [isInsertMediaBar, setIsInsertMediaBar] = useState(null)
    const [isTextBar, setIsTextBar] = useState(false);
    const [iscurrentProject, setiscurrentProject] = useState(false);
    const [currentChangedImage, setcurrentChangedImage] = useState('');
    const [currentChangedImgFile, setcurrentChangedImgFile] = useState([]);
    const apiRoute = process.env.REACT_APP_API_TO;
    
    useEffect(() => {

        const appender = new AppendElement();
        const defaultImage = document.querySelector(".image-uploader-area.one__layout__site.default");


        if(defaultImage){
            setIsInsertMediaBar(false)
        } else{
            setIsInsertMediaBar(true)
        }


        appender.pageArea?.addEventListener("DOMNodeInserted", () => {
            eventForUpload();
            handleRemoveImage();
            handleRemoveText();
            handleImageEdit();
            editText();
        });

        const eventForUpload = function () {

            const allUploadBtn = document?.querySelectorAll(".image-uploader-area .uploader-input");
            allUploadBtn.forEach((item) => {
                if (item) {
                    item.onchange = (e) => appender.handleFileUpload(e);
                }
            });

            const allGridUploadButton = document?.querySelectorAll('.image-uploader-area .uploader-input-grid_1');
            allGridUploadButton.forEach((item) => {
                if (item) {
                    item.onchange = (e) => appender.handleFileUploadGrid1(e);
                }
            });


            const GridUploadButton2 = document?.querySelectorAll('.image-uploader-area .uploader-input-grid_2');
            GridUploadButton2.forEach((item) => {
                if (item) {
                    item.onchange = (e) => appender.handleFileUploadGrid2(e);
                }
            });
        }         

        const handleRemoveImage = () => {
            const allCancelButton = appender.pageId?.querySelectorAll(".cancel-button");
            [...allCancelButton].forEach(button => {
                
                button.onclick = () => appender.handleRemoveImage(button.dataset.id)
            })
        }


        const handleRemoveText =() =>{
            const allEditButtons = appender.pageId?.querySelectorAll(".textCancelButton");
            [...allEditButtons].forEach(button => {
                button.onclick = () => appender.handleRemoveTextSection(button.dataset.id)
            })
        }


        const handleImageEdit = () => {
            const allGridEditButtons = appender.pageId?.querySelectorAll(".button-for-1-grid");
            [...allGridEditButtons].forEach(button => {
                button.onclick = () => editcalled(button.dataset.id)
            })
        }


        const editText =  () => {

            const alltextEditButtons = appender.pageId?.querySelectorAll(".textEditButton");
            [...alltextEditButtons].forEach(button => {
                button.onclick = () => editcalledText(button.dataset.id)
            })
        }




        eventForUpload();
        handleRemoveImage();
        handleRemoveText();
        handleImageEdit();
        editText();


        //eslint-disable-next-line
    }, []);


    function editcalled(id){
        document.getElementById('page_id_Section').value = id;
        document.getElementById('editModalCallHiddenButton').click();
    }


    function editcalledText(content_id){

        document.getElementById('text_page_id_Section').value = content_id;
        document.getElementById('texteditModalCallHiddenButton').click();
    }

    function textEditSaveHandle(){
      const content_id = document.getElementById('text_page_id_Section').value;
      const newText = document.getElementById('editTextAreaInput').value;

      const pSection = document.getElementById(`p-section-${content_id}`);



      const formData = new FormData();
      formData.append('content_id', content_id);
      formData.append('new_text', newText);


      axios.post(apiRoute + 'text-content-update', formData)
      .then(res => {
        pSection.innerHTML = res.data.text;
        document.getElementById('texteditModalCloseButton').click();

      });

    }
  


    function projectPublisher(){
        const currentProjectId = window.sessionStorage.getItem('current_project_id');
        const formData = new FormData();
        formData.append("project_id", currentProjectId);

        axios.post(apiRoute + 'active-project', formData)
        .then(res => {
            
            window.sessionStorage.removeItem('current_project_id');
            const gridCurrentId = window.sessionStorage.getItem('grid_one_project_id');
            const gridTwoCurrentId = window.sessionStorage.getItem('grid_two_project_id');
            if(gridCurrentId !== null){
                window.sessionStorage.removeItem('grid_one_project_id');
            }
            if(gridTwoCurrentId !== null){
                window.sessionStorage.removeItem('grid_two_project_id');
            }




            alert("Project Publish Successfully")
            setiscurrentProject(false)
            navigate('/profile', { replace: true });
        });
    }

    const {editProjectId} = useParams();

    useEffect(() => {

       if(editProject === true){
           if(iscurrentProject === true){
               alert("Complete Your Current Project First");
           }else{
            window.sessionStorage.setItem('current_project_id', editProjectId);
            axios.get(apiRoute + `project-content/${editProjectId}`)
            .then(res => {

                const editContents = res.data.contents;
                const appender =  new AppendElement();

                editContents.map(project => {
                    return <>
                    {
                     project.image_big !== null ? appender.appendExistingOne(project.image_big) : ''
                    }
                    {
                        project.grid_image_one !== null ? appender.appendExistingTwo(project.grid_image_one, project.grid_image_two) : ''
                    }
                    {
                        project.text !== null ? appender.appendExistingText(project.text, project.id) : ''
                    }
                    </>
                })

            });

           }
       }

       //eslint-disable-next-line
    }, []);


    function projectDrafter(){

        const currentProjectId = sessionStorage.getItem('current_project_id');
        if(currentProjectId !== null){

            sessionStorage.removeItem('current_project_id');

            const gridCurrentId = window.sessionStorage.getItem('grid_one_project_id');
            const gridTwoCurrentId = window.sessionStorage.getItem('grid_two_project_id');
            if(gridCurrentId !== null){
                window.sessionStorage.removeItem('grid_one_project_id');
            }
            if(gridTwoCurrentId !== null){
                window.sessionStorage.removeItem('grid_two_project_id');
            }
            alert('Project Saved As Draft');
            navigate('/profile', { replace: true });
        }
    }
    


    function fileChangedCalled(e){
        const file = e.target.files[0];
        setcurrentChangedImgFile(file);
        setcurrentChangedImage(URL.createObjectURL(file));
       
    }

    function imageEditSaveHandle(){

        const id =  document.getElementById('page_id_Section').value;
        const areaSection = document.getElementById(`area-${id}`);
        const image = areaSection.children[0];

        const formData = new FormData();
        formData.append('previous_image', image.src);
        formData.append('new_image', currentChangedImgFile);


        axios.post(apiRoute + `update-project-image`,formData )
        .then(res => {

            image.src = res.data.image_url;
            document.getElementById('editModalCloseButton').click();
            setcurrentChangedImage('');

        })
        .catch(error => console.log("image update error"));
    }


 


        function projectUpdater(){
            window.sessionStorage.removeItem('current_project_id');
            const gridCurrentId = window.sessionStorage.getItem('grid_one_project_id');
            if(gridCurrentId !== null){
                window.sessionStorage.removeItem('grid_one_project_id');
            }
            alert("Project Update Successfully")
            setiscurrentProject(false)
            navigate('/profile', { replace: true });
        }




    return (
        <>
    <Navbar />
        <section id="create-page-dashboard">
            <div className="sidebar">
                <CreatePageSidebar setIsTextBar={setIsTextBar} setIsInsertMediaBar={setIsInsertMediaBar} />
            </div>
            
            <div className="content">
                <div className="content__container">
                    <div className="project-wrapper">
                        {/* Page Area :don't touch this id or class className */}
                        <div id="project__page__building__area__dontBeDuplicate_Id">
                            <div id="photoPholio-page" className="page">


                                    <div className="image-uploader-area one__layout__site default">
                                    <img className="placeholder_image" src={placeholder_image} alt="" />
                                    <p className="mt-2 placeholder_text">
                                        Drag and drop an Image, or{" "}
                                        <label htmlFor="file-upload-1ddd" onClick={() => alert("please select an Grid")} className="theme-color">
                                            Browse
                                        </label>
                                             <input type="file" name="" id="file-upload-1" className="d-none" />
                  
                                       
                                    </p>
                                </div>
              

                            </div>
                        </div>

                        <div className={`${isTextBar?"":"d-none"}`}>
                            <TextWriterBox setIsTextBar={setIsTextBar} />
                        </div>
                        {isInsertMediaBar && <InsertMediaBar  setIsTextBar={setIsTextBar} setIsInsertMediaBar={setIsInsertMediaBar} />}
                    </div>
                    <div className="button_wrapper">
                       
                       {
                           editProject === true ? 
                           <button className="btn btn-lg theme-btn rounded w-100 p-2" onClick={()=>projectUpdater()}> Update </button>
                           :
                           <button className="btn btn-lg theme-btn rounded w-100 p-2" onClick={()=>projectPublisher()}> Publish </button>
                       }

                        <button className="btn btn-danger rounded w-100 p-2 mt-4" onClick={()=>projectDrafter()}> Add To Draft </button>
                   
                       
                    </div>
                </div>
            </div>
        </section>
        <Footer />



        {/* modal  */}
        <div class="modal fade" id="imageEditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Image</h5>
                    <button type="button" class="btn-close" id="editModalCloseButton" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <input type="file" name="uploadedImage" id="edit_uplaoded_image" 
                    onChange={(e) => fileChangedCalled(e)}
                  accept="image/png, image/gif, image/jpeg, image/jpg" />
                </div>

                <input type="text" id="page_id_Section"  hidden />

                <div className="imagePreviewSection">
                <div style={{ width:'499px'}}>

                    {
                        currentChangedImage !== '' ? 
                        <img src={currentChangedImage} alt="" style={{ width:'100%', height:'330px' }} srcset="" />
                        : ''
                    }
                        
                 </div>

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={()=> imageEditSaveHandle()} >Update </button>
                </div>
                </div>
            </div>
        </div>





               {/* modal text edit  */}
               <div class="modal fade" id="textEditModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Edit Text</h5>
                    <button type="button" class="btn-close" id="texteditModalCloseButton" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">

                <textarea placeholder="Enter Your Text Here..." className="form-control box__input" id="editTextAreaInput" cols="30" rows="2"></textarea>
                <input type="text" id="text_page_id_Section"  hidden />

                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" onClick={()=> textEditSaveHandle()} >Update </button>
                </div>
                </div>
            </div>
        </div>

        <button id="editModalCallHiddenButton" data-bs-toggle="modal" data-bs-target="#imageEditModal" hidden></button>
        <button id="texteditModalCallHiddenButton" data-bs-toggle="modal" data-bs-target="#textEditModal" hidden></button>
        </>
    );
};
export default Create;
