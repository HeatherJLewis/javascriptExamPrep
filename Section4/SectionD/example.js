function changeById(){
    const firstPara = document.getElementById("first-para");
    firstPara.innerHTML = "This is the first paragraph"
}

function changeByClass(){
    const paragraphs = document.getElementsByClassName("para");
    // document.getElementsByClassName("para")[0].style.color ="red";
    for(const para of paragraphs){
        // para.style.color = "red";
        para.setAttribute("style", "color : red;");
    }
}

function changeByTagName(){
    const heading = document.getElementsByTagName("h1")[0];
    heading.innerHTML = "This is a better heading";
    heading.setAttribute("style", "background-color : blue");
}

function addAnElement(){
    const para = document.getElementsByClassName("para")[2];
    const newPara = document.createElement("p");
    newPara.innerHTML = "I've just added a paragraph element";
    para.appendChild(newPara);
};

const buttonCreate = document.getElementById("my-button-create");
buttonCreate.onclick = addAnElement;

const buttonId = document.getElementById("my-button-id");
buttonId.onclick = changeById;

const buttonClass = document.getElementById("my-button-class");
buttonClass.onclick = changeByClass;

const buttonTag = document.getElementById("my-button-tag");
buttonTag.onclick = changeByTagName;