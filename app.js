var possibleRuns = [1,2,3,4,5,6];

var team1 = {
    name : "CSK",
    runs : [],
    score : 0
}

var team2 = {
    name : "MI",
    runs : [],
    score : 0
}

var turn;

window.onload = () => {
    selectTurn();
    updateButtonText();
    updateScore();
    updateRuns();
    updateNames();
}

var selectTurn = () => {
     turn = Math.round(Math.random()) + 1;
}

var updateButtonText =() => {
    var button = document.getElementById("strike-button");
    var result = document.getElementById("result");
    
    result.style.visibility = ""
    
    if(team1.runs.length == 6 && team2.runs.length == 6){
        button.remove();
        result.textContent = team1.score === team2.score ? `Match is Draw` : `${team1.score > team2.score ? team1.name : team2.name} wins`
    }
    else{
        turn = team1.runs.length == 6 ? 2 : team2.runs.length == 6 ? 1 : turn;
        button.textContent = `${turn == 1 ? team1.name : team2.name} Strike`

    }
}

var updateScore = () => {
    document.getElementById("team-1-score").textContent = team1.score;
    document.getElementById("team-2-score").textContent = team2.score;
}

var updateRuns = () => {
    var teamOneRuns = document.getElementById("team-1-runs").children;
    var teamTwoRuns = document.getElementById("team-2-runs").children;

    team1.runs.forEach( (run, index) => {
        teamOneRuns[index].textContent = run;
    } )

    team2.runs.forEach( (run, index) => {
        teamTwoRuns[index].textContent = run;
    } )
}

var updateNames = () => {
    document.getElementById("name1").textContent = "CSK";
    document.getElementById("name2").textContent = "MI";
}

var calculateScore = (runs) => {
    return runs.map( (run) => {
        return run == 'W' ? 0 : run;
    }).reduce( (total, run) => total + run)
}

var strikeButton =() => {
    var run = possibleRuns[Math.round(Math.random() * (possibleRuns.length - 1))]

    run = run == 5 ? 'W' : run;

    if(turn == 1) {
        team1.runs.push(run);
        team1.score = calculateScore(team1.runs);
    }
    else{
        team2.runs.push(run);
        team2.score = calculateScore(team2.runs);
    }
    updateButtonText();
    updateRuns();
    updateScore();
}