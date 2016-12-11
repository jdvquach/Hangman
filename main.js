var lives = 0;
var lettersMatched = 0;
var usedLetters = [];
var words = ["test", "formidable", "horse","optician","politician","generous","beautiful","neighbour","territory","similarity","culture","difference"];
var randomWord = words[Math.floor(Math.random() * words.length)];
var wordChosen = randomWord.toUpperCase().toString();
console.log(wordChosen);

function createTiles() {
for (var i = 0; i < wordChosen.length; i++) {
  var letterChosen = wordChosen.charAt(i);
  console.log(wordChosen.charAt(i));
  var createTilePlace = document.createElement("li" + i);
  var textTilePlace = document.createTextNode(letterChosen);
  createTilePlace.appendChild(textTilePlace);
  document.body.appendChild(createTilePlace);
  $("li" + i).insertBefore("p#word-to-guess");
}
}
createTiles();

function chooseWordFunction() {
  document.getElementById("word-to-guess").innerHTML = wordChosen;
}
chooseWordFunction();

function resetFunction() {
  usedLetters = [];
  lives = 0;
  lettersMatched=0;
  for (var k = 0; k < wordChosen.length; k++) {
   $("li" + k).remove();
 }
 $("p#word-to-guess.reveal").empty(".reveal");
 $("p1").empty();
  document.querySelector(".guessed").innerHTML = "";
  randomWord = "";
  randomWord = words[Math.floor(Math.random() * words.length)];
  wordChosen = randomWord.toUpperCase().toString();
  chooseWordFunction();
  letterChosen = null;
  createTilePlace = null;
  textTilePlace = null;
  createTiles();
}

winMessage = function() {
  var createWinMessage = document.createElement("p1"); // Create a <p> node
  var textWinMessage = document.createTextNode("You Won!!"); // Create a text node
  createWinMessage.appendChild(textWinMessage); // Append the text to <p>
  document.body.appendChild(createWinMessage);
};

lostMessage = function() {
  var createLostMessage = document.createElement("p1"); // Create a <p> node
  var textLostMessage = document.createTextNode("Sorry - You have Lost"); // Create a text node
  createLostMessage.appendChild(textLostMessage); // Append the text to <p>
  document.body.appendChild(createLostMessage);
};

// $("input#guess").keydown(function(){
//   var key=e.which;
//   if (key==13){
//     $("input#guess").submit();
//   }
// });


function myGuessFunction() {
  guessValue = document.querySelector("#guess").value.toUpperCase();
  console.log(guessValue);
  $("#guess").val("");


  if (wordChosen.includes(guessValue)) {} else {
    lives++;
    usedLetters.push(guessValue);
    document.querySelector(".guessed").innerHTML = usedLetters;
    if (lives === 9) {
      lostMessage();
      var revealTwo = document.querySelector("p#word-to-guess");
      revealTwo.className += "reveal";
    }
  }
  for (var i = 0; i < wordChosen.length; i++) {
    if (guessValue === wordChosen[i]) {
      var reveal = document.querySelector("li" + i);
      reveal.className += "reveal";
      lettersMatched++;
      if (lettersMatched === wordChosen.length) {
        winMessage();
      }
    } else {
      console.log("Not found at" + i);

    }
  }
}
