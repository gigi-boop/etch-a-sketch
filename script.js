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
        //paint();
        //paintRandomColor();
        shade();
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
        });
    }
}

function getRandomColorValue() {
    return Math.floor(Math.random() * 255);
}

function assignColorValues() {
    const rgb = [];

    for (let i = 0; i < 3; i++) {
        rgb.push(getRandomColorValue());
    }

    return rgb;
}

function convertToRGB() {
    return `rgb(${assignColorValues().join(", ")})`;
}

function paintRandomColor() {
    let divs = document.querySelectorAll(".container > div");

    for (const div of divs) {
        div.addEventListener("mouseenter", () => {
            if (div.style.backgroundColor === "") {
                div.style.backgroundColor = `${convertToRGB()}`;
            }
        });
    }
}

function shade() {
    let divs = document.querySelectorAll(".container > div");

    for (const div of divs) {
        let lightness = 100;
        div.addEventListener("mouseenter", () => {
            lightness -= 10;

            div.style.backgroundColor = `hsl(0, 0%, ${lightness}%)`;
        });
    }
}

drawGrid();
reset();
//paint();
//paintRandomColor();
shade();
