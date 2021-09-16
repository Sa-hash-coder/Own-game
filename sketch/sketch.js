var eren,eren1
var bgImg
var erenImg;
var bg;
var invisibleGround;
var gamestate=0;
var bannerImg;
var start;
var startImg;
var erenMove
var mons1Move,monsterGroup;

function preload(){
 bannerImg=loadImage("images/banner img.jpg");
 bgImg=loadImage("images/bg 2.png")
 erenImg=loadAnimation("images/eren/erenStand.png");
 erenMove=loadAnimation("images/eren/eren running 2.png","images/eren/eren running.png");
 startImg=loadImage("images/start.png")
 mons1Move=loadAnimation("images/mons 2/mons 2 running 1.png");
}
function setup(){
    createCanvas(1000,600);
    
   if(gamestate===0){
    bg=createSprite(500,300)
    bg.addImage("bg",bgImg);
    
    bg.visible=false;
    eren=createSprite(120,500);
    eren1=createSprite(120,500);
    eren1.visible=false;
    eren.visible=false;
    eren.addAnimation("eren Stand",erenImg);
    eren1.addAnimation("eren move",erenMove);

    eren1.scale=1.3;

    invisibleGround=createSprite(500,550,1000,10)
    invisibleGround.visible=false;
  
    start=createSprite(600,600)
    start.addImage("start",startImg);
   }
   monsterGroup=new Group();
}
function draw(){
    if (gamestate===0){
        background(bannerImg);
       if(mousePressedOver(start)){
           gamestate=1;
       }
        
    }
    if (gamestate===1){
    
    bg.visible=true;
    eren.visible=true;
    start.visible=false;
    move();
    eren.collide(invisibleGround);
   
  
}

if(gamestate===2){
    eren.visible=false;
    eren1.visible=true;
    eren1.changeAnimation("eren move",erenMove)
    bg.velocityX=-4;
    monster1();
    if(bg.x<=370){
        bg.x=500;
    }
    jump();
    move();
    frameRate(10);
    eren1.collide(invisibleGround);
    if(eren1.isTouching(monsterGroup)){
        eren1.destroy();
    }
}
console.log(eren1.y);
drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY)
}


function jump(){
   
    if(keyDown("UP_ARROW") && eren1.y>400){
        eren1.velocityY=-6;
    }
    eren1.velocityY=eren1.velocityY+0.8;
}

function move(){
    if(keyDown("RIGHT_ARROW")){
        gamestate=2;
    }
}

function monster1(){
    if(frameCount%60===0){
    monster=createSprite(1000,500);
    monster.velocityX=-4;
    monster.addAnimation("monster",mons1Move);
    monster.scale=1.9
   // monster.changeAnimation("monster",mons1Move);
     monsterGroup.lifetime=250;
     monsterGroup.add(monster);
    }
}
//modify collider for mons
//score acc frame
//lives
