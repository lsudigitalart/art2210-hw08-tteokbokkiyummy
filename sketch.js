let generateCreature = false;
let creatureW = 0;
let creatureH = 0;
let creatureM = 50;
let eyeSize = 20;
let browSlant = 0;
let mouthSlant = 0;
let eyeImg;

function preload(){
  eyeImg = loadImage("eye.png");
}


function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(220);
  translate(width/2, height/2);

  if(generateCreature){
    creatureBuilder(creatureW, creatureH, creatureM);
  }

}

function creatureBuilder(creatureWidth, creatureHeight, creatureMouth) {
  
  // BODY
  fill(255)
  ellipse(0, 0, creatureWidth, creatureHeight);

  // EYES
  fill(0)
  image(eyeImg, -creatureWidth / 8 - eyeSize / 2, -creatureHeight / 4 - eyeSize / 2, eyeSize, eyeSize);
  image(eyeImg, creatureWidth / 8 - eyeSize / 2, -creatureHeight / 4 - eyeSize / 2, eyeSize, eyeSize);

  // MOUTH
  let mouthY = creatureHeight / 6;
  let mouthWidth = creatureHeight / 8;

  stroke(0);
  strokeWeight(3);
  line(0, mouthY, -mouthWidth + mouthSlant, mouthY + 10);
  line(0, mouthY, mouthWidth - mouthSlant, mouthY + 10);
  noStroke();


  //cheeks
  noStroke;
  fill (250,185,178);
  circle(-creatureWidth/3, -creatureHeight/8,30);
  circle (creatureWidth/3, -creatureHeight/8,30);

  //eyebrow
  stroke(0);
  strokeWeight(3);
  line(-creatureWidth / 8 - browSlant, -creatureHeight / 3, -creatureWidth / 8 + browSlant, -creatureHeight / 3 - 10);
  line(creatureWidth / 8 + browSlant, -creatureHeight / 3, creatureWidth / 8 - browSlant, -creatureHeight / 3 - 10);
  noStroke();


}

function mousePressed() {
  generateCreature = true;
  
  if(mouseX > width/2) {
    creatureM = random(25, 50);

  }
  if(mouseX < width/2) {
    creatureM = random(0, 25);
  }

  creatureW = 250

  if(mouseY < height/2) {
    creatureH = random(250, 500)
  }

  if(mouseY > height/2) {
    creatureH = random(50, 250)
  }

  eyeSize = random(30,120);
  browSlant = random(-10,10);
  mouthSlant = random(-20,20);

}