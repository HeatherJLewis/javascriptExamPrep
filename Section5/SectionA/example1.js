function mySubmit(){
    const myAge = document.forms.myForm.userAge.value;
    if(isNaN(myAge)){
        // if(Number.isNaN(myAge)){ - doesn't work for this as it doesn't coerce
        // strictly checks for whether the var is of type NaN
        alert("not a number!")
    }
    const myName = document.forms.myForm.username.value;
    alert(`Are you sure your name is ${myName}?`);
};