/* GAME DATA */

var gameData = {
    wood: 0,
    woodPerClick: 1,
    woodPerClickCost: 10,
    woodPerHouseCost: 20,
    stone: 0,
    stonePerClick: 1,
    stonePerClickCost: 10,
    stonePerHouseCost: 10,
    houses: 1,
    houseCost: 10
}


/* ESTABLISHING AND LOADING SAVE GAME USING COOKIES */



/* function saveGame() {       // Saves the game
    var villageSaveGame = {
        wood: wood,
        woodPerClick: woodPerClick,
        woodPerClickCost: woodPerClickCost,
        woodPerHouseCost: woodPerHouseCost,

        stone: stone,
        stonePerClick: stonePerClick,
        stonePerClickCost: stonePerClickCost,
        stonePerHouseCost: stonePerHouseCost,

        houses: houses,
        housesCost: houseCost
    }
    var exdate = new Date();     // Registers current date for expiry
    exdate.setDate(exdate.getDate() + 60);    // Expiry date for cookie
    document.cookie = "villageSave" + "=" + JSON.stringify(villageSaveGame) + ";path=/;expires" + d.toGMTString();
}

function loadGame() {
    var cookieArr = document.cookie.split(";");     // Split cookie string, store in array

    for (var i = 0; i < cookieArr.length; i++) {    // Loop through array
        var cookiePair = cookieArr[i].split("=");

        if ("villageSave" == cookiePair[0].trim()) {    // Remove whitespace, load game if possible
            gameData = JSON.parse(cookiePair[1]);
        }
    }
} */


/* var villageSave = { // Store variables to be saved
    wood: wood,
    woodPerClick: woodPerClick,
    woodPerClickCost: woodPerClickCost,
    woodPerHouseCost: woodPerHouseCost,
    stone: stone,
    stonePerClick: stonePerClick,
    stonePerClickCost: stonePerClickCost,
    stonePerHouseCost: stonePerHouseCost,
    houses: houses,
    housesCost: houseCost
} */

// Save the game
function saveGame() {
    localStorage.setItem("villageGameSave", JSON.stringify(gameData)); // Save to local storage
}

// Load the game
function loadGame() {
    var savedGame = JSON.parse(localStorage.getItem("villageGameSave")); // Retrieve save from local storage

    // Ensure no errors if player loads old save where new features are not saved
    if (typeof savedGame.wood !== "undefined") wood = savedGame.wood;
    if (typeof savedGame.woodPerClick !== "undefined") woodPerClick = savedGame.woodPerClick;
    if (typeof savedGame.woodPerClickCost !== "undefined") woodPerClickCost = savedGame.woodPerClickCost;
    if (typeof savedGame.woodPerHouseCost !== "undefined") woodPerHouseCost = savedGame.woodPerHouseCost;
    if (typeof savedGame.stone !== "undefined") stone = savedGame.stone;
    if (typeof savedGame.stonePerClick !== "undefined") stonePerClick = savedGame.stonePerClick;
    if (typeof savedGame.stonePerClickCost !== "undefined") stonePerClickCost = savedGame.stonePerClickCost;
    if (typeof savedGame.stonePerHouseCost !== "undefined") stonePerHouseCost = savedGame.stonePerHouseCost;
    if (typeof savedGame.houses !== "undefined") houses = savedGame.houses;
    if (typeof savedGame.housesCost !== "undefined") wood = savedGame.housesCost;
}



/* WINDOW ON LOAD TO LOAD GAME */

window.onload = function() {
    loadGame(); // Load the game (if possible)

    // Update all values upon load
    document.getElementById(id).innerHTML = wood;
    document.getElementById(id).innerHTML = woodPerHouseCost;
    document.getElementById(id).innerHTML = woodPerClickCost;
    document.getElementById(id).innerHTML = woodPerClick;
    document.getElementById(id).innerHTML = stone;
    document.getElementById(id).innerHTML = stonePerHouseCost;
    document.getElementById(id).innerHTML = stonePerClick;
    document.getElementById(id).innerHTML = stonePerClickCost;
    document.getElementById(id).innerHTML = houses;
    document.getElementById(id).innerHTML = housesCost;
}



/* GAME LOOP FOR SAVING */

setInterval(function() {
    saveGame();
}, 30000); // 30000 ms -> saves game every 30 s



/* UPDATE FUNCTION TO UPDATE VALUES */

function update(id, content) {
    document.getElementById(id).innerHTML = content;
}



/* ACTIONS */

// Chopping wood
function chopWood() {
    gameData.wood += gameData.woodPerClick;
    update("woodChopped", gameData.wood + " wood chopped");
}

// Mining stone
function mineStone() {
    gameData.stone += gameData.stonePerClick;
    update("stoneMined", gameData.stone + " stone mined");
}


/* BUILDINGS */

// Build a house - increase cost for each house built
function buildHouse() {
    if (gameData.wood >= gameData.woodPerHouseCost && gameData.stone >= gameData.stonePerHouseCost) {
            gameData.wood -= gameData.woodPerHouseCost;
            gameData.stone -= gameData.stonePerHouseCost;
            gameData.houses += 1;
            gameData.woodPerHouseCost *= 2;
            gameData.stonePerHouseCost *= 2;
            update("numHouses", gameData.houses + " houses in the village.");
            update("woodChopped", gameData.wood + " wood chopped");
            update("stoneMined", gameData.stone + " stone mined");
            update("buildHouses", "Build a house Cost: " + gameData.woodPerHouseCost + " wood " + gameData.stonePerHouseCost + " stone");
    };
}

/* WORKSHOP - UPGRADE TOOLS */

// Upgrade axe - increase cost for each axe
function buyWoodPerClick() {
    if (gameData.wood >= gameData.woodPerClickCost) {
            gameData.wood -= gameData.woodPerClickCost;
            gameData.woodPerClick += 1;
            gameData.woodPerClickCost *= 2;
            update("woodChopped", gameData.wood + " wood chopped");
            update("perClickUpgradeAxe", "Upgrade axe (currently level " + gameData.woodPerClick + ") Cost: " + gameData.woodPerClickCost + " wood");
    };
}

// Upgrade pickaxe - increase cost for each axe
function buyStonePerClick() {
    if (gameData.stone >= gameData.stonePerClickCost) {
            gameData.stone -= gameData.stonePerClickCost;
            gameData.stonePerClick += 1;
            gameData.stonePerClickCost *= 2;
            update("stoneMined", gameData.stone + " stone mined");
            update("perClickUpgradePickaxe", "Upgrade pickaxe (currently level " + gameData.stonePerClick + ") Cost: " + gameData.stonePerClickCost + " stone");
    };
}


/* 
// Format for high numbers courtesy of u/YhvrTheSecond on Reddit
// Maybe not necessary?
function format(number, type) {
	let exponent = Math.floor(Math.log10(number))
	let mantissa = number / Math.pow(10, exponent)
	if (exponent < 3) return number.toFixed(1)
	if (type == "scientific") return mantissa.toFixed(2) + "e" + exponent
	if (type == "engineering") return (Math.pow(10, exponent % 3) * mantissa).toFixed(2) + "e" + (Math.floor(exponent / 3) * 3)
}
*/


/* NAVIGATION */

// Tabs
function tab(tab) {
    document.getElementById("mountainsMenu").style.display = "none";
    document.getElementById("villageMenu").style.display = "none";
    document.getElementById("workshopMenu").style.display = "none";
    document.getElementById(tab).style.display = "inline-block";
}

tab("mountainsMenu");    // Mountains as standard tab
