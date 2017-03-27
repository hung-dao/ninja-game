final int screenWidth = 800;
final int screenHeight = 600;
void initialize() 
{
	addScreen("mylevel", new NinjaLevel(screenWidth, screenHeight));  
}
 
class NinjaLevel extends Level 
{
   NinjaLevel(float levelWidth, float levelHeight) 
   {
      super(levelWidth, levelHeight);
   }
}
