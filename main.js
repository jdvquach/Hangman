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

//Recognise enter key as a valid submit function
$('#guess').keyup(function (e) {
    if (e.keyCode === 13) {
       myGuessFunction();
    }
  });


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
$("p#word-to-guess").removeClass();
$("li#body").removeClass();
$("li#left-arm").removeClass();
$("li#left-leg").removeClass();
$("li#right-arm").removeClass();
$("li#right-leg").removeClass();
$("li#head").removeClass();
$("li#gallow-trunk").removeClass();
$("li#beam").removeClass();
$("div#mouth").removeClass();
 $("p1").empty();
  document.querySelector(".guessed").innerHTML = "";
  randomWord = "";
  randomWord = words[Math.floor(Math.random() * words.length)];
  wordChosen = randomWord.toUpperCase().toString();
  chooseWordFunction();
  createTiles();
}

winMessage = function() {
  var createWinMessage = document.createElement("p1"); // Create a <p> node
  var textWinMessage = document.createTextNode("You Won!!"); // Create a text node
  createWinMessage.appendChild(textWinMessage); // Append the text to <p>
  document.body.appendChild(createWinMessage);
  $("p1").insertAfter("p#word-to-guess");
};

lostMessage = function() {
  var createLostMessage = document.createElement("p1"); // Create a <p> node
  var textLostMessage = document.createTextNode("Sorry - You have Lost"); // Create a text node
  createLostMessage.appendChild(textLostMessage); // Append the text to <p>
  document.body.appendChild(createLostMessage);
  $("p1").insertAfter("p#word-to-guess");
};

function myGuessFunction() {
  guessValue = document.querySelector("#guess").value.toUpperCase();
  console.log(guessValue);
  $("#guess").val("");


  if (wordChosen.includes(guessValue)) {

  } else {
    lives++;
    usedLetters.push(guessValue);
    document.querySelector(".guessed").innerHTML = usedLetters;
    revealHangman();
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


function revealHangman() {
  if(lives===1){
    var reveal3 = document.querySelector("li#body");
    reveal3.className +="reveal";
  }
  else if(lives===2){
    var reveal4 = document.querySelector("li#head");
    reveal4.className +="reveal";
  }
  else if(lives===3){
    var reveal5 = document.querySelector("li#left-arm");
    reveal5.className +="reveal";
  }
  else if(lives===4){
    var reveal6 = document.querySelector("li#right-arm");
    reveal6.className +="reveal";
  }
  else if(lives===5){
    var reveal7 = document.querySelector("li#left-leg");
    reveal7.className +="reveal";
  }
  else if(lives===6){
    var reveal8 = document.querySelector("li#right-leg");
    reveal8.className +="reveal";
  }
  else if(lives===7){
    var reveal9 = document.querySelector("li#gallow-trunk");
    reveal9.className +="reveal";
  }
  else if(lives===8){
    var reveal10 = document.querySelector("li#beam");
    reveal10.className +="reveal";
  }
  else if (lives===9){
    var reveal11 = document.querySelector("div#mouth");
    reveal11.className +="reveal";
  }
}
