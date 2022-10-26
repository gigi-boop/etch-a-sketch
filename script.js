"use strict";

const container = document.querySelector(".container");
const resetButton = document.querySelector(".reset-button");

let firstDraw = true;

function reset() {
    resetButton.addEventListener("click", () => {
        let divs = document.querySelectorAll(".container > div");

        for (const div of divs) {
            container.removeChild(div);
        }

        firstDraw = false;

        drawGrid();
        paint();
    });
}

function drawGrid() {
    const containerWidth = container.offsetWidth;

    let gridSize = 16;
    if (firstDraw === false) {
        gridSize = parseInt(
            prompt("Please enter a grid size (max size 100)", "16")
        );
    }
    let divWidth = Math.round((containerWidth / (gridSize + 1)) * 20) / 20;

    for (let i = 0; i < gridSize * gridSize; i++) {
        let div = document.createElement("div");
        container.appendChild(div);
        div.style.width = `${divWidth}px`;
    }
}

function paint() {
    let divs = document.querySelectorAll(".container > div");

    for (const div of divs) {
        div.addEventListener("mouseenter", () => {
            div.classList.add("hover");
            console.log(div.className);
        });
    }
}

drawGrid();
paint();
reset();
