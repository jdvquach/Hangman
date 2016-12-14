var lives = 0;
var lettersMatched = 0;
var usedLetters = [];
var submittedLetters = [];
var choice = 1;

var swedishWords = ["zlatan", "dumma", "sprattelgubbe", "dricker", "vatten", "smörgås", "varsågod", "snälla", "kyckling", "jordgubbe", "glaset", "restaurangerna", "tidningarna", "böckerna", "henne", "din", "fågel", "hunden", "björn", "spindel", "krabba", "sköldpadda", "färgglad", "strumporna", "varför", "frågor", "ingen", "förstår", "vilken", "nötköttet", "citronen", "springer", "tvättar", "från", "framför", "fredags", "lördag", "midsommar", "ögonblick", "tolkarna", "polis", "piloterna", "arkitekter", "trötte", "lilla", "öppet", "konstiga", "perfekta", "berömda", "snyggt", "värdefulla", "tvåspråkigt", "dotters", "brors", "familjer", "morfars", "försöker", "behöver", "önskar", "slutar", "kysser", "vägarna", "platsen", "slottet", "trädgård", "område", "kontor", "centrum", "huvudstad", "nöjesfältet", "toaletter", "tillsammans", "pojkvännen", "absolut", "vikingen", "vuxens", "prinsessor", "klockor", "mobilen", "täcke", "kastrullerna", "biljett", "tunnelbana", "innehåller", "träffas", "fjorton", "hundra", "nittio", "tusen", "biblioteket", "lyssnade", "berättade", "tillbaka", "försökte", "kanelbullar", "köttbullar", "lök", "knäckebröd", "tycka"];

var frenchWords = ["bonjour", "ça", "petit", "anglais", "la baguette", "la bicyclette", "chaud", "nouveau", "joli", "le poisson", "avec", "boire", "bonsoir", "désolé", "bientôt", "tard", "dimanche", "janvier", "triste", "souffrir", "fatigué", "haïr", "content", "ouest", "nord", "est", "espérer", "frapper", "nager", "courir"];

var englishWords = ["test", "formidable", "horse", "optician", "politician", "generous", "beautiful", "neighbour", "territory", "similarity", "culture", "difference", "balcony", "walrus", "giraffe", "football", "rugby", "apartment", "thousand", "polite", "library", "magazine", "waffle", "eloquent", "righteous", "preacher", "cupboard", "engine", "fork", "knife", "pleasant", "photograph", "airplane", "shipping", "vase", "determine", "ghost", "pelican", "penguin", "kangaroo", "koala", "echidna", "platypus", "monkey", "hospital", "overcoat", "mattress", "salami", "spaghetti", "noodles", "fusion", "kitchen", "manicure", "solidarity", "vengeful", "torso", "frame", "fly", "flight", "ocean", "weaver", "beaver", "gander", "wander", "rainforest", "leafy", "strong", "weak", "temperature", "hammer", "whistle"];

var words = englishWords;
var randomWord = words[Math.floor(Math.random() * words.length)];
var wordChosen = randomWord.toUpperCase().toString();
console.log(wordChosen);

document.querySelector("#category").addEventListener("change", function() {
  choice = parseInt(this.value);
  document.querySelector("#category");
  if (choice === 1) {
    words = englishWords;
  } else if (choice === 2) {
    words = frenchWords;
  } else if (choice === 3) {
    words = swedishWords;
  }
});



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
$('#guess').keyup(function(e) {
  if (e.keyCode === 13) {
    myGuessFunction();
  }
});

function chooseWordFunction() {
  document.getElementById("word-to-guess").innerHTML = wordChosen;
}
chooseWordFunction();
spaceFunction();

function resetFunction() {
  usedLetters = [];
  submittedLetters = [];
  lives = 0;
  lettersMatched = 0;
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
  spaceFunction();
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

function spaceFunction() { //to deal with space for french words which include the article le or la
  if (wordChosen.includes(" ")){
    submittedLetters.push(" ");
    lettersMatched++;
  } else {
    // console.log("does not include a space");
  }
}

function myGuessFunction() {
  guessValue = document.querySelector("#guess").value.toUpperCase();
  console.log(guessValue);
  if (submittedLetters.includes(guessValue)) {
    $( function() {
        $( "#dialog" ).dialog();
      } );
    // alert("letter has been used");
    $("#guess").val("");
    return;
  } else {
    submittedLetters.push(guessValue);
  }
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
      // console.log("Not found at" + i);
    }
  }
}


function revealHangman() {
  if (lives === 1) {
    var reveal3 = document.querySelector("li#body");
    reveal3.className += "reveal";
  } else if (lives === 2) {
    var reveal4 = document.querySelector("li#head");
    reveal4.className += "reveal";
  } else if (lives === 3) {
    var reveal5 = document.querySelector("li#left-arm");
    reveal5.className += "reveal";
  } else if (lives === 4) {
    var reveal6 = document.querySelector("li#right-arm");
    reveal6.className += "reveal";
  } else if (lives === 5) {
    var reveal7 = document.querySelector("li#left-leg");
    reveal7.className += "reveal";
  } else if (lives === 6) {
    var reveal8 = document.querySelector("li#right-leg");
    reveal8.className += "reveal";
  } else if (lives === 7) {
    var reveal9 = document.querySelector("li#gallow-trunk");
    reveal9.className += "reveal";
  } else if (lives === 8) {
    var reveal10 = document.querySelector("li#beam");
    reveal10.className += "reveal";
  } else if (lives === 9) {
    var reveal11 = document.querySelector("div#mouth");
    reveal11.className += "reveal";
  }
}
