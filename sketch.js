//Create variables here
var dog,happyDog,dogImg,database, foodS, foodStock;
function preload(){
  //load images here
  dogImg = loadImage("Dog.png");
  happyDog = loadImage("happydog.png");
}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  dog = createSprite(200,200,10,10);
  dog.addImage(dogImg);
  foodStock = database.ref('Food');
  foodStock.on("value",readStock);
}
function draw() { 
  background(46,139,87) 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog)
  }
  drawSprites();
  fill("blue");
  textSize(20);
  text("foodStock:"+foodS,200,100);


  //add styles here
}
function readStock(data) {
  foodS = data.val();
}
function writeStock(x) {
  if(x<=0){
    x = 0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  });
}


