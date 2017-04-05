var health_text;
var score_text;
var player_ninja ;
var coins = [] ;
var ninja_image ;
var startGame = false;

/*
var player_sprite_sheet ;
var player_frames = [
  {"name":"player_run01", "frame":{"x":0,   "y": 128, "width": 32, "height": 64}},
  {"name":"player_run02", "frame":{"x":32,  "y": 128, "width": 32, "height": 64}},
  {"name":"player_run03", "frame":{"x":64,  "y": 128, "width": 32, "height": 64}},
  {"name":"player_run04", "frame":{"x":96,  "y": 128, "width": 32, "height": 64}},
  {"name":"player_run05", "frame":{"x":128, "y": 128, "width": 32, "height": 64}},
  {"name":"player_run06", "frame":{"x":160, "y": 128, "width": 32, "height": 64}},
  {"name":"player_run07", "frame":{"x":192, "y": 128, "width": 32, "height": 64}},
  {"name":"player_run08", "frame":{"x":224, "y": 128, "width": 32, "height": 64}},
  {"name":"player_run09", "frame":{"x":256, "y": 128, "width": 32, "height": 64}}
];
*/

var shurikens = [] ;
var kunai ;
var katana ;

var INITIAL_Y = (7/8) * 600 + 40 ;
var GRAVITY = 1.1 ;

function setup()
{
	//The following line is for loading image
	bg = loadImage("assets/ninja.gif") ;
	var canvas = createCanvas(800, 600);
	canvas.parent('canvas-holder');
	player_ninja = new Ninja() ;
	/*
	player_ninja.sprite = createSprite(player_ninja.x, player_ninja.y, player_ninja.width, player_ninja.height);
   player_ninja.sprite.addAnimation('run', player_ninja.player_run);
   player_ninja.sprite.addAnimation('stand', player_ninja.player_stand);
	*/
	for (var i = 0; i < 8; i ++)
	{
		shurikens.push(new Shuriken()) ;
	}

	setInterval(kunai_creation, 10000) ;
	setInterval(katana_creation, 20000) ;
}

function draw()
{

	if(startGame == false){
		showStartScreen();
  }
	else{
		showGameScreen();
	}
}



//Start Screen Codes
function showStartScreen () {
	background(bg);
	noStroke();
	fill(0);
	textAlign(CENTER);
	textSize(50);
	text("PRESS ANY KEY TO PLAY", 400, 550);
		if (keyIsPressed){
					startGame = true;
		}
}

//Game Screen Codes
function showGameScreen(){
	background(51) ;
	player_ninja.update() ;
	player_ninja.show() ;
	player_ninja.score += 0.1;
	health_text = "Health: " + player_ninja.health;
   textSize(14);
   text(health_text,17,34);
	score_text = "Score: " + Math.floor(player_ninja.score);
   textSize(14);
   text(score_text,17,17);

	if (kunai != null)
	{
		kunai.move();
		kunai.show();
		if (kunai.crash(player_ninja))
		{
			kunai = null ;
		}
		else if (kunai.x < 0)
		{
			kunai = null ;
		}
	}

	if (katana != null)
	{
		katana.move();
		katana.show();
		if (katana.crash(player_ninja))
		{
			katana = null ;
		}
		else if (katana.x < 0)
		{
			katana = null ;
		}
	}

	if (player_ninja.health <= 0) //if health is less than or equal to zero SHOW GAME OVER AND RESTART SCREEN
	{
		showRestartScreen();
	}

	for (var i = 0; i < shurikens.length; i ++)
	{
		shurikens[i].move() ;
		shurikens[i].show() ;
		//score_text.html("Score: " + Math.floor(player_ninja.score));
		if (shurikens[i].crash(player_ninja))
		{
			shurikens.splice( i, 1 ) ;
		}

		if (shurikens[i].x < 0)
		{
			shurikens.splice(i, 1) ;
			shurikens.push(new Shuriken()) ;
		}
		if (shurikens.length <= 8)
		{
			shurikens.push(new Shuriken()) ;
		}
	}
}

function kunai_creation()
{
	kunai = new Kunai() ;
	console.log("created kunai") ;
}

function katana_creation()
{
	katana = new Katana() ;
}
//Restart Screen Codes
function showRestartScreen(){
	background(bg);
	noStroke();
	fill(0);
	textAlign(CENTER);
	textSize(30);
	text("GAME OVER!! \n PRESS ENTER TO PLAY", 400, 550);
	//Stop looping after SHOW GAME OVER AND RESTART SCREEN
	noLoop() ;
}
//Look for ENTER to restart the game
function keyPressed() {
	if (keyCode === ENTER) {
		player_ninja.health = 100;
		player_ninja.score = 0 ;
		loop();
  }
}
