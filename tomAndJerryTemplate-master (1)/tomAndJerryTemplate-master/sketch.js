var bg 
var cat
var mouse
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    c1=loadAnimation("images/cat1.png")
    m1=loadAnimation("images/mouse1.png")
    c2=loadAnimation("images/cat2.png","images/cat3.png")
    m2=loadAnimation("images/mouse2.png","images/mouse3.png")
    c3=loadAnimation("images/cat4.png")
    m3=loadAnimation("images/mouse4.png")
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
cat=createSprite(800,600)
mouse=createSprite(200,600)
cat.addAnimation("stand",c1)
mouse.addAnimation("sleep",m1)
cat.addAnimation("walk",c2)
mouse.addAnimation("rest",m2)
cat.addAnimation("covid",c3)
mouse.addAnimation("vaccine",m3)
cat.scale=0.2
mouse.scale=0.2
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2)
{
    mouse.changeAnimation("vaccine")
    cat.changeAnimation("covid")
}
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode===LEFT_ARROW){
    cat.velocityX=-4
    mouse.changeAnimation("rest")
    cat.changeAnimation("walk")
}

}
