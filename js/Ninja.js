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
	this.velocity = 0;
	
	this.run_sprite = player_run ;
	this.jump_sprite = player_jump ;
	this.fall_sprite = player_fall ;
	this.hit_sprite = player_hit ;
	this.current_sprite;
	
	this.isrunning = false ;
	this.isjumping = false ;
	this.isfalling = true ;
	this.ishit = false ;
	
	this.show = function()
	{
		if (this.isjumping == true)
		{
			this.current_sprite = this.jump_sprite ;
		}
		else if (this.isfalling == true)
		{
			this.current_sprite = this.fall_sprite ;
		}
		else if (this.isrunning == true)
		{
			this.current_sprite = this.run_sprite ;
		}
		
		if (this.ishit == true)
		{
			this.isrunning = false ;
			this.isjumping = false ;
			this.isfalling = false ;
			this.current_sprite = this.hit_sprite ;
	
		}
		
		if (this.health <= 0)
		{
			this.current_sprite = player_dead ;
		}
		
		fill(255) ;
		animation(this.current_sprite, (this.x + this.width/2), this.y + (this.height/2)) ;
		//rect(this.x, this.y, this.width, this.height) ;
	}

	this.move = function()
	{
		if (this.health > 0)
		{	
			if (keyWentDown(87) || keyWentDown(32))
			{
				this.isjumping = true ;
				this.isfalling = false;
				this.isrunning = false ;
				
				this.velocity = FLAP;
				this.y += this.velocity;
			}
			else 
			{
				this.isfalling = true ;
				this.isjumping = false ;
			}
			
			if (keyIsDown(83))
			{
				this.isjumping = false ;
				this.velocity += 0.5;
				if ( this.y + this.height < INITIAL_Y )
				{
					this.isfalling = true ;
					this.isrunning = false ;
	
				}
				else 
				{
					this.isfalling = false ;
					this.isrunning = true ;
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
				this.y += this.velocity ; 
				this.velocity += GRAVITY ;
			}
			else 
			{
				this.isfalling = false ;
				this.isjumping = false ;
				this.isrunning = true ;
				
				this.velocity = 0;
			}
			
			if (this.velocity < 0)
			{
				this.isjumping = true ;
				this.isfalling = false;
				this.isrunning = false ;
			}
			
			this.x = constrain(this.x, 0, 800 - this.width) ;
			this.y = constrain(this.y, 0, 600 - this.height) ;
		}
		else
		{
			this.y += 2;
		}		
	}
}
