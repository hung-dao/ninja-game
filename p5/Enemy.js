function Enemy()
{
	this.x = random (800, 1600) ;
	this.y = random(0, 525) ;
   this.width = 20;
   this.height = 20;
	this.damage = 0 ;
	
	this.show = function()
	{
		fill(170);
		rect( this.x, this.y, this.width, this.height) ;
	}
	
	this.move = function()
	{
		this.x -= 10 ;
   }
    
   this.crash = function(obj)
   {
		if (this.x + this.width >= obj.x &&    // r1 right edge past r2 left
      	 this.x <= obj.x + obj.width &&    // r1 left edge past r2 right
      	 this.y + this.height >= obj.y &&    // r1 top edge past r2 bottom
      	 this.y <= obj.y + obj.height) // r1 bottom edge past r2 top
		{
			obj.health -= this.damage ;
			return true ;
		}
		else
		{
			return false ;
		}     
	}
}

// Child class constructor
function Shuriken() 
{ 
	Enemy.call(this) ; 
	this.damage = 5 ;
	this.width = 10;
	this.height = 10;
}

Shuriken.prototype.show = function()
{
	fill(170);
	rect( this.x, this.y, this.width, this.height) ;
}

function Kunai() 
{ 
	Enemy.call(this) ; 
	this.damage = 20 ;
	this.width = 15;
	this.height = 15;
}

Kunai.prototype.show = function()
{
	fill(111);
	rect( this.x, this.y, this.width, this.height) ;
}

function Katana() 
{ 
	Enemy.call(this) ; 
	this.damage = 50 ;
	this.width = 30;
	this.height = 30;
}

Katana.prototype.show = function()
{
	fill(255);
	rect( this.x, this.y, this.width, this.height) ;
}


