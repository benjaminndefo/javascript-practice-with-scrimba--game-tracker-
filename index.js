// let first = document.getElementById("first");
// let second = document.getElementById("second");
// let third = document.getElementById("third");

let homeScore = document.getElementById("homeScore");
let awayScore = document.getElementById("awayScore");

let homescore = 0;
let awayscore = 0;



// home buttons
function homefirstbutton(){
    homescore += 1;
    homeScore.textContent = homescore;
}

function homesecondbutton(){
    homescore += 2;
    homeScore.textContent = homescore;
}

function homethirdbutton(){
    homescore += 3;
    homeScore.textContent = homescore;
}





// away buttons
function awayfirstbutton(){
    awayscore += 1;
    awayScore.textContent = awayscore;
}

function awaysecondbutton(){
    awayscore += 2;
    awayScore.textContent = awayscore;
}

function awaythirdbutton(){
    awayscore += 3;
    awayScore.textContent = awayscore;
}


function homereset(){
    let homeresetscore = 0;
    homeScore.textContent = homeresetscore;
}

function awayreset(){
    let awayresetscore = 0;
    awayScore.textContent = awayresetscore;
}