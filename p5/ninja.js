
function Ninja()
{
	this.height = 60 ;
	this.width = 40 ;
	this.x = 20  ;
	this.y = (7/8) * 600 - this.width ;
	this.xspeed = 1 ;
	this.yspeed = 0 ;
	
	//creating sprite
	this.ninja_sprite = createSprite(this.x, this.y, 32, 64 ) ;
	this.ninja_sprite.addAnimation('run', player_run) ;
	this.ninja_sprite.addAnimation('stand', player_stand) ;
	
	this.update = function()
	{
		this.move() ;
		
		if (this.y + this.height < INITIAL_Y )
			{
				this.y += GRAVITY*GRAVITY ;
			}
	}
	
	this.show = function()
	{
		fill(255) ;
		rect(this.x, this.y, this.width, this.height) ;
	}
	
	this.move = function()
	{
	if (keyIsDown(UP_ARROW))
		{
			console.log("doing") ;
			this.y -= 5 ;
		}
		if (keyIsDown(DOWN_ARROW))
		{
			this.y += 5 ;
		}	
		if (keyIsDown(LEFT_ARROW))
		{
			this.x -= 5 ;
		}	
		if (keyIsDown(RIGHT_ARROW))
		{
			this.x += 5 ;
		}
	}
}