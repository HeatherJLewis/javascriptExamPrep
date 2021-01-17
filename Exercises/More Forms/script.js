function validateInfo(event){
    const form = document.getElementById("bbc-form");
    const warning = document.createElement("p");
    const input = document.forms["bbc-form"]["article-name"].value
    if(input.endsWith("?") || input.endsWith("!") || input.endsWith(".")){
        event.preventDefault();
        warning.innerHTML = "No Way!";
        form.appendChild(warning);
    };

    const idInput = document.forms["bbc-form"]["article-id"].value;
    if(isNaN(idInput)){
        event.preventDefault();
        warning.innerHTML += " Not a number!"
        form.appendChild(warning);
    }
}