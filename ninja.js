
class Ninja
{
	constructor ( ninja_starting_position_x, ninja_starting_position_y,
					  ninja_width, ninja_height )
	{
	this.ninja_width = ninja_width ;
	this.ninja_height = ninja_height ;
	this.ninja_position_x = ninja_starting_position_x ;
	this.ninja_starting_position_x = this.ninja_position_x ;
	this.ninja_position_y = ninja_starting_position_y ;
	this.ninja_starting_position_y = this.ninja_position_y ;
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
			this.ninja_position_x -= 0.3 ;
		}

		if ( this.ninja_position_y < this.ninja_starting_position_y)
		{
			this.ninja_position_y += 0.7 ;
		}
	}
}

var LEVEL_OF_GROUND = (7/8)*600;

var player_ninja = new Ninja( 20, (7/8)*600-40, 40, 40 ) ;


class Circle
{
  constructor( circle_center_starting_x, circle_center_starting_y, diameter )
  {
    this.circle_center_x = circle_center_starting_x;
    this.circle_center_y = circle_center_starting_y;
    this.diameter = diameter;
  }

  draw(context)
  {
    context.beginPath();
  	context.arc(this.circle_center_x, this.circle_center_y, this.diameter, 0, Math.PI*2);
  	context.fillStyle = "#0095DD";
  	context.fill();
    context.closePath();
  }

  move()
  {
    this.circle_center_x -=10;
    if (this.circle_center_x <= 0)
    {
      this.circle_center_x = 800;
      this.circle_center_y = Math.random() * (7/8)*600 ;
    }
  }
}

var ball_1 = new Circle(800, (7/8)*600-100, 20);
var ball_2 = new Circle(800, (7/8)*600-200, 20);


function draw_on_canvas()
{
  var canvas = document.getElementById("game_canvas");
  var context = canvas.getContext("2d") ;

  context.fillStyle = "Khaki";
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = "Brown";
  context.fillRect(0, (7/8) * canvas.height, canvas.width, (1/8) * canvas.height);

  player_ninja.draw(context);
  player_ninja.move();
  ball_1.draw(context);
  ball_1.move();
  ball_2.draw(context);
  ball_2.move();

  setTimeout( "draw_on_canvas()", 100 ) ;
}

function on_key_down( event )
{
	var map = {0x20: false, 38: false, 39: false, 40: false, 37: false} ; // You could also use an array

	if (event.keyCode in map)
	{
      map[event.keyCode] = true;
		if (map[39] && map[38])
		{
			player_ninja.ninja_position_x +=5 ;
			player_ninja.ninja_position_y -=5 ;

		}
		else if (map[37])
			{
				player_ninja.ninja_position_x -=5 ;
				// go left
			}
		else if (map[39])
			{
				player_ninja.ninja_position_x +=5 ;
				// go right
			}
		else if (map[38])
			{
				player_ninja.ninja_position_y -=5 ;
        // go up
			}
		else if (map[40])
			{
				if ( player_ninja.ninja_position_y + player_ninja.ninja_height < LEVEL_OF_GROUND )
				{
					player_ninja.ninja_position_y +=5 ;
			   }
         // go down
			}
	}
}

function on_key_up( event )
{
   if (event.keyCode in map)
	{
   	map[event.keyCode] = false;
   }
}
