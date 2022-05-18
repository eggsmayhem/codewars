//rock paper scissors, just for review

class Game {
    constructor() {
        this.playerWins = 0
        this.computerWins = 0
    }

    playGame() {
        //determine the player's choice
        const playerChoice = prompt("Enter rock, paper, or scissors").toLowerCase();
    
        //determine the computer's choice
        let rollChoice;
        const computerChoice = () => {
            const rollNum = Math.floor(Math.random() * 1);
            if (rollNum < .33) {
                rollChoice = "rock";
            }
            if (rollNum >= .33 && rollNum < .66) {
                rollChoice = "paper";
            }
            else {
                rollChoice = "scissors"
            }
    
            return rollChoice
        }
    
        //computer who won the game
        let winner;
        const whoWins = () => {
            
            if ((playerChoice === "rock" && rollChoice === "scissors") || (playerChoice === "paper" && rollChoice === "rock") || (playerChoice === "scissors" && rollChoice === "paper")) {
                winner = "You"
                this.playerWins++
            }
            else {
                winner = "Computer"
                this.computerWins++
            }
    
            return winner;
        }
    
        const displayWin = () => {
            if (winner === "You") {
                console.log(`${winner} win the game! You have won ${this.playerWins} games! The computer has won ${this.computerWins} games!`)
            }
            else {
                console.log(`${winner} wins the game! You have won ${this.playerWins} games!  The computer has won ${this.computerWins} games!`);
            }
        }
    
    
        computerChoice();
        whoWins();
        displayWin();
        
        setTimeout(this.playGame, 2000);
    
    }

}

const gamey = new Game(); 
gamey.playGame();

