// OBTAIN THE GAME ENGINE VARAIBLES
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var game;
var intro;
var player, player_animation;
var bullet;
var enemy_1, enemy_2;
var obstacle_1, obstacle_2;
var powerup_1, powerup_2;

var background_value;
var background_image_one, background_image_two, background_image_three, background_image_four;
var gameState = 0;
var score = 0;


// Preload function to declare all the assets before rendering.
function preload() {
    loadBackgroundSpritesOne();
    loadBackgroundSpritesTwo();
    loadBackgroundSpritesThree();
    loadBackgroundSpritesFour();
    loadPlayerSprites();
    loadEnemySprites();
    loadObstacleSprites();
    loadPowerUpSprites();
}

function setup() {
    // create a base canvas
    createCanvas(1200,450);
    
    // create an instance of the game object.
    game = new Game();
    gameState = game.getState();
    console.log(gameState);
    game.start();

}

function draw() {

    background(255);
    gameState = game.getState();

    if(gameState === 1) {
    }

    if (gameState === 2) {
        game.play();
    }

    if (gameState === 3) {
    }

    if (gameState === 4) {
    }

}




/*
    ----- HELPER FUNCTIONS -----
*/

function loadPlayerSprites() {
    player_animation = loadAnimation("sprite/ss.png","sprite/nn.png","sprite/vv.png" ,"sprite/ff.png","sprite/hh.png","sprite/vv.png" );
    bullet = loadImage("sprite/bullet.png");
}

function loadBackgroundSpritesOne() {
    background_image_one = loadImage("sprite/BG.png");
}

function loadBackgroundSpritesTwo() {
    background_image_two = loadImage("sprite/BG2.png");
}

function loadBackgroundSpritesThree() {
    background_image_three = loadImage("sprite/BG3.png");
}

function loadBackgroundSpritesFour() {
    background_image_four = loadImage("sprite/BG4.png");
}

function loadEnemySprites() {
    enemy_1_animation = loadAnimation("sprite/a1.png","sprite/a2.png","sprite/a3.png","sprite/a4.png");
    enemy_2_animation = loadAnimation("sprite/enemy3a.png","sprite/enemy3b.png","sprite/enemy3c.png","sprite/enemy3d.png","sprite/enemy3e.png","sprite/enemy3f.png","sprite/enemy3g.png","sprite/enemy3h.png");
}

function loadObstacleSprites() {
    obstacle_1_animation = loadImage("sprite/bomb.png");
    obstacle_1_explode_animation = loadAnimation("sprite/b1.png","sprite/b2.png","sprite/b3.png","sprite/b4.png","sprite/b5.png","sprite/b6.png","sprite/b7.png","sprite/b8.png","sprite/b9.png","sprite/b10.png","sprite/b11.png","sprite/bb11.png");
}

function loadPowerUpSprites() {
    powerup_1_image = loadImage("sprite/bank.png");
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}