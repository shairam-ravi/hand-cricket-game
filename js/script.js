var userTeam = '';
var computerTeam = '';

var bgImgs = {
    "csk" : "url('images/chennai-super-kings.png')",
    "mi" : "url('images/mumbai-indians.png')",
    "srh" : "url('images/sunrises-hyderabad.png')",
    "kkr" : "url('images/kolkata-knight-riders.png')",
    "dd" : "url('images/delhi-capitals.png')",
    "kxip" : "url('images/kings-xi-punjab.png')",
    "rcb" : "url('images/royal-challengers-bangalore.png')",
    "rr" : "url('images/rajasthan-royals.png')"
}

function teamChoice(teamId) {
    if(teamId.parentNode.id == 'user_teams') {
        if( teamId.disabled == true ){
            document.getElementById('user_error').innerHTML = "already selected";
        }
        else{
            if(userTeam != '') {
                document.getElementById('user_'+userTeam).style.borderColor = "";
                document.getElementById('user_'+userTeam).style.borderWidth = "";
                document.getElementById('comp_'+userTeam).disabled = false;
            }
            userTeam = teamId.id.split('_')[1];
            document.getElementById('comp_'+userTeam).disabled = true;
            document.getElementById('user_'+userTeam).style.borderColor = "#66ff33";
            document.getElementById('user_'+userTeam).style.borderWidth = "3px";
            console.log(userTeam);
            console.log(bgImgs[userTeam]);
        }
    }
    else {
        if( teamId.disabled == true ) {
            document.getElementById('comp_error').innerHTML = "already selected";
        }
        else {
            if(computerTeam != '') {
                document.getElementById('comp_'+computerTeam).style.borderColor = "";
                document.getElementById('comp_'+computerTeam).style.borderWidth = "";
                document.getElementById('user_'+computerTeam).disabled = false;
            }
            computerTeam = teamId.id.split('_')[1];
            document.getElementById('user_'+computerTeam).disabled = true;
            document.getElementById('comp_'+computerTeam).style.borderColor = "#66ff33";
            document.getElementById('comp_'+computerTeam).style.borderWidth = "3px";
            console.log(computerTeam);
            console.log(bgImgs[computerTeam]);
        }
    }
}

function gameLoad() {
    userTeam = localStorage.getItem('userTeam');
    computerTeam = localStorage.getItem('computerTeam');
    console.log(bgImgs[userTeam]);
    console.log(bgImgs[computerTeam]);
    document.getElementById('left_div').style.backgroundImage = bgImgs[userTeam];
    document.getElementById('right_div').style.backgroundImage = bgImgs[computerTeam];
    document.getElementById('userTeamName').innerHTML = userTeam;
    document.getElementById('compTeamName').innerHTML = computerTeam;
}

function saveData() {
    localStorage.setItem('userTeam', userTeam);
    localStorage.setItem('computerTeam', computerTeam);
}
