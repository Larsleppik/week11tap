const myButton = document.querySelector('button');
const myBox = document.querySelector('.box');
const colors = ["red", "green", "blue", "yellow"];




myButton.addEventListener('click', changeColor);

function changeColor() {
    let randomIndex = Math.floor(Math.random() * colors.length);
    console.log(myBox);
    myBox.style.backgroundColor = colors[randomIndex];
}