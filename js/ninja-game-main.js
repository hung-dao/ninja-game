var canvas ;
var context ;
var menu_position = 0;
var difficulty = 1;
var prompt_value1;
var animation_in_the_beginning;
var animation_run_x = 400;

var current_screen ;
var current_screen ;
var played_once = false ;
var level_is_chosen = false;
var ratio_x = 1;
var ratio_y = 1;
var full_screen_button ;
var Prompt ; 

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
var death_audio ;
var background_music_1 ;
var background_music_2 ;
var background_music_3 ;
var died_sound ;
var died_sound_2 ;
var menu_music ;
var game_background ;

var press_up;
var press_down;

var font;
function preload()
{	
   menu_background = loadImage("assets/ninja.gif") ;
	
	game_backgrounds = [loadImage('assets/parallax-forest.png'), loadImage('assets/country-platform.png'),
							  loadImage('assets/parallax-mountain.png'), loadImage('assets/parallax-industrial.png'),
							  loadImage('assets/parallax-space-backgound.png'), loadImage('assets/urban-landscape-background.png')];
	
	player_run = loadAnimation('assets/sprites/running/01.png', 'assets/sprites/running/02.png',
									   'assets/sprites/running/03.png', 'assets/sprites/running/04.png',
									   'assets/sprites/running/05.png', 'assets/sprites/running/06.png') ;	
	player_scared_run = loadAnimation('assets/sprites/scared-running/01.png', 'assets/sprites/scared-running/03.png');

	
	player_jump = loadAnimation('assets/sprites/jumpfall/jump.png') ;
	player_fall = loadAnimation('assets/sprites/jumpfall/fall.png') ;
	player_hit  = loadAnimation('assets/sprites/jumpfall/hit.png') ;
	player_dead = loadAnimation('assets/sprites/jumpfall/dead.png');
	player_stand = loadAnimation('assets/sprites/standing/1.png');
	player_scared = loadAnimation('assets/sprites/scared-running/scared.png');
	player_super_jump = loadAnimation('assets/sprites/jumpfall/superjump.png');
	
	shuriken_sprite = loadAnimation('assets/sprites/enemies/shuriken1.png');
	katana_sprite   = loadAnimation('assets/sprites/enemies/katana.png') ;
	kunai_sprite    = loadAnimation('assets/sprites/enemies/kunai.png') ;	
	
	heart = loadAnimation('assets/sprites/pickups/heart.png') ;
	coin_rotate = loadAnimation('assets/sprites/pickups/coin1.png','assets/sprites/pickups/coin12.png') ;
	
	hit_enemy = loadSound('sounds/01.ogg');
	health_audio = loadSound('sounds/06.ogg') ;
	coin_audio = loadSound('sounds/07.ogg');
	death_audio = loadSound('sounds/death_sound.ogg');
	death_audio.playMode('restart');

	press_up = loadSound('sounds/press_up.ogg');
	press_down = loadSound('sounds/press_down.ogg');
	
	background_music_1 = loadSound('sounds/game_music_1.ogg');
	background_music_2 = loadSound('sounds/game_music_2.ogg');
	background_music_3 = loadSound('sounds/game_music_3.ogg');
	menu_music = loadSound('sounds/EXCELSIOR.ogg');	
	
	my_font = loadFont('assets/fonts/8-bit pusab.ttf');
}

function setup()
{
	canvas = createCanvas(800, 600);
    
   canvas.id('game_canvas');
	canvas.parent('canvas-holder');
	
	background_x = 0;
	background_music_current = background_music_1 ;
	background_music_current.setVolume(0.2);
}

function draw()
{
	if (menu_position == 0)
	{
		background(0);
		animation_in_the_beginning = player_stand;
		animation(animation_in_the_beginning, 400, 500);
		textAlign(CENTER);
		textSize(50);
		fill(255);
		textFont(my_font);
		text( "CLICK TO START", 400, 300);
	}
	else if (menu_position != 2)
	{

		if (!menu_music.isPlaying())
		{
			menu_music.loop();
		}
		showMenu();
		
		if (animation_in_the_beginning != null)
		{
			console.log("A");
			animation_in_the_beginning = player_run;
			animation(animation_in_the_beginning, animation_run_x, 500);
			animation_run_x += 5;
			if (animation_run_x >= 820)
			{
				animation_in_the_beginning = null;
			}
		}
  	}
	else
	{
	
		menu_music.stop();
		showGameScreen();
	}
}

function initialize_game()
{
	if (level_is_chosen == false)
	{
		game_background = game_backgrounds[Math.floor(Math.random() * 5) + 1];
	}
	background_music_current.loop();
	died_sound_2 = death_audio ;
	
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
	
	if (difficulty == 1)
	{
		kunai_interval  = setInterval(kunai_creation, 10000 ) ;
		katana_interval = setInterval(katana_creation, 20000 ) ;
		health_interval = setInterval(health_creation, 10000) ;
	}
	else if (difficulty == 1.25)	
	{
		kunai_interval  = setInterval(kunai_creation, 10000 ) ;
		katana_interval = setInterval(katana_creation, 12000 ) ;
		health_interval = setInterval(health_creation, 15000) ;
	}
	else 
	{
		kunai_interval  = setInterval(kunai_creation, 5000 ) ;
		katana_interval = setInterval(katana_creation, 10000 ) ;
		health_interval = setInterval(health_creation, 20000) ;
	}
}

