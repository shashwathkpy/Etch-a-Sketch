const container = document.querySelector("#container");
const gridBtn = document.querySelector("#gridBtn");
let gridSize = 16;

grid();

gridBtn.addEventListener('click', function(e)
{
    gridSize = parseInt(prompt("Enter a grid size (1-100): ", "16"));
    while(container.lastElementChild)
    {
        container.removeChild(container.lastElementChild);
    }
    grid();
});

function grid()
{
    for(let i = 0; i < gridSize**2; i++)
    {
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        let customId = 'b' + i.toString();
        box.setAttribute('id', customId);
        container.appendChild(box);
    
        box.addEventListener('mouseenter', function (e) {
            e.target.style.background = 'lightblue';
        });
    }
    
}


