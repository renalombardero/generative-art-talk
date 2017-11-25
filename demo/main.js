var scene, camera, renderer, print, WIDTH, HEIGHT;
var frame = 1;

window.addEventListener('load', init, false);

function init() {


    loop();
}

function loop() {
    frame = window.requestAnimationFrame(loop);
}