function createGrid (desiredSquares) {
    desiredArea = desiredSquares * desiredSquares;

    for (i = 0;i < desiredArea;i++) {
        const container = document.querySelector("#container");
        const gridSquare = document.createElement("div");
        gridSquare.className = "square";
        container.appendChild(gridSquare);
    };
    document.documentElement.style.setProperty ('--number', desiredSquares);
}

function hover () {
    const gridSquare = document.querySelectorAll(".square");
    gridSquare.forEach(gridSquare => {
        gridSquare.addEventListener ("mouseenter", () => {
            gridSquare.style.backgroundColor = "teal";
        });
    });
}

let defaultSquares = 16;
createGrid (defaultSquares);
hover();

const reset = document.querySelector("#resetButton");
reset.addEventListener('click', () => {
    let desiredSquares = prompt("Please enter the number of squares desired for each side. (maximum 100 squares)");
    
    if (desiredSquares > 100) {
        alert("The number you entered was more than 100.");
        return;
    }

    container.replaceChildren();
    createGrid (desiredSquares);
    hover ();
});