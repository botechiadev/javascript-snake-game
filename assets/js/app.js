// JavaScript Snake Game

// Variable declarations
let inputDir = { x: 0, y: 0 };
const foodSound = new Audio('assets/music/food.mp3');
const gameOverSound = new Audio('assets/music/gameover.mp3');
const moveSound = new Audio('assets/music/move.mp3');
let speed = 19;
let score = 0;
let lastPaintTime = 0;
let snakeArr = [{ x: 13, y: 15 }];
let food = { x: 6, y: 7 };

// Game functions

function main(ctime) {
    window.requestAnimationFrame(main);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
}

function isCollide(snake) {
    // If snake bumps into itself or collides with the boundary of the board
    return (
        snake.slice(1).some(part => part.x === snake[0].x && part.y === snake[0].y) ||
        snake[0].x >= 18 || snake[0].x <= 0 || snake[0].y >= 18 || snake[0].y <= 0
    );
}

function gameEngine() {
    // Part 1: Updating the snake array & food
    if (isCollide(snakeArr)) {
        gameOverSound.play();
        inputDir = { x: 0, y: 0 };
        alert("Game Over, Pressione qualquer tecla para reiniciar o jogo!");
        snakeArr = [{ x: 13, y: 15 }];
        score = 0;
    }

    // If snake has eaten the food, increment the score and regenerate the food
    if (snakeArr[0].y === food.y && snakeArr[0].x === food.x) {
        foodSound.play();
        score += 1;
        snakeArr.unshift({ x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y });
        let a = 2;
        let b = 16;
        food = { x: Math.round(a + (b - a) * Math.random()), y: Math.round(a + (b - a) * Math.random()) };
    }

    // Moving the Snake
    for (let i = snakeArr.length - 2; i >= 0; i--) {
        snakeArr[i + 1] = { ...snakeArr[i] };
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    // Part 2: Display the snake and food

    // Display the snake
    const board = document.getElementById('board');
    board.innerHTML = "";
    snakeArr.forEach((part, index) => {
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = part.y;
        snakeElement.style.gridColumnStart = part.x;
        snakeElement.classList.add(index === 0 ? 'head' : 'snake');
        board.appendChild(snakeElement);
    });

    // Display food
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    board.appendChild(foodElement);

    // Update score and high score
    const scoreBox = document.getElementById('scoreBox');
    const hiscoreBox = document.getElementById('hiscoreBox');
    scoreBox.textContent = `Score: ${score}`;
    let hiScoreVal = localStorage.getItem("hiScore") || 0;
    if (score > hiScoreVal) {
        hiScoreVal = score;
        localStorage.setItem("hiScore", hiScoreVal);
    }
    hiscoreBox.textContent = `BEST SCORE: ${hiScoreVal}`;
}

// Main logic starts here

document.addEventListener('DOMContentLoaded', () => {
    let hiScoreVal = localStorage.getItem("hiScore") || 0;
    document.getElementById('hiscoreBox').textContent = `BEST Score: ${hiScoreVal}`;
    window.requestAnimationFrame(main);
    window.addEventListener('keydown', e => {
        moveSound.play();
        inputDir = { x: 0, y: 1 };
        switch (e.key) {
            case "ArrowUp":
                inputDir.x = 0;
                inputDir.y = -1;
                break;
            case "ArrowDown":
                inputDir.x = 0;
                inputDir.y = 1;
                break;
            case "ArrowLeft":
                inputDir.x = -1;
                inputDir.y = 0;
                break;
            case "ArrowRight":
                inputDir.x = 1;
                inputDir.y = 0;
                break;
            default:
                break;
        }
    });
});
