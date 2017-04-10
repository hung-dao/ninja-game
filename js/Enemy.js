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
	this.width = 16 ;
	this.height = 16;
	this.speed = 10 ;
	this.sprite = shuriken_sprite ;
	
	this.show = function()
	{
		fill('grey') ;
		//rect( this.x, this.y, this.width, this.height ) ;
		animation(this.sprite, this.x + (this.width/2), this.y + (this.height/2)) ;
		
	}
}

function Kunai() 
{ 
	Enemy.call(this) ; 
	this.damage = 20 ;
	this.width = 36 ;
	this.height = 18 ;
	this.speed = 15 ;
	this.sprite = kunai_sprite ;
	
	this.show = function()
	{
		fill('red');
		//rect( this.x, this.y, this.width, this.height ) ;
		animation(this.sprite, this.x + (this.width/2), this.y + (this.height/2)) ;
	}
}

function Katana() 
{ 
	Enemy.call(this) ; 
	this.damage = 50 ;
	this.width = 104 ;
	this.height = 20 ;
	this.speed = 20 ;
	this.sprite = katana_sprite ;

	
	this.show = function()
	{
		fill('FAE') ;
		//rect( this.x, this.y, this.width, this.height ) ;
		animation(this.sprite, this.x + (this.width/2), this.y + (this.height/2)) ;		

	}
}


