var player_ninja ;
var coins = [] ;
var ninja_image ;
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

var GRAVITY = 1.5 ;

function setup() 
{
	createCanvas(800, 600);
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
}




function draw() 
{
	background(51) ;
	player_ninja.update() ;
	player_ninja.show() ;
	for (var i = 0; i < knives.length; i ++)
		{
			knives[i].move() ;
			knives[i].show() ;
            if (knives[i].crash(player_ninja))
                {
                    noLoop(); //end the game
                }
			
            if (knives[i].x < 0)
				{
					knives.splice(i, 1) ;
					knives.push(new Enemy()) ;
				}
		}
    
    
    
}

