//********* VARIABLE DECLARATIONS ***********//
const colorButton = document.querySelector('.colorBtn');
const bodyBackground  =  document.querySelector('body');


const colors = ['yellow', 'red', 'green', 'pink']

colorButton.addEventListener('click', changeColor)


function changeColor () {
//on click of button, I want to change the background to one of the colors in the array, picked at random
let random = Math.floor(Math.random()*colors.length);
bodyBackground.style.backgroundColor = colors[random];
};
// a callback is used to execute a function inside of another function
// I am a function th