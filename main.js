console.log("Hello World");


var lives = 0;
var usedLetters = [];
var words = ["test", "cat", "horse"];
var randomWord = words[Math.floor(Math.random()*words.length)];
console.log(randomWord);
var wordChosen = randomWord.toUpperCase();
console.log(wordChosen);


for (var i=0; i < wordChosen.length; i++) {
  var createCellPlace = document.createElement("p2");
  var textCellPlace = document.createTextNode(i+1);
  createCellPlace.appendChild(textCellPlace);
  document.body.appendChild(createCellPlace);
  // var cellPlace = "place-" + (i+1);
  // document.getElementById(cellPlace).innerHTML =(i+1);


  var test = document.querySelector("testcase");
  var test2 = document.querySelector("p2");
$( "p2" ).insertBefore( "#place-holder-1" );
}

function chooseWordFunction() {
  document.getElementById("word-to-guess").innerHTML=wordChosen;
}

function resetFunction() {
  usedLetters=[];
  lives =0;
  document.querySelector(".guessed").innerHTML = "";
  chooseWordFunction();
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

function myGuessFunction() {
  guessValue = document.querySelector("#guess").value;
  console.log(guessValue);
  if (wordChosen.includes(guessValue)) {
    console.log("this letter is included");
  } else {
    lives++;
    usedLetters.push(guessValue);
    document.querySelector(".guessed").innerHTML = usedLetters;
    if (lives===6){
      lostMessage();
    }
    console.log(lives);
  }
  for (var i=0; i < wordChosen.length; i++) {
    if (guessValue===wordChosen[i]){
      console.log("letter found at" + i);
      var cellName = "letter-" + (i+1);

      console.log(cellName);
      document.getElementById(cellName).innerHTML =guessValue;
      // document.getElementById(cellPlace).innerHTML =(i+1);
    //   var createAnswerPlace = document.createElement("p3");
    //   var textAnswerPlace = document.createTextNode(guessValue);
    //   createAnswerPlace.appendChild(textAnswerPlace);
    //   document.body.appendChild(createAnswerPlace);
    //   var test3 = document.querySelector("testcase");
    //   var test4 = document.querySelector("p2");
    // $( "p2" ).insertBefore( "#place-holder-1" );


    }
    else {
    console.log("Not found at" + i);
    }

}
}
