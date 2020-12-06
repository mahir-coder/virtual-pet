//Create variables here
var dog,doghappy
var foodS,foodStock
var database

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,50,50)
  dog.visible = false
  
  foodStock=database.ref('Food');
   foodStock.on("value",readStock )
  
}


function draw() {  
imageMode(CENTER)
  drawSprites();
  //add styles here
  image(dogImg,dog.x,dog.y,dog.width,dog.height)
  

}



