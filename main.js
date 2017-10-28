//-----------------------------------------------------------------------------
var Word = require('./word.js');
var prompt = require('prompt');
var chalk = require('chalk');

console.log(chalk.cyan("***********************************************************"));
console.log(chalk.cyan("  **  ***  **** ***  *       **  ******  ****  ***   **  **"));
console.log(chalk.cyan("  **  **    ***   *  * ********    **    **     **    *  **"));
console.log(chalk.cyan("      *  **  **  *   * **    **  *    *  *  ***  *  *    **"));
console.log(chalk.cyan("  **  *  **  **  **  * ****  **  **   *  *  ***  *  **   **"));
console.log(chalk.cyan("  **  *  **  **  **  *      ***  ******  *  ***  *  ***  **"));
console.log(chalk.cyan("***********************************************************"));
console.log(chalk.cyan("Welcome to Car Brand Hangman!"));
console.log(chalk.cyan("Guess a letter of the name of a Car Brand"));
console.log(chalk.cyan("=========================================="));
prompt.start();

game = {
 	wordBank: ['Audi', 'BMW', 'Bugatti', 'Porsche', 'Maserati', 'Volkswagen', 'Mcclaren'],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,

 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
 		this.currentWrd.getLet();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log(chalk.red("WRONG"));
 				self.guessesRemaining--;

 			} else {
 				console.log(chalk.green("CORRECT"));
 					if(self.currentWrd.findWord()){
            console.log(chalk.cyan('*******************************************************'));
            console.log(chalk.cyan('**  *********  *  *    **  *    **  *     *     ***  **'));
            console.log(chalk.cyan('**  *********  *  *  *  *  *  *  *  *  ****  **  **  **'));
            console.log(chalk.cyan('**  ***   ***  *  *  **    *  **    *     *  *  ***  **'));
            console.log(chalk.cyan('***  *  **  *  *  *  ***   *  ***   *  ****  **  ******'));
            console.log(chalk.cyan('****   ****   **  *  ****  *  ****  *     *  ***  *  **'));
            console.log(chalk.cyan('*******************************************************'));
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("==========================================");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.target);
        console.log(chalk.red('************************************************'));
        console.log(chalk.red('**         ****   ****   ******    *************'));
        console.log(chalk.red('**  ****   ***  *  ***  *  ***  *  **       ****'));
        console.log(chalk.red('**  *********  ***  **  **  *  **  **  *********'));
        console.log(chalk.red('**  ***    **       **  ***   ***  **       ****'));
        console.log(chalk.red('**  *****  **  ***  **  *********  **  *********'));
        console.log(chalk.red('**         **  ***  **  *********  **       ****'));
        console.log(chalk.red('************************************************'));
        console.log(chalk.red('**         *  *****   *      **       **********'));
        console.log(chalk.red('**  *****  **  ***   **  ******  ***  **********'));
        console.log(chalk.red('**  *****  ***  *   ***      **  **  ***********'));
        console.log(chalk.red('**         ****    ****  ******  ***  **********'));
        console.log(chalk.red('****************  *****      **  ****  *********'));
 			} else {
 				console.log(self.currentWrd.wordRender());
 			}
 		});

 	}


};

game.startGame();
