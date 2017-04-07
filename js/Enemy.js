function Enemy()
{
	Collider.call(this) ;
	this.damage ;
}

// Child class constructor
function Shuriken() 
{ 
	Enemy.call(this) ; 
	this.damage = 5 ;
	this.width = 12 ;
	this.height = 12 ;
	this.speed = 10 ;
	this.sprite = shuriken_sprite ;
	
	this.show = function()
	{
		fill('grey') ;
		rect( this.x, this.y, this.width, this.height ) ;
		animation(this.sprite, this.x + (this.width/2), this.y + (this.height/2)) ;
		
	}
}

function Kunai() 
{ 
	Enemy.call(this) ; 
	this.damage = 20 ;
	this.width = 15 ;
	this.height = 15 ;
	this.speed = 15 ;
	
	this.show = function()
	{
		fill('red');
		rect( this.x, this.y, this.width, this.height ) ;
	}
}

function Katana() 
{ 
	Enemy.call(this) ; 
	this.damage = 50 ;
	this.width = 30 ;
	this.height = 30 ;
	this.speed = 20 ;
	
	this.show = function()
	{
		fill('FAE') ;
		rect( this.x, this.y, this.width, this.height ) ;
	}
}


