
console.log("MainJS init");

let data;

//Fetch from JSON
async function getData(){
    return fetch("src/data/player-stats.json")
    .then(res => res.json())
    .then(json =>
    {
        data = json.players;
        // console.log(data);
        return json.players;
    })
}

// Create a single <option> row in the playerSelect
function createSelect(player){
    let newPlayer = document.createElement('option');
    newPlayer.value = player.player.id;
    newPlayer.innerHTML = player.player.name.first + " " + player.player.name.last;
    document.getElementById('playerDropdown').appendChild(newPlayer);
}

//When you select a player via the dropdown, the lower fields are populated
function onSelectPlayer(id){
    let portrait = document.getElementById('playerPicture');
    let teamLogo = document.getElementById('teamLogo');
    let name = document.getElementById('playerName');
    let position = document.getElementById('playerPosition');
    let statsAppearances = document.getElementById('statsAppearances');
    let statsGoals = document.getElementById('statsGoals');
    let statsAssists = document.getElementById('statsAssists');
    let statsGPM = document.getElementById('statsGoalsPerMatch');
    let statsPPM = document.getElementById('statsPassesPerMinute');

    const pathPlayers = './src/assets/players/p'
    const pathBadges = './src/assets/badges/'

    const playerData = data.find((player) => player.player.id == id);

    portrait.src = pathPlayers + playerData.player.id + ".png";
    portrait.alt = playerData.player.name.first + " " + playerData.player.name.last;
    teamLogo.src = pathBadges + playerData.player.currentTeam.id + ".png";
    teamLogo.alt = playerData.player.currentTeam.shortName;
    name.innerText = playerData.player.name.first + " " + playerData.player.name.last
    position.innerText = playerData.player.info.positionInfo?.split(" ")?.pop()
    statsAppearances.innerText = pdVal('appearances')
    statsGoals.innerText = pdVal('goals')
    statsAssists.innerText = pdVal('goal_assist')
    statsGPM.innerText = getGPM();
    statsPPM.innerText = getPPM();

    function pdVal(statToFind){
        let val = playerData.stats.find(stat => stat.name == statToFind)?.value
        return val || 0;
    }

    function getGPM(playerData){
        const goals = pdVal('goals')
        const matches = pdVal('appearances')
        return (goals/matches).toFixed(2)
    }
    function getPPM(playerData){
        const fPass = pdVal('fwd_pass');
        const bPass = pdVal('backward_pass');
        const minsPlayed = pdVal('mins_played');
        return ((fPass + bPass)/minsPlayed).toFixed(2)
    }
}

//Runs at start
async function init(){
    let data = await getData();
    //Sort the Array by firstname (?) and then create a select option for each one.
    data.sort((a,b)=> a.player.name.first.localeCompare(b.player.name.first)).map((player)=> {
        createSelect(player)
    })
    seedInitialPlayer();
}

//Starting state
function seedInitialPlayer(){
    onSelectPlayer(4916)
}

init();