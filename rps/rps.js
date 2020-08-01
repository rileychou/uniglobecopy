const playerHand = document.querySelector('.playerHand')
const compHand = document.querySelector('.compHand')
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const buttons = document.querySelectorAll('button');
const winnerScores = [0, 0];

for (let i = 0 ; i < buttons.length ; i++) {
    buttons[i].addEventListener('click', playGame);
}

function playGame(e) {
    let playerSelection = e.target.innerText;
    let computerSelection = Math.random();

    if (computerSelection < .34) {
        computerSelection = 'Rock';
    } else if (computerSelection <= .67) {
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }

    let result = checkWinner(playerSelection, computerSelection);

    if (result === 'Player') {
        result += ' wins!';
        winnerScores[0]++;
    }

    if (result === 'Computer') {
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw') {
        result += '. It\'s a tie!'
    }

    score.innerHTML = '<p class="sizing">Player: [ ' + winnerScores[0] + ' ] Computer: [ ' + winnerScores[1] + ' ]</p>';

    messenger('Player: <strong>' + playerSelection + '</strong><br>Computer: <strong>' + computerSelection + '</strong><br>' + result);


}

function messenger(selectionMessage) {
    message.innerHTML = '<p class="sizing">'+ selectionMessage +'</p>';
}

function checkWinner(player, computer) {
    if (player === computer) {
        if (player === 'Rock') {
            playerHand.innerHTML = "<img src=\"rock.png\" width=\"300px\">";
            compHand.innerHTML = "<img src=\"rock.png\" width=\"300px\">";
        }
        else if (player === 'Paper') {
            playerHand.innerHTML = "<img src=\"paper.png\" width=\"300px\">";
            compHand.innerHTML = "<img src=\"paper.png\" width=\"300px\">";
        }
        else if (player === 'Scissors') {
            playerHand.innerHTML = "<img src=\"scissors.png\" width=\"300px\">";
            compHand.innerHTML = "<img src=\"scissors.png\" width=\"300px\">";
        }
        return 'Draw';
    }

    if (player === 'Rock') {
        playerHand.innerHTML = "<img src=\"rock.png\" width=\"300px\">";
        if (computer === 'Paper') {
            compHand.innerHTML = "<img src=\"paper.png\" width=\"300px\">";
            return 'Computer';
        } else {
            compHand.innerHTML = "<img src=\"scissors.png\" width=\"300px\">";
            return 'Player';
        }
    }

    if (player === 'Paper') {
        playerHand.innerHTML = "<img src=\"paper.png\" width=\"300px\">";
        if (computer === 'Scissors') {
            compHand.innerHTML = "<img src=\"scissors.png\" width=\"300px\">";
            return 'Computer';
        } else {
            compHand.innerHTML = "<img src=\"rock.png\" width=\"300px\">";
            return 'Player';
        }
    }

    if (player === 'Scissors') {
        playerHand.innerHTML = "<img src=\"scissors.png\" width=\"300px\">";
        if (computer === 'Rock') {
            compHand.innerHTML = "<img src=\"rock.png\" width=\"300px\">";
            return 'Computer';
        } else {
            compHand.innerHTML = "<img src=\"paper.png\" width=\"300px\">";
            return 'Player';
        }
    }
}
