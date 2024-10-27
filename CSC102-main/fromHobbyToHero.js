/*First go at the rolling game.  Needs some additional commands to make it more adverserial
Functions as is 27 October 2024*/ 

function rollDice() {
    
    const roll = Math.floor(Math.random() * 6) + 1;//random number generator between 1 and 6

    if (roll === 1) {
        // Rolling a 1 will reset the roundScore to 0
        document.getElementById("message").innerHTML = "Awe, Shoot! You rolled a 1. There go all those points";//executes the message
        roundScore = 0;//resets score to 0
        document.getElementById("roundScore").innerHTML = "Round Score: " + roundScore;//round score is now a 0.  message displays new value of 0
    } else {
        // Adds points to the roundScore
        roundScore += roll;//adds total roll to roundScore
        document.getElementById("roundScore").innerHTML = "Round Score: " + roundScore;//retrieves roundScore value to add points from HTML and adds them to get the current score on "Round Score"
        document.getElementById("message").innerHTML = "You rolled a " + roll + ". Do you feel lucky?";//executes the message and results of "const roll"
    }
}
function holdPoints() {
    // Adds roundScore to totalScore and resets roundScore to 0
    totalScore += roundScore;
    roundScore = 0;
    
    document.getElementById("totalScore").innerHTML = "Total Score: " + totalScore;//displays new value
    document.getElementById("roundScore").innerHTML = "Round Score: " + roundScore;//displays new value
    document.getElementById("message").innerHTML = "You held! Overly cautious?";//displays message
}