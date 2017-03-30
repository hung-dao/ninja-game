var health_text ;
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

var knives = [] ;

var INITIAL_Y = (7/8) * 600 ;

var GRAVITY = 1.1 ;

function setup()
{
	bg = loadImage("ninja.gif");
	var canvas = createCanvas(800, 600);
	//canvas.parent('centered') ;
	player_ninja = new Ninja() ;
	/*
	player_ninja.sprite = createSprite(player_ninja.x, player_ninja.y, player_ninja.width, player_ninja.height);
   player_ninja.sprite.addAnimation('run', player_ninja.player_run);
   player_ninja.sprite.addAnimation('stand', player_ninja.player_stand);
	*/
	for (var i = 0; i < 8; i ++)
		{
			knives.push(new Enemy()) ;
		}

	health_text = createP("Health:" + player_ninja.health) ;
    score_text = createP("Score:" + player_ninja.score) ;
}

function draw()
{
	if(startGame == false){
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
	 else{
			background(51) ;
			player_ninja.update() ;
			player_ninja.show() ;
			for (var i = 0; i < knives.length; i ++)
			{
				knives[i].move() ;
				knives[i].show() ;
	      player_ninja.score += 0.1;
	      score_text.html("Score: " + Math.floor(player_ninja.score));
	      console.log(player_ninja.score);
	   		if (knives[i].crash(player_ninja))
	  		{
					knives.splice( i, 1 ) ;
					health_text.html("Health: " + player_ninja.health);
					console.log(player_ninja.health);

	      }
				if (player_ninja.health <= 0)
				{
					noLoop() ;
				}

	      if (knives[i].x < 0)
				{
					knives.splice(i, 1) ;
					knives.push(new Enemy()) ;
				}
				if (knives.length <= 8)
				{
					knives.push(new Enemy()) ;

				}
		}
	}
}
