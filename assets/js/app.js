let direction = { x: 0, y: 0};

const foodSound = new Audio('assets/music/food.mp3');
const gameOverSound = new Audio('assets/music/gameOver.mp3');
const moveSound = new Audio('assets/music/move.mp3');
const musicSound = new Audio('assets/music/music.mp3');
let speed = 2;
let lastPaintTime = 0;


// logica da secao de jogos comeca aqui


function section(ctime){
window.requestAnimationFrame(section);
 if((ctime - lastPaintTime )/1000 < 1/speed){
    return ;
 }
 lastPaintTime = cTime;
 gameEngine()
}


function gameEngine(){

    // parte 1 - update snake e maca
    

    // parte 2 - display snake e maca
}

window.requestAnimationFrame(section)
