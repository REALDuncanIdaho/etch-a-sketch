//create a variable 'container' with class 'container'
const container = document.querySelector(".container");
//create a variable slider with id 'myRange'
const slider = document.getElementById("myRange");

function makeGrid() {
    //takes current value of slider, converts to int, stores in 'gridSize'
    //changes number of rows and columns in grid
    const gridSize = parseInt(slider.value);
    //clears out contents of container
    container.innerHTML = "";

    //sets value of grid-template-columns to match gridSize
    const gridTemplateColumns = `repeat(${gridSize}, 10px)`;

    //var gridTemplateColumns matches css grid-template-columns
    container.style.gridTemplateColumns = gridTemplateColumns;

    //loop will create # of rows to match gridSize
    for (i = 0; i < gridSize; i++) {
        //creates new div, names it row
        const row = document.createElement("div");
        //var row gets class name "row"
        row.className = "row";
        
        //loop will create # of columns to match gridSize
        for (j = 0; j < gridSize; j++) {
            //creates new div, names it col
            const col = document.createElement("div");
            //var col gets class name "col"
            col.className = "col";
            //assigns id to each div based on row and column
            col.id = `cell_${i}_${j}`;

            //adds mouseover event to each div, will trigger function on mouseover
            col.addEventListener("mouseover", (event) => {
                //cellId stores id of div that triggered mouseover
                const cellId = event.target.id;
                //will then change color of target id to black
                changeColor(cellId, 'black');
            });
            //appends the column cell to the current row
            container.appendChild(col);
        }
    }        
}

function changeColor(cellId, color) {
    //var cell locates div with specific id set to cellId
    const cell = document.getElementById(cellId);
    if (cell) {
        //changes background of div to color set in return
        cell.style.backgroundColor = color;
    }
}

//listens for changes in slider value when slider is moved
slider.addEventListener("input", () => {
    //clears out container
    container.innerHTML = "";
    //returns new grid with chosen slider value
    makeGrid();
});

//default grid at start of page load
makeGrid();
