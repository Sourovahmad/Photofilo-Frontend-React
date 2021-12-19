import axios from 'axios';
import mock_img from '../../Images/image-uploader-thumb.svg';
 

export class AppendElement {
    constructor() {
        this.pageId = document.querySelector("#project__page__building__area__dontBeDuplicate_Id");
        this.defaultPlaceholderUploader = document.querySelector(".image-uploader-area.one__layout__site.default");
        this.writingBox = document?.querySelector("#text-writer__box .box__input");
        this.pageArea = this.pageId?.querySelector("#photoPholio-page")
    }


    removingDefaultPlaceholder(){
        if (this.defaultPlaceholderUploader) {
            this.defaultPlaceholderUploader.remove();
        }
    }

    appendTwoGrid(image1=mock_img, image2=mock_img) {

        this.removingDefaultPlaceholder()
        const div = document?.createElement("div");
        div.className = "row tow__layout_site";
        const [id1, id2] = [this.randomIdGenerator(10), this.randomIdGenerator(10)];
        div.innerHTML = /* html */`
        <div class="col-6 h-50 p-0">
            <div class="p-2">
                <div class="image-uploader-area" id="area-${id1}" >
                    <img class="placeholder_image" src=${image1} alt="" />
                    <p class="mt-2 placeholder_text">
                        Drag and drop an Image, or
                        <label for="${id1}" class="theme-color  upload-btn">
                            Browse
                        </label>
                        <input  type="file" name="" id="${id1}" class="d-none uploader-input-grid_1" />
                    </p>
                    <div data-id="${id1}" class="cancel-button d-none">&times;</div>
                </div>
            </div>
        </div>
        <div class="col-6 h-50 p-0">
            <div class="p-2">
                <div class="image-uploader-area" id="area-${id2}">
                    <img class="placeholder_image" src=${image2} alt=""  />
                    <p class="mt-2 placeholder_text">
                        Drag and drop an Image, or
                        <label for="${id2}" class="theme-color  upload-btn">
                            Browse
                        </label>
                        <input type="file" name="" id="${id2}" class="d-none uploader-input-grid_2" />
                    </p>
                    <div data-id="${id2}" class="cancel-button button-for-2-grid d-none">&times;</div>

                </div>
            </div>
        </div>`;

        this?.pageArea?.append(div)
    }



    appendExistingTwo(grid_image_one, grid_image_two){
        this.removingDefaultPlaceholder()
        const div = document?.createElement("div");
        div.className = "row tow__layout_site";
        const [id1, id2] = [this.randomIdGenerator(10), this.randomIdGenerator(10)];
        div.innerHTML = /* html */`
        <div class="col-6 h-50 p-0">
            <div class="p-2">
                <div class="image-uploader-area" id="area-${id1}" >
                <img class="uploaded_image" src=${grid_image_one} />

                <div data-id="${id1}" class="button-for-1-grid "> <i class="fas fa-edit"> </i> </div>
                    <div data-id="${id1}" class="cancel-button ">&times;</div>
                </div>
            </div>
        </div>
        <div class="col-6 h-50 p-0">
            <div class="p-2">
                <div class="image-uploader-area" id="area-${id2}">
                    <img class="uploaded_image" src=${grid_image_two} />

                    <div data-id="${id2}" class="button-for-1-grid"> <i class="fas fa-edit"> </i> </div>

                    <div data-id="${id2}" class="cancel-button button-for-2-grid ">&times;</div>

                </div>
            </div>
        </div>`;

        this?.pageArea?.append(div)
    }

    //for edit section 
    appendOneGrid(image = mock_img) {
        this.removingDefaultPlaceholder();
        const id = this.randomIdGenerator(10);
        const div = document?.createElement("div");
        div.className = "image-uploader-area one__layout__site";
        div.innerHTML =
            /* html */
        `<div class="wrapper-1">
            <div  class="wrapper-2">
                <div id="area-${id}" class="upload-area">
                     <img class="placeholder_image" src=${image} alt="" />
                     <p class="mt-2 placeholder_text">
                         Drag and drop an Image, or
                         <label for="file-upload-${id}" class="theme-color upload-btn">
                             Browse
                         </label>
                         <input type="file" name="" id="file-upload-${id}" class="d-none uploader-input" />
                     </p>
                     <div data-id="${id}" class="cancel-button d-none">&times;</div>
                 </div>
             </div>
        </div>`;
        this.pageArea.appendChild(div);
    }

