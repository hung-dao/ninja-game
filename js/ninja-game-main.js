var health_text;
var score_text;
var player_ninja ;
var ninja_image ;
var startGame = false;

var shurikens = [] ;
var kunai ;
var katana ;

var coins = [] ;
var hp_point ;

var INITIAL_Y = (7/8) * 600 + 40 ;
var GRAVITY = 1.1 ;

function setup()
{
	//The following line is for loading image
	bg = loadImage("assets/ninja.gif") ;
	var canvas = createCanvas(800, 600);
	canvas.parent('canvas-holder');
	player_ninja = new Ninja() ;

	for (var i = 0; i < 8; i ++)
	{
		shurikens.push(new Shuriken()) ;
	}
	
	for (var i = 0; i < 4; i ++)
	{
		coins.push(new Coin());
	}
	
	setInterval(kunai_creation, 10000) ;
	setInterval(katana_creation, 20000) ;
	setInterval(health_creation, 10000) ;
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
	player_ninja.move() ;
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
	
	if (hp_point != null)
	{
		hp_point.move();
		hp_point.show();
		if (hp_point.crash(player_ninja))
		{
			hp_point = null ;
		}
		else if (hp_point.x < 0)
		{
			hp_point = null ;
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
		else if (shurikens[i].x < 0)
		{
			shurikens.splice(i, 1) ;
			shurikens.push(new Shuriken()) ;
		}
		if (shurikens.length <= 8)
		{
			shurikens.push(new Shuriken()) ;
		}
	}	
	
	for (var i = 0; i < coins.length; i ++)
	{
		coins[i].move() ;
		coins[i].show() ;
		//score_text.html("Score: " + Math.floor(player_ninja.score));
		if (coins[i].crash(player_ninja))
		{
			coins.splice( i, 1 ) ;
		}
		else if (coins[i].x < 0)
		{
			coins.splice(i, 1) ;
			coins.push(new Coin()) ;
		}
		
		if (coins.length <= 8)
		{
			coins.push(new Coin()) ;
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

function health_creation()
{
	hp_point = new Health() ;
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
