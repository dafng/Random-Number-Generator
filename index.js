// random number generator from 1-6

const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min=1;
const max=6;
let randomnum;

myButton.onclick= function(){
    randomnum = Math.floor(Math.random() * max) + min;
    myLabel.textContent=randomnum;
}