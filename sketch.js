//Create variables here
var dog,doghappy
var foodS,foodStock
var database

function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png")
  dogImg2 = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(500,500);
  database = firebase.database();
  dog = createSprite(250,250,50,50)
  dog.addImage(dogImg)
  dog.scale=(0.3)
 

  
  foodStock=database.ref('Food');
   foodStock.on("value",readStock )
  
}


function draw() {  
  background(46,139,87)
imageMode(CENTER)
  drawSprites();
  //add styles here
  
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS)
    dog.addImage(dogImg2)
  }
  

}
function readStock(data){
foodS = data.val()
}
function writeStock(x){
  if(x<0){
    x = 0
  }else{
    x=x-1
  }
  database.ref('/').update({
Food:x
  })
}
function keyPressed(){

}



