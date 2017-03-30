function Ninja()
{
	this.height = 60 ;
	this.width = 40 ;
	this.x = 20  ;
	this.y = 100;
	this.xspeed = 1 ;
	this.yspeed = 0 ;
	this.health = 100 ;
    this.score = 0;
	
	/*
	this.sprite = createSprite(this.x, this.y, this.width, this.height);
	//this.sprite.shapeColor = color(255);
	player_sprite_sheet = loadSpriteSheet('sprites/running_man_sprite.png', player_frames);
   this.player_run = loadAnimation(player_sprite_sheet);
   // An animation with a single frame for standing
   this.player_stand = loadAnimation(new SpriteSheet('sprites/running_man_sprite.png',
   [{"name":"player_stand", "frame":{"x":0, "y": 0, "width": 32, "height": 64}}]));
	*/
	
	this.update = function()
	{
		this.move() ;
		
		//this.sprite.changeAnima
		
		if (this.y + this.height < INITIAL_Y )
			{
				this.y += GRAVITY ;
			}
		this.x = constrain(this.x, 0, 800 - this.width) ;
		this.y = constrain(this.y, 0, 600 - this.height) ;
	}
	
/*	this.pickup = function(position)
	{
		var distance = dist(this.x, this.y, pos.x, pos.y) ;
	} */
	
	this.show = function()
	{
		fill(255) ;
		//drawSprites();
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
			if ( this.y + this.height < INITIAL_Y )
			{
				this.y += 5 ;
			}
		}
		if (keyIsDown(LEFT_ARROW))
		{
    		/*this.sprite.changeAnimation('run');
    		// flip horizontally
    		this.sprite.mirrorX(-1);*/
    		// move left
    		this.x -= 5 ;
		}				
		if (keyIsDown(RIGHT_ARROW))
		{
			/*this.sprite.changeAnimation('run');
    		// flip horizontally
    		this.sprite.mirrorX(1);*/
    		// move right
			this.x += 5 ;
		}
	}
}