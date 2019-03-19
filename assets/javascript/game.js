// // //Word Bank: Food around the world


// var wordBank = ["paella", "poutine", "tacos", "marzipan", "hummus", "pho", "lasagna", "poke", "kebab", "pierogi", "rendang", "hamburger"];


// // var pickedWord=pickWord();
// // var wordLength=pickedWord.length; 
// // var hiddenWord=hiddenWord();
// // var lettersLeft=wordLength;


// // var currentWordBank = [];
// var guessLetters = [];
// // var wordBankLength = wordBank.length;
// // var currentWordBankLength = currentWordBank.length;

// // var currentGuessWord = currentWordBank[currentWordBankLength - 1];
// // var win = false;
// // var mysteryLetters; //This is an array 
// // var lettersInWord; 
// // var input;

// // //Start program 




// // //picks a randomWord from the word bank
// function pickWord() {
//     return wordBank[Math.floor(Math.random() * Math.floor(wordBank.length))];

// }

// function hiddenWord(){
//     var hiddenWord=[];
//     for(var i=0; i<wordLength; i++){
//         hiddenWord.push("_"); 
//     }
//     return hiddenWord; 
// }
// // //after winning it selects a new word not previously picked
// // function selectNewWord() {

// //     if (!currentWordBank.includes(pickedWord) && currentWordBank.length < wordBankLength){
// //         pickedWord = pickWord(); 
// //         currentWordBank.push(pickedWord); 
// //         // take word out of word bank
// //     } else {
// //         selectNewWord();
// //     }

// //     // do {
// //     //     pickedWord = pickWord();
// //     // }
// //     // while (currentWordBank.indexOf(pickedWord) !== -1)
// //     // currentWordBank.push(pickedWord);


// // }

// // function split(pickedWord){
// //     mysteryLetters=pickedWord.split("");
// //     lettersInWord= mysteryLetters.length; 
// // }


// // //sends picked word to the current word bank array
// // function pushCurrentWord() {
// //     currentWordBank.push(selectNewWord());
// // }

// // //updates letters after each key press
// // function eachRoundAfterKey() {
// //  letterChecker(input); 
// // }

// // //checks if the entered letter is actually in the current word
// // function letterChecker(guessedLetter) {
// //     var foundLetter = false;

// //     for (var i = 0; i <= mysteryLetters.length; i++) {
// //         if (mysteryLetters.indexOf(guessedLetter) !== -1) {
// //             foundLetter = true;
// //         } else {
// //             foundLetter = false;
// //         }
// //     }
// //     console.log(foundLetter);
// // //push new letter in used words array make conditional to not be able to use it twice 


// // }

// // 
// function main() {

// console.log(pickedWord);
// console.log(pickedWord);
// console.log(pickedWord);








// console.log(hiddenWord); 




















//     // alert("You Beat The Game")
// }



// //mechanism for logging keypresses and making them lowercase


var wordBank = ["paella", "poutine", "tacos", "marzipan", "hummus", "pho", "lasagna", "poke", "kebab", "pierogi", "rendang", "hamburger"];
var pickedWord = wordSelector();
var wordLength = pickedWord.length;
var pickedLetters;
var blanks = [];
var flaseLetters = [];
var hiddenLetters = 0;
var tries;
var wins = 0;
var losses = 0;



function wordSelector() {
    return wordBank[Math.floor(Math.random() * Math.floor(wordBank.length))];
}

//reset mechanism and game start
function main() {
    pickedWord = wordSelector();
    if (wins <= wordBank.length) {
        tries = 10;
        blanks = [];
        pickedLetters = [];
        falseLetters = [];
        hiddenLetters = 0;
        pickedLetters = pickedWord.split("");
        var pickedLettersLength = pickedLetters.length;
        console.log(pickedWord);
        console.log(pickedLetters);
        hiddenLetters = pickedLettersLength;
        console.log(hiddenLetters);

        for (var i = 0; i < pickedLettersLength; i++) {
            blanks.push("_ ");
        }




    }

    function updateScreen() {


        $("#blanks").html(blanks);
        $("#userLives").html(tries);
        $("#wins").html(wins);
        $("#losses").html(losses);
        $("#guessLetter").html(falseLetters);

    }

    function winCheck() {
        if (JSON.stringify(blanks) == JSON.stringify(pickedLetters) && tries > 0) {
            alert("You Won!");
            main();

        }

        if (tries == 0) {
            alert("You Lost");
            main();
        }
    }

    function wordChecker(input) {
        console.log("running");


        if (pickedLetters.indexOf(input) !== -1) {


            for (var l = 0; l < blanks.length; l++) {
                if (pickedLetters[l] === input) {
                    blanks[l] = input;

                    console.log(blanks);
                }
            }

        } else {

            if (falseLetters.indexOf(input) !== -1) {
                alert("You have already tried that letter.")
            } else {

                falseLetters.push(input);
                tries--;
            }
            console.log(tries);
            console.log(falseLetters);
        }
    }

    document.onkeyup = function (e) {
        var userGuesses = String.fromCharCode(e.which).toLowerCase();
        updateScreen();
        wordChecker(userGuesses);
        winCheck();
    }


}






//check for letters


main();