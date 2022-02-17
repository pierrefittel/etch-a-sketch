function createGrid(resolution) {
    let row = '<div class="row">';
    for (let i = 0; i < resolution; i++) {
        row += '<div class="pixel"></div>';
    }
    row += '</div>';
    let grid = '';
    for (let i = 0; i < resolution; i++) {
        grid += row;
    }
    return(grid);
}

function addPixelEvent(elements) {
    elements.forEach(element => {
        element.addEventListener("mouseover", changeColor)
        element.addEventListener("mousedown", changeColor)
    });
}

function changeColor(e) {
    if (mouseDown == true) {
        e.target.style.backgroundColor = color;
    }
}

//Grid creation from createGrid
let resolution = 128;
let canvas = document.getElementById("canvas");
let newGrid = createGrid(resolution);
canvas.innerHTML = newGrid;

//Color picker handler
let color = document.getElementById("color-wheel").value;
let colorwheel = document.getElementById("color-wheel");
colorwheel.addEventListener("input", function() {
    color = colorwheel.value;
})

//"Brush" event handler
let pixels = document.querySelectorAll(".pixel");
addPixelEvent(pixels);

//Called by changeColor to control if mouse is down
let mouseDown = false;
canvas.onmousedown = () => (mouseDown = true)
canvas.onmouseup = () => (mouseDown = false)

//Create a new document
let newSketch = document.getElementById("new");
newSketch.addEventListener("click", function() {
    canvas.innerHTML = '';
    newGrid = createGrid(resolution);
    canvas.innerHTML = newGrid;
    pixels = document.querySelectorAll(".pixel");
    addPixelEvent(pixels);
})

//Resolution slider toggle
const resToggle = document.getElementById("canvas-res");
const slider = document.getElementById("res-slider");
resToggle.addEventListener("click", function() {
    if (slider.style.visibility === "hidden") {
        slider.style.visibility = "visible";
    } else {
        slider.style.visibility = "hidden";
    }
})

//Resolution slider handle
const resSlider = document.getElementById("slider");
resSlider.oninput = function() {
    resolution = resSlider.value;
    const resValue = document.getElementById("slider-value");
    resValue.innerHTML = resolution + "<br>x<br>" + resolution;
};

//Toogle dark/light mode
const darkToggle = document.getElementById("mode");
darkToggle.addEventListener("click", function() {
    let header = document.getElementsByClassName("header")[0];
    header.classList.toggle("light-mode-menu");
    let toolBox = document.getElementsByClassName("toolbox")[0];
    toolBox.classList.toggle("light-mode-menu");
    let background = document.getElementsByClassName("workspace")[0];
    background.classList.toggle("light-mode-canvas");
})

//Save canvas as bitmap file (not implemented)
//...