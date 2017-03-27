var player_ninja ;

//288, 256
var player_sprite_sheet ;
var player_run ;
var player_stand ;
var player_sprite ;

var player_frames = [
  {"name":"player_walk01", "frame":{"x":0, "y": 128, "width": 32, "height": 64}},
  {"name":"player_walk02", "frame":{"x":32, "y": 128, "width": 32, "height": 64}},
  {"name":"player_walk03", "frame":{"x":64, "y": 128, "width": 32, "height": 64}},
  {"name":"player_walk04", "frame":{"x":96, "y": 128, "width": 32, "height": 64}},
  {"name":"player_walk05", "frame":{"x":128, "y": 128, "width": 32, "height": 64}},
  {"name":"player_walk06", "frame":{"x":160, "y": 128, "width": 32, "height": 64}},
  {"name":"player_walk07", "frame":{"x":192, "y": 128, "width": 32, "height": 64}},
  {"name":"player_walk08", "frame":{"x":224, "y": 128, "width": 32, "height": 64}},
  {"name":"player_walk09", "frame":{"x":256, "y": 128, "width": 32, "height": 64}}
];

function preload()
{
	player_sprite_sheet = loadSpriteSheet('sprites/running_man_sprite.png'), player_frames ;
	
	player_run = loadAnimation(player_sprite_sheet) ;
	player_stand = loadAnimation( new SpriteSheet('sprites/running_man_sprite.png', [{"name":"player_stand", "frame":{"x":0, "y":0, "width": 32, "height": 64}}])) ;
}



var INITIAL_Y = (7/8) * 600 ;

var GRAVITY = 1.5 ;

function setup() 
{
	createCanvas(800, 600);
	player_ninja = new Ninja() ;
}



function draw() 
{
	background(51) ;
	player_ninja.update() ;
	player_ninja.show() ;
}