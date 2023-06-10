const container = document.querySelector("#container");
const gridBtn = document.querySelector("#gridBtn");
const clearBtn = document.querySelector("#clearBtn");
let gridSize = 16;

const containerSize = 800;
const containerSizeString = "width: " + containerSize + "px; height: " + containerSize + "px";
container.setAttribute('style', containerSizeString);

grid();

gridBtn.addEventListener('click', function(e)
{
    gridSize = parseInt(prompt("Enter a grid size (1-100): ", "16"));
    while(isNaN(gridSize) ||gridSize > 100 || gridSize < 1) {
        gridSize = parseInt(prompt("That was outside bounds, Enter a grid size (1-100): ", "16"));
    }
    clear();
});

clearBtn.addEventListener('click', function(e)
{
    clear();
});

function clear()
{
    while(container.lastElementChild)
    {
        container.removeChild(container.lastElementChild);
    }
    grid();
}


function grid()
{
    for(let i = 0; i < gridSize**2; i++)
    {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');

        let boxSize = containerSize/gridSize;
        let boxSizeString = "width: " + boxSize + "px; height: " + boxSize + "px";
        box.setAttribute('style', boxSizeString);

        let customId = 'b' + i;
        box.setAttribute('id', customId);
        container.appendChild(box);
    
        box.addEventListener('mouseenter', function (e) {
            let randomRed = Math.floor(Math.random()*256);
            let randomGreen = Math.floor(Math.random()*256);
            let randomBlue = Math.floor(Math.random()*256);

            let rgbString = "rgb(" + randomRed + ", " + randomGreen + ", " + randomBlue + ")"; 
            e.target.style.background = rgbString;
        });
    }
}


