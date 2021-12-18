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
import { useParams } from "react-router-dom";

const Create = ({editProject}) => {
    
    const [isInsertMediaBar, setIsInsertMediaBar] = useState(null)
    const [isTextBar, setIsTextBar] = useState(false);
    const [currentContents, setcurrentContents] = useState([]);
    const [iscurrentProject, setiscurrentProject] = useState(false);
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
            console.log(allEditButtons);
            [...allEditButtons].forEach(button => {
                button.onclick = () => appender.handleRemoveTextSection(button.dataset.id)
            })
        }
    
            

        eventForUpload();
        handleRemoveImage();
        handleRemoveText();


        //eslint-disable-next-line
    }, []);


  


    function projectPublisher(){
        const currentProjectId = window.sessionStorage.getItem('current_project_id');
        const formData = new FormData();
        formData.append("project_id", currentProjectId);

        axios.post(apiRoute + 'active-project', formData)
        .then(res => {
            
            window.sessionStorage.removeItem('current_project_id');
            const gridCurrentId = window.sessionStorage.getItem('grid_one_project_id');
            if(gridCurrentId !== null){
                window.sessionStorage.removeItem('grid_one_project_id');
            }
            alert("Project Publish Successfully")
            window.location.reload();
            sessionStorage.removeItem('current_project_id'); 
            setiscurrentProject(false)
        });
    }

    const {editProjectId} = useParams();

    useEffect(() => {

       if(editProject === true){
           if(iscurrentProject === true){
               alert("Complete Your Current Project First");
           }else{

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
                        project.text !== null ? appender.appendExistingText(project.text) : ''
                    }
                    </>
                })

            });

           }
       }
       
    }, []);


    function projectDrafter(){

        const currentProjectId = sessionStorage.getItem('current_project_id');
        if(currentProjectId !== null){

            sessionStorage.removeItem('current_project_id');

            const gridCurrentId = window.sessionStorage.getItem('grid_one_project_id');
            if(gridCurrentId !== null){
                window.sessionStorage.removeItem('grid_one_project_id');
            }

            alert('Project Saved As Draft');
            window.location.reload();
        }
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
                       
                            <button className="btn btn-lg theme-btn rounded w-100 p-2" onClick={()=>projectPublisher()}> Publish </button>

                            <button className="btn btn-danger rounded w-100 p-2 mt-4" onClick={()=>projectDrafter()}> Add To Draft </button>
                   
                       
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    );
};
export default Create;
