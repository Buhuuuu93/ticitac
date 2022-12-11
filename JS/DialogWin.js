let OpenDialogWinContainer = document.getElementById("OpenDialogWinContainer");

let WhoIsWinnerItem = document.getElementById("WinDialogWhichPlayer");

let RoundResultItem1 = document.getElementById("RoundResult-Item1");
let RoundResultItem2 = document.getElementById("RoundResult-Item2");

let RoundResultItemNumber1 = document.getElementById("RoundResult-Item-Number1");
let RoundResultItemNumber2 = document.getElementById("RoundResult-Item-Number2");

let WinOrDrawText = document.getElementById("WinOrDrawText");

let LinkForBack = document.getElementById("LinkForBack");

let ResultX = 0;
let ResultO = 0;

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------- Funktionen um den Win-Dialog zu öffnen / Das Sieger Icon im Dialog einzufügen / dem Gewinner einen Punkt geben ---------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


function OpenWinDialog() {

    WhoIsWinnerItem.innerHTML = WhoIsWinnerItem.innerHTML.slice(0, -50);

    OpenDialogWinContainer.classList.add("OpenDialogWin-Container");
    LinkForBack.classList.add("LinkForBackOn");

    if (WhoIsWinner === 1) {
        WhoIsWinnerItem.innerHTML = WhoIsWinnerItem.innerHTML + IconO;
        WhoIsWinnerItem.classList.add(WhichColorForO1)
        WhoIsWinnerItem.classList.add(WhichIconForO)
        WhoIsWinnerItem.classList.add("WinDialog-Flex-Item2-Height1")
                WhoIsWinnerItem.classList.add("WinDialog-Flex-Item2-Animation");
        ResultO = ResultO + 1;
        WinOrDrawText.innerHTML = WinOrDrawText.innerHTML + "And the WINNER is";
        RoundResultItemNumber2.innerHTML = RoundResultItemNumber2.innerHTML.slice(0, -10);
        RoundResultItemNumber2.innerHTML = RoundResultItemNumber2.innerHTML + ResultO;
    } else if (WhoIsWinner === 2) {
        WhoIsWinnerItem.innerHTML = WhoIsWinnerItem.innerHTML + IconX;
        WhoIsWinnerItem.classList.add(WhichColorForX1)
        WhoIsWinnerItem.classList.add(WhichIconForX)
        WhoIsWinnerItem.classList.add("WinDialog-Flex-Item2-Height1")
                WhoIsWinnerItem.classList.add("WinDialog-Flex-Item2-Animation");
        ResultX = ResultX + 1;
        WinOrDrawText.innerHTML = WinOrDrawText.innerHTML + "And the WINNER is";
        RoundResultItemNumber1.innerHTML = RoundResultItemNumber1.innerHTML.slice(0, -10);
        RoundResultItemNumber1.innerHTML = RoundResultItemNumber1.innerHTML + ResultX;
    } else if (WhoIsWinner === 3) {
        WhoIsWinnerItem.innerHTML = WhoIsWinnerItem.innerHTML + "It is a Draw! Try it again";
        WhoIsWinnerItem.classList.add("WinDialog-Flex-Item2-Height2")
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------- Funktionen um die Revenge-Runde zu starten und alles zurückzusetzen (Refresh) --------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


async function FreshGame() {

    WhoPlay = Math.floor(Math.random() * 2);

    ResetPlayBtnWin();

    RemovePlayerIconX();
    RemovePlayerIconO();

    RemoveColorOandX();

    RemoveInnerHTML();

    RemoveDisplayColor();

    AlreadyWin = false;

    isStarted = false;

    WinColor1.classList.remove("Game-Item-Win");
    WinColor2.classList.remove("Game-Item-Win");
    WinColor3.classList.remove("Game-Item-Win");
    WinColor4.classList.remove("Game-Item-Win");
    WinColor5.classList.remove("Game-Item-Win");
    WinColor6.classList.remove("Game-Item-Win");
    WinColor7.classList.remove("Game-Item-Win");
    WinColor8.classList.remove("Game-Item-Win");
    WinColor9.classList.remove("Game-Item-Win");

    WinColor1.classList.remove("Game-Item-aDraw");
    WinColor2.classList.remove("Game-Item-aDraw");
    WinColor3.classList.remove("Game-Item-aDraw");
    WinColor4.classList.remove("Game-Item-aDraw");
    WinColor5.classList.remove("Game-Item-aDraw");
    WinColor6.classList.remove("Game-Item-aDraw");
    WinColor7.classList.remove("Game-Item-aDraw");
    WinColor8.classList.remove("Game-Item-aDraw");
    WinColor9.classList.remove("Game-Item-aDraw");

    OpenDialogWinContainer.classList.remove("OpenDialogWin-Container");

    GameContainerWin.classList.remove("Game-Container-Win");
    GameContainerWin.classList.remove("Game-Container-aDraw");

    LinkForBack.classList.remove("LinkForBackOn");

    WhoIsWinnerItem.classList.remove(WhichColorForO1);
    WhoIsWinnerItem.classList.remove(WhichColorForX1);

    WhoIsWinnerItem.classList.remove("WinDialog-Flex-Item2-Height1");
    WhoIsWinnerItem.classList.remove("WinDialog-Flex-Item2-Height2");

    WhoIsWinnerItem.classList.remove("WinDialog-Flex-Item2-Animation");

    WinOrDrawText.innerHTML = WinOrDrawText.innerHTML.slice(0, -20);

    PlayerDisplay.innerHTML = PlayerDisplay.innerHTML.slice(0, -30);

    if (WhoPlay === 0) {
    PlayerDisplay.classList.add(WhichColorForO1);
        PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameO;
        PayGegner(WhoPlay);
    } else if (WhoPlay === 1) {
    PlayerDisplay.classList.add(WhichColorForX1);
        PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameX;
    }

}

async function ResetPlayBtnWin() {
    PlayBtn1Win = 0;
    PlayBtn2Win = 0;
    PlayBtn3Win = 0;
    PlayBtn4Win = 0;
    PlayBtn5Win = 0;
    PlayBtn6Win = 0;
    PlayBtn7Win = 0;
    PlayBtn8Win = 0;
    PlayBtn9Win = 0;
}
async function RemovePlayerIconX() {
    PlayBtn1.classList.remove(WhichIconForX);
    PlayBtn2.classList.remove(WhichIconForX);
    PlayBtn3.classList.remove(WhichIconForX);
    PlayBtn4.classList.remove(WhichIconForX);
    PlayBtn5.classList.remove(WhichIconForX);
    PlayBtn6.classList.remove(WhichIconForX);
    PlayBtn7.classList.remove(WhichIconForX);
    PlayBtn8.classList.remove(WhichIconForX);
    PlayBtn9.classList.remove(WhichIconForX);
    WhoIsWinnerItem.classList.remove(WhichIconForX)
}

async function RemovePlayerIconO() {
    PlayBtn1.classList.remove(WhichIconForO);
    PlayBtn2.classList.remove(WhichIconForO);
    PlayBtn3.classList.remove(WhichIconForO);
    PlayBtn4.classList.remove(WhichIconForO);
    PlayBtn5.classList.remove(WhichIconForO);
    PlayBtn6.classList.remove(WhichIconForO);
    PlayBtn7.classList.remove(WhichIconForO);
    PlayBtn8.classList.remove(WhichIconForO);
    PlayBtn9.classList.remove(WhichIconForO);
    WhoIsWinnerItem.classList.remove(WhichIconForO)
}
async function RemoveColorOandX() {

    PlayBtn1.classList.remove(WhichColorForO1);
    PlayBtn1.classList.remove(WhichColorForX1);
    PlayBtn2.classList.remove(WhichColorForO1);
    PlayBtn2.classList.remove(WhichColorForX1);
    PlayBtn3.classList.remove(WhichColorForO1);
    PlayBtn3.classList.remove(WhichColorForX1);
    PlayBtn4.classList.remove(WhichColorForO1);
    PlayBtn4.classList.remove(WhichColorForX1);
    PlayBtn5.classList.remove(WhichColorForO1);
    PlayBtn5.classList.remove(WhichColorForX1);
    PlayBtn6.classList.remove(WhichColorForO1);
    PlayBtn6.classList.remove(WhichColorForX1);
    PlayBtn7.classList.remove(WhichColorForO1);
    PlayBtn7.classList.remove(WhichColorForX1);
    PlayBtn8.classList.remove(WhichColorForO1);
    PlayBtn8.classList.remove(WhichColorForX1);
    PlayBtn9.classList.remove(WhichColorForO1);
    PlayBtn9.classList.remove(WhichColorForX1);
}
async function RemoveInnerHTML() {
PlayBtn1.innerHTML = PlayBtn1.innerHTML.slice(0, -5);
PlayBtn2.innerHTML = PlayBtn2.innerHTML.slice(0, -5);
PlayBtn3.innerHTML = PlayBtn3.innerHTML.slice(0, -5);
PlayBtn4.innerHTML = PlayBtn4.innerHTML.slice(0, -5);
PlayBtn5.innerHTML = PlayBtn5.innerHTML.slice(0, -5);
PlayBtn6.innerHTML = PlayBtn6.innerHTML.slice(0, -5);
PlayBtn7.innerHTML = PlayBtn7.innerHTML.slice(0, -5);
PlayBtn8.innerHTML = PlayBtn8.innerHTML.slice(0, -5);
PlayBtn9.innerHTML = PlayBtn9.innerHTML.slice(0, -5);
}
async function RemoveDisplayColor() {

    PlayerDisplay.classList.remove(WhichColorForO1);
    PlayerDisplay.classList.remove(WhichColorForX1);

}