'use strict';

let pg = document.getElementById('playground');
let ctx = pg.getContext('2d') || null;
var raf;

var running = false;
var speed = 1;
var mouse = { name: 'mouse', x: 0, y: 0 };

var snakes = [];
snakes.push(new Snake(pg.offsetWidth / 2, pg.offsetHeight / 2, 10, mouse));

pg.setAttribute('height', pg.offsetHeight);
pg.setAttribute('width', pg.offsetWidth);

/**
 * @description Utilitary function to clear the whole canvas.
 */
function clear() {
    ctx.clearRect(0, 0, pg.width, pg.height);
}

/**
 * @description The main draw function of the game.
 * This function request an animation frame and passes itself.
 */
function draw() {
    clear();

    for (var index = 0; index < snakes.length; index++) {
        var snake = snakes[index];
        snake.move();
        snake.draw();
    }

    if (running) {
        raf = window.requestAnimationFrame(draw);
    }
}

pg.addEventListener('mousemove', function (event) {
    mouse.x = event.offsetX;
    mouse.y = event.offsetY;
});

window.addEventListener('keypress', function (event) {
    if (event.code !== "Space") return;
    if (running) {
        window.cancelAnimationFrame(raf);
        running = false;
        console.log('Stop game.');
    } else {
        raf = window.requestAnimationFrame(draw);
        running = true;
        console.log('Start game.');
    }
});

pg.addEventListener('mousedown', function (event) {
    speed = 2;
});

pg.addEventListener('mouseup', function (event) {
    speed = 1;
});

draw();
