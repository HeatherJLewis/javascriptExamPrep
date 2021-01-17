function spookyStyle(){
    const spookyStyleTags = document.getElementsByClassName("spooky-style");
        for(const element of spookyStyleTags){
            element.style.color = "red";
        }
};

// spookyStyle();

document.addEventListener("DOMContentLoaded", spookyStyle);

function fixSpelling(){
    const header = document.getElementById("tofu");
    header.innerHTML = "Tofu";
}

fixSpelling();

function makeItalic(){
    const tofuSection = document.getElementById("tofu-section");
    const thirdParagraph = tofuSection.getElementsByTagName("p")[2];
    thirdParagraph.style.fontStyle = "italic";
}

makeItalic();

// function addParagraph(){
//     const newParagraph = document.createElement('p');
//     newParagraph.innerHTML = "It's primarily made of wheat";

//     const breadSection = document.getElementById("bread-section");
//     breadSection.appendChild(newParagraph);
// }

// addParagraph();

function addParagraph(){
    const newParagraph = document.createElement('p');

    const text1 = document.createTextNode("It's ");
    const text3 = document.createTextNode(" made of wheat.");

    const text2 = document.createElement("span");
    text2.innerHTML = "primarily";
    text2.style.color = "red";

    newParagraph.appendChild(text1);
    newParagraph.appendChild(text2);
    newParagraph.appendChild(text3);

    const breadSection = document.getElementById("bread-section");
    breadSection.appendChild(newParagraph);
}

addParagraph();