var start = prompt("This web page starts a battleship game in the JS console. Please type \"start\" to start the game.");

if (start === "start") {
	var firstNum = Math.ceil(Math.random() * 4);
	var secondNum = firstNum++;
	var thirdNum = secondNum++;
	var numOfHits = 0;
	var isSunken = false;
	var numOfGuesses = 0;

	while (isSunken == false) {
		var askGuess = prompt("Enter your guess from numbers 0 - 7");
		if (askGuess == firstNum) {
			alert("Good Shot!");
			numOfHits++;
			firstNum = 100;
			numOfGuesses++;
		} else if (askGuess == secondNum) {
			alert("Good Shot!");
			numOfHits++;
			secondNum = 100;
			numOfGuesses++;
		} else if (askGuess == thirdNum) {
			alert("Good Shot!");
			numOfHits++;
			thirdNum = 100;
			numOfGuesses++;
		} else {
			alert("Missed..");
			numOfGuesses++;
		}
		if (numOfHits === 3) {
			isSunken = true;
		}
	}

	alert("Congratulations. You took it down in " + numOfGuesses);
	
}