    //for edit section 
    appendExistingOne(image_url){

        this.removingDefaultPlaceholder();
        const id = this.randomIdGenerator(10);
        const div = document?.createElement("div");

        div.className = "image-uploader-area one__layout__site";
        div.innerHTML =
            /* html */
        `<div class="wrapper-1">
            <div  class="wrapper-2">
                <div id="area-${id}" class="upload-area">
                    <img class="uploaded_image" src=${image_url} />

 
                    <div data-id="${id}" class="button-for-1-grid "> <i class="fas fa-edit"> </i> </div>
                     <div data-id="${id}" class="cancel-button ">&times;</div>
                 </div>
             </div>
        </div>`;
        this.pageArea.appendChild(div);


    }


    appendingText() {
        this.removingDefaultPlaceholder();
        const value = this.writingBox?.value;
        const p = document?.createElement("p");
        p.className = `mb-0 page-text ${this.randomIdGenerator(20)} `;

        const currentProjcetId = sessionStorage.getItem('current_project_id')
        const apiRoute = process.env.REACT_APP_API_TO;

        if(currentProjcetId !== null){

        const formData = new FormData();
        formData.append('project_id', currentProjcetId);
        formData.append('type', 'text');
        formData.append('text', value);

        axios.post(apiRoute + 'project-content-upload', formData)
        .then(res => {
            p.innerHTML = res.data.text;
            this.pageArea.appendChild(p);
            console.log("text added");
            this.writingBox.value = "";
        });

        }else{
            alert("Create A Project First")
        }

    }




    //for edit section 
    appendExistingText(texts,content_id){

        this.removingDefaultPlaceholder();
        const p = document?.createElement("p");
        p.className = `mb-0 page-text ${content_id} `;


        const html = 
        `<div id="div-${content_id}">  
            <p class= mb-0 page-text" id="p-section-${content_id}"> ${texts} </p> 
            <div class="d-flex align-items-center">
                    <div data-id="${content_id}" class="textEditButton text-danger m-4"> <i class="fas fa-edit"></i></div>
                    <div data-id="${content_id}" class="textCancelButton text-danger">&times;</div> 
            </div>

        </div>
        `


        p.innerHTML = html;
        this.pageArea.appendChild(p);
        console.log("text added");
        this.writingBox.value = "";
    }

    handleRemoveTextSection(id){

        const apiRoute = process.env.REACT_APP_API_TO;
        const currentDiv = this.pageArea.querySelector(`#div-${id}`);
        const currentP = this.pageArea.querySelector(`#p-section-${id}`);

        
        const formData = new FormData();
        formData.append('content_id', id);


        axios.post(apiRoute + `project-text-remover`, formData)
        .then(res => {
            currentDiv.remove();
            
        });
         
    }





    randomIdGenerator(length){
        const word = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        let id = ""
        for(let i=0;i<length;i++){
            const randomN = Math.floor(Math.random() * word.length);
            id+= word.charAt(randomN)
            
            if(id.length%7===0){
                id+="__"
            }
        }
        return id+"__"+Date.now()
    }
    


    handleFileUpload(e) {

        const currentProjectId = window.sessionStorage.getItem('current_project_id');
        if(currentProjectId !== null){
            const files = e.target.files[0];
            const imagePreviewArea = e.target.parentNode.parentNode;
            const placeholder_text = imagePreviewArea?.querySelector(".placeholder_text");
            const placeholder_image = imagePreviewArea?.querySelector(".placeholder_image");
            const cancelButton = imagePreviewArea?.querySelector(".cancel-button");
            const apiRoute = process.env.REACT_APP_API_TO;
    
                const reader = new FileReader();
    
                reader.addEventListener("load", function () {
                    if (files.type.includes("image")) {
                        if (reader.result) {
                            placeholder_image?.classList?.add("d-none");
                            placeholder_text?.classList?.add("d-none");
                            cancelButton?.classList?.remove("d-none");
    
                            
                            const formData = new FormData();
                            formData.append("file", files);
                            formData.append("type", 'image_big');
                            formData.append("project_id", currentProjectId);
    
                            const image = document.createElement("img");
                            axios.post(apiRoute + "project-content-upload", formData)
                            .then(res => image.src = res.data.imageName)
                            .catch(error => alert("file upload Error"))

                            image.className = "uploaded_image";
                            imagePreviewArea.classList.add("image-uploaded");
                            imagePreviewArea.appendChild(image);
                        } else if (reader.error) {
                            alert("something Went wrong please try again later");
                        }
                    } else {
                        alert("please provide Image file type");
                    }
                });
    
                reader.readAsDataURL(files);
        }else{
            alert("please Create Project First")
        }

    }

