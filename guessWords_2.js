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
  if(isCorrect&&guessedLetters.join("")==givenLetters.join("")) {   //if the user guessed correctly AND the string resulting from joining given letters and guessed letters are the same, i.e. "learn" = "learn", change the value of moreToGuess to false and print a success message to the console.
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
