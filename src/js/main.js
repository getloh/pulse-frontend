
console.log("MainJS init");

let data;

//Fetch from JSON - default method, works using liveServer - https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer
async function getData(){
    return fetch("src/data/player-stats.json")
    .then(res => res.json())
    .then(json =>
    {
        data = json.players;
        return json.players;
    })
}

//! Comment out the above, and uncomment the below function if you don't have liveserver and just want to open the html file locally.
// async function getData(){
//     const jsonData = {
//         "players": [
//           {
//             "player": {
//               "info": {
//                 "position": "D",
//                 "shirtNum": 4,
//                 "positionInfo": "Centre/Right Central Defender"
//               },
//               "nationalTeam": {
//                 "isoCode": "BE",
//                 "country": "Belgium",
//                 "demonym": "Belgian"
//               },
//               "age": "27 years 139 days",
//               "name": {
//                 "first": "Toby",
//                 "last": "Alderweireld"
//               },
//               "id": 4916,
//               "currentTeam": {
//                 "name": "Tottenham Hotspur",
//                 "teamType": "FIRST",
//                 "shortName": "Spurs",
//                 "id": 21
//               }
//             },
//             "stats": [
//               {
//                 "name": "goals",
//                 "value": 5
//               },
//               {
//                 "name": "losses",
//                 "value": 20
//               },
//               {
//                 "name": "wins",
//                 "value": 48
//               },
//               {
//                 "name": "draws",
//                 "value": 23
//               },
//               {
//                 "name": "fwd_pass",
//                 "value": 1533
//               },
//               {
//                 "name": "goal_assist",
//                 "value": 2
//               },
//               {
//                 "name": "appearances",
//                 "value": 80
//               },
//               {
//                 "name": "mins_played",
//                 "value": 6953
//               },
//               {
//                 "name": "backward_pass",
//                 "value": 308
//               }
//             ]
//           },
//           {
//             "player": {
//               "info": {
//                 "position": "M",
//                 "shirtNum": 42,
//                 "positionInfo": "Centre Defensive Midfielder"
//               },
//               "nationalTeam": {
//                 "isoCode": "CI",
//                 "country": "Cote D'Ivoire",
//                 "demonym": "Ivorian"
//               },
//               "age": "33 years 67 days",
//               "name": {
//                 "first": "Yaya",
//                 "last": "Touré"
//               },
//               "id": 4148,
//               "currentTeam": {
//                 "name": "Manchester City",
//                 "teamType": "FIRST",
//                 "shortName": "Man City",
//                 "id": 11
//               }
//             },
//             "stats": [
//               {
//                 "name": "goals",
//                 "value": 65
//               },
//               {
//                 "name": "losses",
//                 "value": 49
//               },
//               {
//                 "name": "wins",
//                 "value": 149
//               },
//               {
//                 "name": "draws",
//                 "value": 35
//               },
//               {
//                 "name": "fwd_pass",
//                 "value": 4491
//               },
//               {
//                 "name": "goal_assist",
//                 "value": 35
//               },
//               {
//                 "name": "appearances",
//                 "value": 232
//               },
//               {
//                 "name": "mins_played",
//                 "value": 18919
//               },
//               {
//                 "name": "backward_pass",
//                 "value": 1995
//               }
//             ]
//           },
//           {
//             "player": {
//               "info": {
//                 "position": "F",
//                 "shirtNum": 10,
//                 "positionInfo": "Left/Centre/Right Second Striker"
//               },
//               "nationalTeam": {
//                 "isoCode": "GB-ENG",
//                 "country": "England",
//                 "demonym": "English"
//               },
//               "age": "30 years 269 days",
//               "name": {
//                 "first": "Wayne",
//                 "last": "Rooney"
//               },
//               "id": 2064,
//               "currentTeam": {
//                 "name": "Manchester United",
//                 "teamType": "FIRST",
//                 "shortName": "Man Utd",
//                 "id": 12
//               }
//             },
//             "stats": [
//               {
//                 "name": "goals",
//                 "value": 201
//               },
//               {
//                 "name": "losses",
//                 "value": 91
//               },
//               {
//                 "name": "wins",
//                 "value": 280
//               },
//               {
//                 "name": "draws",
//                 "value": 90
//               },
//               {
//                 "name": "fwd_pass",
//                 "value": 1795
//               },
//               {
//                 "name": "goal_assist",
//                 "value": 84
//               },
//               {
//                 "name": "appearances",
//                 "value": 461
//               },
//               {
//                 "name": "mins_played",
//                 "value": 27056
//               },
//               {
//                 "name": "backward_pass",
//                 "value": 1928
//               }
//             ]
//           },
//           {
//             "player": {
//               "info": {
//                 "position": "D",
//                 "shirtNum": 4,
//                 "positionInfo": "Centre Central Defender"
//               },
//               "nationalTeam": {
//                 "isoCode": "DE",
//                 "country": "Germany",
//                 "demonym": "German"
//               },
//               "age": "31 years 294 days",
//               "name": {
//                 "first": "Per",
//                 "last": "Mertesacker"
//               },
//               "id": 4246,
//               "currentTeam": {
//                 "name": "Arsenal",
//                 "teamType": "FIRST",
//                 "shortName": "Arsenal",
//                 "id": 1
//               }
//             },
//             "stats": [
//               {
//                 "name": "goals",
//                 "value": 8
//               },
//               {
//                 "name": "losses",
//                 "value": 45
//               },
//               {
//                 "name": "wins",
//                 "value": 117
//               },
//               {
//                 "name": "draws",
//                 "value": 41
//               },
//               {
//                 "name": "fwd_pass",
//                 "value": 4257
//               },
//               {
//                 "name": "appearances",
//                 "value": 187
//               },
//               {
//                 "name": "mins_played",
//                 "value": 16531
//               },
//               {
//                 "name": "backward_pass",
//                 "value": 535
//               }
//             ]
//           },
//           {
//             "player": {
//               "info": {
//                 "position": "M",
//                 "shirtNum": 26,
//                 "positionInfo": "Left/Right Winger"
//               },
//               "nationalTeam": {
//                 "isoCode": "DZ",
//                 "country": "Algeria",
//                 "demonym": "Algerian"
//               },
//               "age": "25 years 149 days",
//               "name": {
//                 "first": "Riyad",
//                 "last": "Mahrez"
//               },
//               "id": 8983,
//               "currentTeam": {
//                 "name": "Leicester City",
//                 "teamType": "FIRST",
//                 "shortName": "Leicester",
//                 "id": 26
//               }
//             },
//             "stats": [
//               {
//                 "name": "goals",
//                 "value": 22
//               },
//               {
//                 "name": "losses",
//                 "value": 23
//               },
//               {
//                 "name": "wins",
//                 "value": 35
//               },
//               {
//                 "name": "draws",
//                 "value": 21
//               },
//               {
//                 "name": "fwd_pass",
//                 "value": 687
//               },
//               {
//                 "name": "goal_assist",
//                 "value": 14
//               },
//               {
//                 "name": "appearances",
//                 "value": 71
//               },
//               {
//                 "name": "mins_played",
//                 "value": 5368
//               },
//               {
//                 "name": "backward_pass",
//                 "value": 323
//               }
//             ]
//           }
//         ]
//       }
//     data = jsonData.players;
//     return jsonData.players;   
// }

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