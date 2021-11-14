// write a function to show high scores

function showHighScore () {
    let highScores = JSON.parse(window.localStorage.getItem('highscores')) || [];

highScores.sort(function (x, y){
    return y.score - x.score;
});
highScores.forEach(function (score) {
    let li = document.createElement('li');
    li.textContent = score.initials + ' - ' + score.score;

    let ol = document.getElementById('highscores');
    ol.appendChild(li);
    
});
}

// function to clear high score

function clearHighScore () {
    window.localStorage.removeItem('highscores');
    window.location.reload();
}
document.getElementById('clear').onclick = clearHighScore;

showHighScore();