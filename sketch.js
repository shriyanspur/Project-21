var gun1, gun1Img;
var gun2, gun2Img;
var gun3, gun3Img;
var gun4, gun4Img;

var b1, b1Img;
var b1Speed;
var b1Weight;

var b2, b2Img;
var b2Speed;
var b2Weight;

var b3, b3Img;
var b3Speed;
var b3Weight;

var b4, b4Img;
var b4Speed;
var b4Weight;

var wall1, wall1Img, wall1Thick;
var wall2, wall2Img, wall2Thick;
var wall3, wall3Img, wall3Thick;
var wall4, wall4Img, wall4Thick;

var line, lineImg;

var b1Damage, b2Damage, b3Damage, b4Damage;

var hitLine;


function preload() {
  gun1Img = loadImage("Gun1.png");
  gun2Img = loadImage("Gun2.png");
  gun3Img = loadImage("Gun3.png");
  gun4Img = loadImage("Gun4.png");

  b1Img = loadImage("Bullet1.png");
  b2Img = loadImage("Bullet2.png");
  b3Img = loadImage("Bullet3.png");
  b4Img = loadImage("Bullet4.png");

  wall1Img = loadImage("wall.jpg");
  wall2Img = loadImage("wall.jpg");
  wall3Img = loadImage("wall.jpg");
  wall4Img = loadImage("wall.jpg");
  
  lineImg = loadImage("line.jpg");

}


function setup() {
  createCanvas(1300, 400);

  gun1 = createSprite(110,50); 
  gun1.addImage("gun", gun1Img);
  gun1.scale = 0.19;

  gun2 = createSprite(100,150); 
  gun2.addImage("gun2", gun2Img);
  gun2.scale = 0.19;

  gun3 = createSprite(100,250); 
  gun3.addImage("gun3", gun3Img);
  gun3.scale = 0.32;

  gun4 = createSprite(100,350); 
  gun4.addImage("gun4", gun4Img);
  gun4.scale = 0.25;


  b2 = createSprite(360,50);
  b2.addImage("bullet2", b2Img);
  b2.scale = 0.07;
  b2.velocityX = random(20,30);
  b2Speed = b2.velocityX*10;
  b2Weight = random(30,50);

  b4 = createSprite(160,150);
  b4.addImage("bullet4", b4Img);
  b4.scale = 0.13;
  b4.velocityX = random(20,30);
  b4Speed = b4.velocityX*10;
  b4Weight = random(30,50);

  b3 = createSprite(160,250);
  b3.addImage("bullet3", b3Img);
  b3.scale = 0.07;
  b3.velocityX = random(20,30);
  b3Speed = b3.velocityX*10;
  b3Weight = random(30,50);

  b1 = createSprite(160,350);
  b1.addImage("bullet1", b1Img);
  b1.scale = 0.04;
  b1.velocityX = random(20,30);
  b1Speed = b1.velocityX*10;
  b1Weight = random(30,50);


  wall1 = createSprite(1257,50);
  wall1.addImage("wall1", wall1Img);
  wall1.scale = 1.44;

  wall2 = createSprite(1257,150);
  wall2.addImage("wall2", wall2Img);
  wall2.scale = 1.44;

  wall3 = createSprite(1257,250);
  wall3.addImage("wall3", wall3Img);
  wall3.scale = 1.44;

  wall4 = createSprite(1257,350);
  wall4.addImage("wall4", wall4Img);
  wall4.scale = 1.44;


  wall1Thick = random(20,80);
  wall2Thick = random(20,80);
  wall3Thick = random(20,80);
  wall4Thick = random(20,80);


  hitLine = createSprite(1227,200,10,400);
  hitLine.visible = false;

}


function draw() {
  background(250, 215, 160);


  b1Damage = round(0.5*b1Weight*b1Speed*b1Speed / (wall1Thick*wall1Thick*wall1Thick));
  b2Damage = round(0.5*b2Weight*b2Speed*b2Speed / (wall2Thick*wall2Thick*wall2Thick));
  b3Damage = round(0.5*b3Weight*b3Speed*b3Speed / (wall3Thick*wall3Thick*wall3Thick));
  b4Damage = round(0.5*b4Weight*b4Speed*b4Speed / (wall4Thick*wall4Thick*wall4Thick));


  gun1.depth = b1.depth;
  gun1.depth = gun1.depth + 1;

  gun2.depth = b2.depth;
  gun2.depth = gun2.depth + 2;

  gun3.depth = b3.depth;
  gun3.depth = gun3.depth + 1;

  gun4.depth = b4.depth;
  gun4.depth = gun4.depth + 3; 


  drawSprites();


  if (b2.isTouching(hitLine)) {
    b2.velocityX = 0;
    b2.visible = false;
    
    if (b2Damage > 10) {
      fill("red");
      textFont("Stencil");
      textSize(20);
      text("Not Effective Against Bullet", 440,40);
      text("Damage :", 510,60);
      text(b2Damage, 605, 60);
    }

    if (b2Damage === 10 || b2Damage < 10) {
      fill("green");
      textFont("Stencil");
      textSize(20);
      text("Effective Against Bullet", 440,40);
      text("Damage :", 510,60);
      text(b2Damage, 605, 60);
    }

  }

  if (b4.isTouching(hitLine)) {
    b4.velocityX = 0;
    b4.visible = false;

    if (b4Damage > 10) {
      fill("red");
      textFont("Stencil");
      textSize(20);
      text("Not Effective Against Bullet", 440,140);
      text("Damage :", 510,160);
      text(b4Damage, 605, 160);
    }

    if (b4Damage === 10 || b4Damage < 10) {
      fill("green");
      textFont("Stencil");
      textSize(20);
      text("Effective Against Bullet", 440,140);
      text("Damage :", 510,160);
      text(b4Damage, 605, 160);
    }

  }

  if (b3.isTouching(hitLine)) {
    b3.velocityX = 0;
    b3.visible = false;

    if (b3Damage > 10) {
      fill("red");
      textFont("Stencil");
      textSize(20);
      text("Not Effective Against Bullet", 440, 240);
      text("Damage :", 510, 260);
      text(b3Damage, 605, 260);
    }

    if (b3Damage === 10 || b3Damage < 10) {
      fill("green");
      textFont("Stencil");
      textSize(20);
      text("Effective Against Bullet", 440, 240);
      text("Damage :", 510, 260);
      text(b3Damage, 605, 260);
    }

  }

  if (b1.isTouching(hitLine)) {
    b1.velocityX = 0;
    b1.visible = false;

    if (b1Damage > 10) {
      fill("red");
      textFont("Stencil");
      textSize(20);
      text("Not Effective Against Bullet", 440, 340);
      text("Damage :", 510, 360);
      text(b1Damage, 605, 360);
    }

    if (b1Damage === 10) {
      fill("green");
      textFont("Stencil");
      textSize(20);
      text("Effective Against Bullet", 440, 340);
      text("Damage :", 510, 360);
      text(b1Damage, 605, 360);
    }

    if (b1Damage < 10) {
      fill("green");
      textFont("Stencil");
      textSize(20);
      text("Effective Against Bullet", 440, 340);
      text("Damage :", 510, 360);
      text(b1Damage, 605, 360);
    }

  }























}