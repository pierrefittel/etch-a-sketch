function createGrid(height, width, element) {
    let row = '<div class="row">';
    for (let i = 0; i < width; i++) {
        row += element;
    }
    row += '</div>';
    let grid = '';
    for (let i = 0; i < height; i++) {
        grid += row;
    }
    return(grid);
}

function addColor(elements, color) {
    elements.forEach(element => {
        element.addEventListener("mouseover",function (e) {
            e.target.style.backgroundColor = color;
        });
    });
}

//Grid creation from createGrid
const grid = document.getElementById("grid");
const newGrid = createGrid(64, 64, '<div class="pixel"></div>');
grid.innerHTML = newGrid;

//Pixel color event handler
const pixels = document.querySelectorAll(".pixel");
pixels.onmousedown = addColor(pixels, "black");