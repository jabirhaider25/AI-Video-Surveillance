video = "";
function preload() {
video = createVideo('video.mp4');
video.hide();
}
function setup() {
canvas = createCanvas(480,380);
canvas.center();
}
function draw() {
image(video,0,0,480,380);
}
function Start() {
    objectDetector = ml5.objectDetector('cocosd',modelLoaded);
    document.getElementById("status").innerHTML = "status detecting objects";
}
function modelLoaded() {
console.log('modeLoaded');
status = true;
video.loop();
video.speed(1);
video.volume(1);
}
