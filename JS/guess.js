alert ('You have 15 guesses. Guess 1-1000');
var answer = 999;
var guess = prompt("What's your guess?"); 
for (i=0;<i=15; i++) {
	if (answer == guess) {
		alert ("You guessed it right")
		break; 
		} else {
		guess = prompt("Please try again");
	}


}

