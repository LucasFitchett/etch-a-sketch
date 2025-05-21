const grid = document.getElementById("grid");
let mouseDown = false;

grid.addEventListener("mousedown", () => {
    mouseDown = true;
});

document.addEventListener("mouseup", () => {
    mouseDown = false;
});

for (let i = 0; i < 64 * 64; i++) {
    const div = document.createElement("div");
    div.classList.add("aspect-square", "bg-gray-100");
    grid.appendChild(div);

    div.addEventListener("mouseover", draw);
    div.addEventListener("mousedown", draw);
    div.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "MediumTurquoise";
    });
}

function draw(event) {
    if (mouseDown === true) {
        event.target.style.backgroundColor = "MediumTurquoise";
    }
}
