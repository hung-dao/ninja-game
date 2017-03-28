function Enemy()
{
	this.x = random (800, 1600) ;
	this.y = random(0, 525) ;
	
	this.show = function()
	{
		fill(170);
		rect( this.x, this.y, 10, 10) ;
		
	}
	
	this.move = function()
	{
		this.x -= 5 ;
	}
}
