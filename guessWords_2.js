//not quite right

const givenLetters = ["l","e","a","r","n"];
const guessedLetters = ["-","-","-","-","-"];

function guess(letter) {
  var isCorrect = false;
  var moreToGuess = false;

  for(var i=0; i<givenLetters.length;i++) {
    if(givenLetters[i]==letter) {
      guessedLetters[i]=letter;
      isCorrect=true;
    }
    else {
      moreToGuess=true;
    }
  }
  if(isCorrect&&guessedLetters.join("")==givenLetters.join("")) {
    moreToGuess=false;
    console.log(guessedLetters.join(""));
    console.log("You won!"); }
  else if(isCorrect){
    console.log("Congrats! You've correctly guessed a letter.");
    console.log(guessedLetters.join(""));
  }
  else {
      console.log("Try again.");
    }
}

guess("a");
guess("l");
guess("e");
guess("r");
guess("n");