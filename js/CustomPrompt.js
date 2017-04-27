function CustomPrompt()
{
	this.isLaunched = false;
	this.render = function(dialog)
	{
		this.isLaunched = true;
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
		var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH+"px";
		dialogbox.style.left = (winW/2) - (550 * .5)+"px";
		dialogbox.style.top = "100px";
		dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "Game over. Your score is " + score + ".";
		document.getElementById('dialogboxbody').innerHTML = dialog;
		document.getElementById('dialogboxbody').innerHTML += '<br><input id="prompt_value1">';
		document.getElementById('dialogboxfoot').innerHTML = '<button onclick="Prompt.ok()">OK</button> <button onclick="Prompt.cancel()">Cancel</button>';
	}
	
	this.cancel = function()
	{
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		this.isLaunched = false;
	}
	
	this.ok = function()
	{
		prompt_value1 = document.getElementById('prompt_value1').value;
		console.log(prompt_value1);
		name = prompt_value1;
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		var xmlhttp = new XMLHttpRequest();
		xmlhttp.open("GET", "./php/test.php?name=" + name + "&score=" + score, true);
		xmlhttp.send();
		this.isLaunched = false;	   
	}
}