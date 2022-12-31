const energyCurrency = document.querySelector(".currencyinfo.energy")
const buttonClickManually = document.getElementById("buttonClickManually")
const startingStar = 10000;
let buttonNextUnlock = document.getElementById("nextUnlock");

let energy = 0;

function clickManually(number){
    energy = energy + number;
    energyCurrency.innerHTML = energy;
};

function getNextUnlock(){
    let unlockCost = 10;
    if(energy >= unlockCost){
        energy = energy - unlockCost;
        createNextTier();
    }
}

function createNextTier(){
    let changeTier = document.querySelector(`.${tiers[tier]}`);
    let newTier = document.createElement("div");
    let option1 = document.createElement("button");
    let option2 = document.createElement("button");
    let option3 = document.createElement("button");
    newTier.appendChild(option1);
    newTier.appendChild(option2);
    newTier.appendChild(option3);
    option1.innerHTML = "option1";
    option2.innerHTML = "option2";
    option3.innerHTML = "option3";
    console.log(changeTier.firstChild);
    changeTier.removeChild(changeTier.firstChild);
    changeTier.appendChild(newTier);
}

buttonClickManually.addEventListener("click", () =>{
    clickManually(1);
});

buttonNextUnlock.addEventListener("click", () =>{
    getNextUnlock();
});

var cursors = 0;

function buyCursor(){
    var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));     //works out the cost of this cursor
    if(energy >= cursorCost){                                   //checks that the player can afford the cursor
        cursors = cursors + 1;                                   //increases number of cursors
    	energy = energy - cursorCost;                          //removes the cookies spent
        document.getElementById('cursors').innerHTML = cursors;  //updates the number of cursors for the user
        document.getElementById('cookies').innerHTML = energy;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,cursors));       //works out the cost of the next cursor
    document.getElementById('cursorCost').innerHTML = nextCost;  //updates the cursor cost for the user
};

window.setInterval(function(){
	
	clickManually(cursors);
	
}, 50);