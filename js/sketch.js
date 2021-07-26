var gameState=0;
var game;
var astroJet,astroJetIMG;
var meteor,meteorIMG,meteorGroup;
var alien,ufo,boss,fireBall,fireBallIMG,fireBall2IMG;
var alienGroup,ufoGroup,fireBallGroup2,fireBall2;
var alienIMG,ufoIMG,bossIMG;
var bg,bg2,backgroundIMG,backgroundIMG2,earthIMG;
var out,outIMG,earth;
var missile,missileIMG,missileGroup;
var trident,tridentIMG,tridentGroup;
var startButton,startButtonIMG;
var title,titleIMG,info,infoIMG;
var laser1,laser1IMG,laser1Group;
var laser2,laser2IMG,laser2Group;
var laser3,laser3IMG,laser3Group;
var laser4,laser4IMG,laser4Group;
var laser5,laser5IMG,laser5Group;
var boost, boostIMG, boostGroup;
var lives = 3;
var score = 0;
var bossHealth = 20;
var endIMG,end, opening;
var restart,restartIMG;
var ShootSound,DieSound,WinSound,BoostSound,ThemeSound;

function preload(){
  backgroundIMG = loadImage("images/wallpaper.jpg");
  backgroundIMG2 = loadImage("images/space.gif");
  alienIMG = loadImage("images/ultron.png");
  astroJetIMG = loadImage("images/ironman1.png");
  ufoIMG = loadImage("images/Qship.png");
  startButtonIMG = loadImage("images/button.png");
  fireBallIMG = loadImage("images/fireBall.png");
  bossIMG = loadImage("images/boss1.png");
  meteorIMG = loadImage("images/meteor2.png");
  boostIMG = loadImage("images/boost.png");
  titleIMG = loadImage("images/title.png");
  infoIMG = loadImage("images/info.png");
  missileIMG = loadImage("images/missile.png");
  laserIMG = loadImage("images/laser.png");
  laser1IMG = loadImage("images/laser1.png");
  tridentIMG = loadImage("images/trident.png");
  earthIMG = loadImage("images/earth.jpg");
  restartIMG = loadImage("images/retry.png");

  ShootSound = loadSound("audio/shooting.mp3");
  DieSound = loadSound("audio/die.mp3");
  BoostSound = loadSound("audio/boost.mp3");
  WinSound = loadSound("audio/win.mp3");
  ThemeSound = loadSound("audio/theme.mp3");
  
}

function setup() {
  createCanvas(400,625);
  game = new Game();
  game.start();
  game.setLevel1();

  //Groups
  fireBallGroup=createGroup();
  alienGroup=createGroup();
  meteorGroup=createGroup();
  ufoGroup=createGroup();
  boostGroup=createGroup();

  missileGroup=createGroup();
  laser1Group=createGroup();
  laser2Group=createGroup();
  laser3Group=createGroup();
  laser4Group=createGroup();
  laser5Group=createGroup();
  tridentGroup=createGroup();

  restart = createSprite(200,375,50,50);
  restart.addImage(restartIMG);
  restart.visible = false;
  restart.scale = 0.4;

  ThemeSound.loop();
  ThemeSound.setVolume(0.1);

  
}

function draw() {
  background(0);
  drawSprites();

  astroJet.x = mouseX;
 
  fill("gold");
  textSize(18);
  text("Score : "+score,10,25);
  text("Lives : "+ lives,325,25);

  textSize(15);
  text("--------------------------------------------------------------------------------------",1,70);       
    
  if(gameState === 0){
    
      textSize(15);
      text("PLAY",182,250);  
      textSize(15);

      text("--------------------------------------------------------------------------------------",1,120);  
      strokeWeight(4);
      stroke("red"); 
      fill("white")
      textSize(15);
      text(" PRESS INFO",10,430);
      strokeWeight(4);
      stroke("cyan");
      fill("Black")
      textSize(15);
      text("Made with love.", 0, 370);
      textSize(15);
      text("By Anik.", 0, 390);

    if(mousePressedOver(startButton)){
      gameState = 1;
      bg.visible=false;
      startButton.visible = false;
    }

    if(mousePressedOver(info)){
      stroke("blue");
      fill("white")
      textSize(15);
      text(" Instructions :- \n1. Use mouse To move iron man \n 2. Use Space to launch Weapons\n3. Destroy aliens to proceed further\n Leval gets Harder Leval-Wise  ",100,460);
      strokeWeight(1);
      stroke("gold");
      fill("red");
      textSize(13);
      text("Note:This game is a story based on 'END GAME'.", 100, 445);
    }
  }

  if(gameState === 1){
    game.playLevel1();
  }
  if(gameState === 2){
    game.playLevel2();
  }
  if(gameState === 3){
    game.playLevel3();
  }

  if(lives === 0){
    textSize(25);
    text("Game Ended",125,300);
    restart.visible = true ;
    if(mousePressedOver(restart)){
      location.reload();
    }
    gameState = 5;

  }

  if(gameState === 4){
   
    game.end();

  }

  
        
}

 
  


