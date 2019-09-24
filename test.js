var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var resetButton = document.getElementById("resetButton");
var input = document.querySelector("input");
var displayScore = document.getElementById("displayScore");
var winningScore = 5;
var d1 = document.getElementById("d1");
var d2 = document.getElementById("d2");
var gameOver = false;
var p1Score = 0;
var p2Score = 0;

button1.addEventListener("click",function(){
	if(!gameOver){
       p1Score++;
	   if(p1Score === winningScore){
		d1.classList.add("winner");	
		gameOver = true;
		}
	}
    d1.textContent = p1Score;
});


button2.addEventListener("click",function(){
	if(!gameOver){
       p2Score++;
	   if(p2Score === winningScore){
		d2.classList.add("winner");	
		gameOver = true;
		}
	}
    d2.textContent = p2Score;
});


resetButton.addEventListener("click",function(){
	p1Score = 0;
	p2Score = 0;
	d1.textContent = 0;
	d2.textContent = 0;
	d1.classList.remove("winner");
	d2.classList.remove("winner");
	//according to code above, gameOver stays at true, so the code will not run, so have to change it to false to make it keep running.
	gameOver = false;
})

input.addEventListener("change",function(){ //when it is "input", use "change" rather than "click"
	displayScore.textContent = this.value; //when it is "input", have to add ".value" show indicate the textContent
	winningScore = Number(this.value); // turn the value to a number rather than a string
})  



