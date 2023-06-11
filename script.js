// Etch-a-Sketch JavaScript File by shashwathkpy

// Initialize Continer, Clear Button, and Slider
const container = document.querySelector("#container");
const clearBtn = document.querySelector("#clearBtn");

const slider = document.getElementById("myRange");
const sliderContainer = document.querySelector(".slideContainer");

let gridSize = slider.getAttribute("value");

const text = document.createElement('h2');
text.textContent = gridSize + "x" + gridSize;
sliderContainer.appendChild(text);


// Set container size
const containerSize = 800;
const containerSizeString = "width: " + containerSize + "px; height: " + containerSize + "px";
container.setAttribute('style', containerSizeString);


// Create initial grid, further grid creation will be made by calling clear()
grid();


// Slider and Clear Button Functionality
slider.onmouseup = function() 
{
    gridSize = this.value;
    clear();
}
slider.oninput = function()
{
    text.textContent = this.value + "x" + this.value;
}

clearBtn.addEventListener('click', function(e)
{
    clear();
});


// Clears out grid and resets it
function clear()
{
    while(container.lastElementChild)
    {
        container.removeChild(container.lastElementChild);
    }
    grid();
}


// Color Manipulation
const colorBtn = document.querySelector("#colorBtn");
const grayBtn = document.querySelector("#grayBtn");
let gray = true;
let color = false;

colorBtn.addEventListener('click', function(e)
{
    color = true;
    gray = false;
});

grayBtn.addEventListener('click', function(e)
{
    gray = true;
    color = false;
});


// Main Function, creates boxes on the grid and allows coloring over them
function grid()
{
    for(let i = 0; i < gridSize**2; i++)
    {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');

        let boxSize = containerSize/gridSize;
        let boxSizeString = "width: " + boxSize + "px; height: " + boxSize + "px";
        box.setAttribute('style', boxSizeString);
        container.appendChild(box);
    
        box.addEventListener('mouseenter', function (e) {
            let randomRed = Math.floor(Math.random()*256);
            let randomGreen = Math.floor(Math.random()*256);
            let randomBlue = Math.floor(Math.random()*256);

            let rgbString = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue  + ")"; 
            let grayString = "rgb(" + randomRed + ", " + randomRed + ", " + randomRed  + ")";
            if(color)
            {
                e.target.style.background = rgbString;
            }
            if(gray)
            {
                e.target.style.background = grayString;
            }
        });
    }
}