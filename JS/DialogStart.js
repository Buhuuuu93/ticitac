let PlayerX = document.getElementById("NamePlayerX");
let PlayerO = document.getElementById("NamePlayerO");

let PlayerDisplay = document.getElementById("PlayerDisplay");

let CloseDialogStartContainer = document.getElementById("CloseDialogStartContainer");

let LinkForBackStart = document.getElementById("LinkForBackStart");

let RoundResultIconX = document.getElementById("RoundResult-Item1");
let RoundResultIconO = document.getElementById("RoundResult-Item3");

let WhoPlay = Math.floor(Math.random() * 2);

let PlayerNameX;
let PlayerNameO;

let isStarted = false;

let StartDialogFlexItem3 = document.getElementById("StartDialogFlexItem3");

//----------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------- Funktionen um das Spiel zu starten / Setze alle notwendigen Parameter ------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


function StartGame() {

    console.log(PlayerX.value);
    console.log(PlayerO.value);

    isStarted = true;

    RoundResultIconX.classList.add(WhichColorForX1);
    RoundResultIconO.classList.add(WhichColorForO1);

    PlayerNameX = PlayerX.value;
    PlayerNameO = PlayerO.value;

    PlayerDisplay.innerHTML = PlayerDisplay.innerHTML.slice(0, -30);

    RoundResultItemNumber1.innerHTML = RoundResultItemNumber1.innerHTML + ResultO;
    RoundResultItemNumber2.innerHTML = RoundResultItemNumber2.innerHTML + ResultX;

    console.log(PlayerDisplay.classList);
    console.log(PlayerDisplay.classList);

    console.log();

    if (WhoPlay === 0) {
        PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameO;
        PlayerDisplay.classList.add(WhichColorForO1);
    } else if (WhoPlay === 1) {
        PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameX;
        PlayerDisplay.classList.add(WhichColorForX1);
    }

    console.log(PlayerDisplay.classList);

    StartDialogFlexItem3.classList.add("StartDialog-Flex-Item3-Animation");

    setTimeout(CloseDialogStartDelay, 2000);

}

function CloseDialogStartDelay() {
    CloseDialogStartContainer.classList.add("CloseDialogStart-Container");
    LinkForBackStart.classList.add("LinkForBackStartOut");
    StartDialogFlexItem3.classList.remove("StartDialog-Flex-Item3-Animation");
}




