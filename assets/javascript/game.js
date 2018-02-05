//GLOBAL VARIABLES
//------------------------------------------------------------------------------------------------------------------


var winCount = 0;
var lossCount = 0;
var guessLeft = 10;
var wordOptions = ["octopus", "shark", "dolphin", "eel", "lobster", "whale", "turtle", "jellyfish", "seal", "fish", "starfish", "seahorse", "anemone", "", ""];
var wordAnswer = "";
var letterCount = [];
var numofSpaces = 0;
var lettersAndSpaces = [];
var wrongGuesses = [];
var letterGuessed = [];
var isLetterInWord = false;


//Var defined: wordOptions: possible mystery words from array;
//wordAnswer: Randomly chosen mystery word
//letterCount: how many characters are in mystery word
//numofSpaces: how many dashed for the characters in the word
//lettersAndSpaces: the ------ the letters and spaces
//wrongGuesses: incorrect letters guessed
//letterGuessed: letter player guesses
//isLetterInWord: boolean variable used to review word for letters
//winCount/lossCount: number of times won or lost
//guessLeft: remaining guesses left for any word before Hangman and game is lost





//FUNCTIONS
//-------------------------------------------------------------------------------------------------------------------------------------

function gameStart () {
	wordAnswer = wordOptions[Math.floor(Math.random() * wordOptions.length)];
	letterCount = wordAnswer.split("");
	numofSpaces = letterCount.length;



	//Reset
	guessLeft = 9;
	wrongGuesses = [];
	lettersAndSpaces = [];


	//Create Spaces for number of letters in word:
	for (var i=0; i<numofSpaces; i++) {
		lettersAndSpaces.push("_");
	}


	//HTML links to run game:
	document.getElementById("wordToGuess").innerHTML = lettersAndSpaces.join("");
	document.getElementById("numofSpaces").innerHTML = guessLeft;
	document.getElementById("winCount").innerHTML = winCount;
	document.getElementById("lossCount").innerHTML = lossCount;



	//Testing:
	console.log(wordAnswer);
	console.log(letterCount);
	console.log(numofSpaces);
	console.log(lettersAndSpaces);
	console.log(letterGuessed);

}

//Set isLetterInWord to false for 
function checkletters(letter) {

	isLetterInWord = false;
	for (var i=0; i<numofSpaces; i++) {
		if (wordAnswer[i] == letter) {
			isLetterInWord = true; 
		}
	}
}
//Check if letter exists in the word and if then add letter to screen from array.
	
		for (var i=0; i<numofSpaces; i++) {
			if(wordAnswer[i] == letter) {
				lettersAndSpaces[i] = letter;
				
			}
		}
	

	 	for (var i=0; i<numofSpaces; i++) {
			if(wordAnswer[i] != letter) {
				wrongGuesses.push(letter);
			}
		}		

	console.log(lettersAndSpaces);
	console.log(wrongGuesses);
	

function roundComplete () {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount  + " | Remaining Guesses: " + guessLeft);

	//record stats
	document.getElementById("numGuesses").innerHTML = guessLeft;
	document.getElementById("wordToGuess").innerHTML = lettersAndSpaces.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


	//Did player win?:
	if (isLettersInWord.toString() == lettersAndSpaces.toString()) {
		winCount++;
		alert("You Win!");

		//update Win count on screen
		document.getElementId("winCount").innerHTML = winCount;
		
		startGame()
	}

		//Did player Lose?:
	else if (guessLeft == 0) {
		lossCount++;
		alert("You Lose!");

		//update Loss count on the screen
		document.getElementById("lossCount").innerHTML = lossCount;

		startGame();
	}

}
	

//PROCESS
//--------------------------------------------------------------------------------------------------------------------------------
gameStart()


/*ocument.write('<audio loop autoplay="autoplay">'); */

//Key clicks for Guesses
document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkletters(letterGuessed);
}

//background audio
//---------------------------------------------------------------------------------------------------------------------------------
//var aud = document.getElementById("myAudio");
//aud.volume = 0.5;

