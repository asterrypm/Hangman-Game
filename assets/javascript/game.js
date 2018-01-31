//GLOBAL VARIABLES
//------------------------------------------------------------------------------------------------------------------

var wordOptions = ["octopus", "shark", "dolphin", "eel", "lobster", "whale", "turtle", "jellyfish", "seal", "fish", "starfish", "seahorse", "anemone", "", ""];

var wordAnswer = "";
//selectedWord
var letterCount = [];
//lettersinWord
var numofSpaces = 0;
//numBlanks
var lettersAndSpaces = [];
//blanksAndSuccesses
var wrongGuesses = [];

var letterGuessed = [];

var isLetterInWord = [];

var winCount = 0;

var lossCount = 0;

var guessLeft = 0;





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


function checkLetter(letter) {

	for (var i=o; i<numofSpaces; i++) {
		if(wordAnswer[i]) 
	}
}


//Check if letter exists in the word and if then add letter to screen from array.
if(isLetterInWord) {
	for (var i=0; i<numofSpaces; i++) {
		if(wordAnswer[i] == letter) {
			lettersAndSpaces[i] = letter;
		}
	}
}

else {
	wrongGuesses.push(letter);
	guessLeft--
}

	console.log(lettersAndSpaces);

function roundComplete () {
	console.log("Win Count: " + winCount + " | Loss Count: " + lossCount  + " | Remaining Guesses: " + guessLeft);

	//record stats
	document.getElementById("numGuesses").innerHTML = guessLeft;
	document.getElementById("wordToGuess").innerHTML = lettersAndSpaces.join(" ");
	document.getElementById("wrongGuesses").innerHTML = wrongGuesses.join(" ");


//Did player win?:
if (lettersinWord.toString() == lettersAndSpaces.toString()) {
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
}
	

//PROCESS
//--------------------------------------------------------------------------------------------------------------------------------
startGame()


//To loop background music
document.write('<audio loop autoplay="autoplay">'); 

//Key clicks for Guesses
document.onkeyup = function(event) {
	letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkletters(letterGuessed);
}

//Audio
//---------------------------------------------------------------------------------------------------------------------------------
$(document).ready(function() {
    var audioElement = document.createElement('audio');
    audioElement.setAttribute('src', 'http://www.soundjay.com/misc/sounds/bell-ringing-01.mp3');
    
    audioElement.addEventListener('ended', function() {
        this.play();
    }, false);
    
    audioElement.addEventListener("canplay",function(){
        $("#length").text("Duration:" + audioElement.duration + " seconds");
        $("#source").text("Source:" + audioElement.src);
        $("#status").text("Status: Ready to play").css("color","green");
    });
    
    audioElement.addEventListener("timeupdate",function(){
        $("#currentTime").text("Current second:" + audioElement.currentTime);
    });
    
   /* $('#play').click(function() {
        audioElement.play();
        $("#status").text("Status: Playing");
    });
    
    $('#pause').click(function() {
        audioElement.pause();
        $("#status").text("Status: Paused");
    });
    
    $('#restart').click(function() {
        audioElement.currentTime = 0;
    });
});*/



window.onload = function() {
    document.getElementById("my_audio").play();
}