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
	this.width = 20;
	this.height = 20 ;
	this.value = 10 ;
	this.speed = 20 ;
	this.sprite = heart ;
	
	this.show = function()
	{
		fill('red');
		//ellipse( this.x, this.y, this.width, this.height) ;
		animation(this.sprite, this.x + (this.width/2), this.y + (this.height/2)) ;
	}
}

function Coin()
{
	Pickup.call(this) ;
	this.width = 10;
	this.height = 10 ;
	this.value = 50 ;
	this.speed = 10 ;
	this.sprite = coin_rotate ;
		
	this.show = function()
	{
		fill('yellow');
		animation(this.sprite, this.x + (this.width/2), this.y + (this.height/2)) ;
		//ellipse( this.x, this.y, this.width, this.height) ;
	}
}