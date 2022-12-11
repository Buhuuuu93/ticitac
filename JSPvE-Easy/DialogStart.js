let PlayerX = document.getElementById("NamePlayerX");

let PlayerDisplay = document.getElementById("PlayerDisplay");

let CloseDialogStartContainer = document.getElementById("CloseDialogStartContainer");

let LinkForBackStart = document.getElementById("LinkForBackStart");

let RoundResultIconX = document.getElementById("RoundResult-Item1");
let RoundResultIconO = document.getElementById("RoundResult-Item3");

let WhoPlay = Math.floor(Math.random() * 2);
console.log(WhoPlay);

let ZufallsFarbe = Math.floor(Math.random() * 10 + 1);
let ZufallsIcon = Math.floor(Math.random() * 10 + 1);

console.log(ZufallsFarbe);
console.log(ZufallsIcon);

let PlayerNameX;
let PlayerNameO = "E-Player";

let isStarted = false;


//----------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------- Funktionen um das Spiel zu starten / Setze alle notwendigen Parameter ------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function StartGame() {
    console.log(PlayerX.value);

    if ("IconX" + ZufallsFarbe === WhichColorForX1) {
        ZufallsFarbe = Math.floor(Math.random() * 10 + 1);
        StartGame();
    } else {
        WhichColorForO1 = "IconX" + ZufallsFarbe;
    }
    if ("Icon" + ZufallsIcon === WhichIconForX) {
        ZufallsIcon = Math.floor(Math.random() * 10 + 1);
        StartGame();
    } else {
        WhichIconForO = "Icon" + ZufallsIcon;
    }

    isStarted = true;

    RoundResultIconX.classList.add(WhichColorForX1);
    RoundResultIconO.classList.add(WhichColorForO1);

    PlayerNameX = PlayerX.value;

    PlayerDisplay.innerHTML = PlayerDisplay.innerHTML.slice(0, -30);

    RoundResultItemNumber1.innerHTML = RoundResultItemNumber1.innerHTML.slice(0, -5);
    RoundResultItemNumber2.innerHTML = RoundResultItemNumber2.innerHTML.slice(0, -5);

    RoundResultItemNumber1.innerHTML = RoundResultItemNumber1.innerHTML + ResultO;
    RoundResultItemNumber2.innerHTML = RoundResultItemNumber2.innerHTML + ResultX;

    console.log(PlayerDisplay.classList);


    if (WhoPlay === 0) {
        PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameO;
        PlayerDisplay.classList.add(WhichColorForO1);
        PayGegner(WhoPlay);
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

//----------------------------------------------------------------------------------------------------------------------------------------//
//----------------- Funktionen um das SpielerIcon von X zu O oder O zu X zu ändern, Welcher Icon der Spiler wählt ------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

let ChangeString = document.getElementById("ChangeString");

function ChangeBtnIconStart() {

    if (IconX === "X") {
        RoundResultIconX.innerHTML = RoundResultIconX.innerHTML.slice(0, -50);
        RoundResultIconO.innerHTML = RoundResultIconO.innerHTML.slice(0, -50);
        LabelX.classList.add("ChangeBtnIconStart-looseItem2");
        ChangeString.classList.add("ChangeBtnIconStart-looseItem");
        setTimeout(DelayDelete, 900);
        IconX = "O";
        IconO = "X";
        RoundResultIconX.innerHTML = RoundResultIconX.innerHTML + "O";
        RoundResultIconO.innerHTML = RoundResultIconO.innerHTML + "X";
        setTimeout(DelaySetIconLabel1, 950);
        setTimeout(DelaySetIcon, 950);
        setTimeout(DelayRemoveAnimation, 2000);

    } else if (IconX === "O") {
        RoundResultIconX.innerHTML = RoundResultIconX.innerHTML.slice(0, -50);
        RoundResultIconO.innerHTML = RoundResultIconO.innerHTML.slice(0, -50);
        LabelX.classList.add("ChangeBtnIconStart-looseItem2");
        ChangeString.classList.add("ChangeBtnIconStart-looseItem");
        setTimeout(DelayDelete, 900);
        IconX = "X";
        IconO = "O";
        RoundResultIconX.innerHTML = RoundResultIconX.innerHTML + "X";
        RoundResultIconO.innerHTML = RoundResultIconO.innerHTML + "O";
        setTimeout(DelaySetIconLabel2, 950);
        setTimeout(DelaySetIcon2, 950);
        setTimeout(DelayRemoveAnimation, 2000);
    }

}

function DelayDelete() {
    ChangeString.innerHTML = ChangeString.innerHTML.slice(0, -50)
    LabelX.innerHTML = LabelX.innerHTML.slice(0, -50);
}

function DelaySetIconLabel1() {
    LabelX.innerHTML = LabelX.innerHTML + "O";
    LabelX.classList.add("ChangeBtnIconStart-getItem2");
}

function DelaySetIcon() {
    ChangeString.innerHTML = ChangeString.innerHTML + "X";
    ChangeString.classList.add("ChangeBtnIconStart-getItem");
}

function DelaySetIconLabel2() {
    LabelX.innerHTML = LabelX.innerHTML + "X";
    LabelX.classList.add("ChangeBtnIconStart-getItem2");
}

function DelaySetIcon2() {
    ChangeString.innerHTML = ChangeString.innerHTML + "O";
    ChangeString.classList.add("ChangeBtnIconStart-getItem");
}

function DelayRemoveAnimation() {
    ChangeString.classList.remove("ChangeBtnIconStart-looseItem");
    ChangeString.classList.remove("ChangeBtnIconStart-getItem");
    LabelX.classList.remove("ChangeBtnIconStart-looseItem2");
    LabelX.classList.remove("ChangeBtnIconStart-getItem2");
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------- Funktionen um das richtige Menu zu öffnen Farben für X oder O --------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


async function ChangeColorIconXOrO() {

    if (IconX === "O") {
        ChangeColorIconO();
    } else if (IconX === "X") {
        ChangeColorIconX();
    }

}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------- Funktionen um das richtige Menu zu öffnen Icon für X oder O --------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function OpenChooseXIconOrO() {

    if (IconX === "O") {
        OpenChooseOIcon();
    } else if (IconX === "X") {
        OpenChooseXIcon();
    }

}

