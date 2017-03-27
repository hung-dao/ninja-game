var player_ninja 

function setup() 
{
	createCanvas(800, 600);
	player_ninja = new Ninja() ;
}

function keyPressed()
{
	if (keyCode === UP_ARROW)
	{
		player_ninja.dir( 0, -1) ;
	}
	else if (keyCode === DOWN_ARROW)
	{
		player_ninja.dir( 0, 1) ;
	}	
	else if (keyCode === LEFT_ARROW)
	{
		player_ninja.dir( -1, 0) ;
	}	
	else if (keyCode === RIGHT_ARROW)
	{
		player_ninja.dir( 1, 0) ;
	}
}

function draw() 
{
	background(51) ;
	player_ninja.update() ;
	player_ninja.show() ;
}

function Ninja()
{
	this.x = 0  ;
	this.y = 0  ;
	this.xspeed = 1 ;
	this.yspeed = 0 ;
	
	this.update = function()
	{
		this.x = this.x + this.xspeed ;
		this.y = this.y + this.yspeed ;
	}
	
	this.show = function()
	{
		fill(255) ;
		rect(this.x, this.y, 10, 10) ;
	}
}

