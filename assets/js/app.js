let direction = { x: 0, y: 0};

const foodSound = new Audio('assets/music/food.mp3');
const gameOverSound = new Audio('assets/music/gameOver.mp3');
const moveSound = new Audio('assets/music/move.mp3');
const musicSound = new Audio('assets/music/music.mp3');
let speed = 2;
let lastPaintTime = 0;
let snakeArr = [
    {
        x: 13,
        y: 15
    }
]

let food = {x: 6 , y: 7};


// logica da secao de jogos comeca aqui


function section(ctime){
window.requestAnimationFrame(section);
 if((ctime - lastPaintTime )/1000 < 1/speed){
    return ;
 }
 lastPaintTime = ctime;
 gameEngine()
}


function gameEngine(){
    // parte 1 - update snake e maca
    


    // parte 2 - display snake e maca

    // display snake
    board.innerHTML =""
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div')
        snakeElement.style.gridRowStart = e.x;
        snakeElement.style.gridColumnStart = e.y;

        if(index == 0 ){
        snakeElement.classList.add('head')
        }else{
        snakeElemesnt.classList.add('snake')
        }
        
        board.appendChild(snakeElement);
    })
  
        foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.x;
        foodElement.style.gridColumnStart = food.y;
        foodElement.classList.add('food')
        board.appendChild(foodElement);
    

}

window.requestAnimationFrame(section)