function showMenu()
{
	background(0);
	strokeWeight(4);
	stroke(120);
	textFont(my_font);
	textAlign(CENTER);
	fill(255);
	if (menu_position == 1)
	{
		var start_button = rect(width/2 - 400/2, height/3 - 60/2, 400, 60, 10);
		var change_level_button = rect(width/2 - 400/2, height/3 + 100 - 60/2, 400, 60, 10);
		var change_difficulty_button = rect(width/2 - 400/2, height/3 + 200 - 60/2, 400, 60, 10);
		
		fill(0);
		noStroke();
		textSize(22);
		text("Play", width/2 - 400/2 + 5, height/3 - 60/2 + 5, 400, 60);
		text("Change Difficulty", width/2 - 400/2, height/3 +100 - 60/2, 400, 60);
		text("Change Level", width/2 - 400/2, height/3 +200 - 60/2, 400, 60);

	}
	
	else if (menu_position == 3)
	{
		var difficulty_text ;
		if (difficulty == 1)
		{ 
			fill('green');
			animation(player_run, 400, 420);
			difficulty_text = "PIECE OF CAKE";
		}
		var easy_btn = rect(width/4 - 180/2, height/2 - 60/2, 180, 60, 10);
		fill(255);
		if (difficulty == 1.25)
		{
			fill('yellow');
			animation(player_scared_run, 400, 420);
			difficulty_text = "HURT ME PLENTY";
		}
		var medium_btn = rect(width/2 - 180/2, height/2 - 60/2, 180, 60, 10);
		fill(255);
		if (difficulty == 1.5)
		{
			fill('red');
			animation(player_scared, 400, 420);
			difficulty_text = "LAST SAMURAI...";
		}
		var hard_btn = rect(width*3/4 - 180/2, height/2 - 60/2, 180, 60, 10);
		fill(255);
		noStroke();
		var back_btn = rect(50,50,100,50,30);
		
		fill(0);
		textSize(24);		
		text("Easy", width/4 - 180/2, height/2 - 60/2, 180, 60);
		text("Medium", width/2 - 180/2, height/2 - 60/2, 180, 60);
		text("Hard", width*3/4 - 180/2, height/2 - 60/2, 180, 60);
		textSize(18);
		text("Back", 50,50,100,50);
		fill(255);
		text("Click to choose difficulty", 0, height/2 - 100, 800, 100);
		fill('green');
		text(difficulty_text, 0, height-100, 800, 150);
		
	}
	else if (menu_position == 4)
	{		
		
		var levels = [];
		var current_x = 42.5 ;
		var current_y = height/3 - 70;
		var chosen_level_number ;
		for (var i = 0; i < 6; i ++)
		{

			
			levels.push(rect(current_x , current_y, 210, 140 ));
			image(game_backgrounds[i], current_x, current_y, 210, 140);
			if (game_background == game_backgrounds[i])
			{
				chosen_level_number = i+1;
				fill(0,255,0,50);
				rect(current_x, current_y, 210, 140);
				fill(255);
			}
			
			current_x += 252.5 ;
			if ( levels.length == 3)
			{
				current_x = 42.5;
				current_y = height/2 ;
			}

		}
		noStroke();
		var back_btn = rect(50,50,100,50,30);
		
		fill(0);
		textSize(18);		
		text("Back", 50,50,100,50);
		textSize(24);
		fill(255);
		text("Press on image to select level", 0, height/2+170, 800, 200);
		if ( level_is_chosen == true)
		{
			fill(0,255,0, 95);
			text("Current Level is #" + chosen_level_number, 0, height/2+220, 800, 200);
		}
	}
	else if (menu_position == 5)
	{
		animation(player_super_jump, 400, height/2 - 150);
		noStroke();
		textSize(24);
		fill(255);
		var go_to_menu_btn = rect(50,50,100,50,10) ;
		textSize(50);
		text( "PRESS TO RESTART", 0, height/2, 800, 400);	
		fill(0);
		textSize(18);	
		text("Back", 50,50,100,50);
		fill(255,0,0,90);
		text("You died!!!", 0, height/2-90, 800, 90);
	
		if (keyIsPressed && Prompt.isLaunched == false)
		{
			menu_position = 2;
			initialize_game() ;
		}
	}
}



