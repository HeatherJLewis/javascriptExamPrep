function myOnloadFunction() {
    const myPara = document.getElementById("my-para");
    myPara.textContent = "Hello There";
}

document.addEventListener("DOMContentLoaded", myOnloadFunction)