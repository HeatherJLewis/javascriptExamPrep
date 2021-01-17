function changeToGreen(){
    document.getElementById("green")
        .setAttribute("style", "color: green");
};

function goBack2(){
    window.history.go(-2);
};

function addShadow(){
    const button = document.getElementById("back-button");

    function makeBlue() {
        // button.style.color = "blue";
        button.setAttribute("style", "box-shadow: 10px 5px 5px red; color: blue")
    };

    function makeBlack() {
        button.removeAttribute("style");
        button.style.color = "black";
    }

    // button.addEventListener("mouseover", makeBlue)
    button.onmouseover = makeBlue;
    button.addEventListener("mouseout", makeBlack)
}

function addHref() {
    const hrefDiv = document.getElementById("href");
    const browserType = window.navigator.userAgent;
    const aTag = document.createElement("a");
    if(browserType.includes("Chrome")){
        aTag.setAttribute("href", "xkcd.com")
        aTag.innerText = "xkcd.com"
    } else {
        aTag.setAttribute("href", "bbc.co.uk")
        aTag.innerText = "bbc.co.uk"
    }
    hrefDiv.appendChild(aTag);
}

function checkNumber() {
    const numberInput = document.getElementById("number-input");
    const screenSizeDiv = document.getElementById("screen-size");
    const screenSize = window.innerWidth;
    const newParagraph = document.createElement("p");
    numberInput.onchange = (event) => {
        if(event.target.value > screenSize){
            newParagraph.innerText = `Your number(${event.target.value}) is greater than the screen size ${screenSize})`
        } else {
            newParagraph.innerText = `Your number(${event.target.value}) is less than the screen size (${screenSize})`
        }
    }
    screenSizeDiv.appendChild(newParagraph);
};

document.addEventListener("DOMContentLoaded", changeToGreen);
document.addEventListener("DOMContentLoaded", addShadow);
document.addEventListener("DOMContentLoaded", addHref);
document.addEventListener("DOMContentLoaded", checkNumber);