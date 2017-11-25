var scene, camera, renderer, print, WIDTH, HEIGHT;
var frame = 1;

window.addEventListener('load', init, false);

function init() {
    var container = document.getElementById('world');

    scene = new THREE.Scene();

    WIDTH = window.innerWidth;
    HEIGHT = window.innerHeight;

    camera = new THREE.OrthographicCamera(
        WIDTH / -2,
        WIDTH / 2,
        HEIGHT / 2,
        HEIGHT / -2,
        1, 2000
    );

    camera.position.z = 1000;

    renderer = new THREE.WebGLRenderer({
        alpha: true,
        preserveDrawingBuffer: true,
        antialias: true
    });

    renderer.setSize(WIDTH, HEIGHT);
    renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);

    container.appendChild(renderer.domElement);


    loop();
}

function loop() {
    frame = window.requestAnimationFrame(loop);
}