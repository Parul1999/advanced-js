//a function is passed as parameter is callback
//example1
function ask(question, yes, no) {
    if (confirm(question)) {
        yes();
    } else {
        no();
    }
}

function showOk() {
    alert("You Agreed");
}

function showCancel() {
    alert("The execution is cancelled");
}
ask("Do you agree?", showOk, showCancel);

//example2
function greeting(name) {
    alert("Hello" + name);
}

function processUserInput(callback) {
    var name = prompt("Please enter your name");
    callback(name);
}
processUserInput(greeting);
//all examples are sync bcs callback is executed immediately
//the callbacks are used to continue code execution , async
//callback--sync and async both but mostly used in async
//example 3
function sayHi() {
    alert("Hello I am callback");
}
let myGreeting = setTimeout(sayHi, 2000);
//these are async functions
//setInterval will cause a loop 
//example 4
function displayTime() {
    let data = new Date();
    let time = data.toLocaleTimeString();
    console.log(time);
    console.log(createClock);
}
const createClock = setInterval(displayTime, 1000);
var button = document.createElement('button');
button.innerHTML = 'Stop same clock';
button.addEventListener('click', function() {
    clearInterval(createClock);
});
document.body.appendChild(button);

//callback and pyramid of doom