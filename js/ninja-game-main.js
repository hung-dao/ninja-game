var canvas ;
var context ;
var first_time_started = false ;

var current_screen ;
var current_screen ;
var played_once = false ;
var startGame = false;
var ratio_x = 1;
var ratio_y = 1;
var full_screen_button ;

var score;
var name;
var player_ninja ;
var health_text;
var score_text;

var kunai_interval ;
var katana_interval ;
var health_interval ;

var player_run ;
var player_jump ;
var player_fall ;
var player_hit ;
var player_dead ;

var shurikens = [] ;
var kunai ;
var katana ;

var shuriken_sprite ;
var katana_sprite ;
var kunai_sprite ;

var coins = [] ;
var hp_point ;

var coin_rotate ;
var heart ;

var INITIAL_Y = (7/8) * 600 + 40 ;
var GRAVITY = .3 ;
var FLAP = -7;

var hit_enemy ;
var health_audio ;
var coin_audio ;
var background_sound ;
var died_sound ;

function preload()
{	
   menu_background = loadImage("assets/ninja.gif") ;
	
	game_background = loadImage('assets/background.png');
	
	player_run = loadAnimation('assets/sprites/running/01.png', 'assets/sprites/running/02.png',
									   'assets/sprites/running/03.png', 'assets/sprites/running/04.png',
									   'assets/sprites/running/05.png', 'assets/sprites/running/06.png') ;
	
	player_jump = loadAnimation('assets/sprites/jumpfall/jump.png') ;
	player_fall = loadAnimation('assets/sprites/jumpfall/fall.png') ;
	player_hit  = loadAnimation('assets/sprites/jumpfall/hit.png') ;
	player_dead = loadAnimation('assets/sprites/jumpfall/dead.png')
	
	shuriken_sprite = loadAnimation('assets/sprites/enemies/shuriken1.png');
	katana_sprite   = loadAnimation('assets/sprites/enemies/katana.png') ;
	kunai_sprite    = loadAnimation('assets/sprites/enemies/kunai.png') ;
	
	
	heart = loadAnimation('assets/sprites/pickups/heart.png') ;
	coin_rotate = loadAnimation('assets/sprites/pickups/coin1.png', 'assets/sprites/pickups/coin2.png',
										 'assets/sprites/pickups/coin3.png', 'assets/sprites/pickups/coin4.png',
										 'assets/sprites/pickups/coin5.png', 'assets/sprites/pickups/coin6.png',
										 'assets/sprites/pickups/coin7.png', 'assets/sprites/pickups/coin8.png',
										 'assets/sprites/pickups/coin9.png', 'assets/sprites/pickups/coin10.png',
										 'assets/sprites/pickups/coin11.png', 'assets/sprites/pickups/coin12.png') ;
	
	hit_enemy = loadSound('sounds/01.ogg');
	health_audio = loadSound('sounds/06.ogg') ;
	coin_audio = loadSound('sounds/07.ogg');
	background_sound = loadSound('sounds/HeroImmortal.mp3');
}

function setup()
{
	canvas = createCanvas(800, 600);
	
	canvas.id('game_canvas');
	canvas.parent('canvas-holder');
	
	//full_screen_button = createButton('fullscreen');
	//full_screen_button.parent('canvas-holder');
	//full_screen_button.position(10,20);
	//full_screen_button.mousePressed(go_fullscreen);
	
	background_x = 0;
	background_sound.setVolume(0.2);
	background_sound.loop();
}

function draw()
{
	if (!first_time_started)
	{
		background(0);
		textAlign(CENTER);
		textSize(50);
		fill(255);
		text( "CLICK TO START", 400, 300);
	}
	else if (startGame == false && first_time_started == true)
	{
		showStartScreen();
  	}
	else
	{
		showGameScreen();
	}
}

function initialize_game()
{
	if (played_once)
	{
		for (var i = 0; i < shurikens.length; i ++)
		{
			shurikens.splice(i,1) ;
		}
		
		for (var i = 0; i < coins.length; i ++)
		{
			coins.splice(i, 1);
		}
		
		kunai = null;
		katana = null ;
		hp_point = null ;
		
		clearInterval(kunai_interval);
		clearInterval(katana_interval);
		clearInterval(health_interval);
	}
	player_ninja = new Ninja() ;

	for (var i = 0; i < 8; i ++)
	{
		shurikens.push(new Shuriken()) ;
	}
	
	for (var i = 0; i < 4; i ++)
	{
		coins.push(new Coin());
	}
	
	kunai_interval  = setInterval(kunai_creation, 10000) ;
	katana_interval = setInterval(katana_creation, 5000) ;
	health_interval = setInterval(health_creation, 10000) ;
}

function showStartScreen() 
{
	background(menu_background);
	noStroke();
	fill(0);
	
	textAlign(CENTER);
	textSize(50);
	
	if (played_once == false)
	{
		showMenu();
		text( "PRESS ANY KEY TO PLAY", 400, 550);
	}
	else
	{
		text( "YOU DIED! \n PRESS ANY KEY TO RESTART", 400, 550);	
	}
	
	if (keyIsPressed)
	{
		initialize_game() ;
		startGame = true;
	}
}

function showMenu()
{
	background(0);
	strokeWeight(4);
	stroke(120);
	fill(255);
	var start_button = rect(width/2 - 400/2, height/6 - 60/2, 400, 60, 10);
	var change_level_button = rect(width/2 - 400/2, height/3 - 60/2, 400, 60, 10);
}

function showGameScreen()
{
	background(game_background) ;
	
	image(game_background, background_x, 0);
	background_x -= 1;
	image(game_background, background_x+game_background.width, 0)
	if(background_x == -(game_background.width))
	{
		background_x = 0;
	}
	
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
		background_sound.stop();
		if (player_ninja.y >= 650)
		{
			score = Math.floor(player_ninja.score);
			name = prompt("Game over. Your score is " + score + ". Please enter your name: ", "");
		   
			var xmlhttp = new XMLHttpRequest();
			
			xmlhttp.open("GET", "./php/test.php?name=" + name + "&score=" + score, true);
			xmlhttp.send();
		   
			played_once = true;
			startGame = false ;
		}
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
		
		if (coins.length <= 4)
		{
			coins.push(new Coin()) ;
		}
	}
}

function kunai_creation()
{
	kunai = new Kunai() ;
}

function katana_creation()
{
	katana = new Katana() ;
}

function health_creation()
{
	hp_point = new Health() ;
}

function mousePressed()
{
	if ( mouseX > 0 && mouseX < 800 
		&& mouseY < 600 && mouseY > 0)
	{
		first_time_started = true;		
	}
}