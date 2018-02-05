//variables
//----------------------------------------------------------------

var winCount = 0;
var lossCount = 0;
var guessesRemaining = 10;
var wordAnswer = "";
var wordOptions = ["OCTOPUS", "SHARK", "DOLPHIN", "EEL", "LOBSTER", "WHALE", "TURTLE", "JELLYFISH", "SEAL", "FISH", "STARFISH", "SEAHORSE", "ANEMONE", "CRAB", "SHRIMP"];
var underscoreWord = [];
var lettersGuessed = [];



//Functions
//------------------------------------------------------------------

//add user wins
function addWinCount() {
	winCount++;
}

//add user losses
function addLossCount() {
	lossCount++;
}

//reduce user guesses
function decreaseGuesses() {
	guessesRemaining--;
}

//test for win
function playerWin () {
	var underscoreString = underscoreWord.join('');
	if (underscoreString === wordAnswer) {
		return true;
	} else {
		return false;
	}
}


//test for lose
function playerLost() {
	if (guessesRemaining === 0) {
		return true
	} else {
		return false;
	}
}


//choose wordAnswer from wordOptions
function randomWordAnswer () {
var index = Math.floor(Math.random() * wordOptions.length);
	wordAnswer = wordOptions [index];
}


//handles user guess
function replaceBlank(playerGuess){
	for (var i = 0; i < wordAnswer.length; i++) {
		if (playerGuess === wordAnswer[i]) {
			//replace index of underscore word with playerGuess;
			underscoreWord[i] = playerGuess;
		} 
	}
}

//test for letter in word
function guessCorrect(playerGuess) {
	if (wordAnswer.indexOf(playerGuess) !== -1) {
		return true;
	} else {
		return false;
	}
}

//create underscoreWord (after wordOptions word chosen)
function createUnderscoreWord() {
	var underscoreArray = []
	for (var i = 0; i < wordAnswer.length; i++) {
		underscoreArray.push("_");
	}
	underscoreWord = underscoreArray;
}

// add incorrect guesses to Letters Guessed in array
function addLettersGuessed(playerGuess) {
	lettersGuessed.push(playerGuess);
}

//prevent duplicate letter guesses
function isGuessAllowed(playerGuess) {
	if (underscoreWord.indexOf(playerGuess) === -1 &&
		lettersGuessed.indexOf(playerGuess) === -1)
	 {
		return true;
	} else {
		return false;
	}
}

//restart game/reset
function reset() {
	guessesRemaining = 10;
	lettersGuessed = [];
	randomWordAnswer();
	createUnderscoreWord();
	updateBrowser();
}

//update HTML

function updateBrowser(){
	document.getElementById('winCount').innerHTML = winCount;
	document.getElementById('lossCount').innerHTML = lossCount;
	document.getElementById('guessesRemaining').innerHTML = guessesRemaining;
	document.getElementById('underscoreWord').innerHTML = underscoreWord;
	document.getElementById('lettersGuessed').innerHTML = lettersGuessed;
}

//is guess a valid letter (not a character or other key)
function isGuessALetter(playerGuess) {
	var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
	if (letters.indexOf(playerGuess) !== -1) {
		return true;
	} else {
		return false;
	}
}

//game methodology
function startGame(playerGuess) {
	
	//is the player guess a letter; isGuessALetter ()
	if (isGuessALetter (playerGuess)) {

		//if it is a letter, is guess allowed/valid/not dupicated; isGuessAllowed ()
		if (isGuessAllowed(playerGuess)) {

			//is player guess correct
			if (guessCorrect(playerGuess)) {

				//replace unscore with player guess
				replaceBlank(playerGuess);
				updateBrowser();

			//if user guess is incorrect then push to lettersGuessed array
			} else {
				addLettersGuessed(playerGuess);
				decreaseGuesses();
				updateBrowser();
			}
		}


	} 

	//Test if player won 	
	if 	(playerWin()) {
		addWinCount();
		alert("You Win!");
		reset();
	}

	//Test if player lost
	if (playerLost()) {
		addLossCount();
		alert ("Sorry, you lose!  Please try again!");
		reset();
	}
}

reset();


//document.addEventListener
//-------------------------------------------------------------------
document.addEventListener('keyup', function(event){
	var playerGuess = event.key.toUpperCase();

	startGame(playerGuess);
});