function preload() {

}

function setup() {
    canvas= createCanvas(900,900);
    video=createCapture(VIDEO);
    video.size(380,380);
    
}

function draw() {
    rect(300,18,500,30);
    rect(285,18,30,280);
    rect(300,287,500,30);
    rect(785,18,30,280);
    circle(300,30,50);
    circle(800,30,50);
    circle(300,300,50);
    circle(800,300,50);    
}