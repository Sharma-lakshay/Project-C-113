function preload(){

}

function setup(){
canvas= createCanvas(640, 480);
canvas.position(110, 250);
video= createCapture(VIDEO);
video.hide();
}

function draw(){
image(video, 0, 0, 640, 480);


fill(0, 128, 0, green);
stroke(0, 128, 0, green);
rect(90, 40, 460, 20);

fill(0, 128, 0, green);
stroke(0, 128, 0, green);
rect(550, 40, 20, 400);

fill(0, 128, 0, green);
stroke(0, 128, 0, green);
rect(90, 40, 20, 400);

fill(0, 128, 0, green);
stroke(0, 128, 0, green);
rect(90, 430, 480, 20);

fill(255, 0, 0, red);
stroke(255, 0, 0, red);
circle(100, 50, 80, red);

fill(255, 0, 0, red);
stroke(255, 0, 0, red);
circle(550, 50, 80, red);

fill(255, 0, 0, red);
stroke(255, 0, 0, red);
circle(550, 430, 80, red);

fill(255, 0, 0, red);
stroke(255, 0, 0, red);
circle(100, 430, 80, red);

}

function take_snapshot(){
save("student_name.png");
}