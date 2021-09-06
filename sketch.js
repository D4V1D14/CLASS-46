var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allplayers;
var database;

var form, player, game;

var cars, CAR1, CAR2, CAR3
var track,CAR1image, CAR2image, CAR3image
function preload(){
  track=loadImage("racetrack2.jpg")
  CAR1image=loadImage("CAR1.png")
  CAR2image=loadImage("CAR2.png")
  CAR3image=loadImage("CAR3.png")
}
function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game=new Game()
  game.getState()
  game.start()
  
}


function draw(){
  if(playerCount===3){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
}