function showGameScreen()
{
	background(game_background) ;
	image(game_background, background_x, 0);
	background_x -= difficulty;
	image(game_background, background_x+game_background.width, 0)
	if(background_x <= -(game_background.width))
	{
		background_x = 0;
	}
	
	player_ninja.move() ;
	player_ninja.show() ;
	player_ninja.score += 0.1;
	
	textFont(my_font);
	
	health_text = "Health: " + player_ninja.health;
   textSize(12);
   text(health_text,17,38);
	
	score_text = "Score: " + Math.floor(player_ninja.score);
   textSize(14);
   text(score_text,17,19);

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
		else if (katana.x < -50)
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
		if (died_sound_2 != null)
		{
			died_sound_2.play();
			died_sound_2.onended( function() {died_sound_2 = null;});
		}
		background_music_current.stop();
		Prompt = new CustomPrompt();
      if (player_ninja.y >= 650)
		{
			score = Math.floor(player_ninja.score);
			
         Prompt.render('Type in your name:');
			
			menu_position = 5 ;
			played_once = true;
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
	if ( menu_position == 0 && mouseX > 0 && mouseX < canvas.width 
		&& mouseY < canvas.height && mouseY > 0)
	{
		
		menu_position = 1;
	}
	
	else if (menu_position == 1)
	{
		if ( mouseX > width/2 - 400/2 && mouseX < (width/2 - 400/2 + 400)
			&& mouseY > height/3 - 60/2 && mouseY < (height/3 -60/2 + 60))
		{
			menu_position = 2;
			initialize_game();
			press_up.play();
		}		
		else if ( mouseX > width/2 - 400/2 && mouseX < (width/2 - 400/2 + 400)
			&& mouseY > (height/3 - 60/2 + 100) && mouseY < (height/3 -60/2 + 60 + 100))
		{
			menu_position = 3;
			press_up.play();
		}		
		else if ( mouseX > width/2 - 400/2 && mouseX < (width/2 - 400/2 + 400)
			&& mouseY > (height/3 - 60/2 + 200) && mouseY < (height/3 -60/2 + 60 + 200))
		{	
			menu_position = 4;
			press_up.play();
		}
	}
	else if (menu_position == 3)
	{
		if ( mouseX > width/4 - 180/2 && mouseX < width/4 - 180/2 + 180
			&& mouseY > height/2 - 60/2 && mouseY < height/2 - 60/2 + 60)
		{
			difficulty = 1 ;
			press_up.play();
			background_music_current = background_music_1 ;
		}		
		else if ( mouseX > width/2 - 180/2 && mouseX < width/2 - 180/2 + 180
			&& mouseY > height/2 - 60/2 && mouseY < height/2 - 60/2 + 60)
		{
			difficulty = 1.25 ;
			press_up.play();
			background_music_current = background_music_2 ;
		}		
		else if ( mouseX > width*3/4 - 180/2 && mouseX < width*3/4 - 180/2 + 180
			&& mouseY > height/2 - 60/2 && mouseY < height/2 - 60/2 + 60)
		{
			difficulty = 1.5 ;
			press_up.play();
			background_music_current = background_music_3 ;
		}
		else if ( mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 100)
		{
			menu_position = 1;
			press_down.play();
		}
	}
	else if (menu_position == 4)
	{
		var levels_x = 42.5; 
		var levels_y = height/3 - 70;
		if ( mouseX > levels_x && mouseX < levels_x + 210 && mouseY > levels_y && mouseY < levels_y + 140)
		{
			game_background = game_backgrounds[0];
			level_is_chosen = true;
			press_up.play();
		}
		else if ( mouseX > levels_x*2 + 210  && mouseX < levels_x*2+210+210 && mouseY > levels_y && mouseY < levels_y + 140)
		{
			game_background = game_backgrounds[1];
			level_is_chosen = true;
			press_up.play();
		}	
		else if ( mouseX > levels_x*3 + 210+210  && mouseX < levels_x*3+210+210+210 && mouseY > levels_y && mouseY < levels_y + 140)
		{		
			game_background = game_backgrounds[2];
			level_is_chosen = true;
			press_up.play();
		}	
		else if ( mouseX > levels_x && mouseX < levels_x + 210 && mouseY > height/2 && mouseY < height/2 + 140)
		{
			game_background = game_backgrounds[3];
			level_is_chosen = true;
			press_up.play();
		}	
		else if ( mouseX > levels_x*2 + 210  && mouseX < levels_x*2+210+210 && mouseY > height/2 && mouseY < height/2 + 140)
		{
			game_background = game_backgrounds[4];
			level_is_chosen = true;
			press_up.play();
		}	
		else if ( mouseX > levels_x*3 + 210+210  && mouseX < levels_x*3+210+210+210 && mouseY > height/2 && mouseY < height/2 + 140)
		{
			game_background = game_backgrounds[5];
			level_is_chosen = true;
			press_up.play();
		}
		
		else if ( mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 100) 
		{
			menu_position = 1;
			press_down.play();
		}
		console.log(game_background);
	}
	else if (menu_position == 5)
	{
		if ( mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 100)
		{
			menu_position = 1;
			press_down.play();
		}
	}
}