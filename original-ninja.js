class Ninja 
{
	constructor ( ninja_starting_position_x,
					  ninja_width, ninja_height )
	{	
	this.ninja_width = ninja_width ;
	this.ninja_height = ninja_height ;
	this.ninja_position_x = ninja_starting_position_x ;
	this.ninja_starting_position_x = this.ninja_position_x ;
	this.ninja_position_y = (7/8)*600 - ninja_height ;
	this.ninja_starting_position_y = this.ninja_position_y ;
	this.gravity = 1 ;
	this.velocity = 0 ;
	this.on_the_starting_position = false ;
	}
	
	draw( context ) 
	{
		context.fillStyle = "Red";
		context.strokeStyle = "Black";
		
		context.fillRect(this.ninja_position_x, this.ninja_position_y,
							  this.ninja_width, this.ninja_height ) ;
		context.strokeRect(this.ninja_position_x, this.ninja_position_y,
							  this.ninja_width, this.ninja_height ) ;
		
	}
	
	move() 
	{
		if ( this.ninja_position_x >  this.ninja_starting_position_x)
		{
			this.ninja_position_x -= 2.5 ;
		}
		
		if ( this.ninja_position_y < this.ninja_starting_position_y)
		{
			this.ninja_position_y += 2.5 ;
		}
	}
}
	
var LEVEL_OF_GROUND = 600 * (7/8) ;

var map = {0x20: false, 38: false, 39: false, 40: false, 41: false} ; // You could also use an array
	
var player_ninja = new Ninja( 20, 40, 40 ) ;
	
function on_key_down( event )
{
	if (event.keyCode in map) 
	{
      map[event.keyCode] = true;
		
		if (map[39] && map[38])
		{
			player_ninja.ninja_position_x +=5 ;
			player_ninja.ninja_position_y -=5 ;
			console.log("fuck it") ;
		}		
		else if (map[37] && map[38])
		{
			player_ninja.ninja_position_x -=5 ;
			player_ninja.ninja_position_y -=5 ;
			console.log("fuck that") ;
		}
		else if (map[37])
			{
				player_ninja.ninja_position_x -=5 ;
				console.log("LEFT!!!") ;
			}
		else if (map[39])
			{
				player_ninja.ninja_position_x +=5 ;
				console.log("AAA") ;
			}
		else if (map[38])
			{
				player_ninja.ninja_position_y -=5 ;
			}	
		else if (map[40])
			{
				if ( player_ninja.ninja_position_y + player_ninja.ninja_height < LEVEL_OF_GROUND )
				{
					player_ninja.ninja_position_y +=5 ;
			   }
			}
	}
	draw_on_canvas() ;
}
	
function on_key_up( event )
{
   if (event.keyCode in map) 
	{
   	map[event.keyCode] = false;
   }
}

function draw_on_canvas()
{
	var canvas = document.getElementById("game_canvas");
	var context = canvas.getContext("2d") ;
	
	context.fillStyle = "Khaki";
	context.fillRect(0, 0, canvas.width, canvas.height);
	
	context.fillStyle = "Brown";
	context.fillRect(0, (7/8) * canvas.height, canvas.width, (1/8) * canvas.height);
 	
	player_ninja.draw( context ) ;
	
		
	if ( player_ninja.ninja_position_x != player_ninja.ninja_starting_position_x &&
	  	  player_ninja.ninja_position_y != player_ninja.ninja_starting_position_y )
	{
		while( player_ninja.ninja_position_x == player_ninja.ninja_starting_position_x &&
	  		 	 player_ninja.ninja_position_y == player_ninja.ninja_starting_position_y )
		player_ninja.move() ;
	}
	
	//if (player_ninja.ninja_position_y )
	
}

function run_this_game() // This is the 'game loop'
{
   // In this program flying_shell should never point to a non-existent,
   // object, but, nevertheless, it is good to have these kinds of tests
   // in programs.
		
   draw_on_canvas() ;

   setTimeout( "run_this_game()", 50 ) ;

}