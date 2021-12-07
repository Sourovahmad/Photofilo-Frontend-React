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

        div.innerHTML = /* html */`
                <div class="col-6 h-50 p-0">
                    <div class="p-2">
                        <div class="image-uploader-area">
                            <img src=${image1} alt="" />
                            <p class="mt-2">
                                Drag and drop an Image, or <span class="theme-color uplaodButtonClass">Browse</span>

                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-6 h-50 p-0">
                    <div class="p-2">
                        <div class="image-uploader-area">
                            <img src=${image2} alt="" />
                            <p class="mt-2">
                                Drag and drop an Image, or <span class="theme-color uplaodButtonClass">Browse</span>

                            </p>
                        </div>
                    </div>
                </div>`;

        this?.pageArea?.append(div)
    }



    appendOneGrid(image=mock_img){
        this.removingDefaultPlaceholder()
        const div = document?.createElement("div")
        div.className = "image-uploader-area one__layout__site";
        div.innerHTML =
            /* html */
            `<img class="placeholder_image" src=${image} alt="" />
             <p class="mt-2 placeholder_text">
                 Drag and drop an Image, or <span class="theme-color">Browse</span>
             </p>`;
        this.pageArea.appendChild(div)
    }



    appendingText(){
        this.removingDefaultPlaceholder()
        const value = this.writingBox?.value
        const p = document?.createElement("p")
        p.className = `mb-0 page-text ${this.randomIdGenerator(20)} `;
        p.innerHTML = value
        this.pageArea.appendChild(p)
        this.writingBox.value = ""
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

    

}


const AlluploadButton = document.querySelectorAll('.image-uploader-area .uplaodButtonClass');

AlluploadButton.forEach(element => {
        element.addEventListener('click', function(){
            alert("clicked");
        })
    });

