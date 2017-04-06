function Ninja()
{
	this.height = 33 ;
	this.width = 40 ;
	this.x = 20 ;
	this.y = 100;
	this.xspeed = 1 ;
	this.yspeed = 0 ;
	this.health = 100 ;
   this.score = 0;
	this.run_sprite = player_run ;
	
	this.show = function()
	{
		fill(255) ;
		animation(this.run_sprite, (this.x + this.width/2), this.y + (this.height/2)) ;
		//rect(this.x, this.y, this.width, this.height) ;
	}

	this.move = function()
	{
		if (keyIsDown(87))
		{
			this.y -= 5 ;
		}
		if (keyIsDown(83))
		{
			if ( this.y + this.height < INITIAL_Y )
			{
				this.y += 5 ;
			}
		}
		if (keyIsDown(65))
		{
    		// move left
    		this.x -= 5 ;
		}
		if (keyIsDown(68))
		{
    		// move right
			this.x += 5 ;
		}
		
		if (this.y + this.height < INITIAL_Y )
			{
				this.y += GRAVITY ;
			}
		
		this.x = constrain(this.x, 0, 800 - this.width) ;
		this.y = constrain(this.y, 0, 600 - this.height) ;
	}
}
