const textInput = document.getElementById("input-box");

function keydownFunc(event){
    console.log(event.key)
    console.log(event.target.value)
    console.log(event);
};

// textInput.onkeydown = keydownFunc;
// alternative way of attaching the event listener

document.addEventListener("keydown", keydownFunc)