function alertOnChange(event){
    alert(event.target.value)
}

// const inputText = document.getElementById("input-box");
// inputText.addEventListener("change", alertOnChange)

/*
an on change event fires when
- focus is lost,
- an element is checked or
- the user selects an item from a dropdown
*/

const textAreaBox = document.getElementById("textarea-box");

textAreaBox.onchange = alertOnChange;

const selectDropdown = document.getElementById("select-dropdown");

selectDropdown.onchange = alertOnChange;

