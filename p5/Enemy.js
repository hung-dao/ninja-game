function Enemy()
{
	this.x = random (800, 1600) ;
	this.y = random(0, 525) ;
    this.width = 13;
    this.height = 13;
	
	this.show = function()
	{
		fill(170);
		rect( this.x, this.y, this.width, this.height) ;
		
	}
	
	this.move = function()
	{
		this.x -= 7 ;
    }
    
    this.crash = function(obj)
    {
        if (this.x + this.width >= obj.x &&    // r1 right edge past r2 left
      this.x <= obj.x + obj.width &&    // r1 left edge past r2 right
      this.y + this.height >= obj.y &&    // r1 top edge past r2 bottom
      this.y <= obj.y + obj.height) // r1 bottom edge past r2 top
        {
            return true;
        }
        else {return false;}
        
    }
}
