//Global selections and variables
const colorDivs = document.querySelectorAll(".color");
const generateBtn = document.querySelector(".generate");
const sliders = document.querySelector("input[type='range']");
const colorHexes = document.querySelectorAll(".color h2");
let initialColors;
//Functions

//Color Generator
function generateHex() {
    const hexColor = chroma.random();
    return hexColor;
}

function randomColor() {
    colorDivs.forEach((div, index) => {
        const hexText = div.children[0];
        const randomColor = generateHex();

        //Add the color to the bg
        div.style.backgroundColor = randomColor;
        hexText.innerText = randomColor;
    });
}
randomColor();
