function Collider()
{
	this.x = random (800, 1600) ;
	this.y = random(0, 565) ;
	this.speed ;
	
	this.show = function()
	{
		fill(144) ;
		rect(this.x, this.y, this.width, this.height) ;
	}
	
	this.move = function()
	{
		this.x -= this.speed ;
   }
    
   this.crash = function(obj)
   {
		if (this.x + this.width >= obj.x &&    // r1 right edge past r2 left
      	 this.x <= obj.x + obj.width &&    // r1 left edge past r2 right
      	 this.y + this.height >= obj.y &&    // r1 top edge past r2 bottom
      	 this.y <= obj.y + obj.height) // r1 bottom edge past r2 top
		{
			if (this instanceof Shuriken ||
				 this instanceof Katana ||
				 this instanceof Kunai)
			{
				obj.health -= this.damage;
			}
			else if (this instanceof Health)
			{
				obj.health += this.value ;
			}
			else if (this instanceof Coin)
			{
				obj.score += this.value ;
			}
			return true ;	
		}
		else
		{
			return false ;
		}     
	}
}