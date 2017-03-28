function Enemy()
{
	this.x = 800 ;
	this.y = random(0, 600) ;
	
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
