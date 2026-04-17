//Code Example for Closure

function seeScore(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}`);
    }
    function decreaseScore(points){
        score -= points;
        console.log(`+${points}`);
    }
    function getScore(points){
        return score;
    }

    return {increaseScore, decreaseScore, getScore};
}

const board = seeScore();
board.increaseScore(5);
board.increaseScore(7);
board.decreaseScore(3);
console.log(`Final Score is ${board.getScore()}`);