/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, dice, hold, imgLoc, playerNumber;
scores = [0, 0];
dice = 0;
hold = 0;
imgLoc = 0;
playerNumber = 0;
var gamePlaying = true;
document.querySelector('.dice').style.display = 'none';
document.querySelector('#current-0').innerHTML = 0;
document.querySelector('#current-1').innerHTML = 0;
document.querySelector('#score-0').innerHTML = 0;
document.querySelector('#score-1').innerHTML = 0;

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        document.querySelector('#name-0').innerHTML = 'player 1';
        document.querySelector('#name-1').innerHTML = 'player 2';

        document.querySelector('#name-0').style.color = 'black';

        document.querySelector('#name-1').style.color = 'black';
        document.querySelector('.dice').style.display = 'none';

        dice = Math.floor(Math.random() * 6) + 1;
        imgLoc = 'dice-' + dice + '.png';
        document.querySelector('.dice').src = imgLoc;
        document.querySelector('.dice').style.display = 'block';

        if (dice !== 1) {
            hold += dice;
            document.querySelector('#current-' + playerNumber).innerHTML = hold;
        } else {
            playerNumber === 0 ? (playerNumber = 1) : (playerNumber = 0);
            hold = 0;
            document.querySelector('#current-0').innerHTML = 0;

            document.querySelector('#current-1').innerHTML = 0;
            document.querySelector('.player-0-panel').classList.toggle('active');

            document.querySelector('.player-1-panel').classList.toggle('active');
            document.querySelector('.dice').style.display = 'none';
        }
    }
});
document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[playerNumber] += hold;

    document.querySelector('#score-' + playerNumber).innerHTML = scores[playerNumber];
    document.querySelector('#current-' + playerNumber).innerHTML = 0;
    hold = 0;
    if (scores[playerNumber] >= 20) {
        document.querySelector('#name-' + playerNumber).innerHTML = '!WINNER';

        document.querySelector('#name-' + playerNumber).style.color = 'red';
        scores[playerNumber] = 0;
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('#current-0').innerHTML = 0;
        document.querySelector('#current-1').innerHTML = 0;
        document.querySelector('#score-0').innerHTML = 0;
        document.querySelector('#score-1').innerHTML = 0;
        gamePlaying = false;
    } else {
        playerNumber === 0 ? (playerNumber = 1) : (playerNumber = 0);

        document.querySelector('.player-0-panel').classList.toggle('active');

        document.querySelector('.player-1-panel').classList.toggle('active');
        document.querySelector('.dice').style.display = 'none';
    }

    // hold = 0;

    //
});

document.querySelector('.btn-new').addEventListener('click', function() {
    scores = [0, 0];
    playerNumber = 0;
    hold = 0;
    gamePlaying = true;
    document.querySelector('#name-0').innerHTML = 'player 1';
    document.querySelector('#name-1').innerHTML = 'player 2';

    document.querySelector('.dice').style.display = 'none';
    document.querySelector('#current-0').innerHTML = 0;
    document.querySelector('#current-1').innerHTML = 0;
    document.querySelector('#score-0').innerHTML = 0;
    document.querySelector('#score-1').innerHTML = 0;
});