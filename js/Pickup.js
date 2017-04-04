function Pickup()
{
	Collider.call(this) ;
	
	this.move = function()
	{
		this.x -= 5 ;
   }
}

function Health()
{
	Pickup.call(this) ;
	this.width = 30;
	this.height = 30 ;
	this.value = 10 ;
	this.speed = 20 ;
	
	this.show = function()
	{
		fill('red');
		ellipse( this.x, this.y, this.width, this.height) ;
	}
}

function Coin()
{
	Pickup.call(this) ;
	this.width = 10;
	this.height = 10 ;
	this.value = 50 ;
	this.speed = 10 ;
		
	this.show = function()
	{
		fill('yellow');
		ellipse( this.x, this.y, this.width, this.height) ;
	}
}