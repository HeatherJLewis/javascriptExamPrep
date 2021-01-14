function clickMe2 () {
    alert('Hello')
};

const clickHeader = document.getElementById("click-event-ext");

clickHeader.onclick = clickMe2;

const clickHeader2 = document.getElementById("click-event-listener");
clickHeader2.addEventListener("click", clickMe2);