    handleFileUploadGrid1(e){
        const currentProjectId = window.sessionStorage.getItem('current_project_id');
        if(currentProjectId !== null){

            const files = e.target.files[0];
            const imagePreviewArea = e.target.parentNode.parentNode;
            const placeholder_text = imagePreviewArea?.querySelector(".placeholder_text");
            const placeholder_image = imagePreviewArea?.querySelector(".placeholder_image");
            const cancelButton = imagePreviewArea?.querySelector(".cancel-button");
            const apiRoute = process.env.REACT_APP_API_TO;
    
                const reader = new FileReader();
    
                reader.addEventListener("load", function () {
                    if (files.type.includes("image")) {
                        if (reader.result) {
                            placeholder_image?.classList?.add("d-none");
                            placeholder_text?.classList?.add("d-none");
                            cancelButton?.classList?.remove("d-none");
    
                            
                            const formData = new FormData();
                            formData.append("file", files);
                            formData.append("type", 'grid_image_one');
                            formData.append("project_id", currentProjectId);
    
                            const image = document.createElement("img");
                            axios.post(apiRoute + "project-content-upload", formData)
                            .then(res => {
                                image.src = res.data.imageName;
                                window.sessionStorage.setItem('grid_one_project_id', res.data.grid_one_project_id);
                            })
                            .catch(error => alert("file upload Error"))

                            image.className = "uploaded_image";
                            imagePreviewArea.classList.add("image-uploaded");
                            imagePreviewArea.appendChild(image);
                        } else if (reader.error) {
                            alert("something Went wrong please try again later");
                        }
                    } else {
                        alert("please provide Image file type");
                    }
                });
    
                reader.readAsDataURL(files);

        }else{
            alert("please Create Project First")
        }
    }

    handleFileUploadGrid2(e){
        const currentProjectId = window.sessionStorage.getItem('current_project_id');
        if(currentProjectId !== null){

            const files = e.target.files[0];
            const imagePreviewArea = e.target.parentNode.parentNode;
            const placeholder_text = imagePreviewArea?.querySelector(".placeholder_text");
            const placeholder_image = imagePreviewArea?.querySelector(".placeholder_image");
            const cancelButton = imagePreviewArea?.querySelector(".cancel-button");
            const apiRoute = process.env.REACT_APP_API_TO;
    
                const reader = new FileReader();
    
                reader.addEventListener("load", function () {
                    if (files.type.includes("image")) {
                        if (reader.result) {
                            placeholder_image?.classList?.add("d-none");
                            placeholder_text?.classList?.add("d-none");
                            cancelButton?.classList?.remove("d-none");
    
                            
                            const formData = new FormData();
                            formData.append("file", files);
                            formData.append("type", 'grid_image_two');
                            formData.append("project_id", currentProjectId);

                            const firstGridId = window.sessionStorage.getItem('grid_one_project_id');
                            formData.append("grid_one_project_id", firstGridId);
    
                            const image = document.createElement("img");
                            axios.post(apiRoute + "project-content-upload", formData)
                            .then(res => image.src = res.data.imageName)
                            .catch(error => alert("file upload Error"))

                            image.className = "uploaded_image";
                            imagePreviewArea.classList.add("image-uploaded");
                            imagePreviewArea.appendChild(image);
                        } else if (reader.error) {
                            alert("something Went wrong please try again later");
                        }
                    } else {
                        alert("please provide Image file type");
                    }
                });
    
                reader.readAsDataURL(files);



        }else{
            alert("please Create Project First")
        }
    }


    handleRemoveImage(id) {

        const imageArea = this.pageArea.querySelector(`#area-${id}`);
        const uploadedImage = imageArea.querySelector(".uploaded_image");
        if (uploadedImage) {

            const ImageUrl = uploadedImage.getAttribute('src');
            const apiRoute = process.env.REACT_APP_API_TO;

            const formData = new FormData();
            formData.append('image_url',ImageUrl);

            axios.post(apiRoute + `project-content-remover`, formData)

            .then(res =>{
               imageArea.parentElement?.parentNode?.parentNode?.remove()
            })
            .catch(e => alert("server Error"));

        }
    }


    

}


