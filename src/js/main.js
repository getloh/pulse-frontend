
console.log("MainJS init");

let data;

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

function createSelect(player){
    let newPlayer = document.createElement('option');
    newPlayer.value = player.player.id;
    newPlayer.innerHTML = player.player.name.first + " " + player.player.name.last;
    document.getElementById('playerDropdown').appendChild(newPlayer);
}

// createSelect("DAVE")
// createSelect("WEB")
// createSelect("GARY")

function onSelectPlayer(id){

    
    //portrait, logo, appearances, goals, assists, GoalsPerMatch, passesPerMin
}



async function init(){
    let data = await getData();
    //Sort the Array by firstname (?) and then create a select option for each one.
    data.sort((a,b)=> a.player.name.first.localeCompare(b.player.name.first)).map((player)=> {
        createSelect(player)
    })
}

function seedInitialPlayer(){

}

init();