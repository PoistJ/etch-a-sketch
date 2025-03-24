for (i = 0;i < 256;i++) {
    const container = document.querySelector("#container");
    const gridSquare = document.createElement("div");
    gridSquare.className = "square";
    container.appendChild(gridSquare);
}