var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(window.alert, 2*1000, 'That was really slow!');
  console.log(timeoutID);
}

function clearAlert() {
    console.log(timeoutID);
    window.clearTimeout(timeoutID);
}