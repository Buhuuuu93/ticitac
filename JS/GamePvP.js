const IconX = "X";
const IconO = "O";

let PlayBtn1 = document.getElementById("IconColor1");
let PlayBtn2 = document.getElementById("IconColor2");
let PlayBtn3 = document.getElementById("IconColor3");
let PlayBtn4 = document.getElementById("IconColor4");
let PlayBtn5 = document.getElementById("IconColor5");
let PlayBtn6 = document.getElementById("IconColor6");
let PlayBtn7 = document.getElementById("IconColor7");
let PlayBtn8 = document.getElementById("IconColor8");
let PlayBtn9 = document.getElementById("IconColor9");

let Player1;
let Player2;

let PlayBtn1Win = 0;
let PlayBtn2Win = 0;
let PlayBtn3Win = 0;
let PlayBtn4Win = 0;
let PlayBtn5Win = 0;
let PlayBtn6Win = 0;
let PlayBtn7Win = 0;
let PlayBtn8Win = 0;
let PlayBtn9Win = 0;


//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------- Funktionen zum setzten der Spieler-Icons / if = Spieler Icon O / else if = Spieler Icon X --------------------------//
//---------------------------------Reihenfolge Spielfelder = 1 / 2 / 3 / 4 / 5 / 6 / 7 / 8 / 9--------------------------------------------//

function SetIcon1() {
    if (AlreadyWin === false && PlayBtn1Win === 0 && WhoPlay === 0) {
        PlayBtn1.classList.add(WhichIconForO);
        PlayBtn1.classList.add(WhichColorForO1);
        PlayBtn1.innerHTML = PlayBtn1.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn1Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn1Win === 0) {
        PlayBtn1.classList.add(WhichIconForX);
        PlayBtn1.classList.add(WhichColorForX1);
        PlayBtn1.innerHTML = PlayBtn1.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn1Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

function SetIcon2() {
    if (AlreadyWin === false && PlayBtn2Win === 0 && WhoPlay === 0) {
        PlayBtn2.classList.add(WhichIconForO);
        PlayBtn2.classList.add(WhichColorForO1);
        PlayBtn2.innerHTML = PlayBtn2.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn2Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn2Win === 0) {
        PlayBtn2.classList.add(WhichIconForX);
        PlayBtn2.classList.add(WhichColorForX1);
        PlayBtn2.innerHTML = PlayBtn2.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn2Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

function SetIcon3() {
    if (AlreadyWin === false && PlayBtn3Win === 0 && WhoPlay === 0) {
        PlayBtn3.classList.add(WhichIconForO);
        PlayBtn3.classList.add(WhichColorForO1);
        PlayBtn3.innerHTML = PlayBtn3.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn3Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn3Win === 0) {
        PlayBtn3.classList.add(WhichIconForX);
        PlayBtn3.classList.add(WhichColorForX1);
        PlayBtn3.innerHTML = PlayBtn3.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn3Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

function SetIcon4() {
    if (AlreadyWin === false && PlayBtn4Win === 0 && WhoPlay === 0) {
        PlayBtn4.classList.add(WhichIconForO);
        PlayBtn4.classList.add(WhichColorForO1);
        PlayBtn4.innerHTML = PlayBtn4.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn4Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn4Win === 0) {
        PlayBtn4.classList.add(WhichIconForX);
        PlayBtn4.classList.add(WhichColorForX1);
        PlayBtn4.innerHTML = PlayBtn4.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn4Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

function SetIcon5() {
    if (AlreadyWin === false && PlayBtn5Win === 0 && WhoPlay === 0) {
        PlayBtn5.classList.add(WhichIconForO);
        PlayBtn5.classList.add(WhichColorForO1);
        PlayBtn5.innerHTML = PlayBtn5.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn5Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn5Win === 0) {
        PlayBtn5.classList.add(WhichIconForX);
        PlayBtn5.classList.add(WhichColorForX1);
        PlayBtn5.innerHTML = PlayBtn5.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn5Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

function SetIcon6() {
    if (AlreadyWin === false && PlayBtn6Win === 0 && WhoPlay === 0) {
        PlayBtn6.classList.add(WhichIconForO);
        PlayBtn6.classList.add(WhichColorForO1);
        PlayBtn6.innerHTML = PlayBtn6.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn6Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn6Win === 0) {
        PlayBtn6.classList.add(WhichIconForX);
        PlayBtn6.classList.add(WhichColorForX1);
        PlayBtn6.innerHTML = PlayBtn6.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn6Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

function SetIcon7() {
    if (AlreadyWin === false && PlayBtn7Win === 0 && WhoPlay === 0) {
        PlayBtn7.classList.add(WhichIconForO);
        PlayBtn7.classList.add(WhichColorForO1);
        PlayBtn7.innerHTML = PlayBtn7.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn7Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn7Win === 0) {
        PlayBtn7.classList.add(WhichIconForX);
        PlayBtn7.classList.add(WhichColorForX1);
        PlayBtn7.innerHTML = PlayBtn7.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn7Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

function SetIcon8() {
    if (AlreadyWin === false && PlayBtn8Win === 0 && WhoPlay === 0) {
        PlayBtn8.classList.add(WhichIconForO);
        PlayBtn8.classList.add(WhichColorForO1);
        PlayBtn8.innerHTML = PlayBtn8.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn8Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn8Win === 0) {
        PlayBtn8.classList.add(WhichIconForX);
        PlayBtn8.classList.add(WhichColorForX1);
        PlayBtn8.innerHTML = PlayBtn8.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn8Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

function SetIcon9() {
    if (AlreadyWin === false && PlayBtn9Win === 0 && WhoPlay === 0) {
        PlayBtn9.classList.add(WhichIconForO);
        PlayBtn9.classList.add(WhichColorForO1);
        PlayBtn9.innerHTML = PlayBtn9.innerHTML + IconO;
        WhoPlay = 1;
        PlayBtn9Win = 1;
        AddPlayernameX();
        PlayerDisplay.classList.remove(WhichColorForO1);
        PlayerDisplay.classList.add(WhichColorForX1);
        CheckIfWin();
    } else if (WhoPlay === 1 && PlayBtn9Win === 0) {
        PlayBtn9.classList.add(WhichIconForX);
        PlayBtn9.classList.add(WhichColorForX1);
        PlayBtn9.innerHTML = PlayBtn9.innerHTML + IconX;
        WhoPlay = 0;
        PlayBtn9Win = 2;
        AddPlayernameO();
        PlayerDisplay.classList.remove(WhichColorForX1);
        PlayerDisplay.classList.add(WhichColorForO1);
        CheckIfWin();
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------- Funktionen um die Spielernamen im Display einzufügen ---------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


function AddPlayernameX() {
    PlayerDisplay.innerHTML = PlayerDisplay.innerHTML.slice(0, -30);
    PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameX;
}

function AddPlayernameO() {
    PlayerDisplay.innerHTML = PlayerDisplay.innerHTML.slice(0, -30);
    PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameO;
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------- Funktionen für die Überprüfung, ob einer von beiden gewonnen hat oder ob Unentschieden ---------------------------//
//---------------------------------------------------Für alle Win-Kombinationen-----------------------------------------------------------//


let WinColor1 = document.getElementById("PlayBtn1");
let WinColor2 = document.getElementById("PlayBtn2");
let WinColor3 = document.getElementById("PlayBtn3");
let WinColor4 = document.getElementById("PlayBtn4");
let WinColor5 = document.getElementById("PlayBtn5");
let WinColor6 = document.getElementById("PlayBtn6");
let WinColor7 = document.getElementById("PlayBtn7");
let WinColor8 = document.getElementById("PlayBtn8");
let WinColor9 = document.getElementById("PlayBtn9");

let GameContainerWin = document.getElementById("Game-Container");

let AlreadyWin = false;

let WhoIsWinner = 0;

const TimeoutforWinDialog = 1000;

async function CheckIfWin() {

    if (AlreadyWin === false) {

        CheckWaagrecht1();
        CheckWaagrecht11();
        CheckWaagrecht111();
        CheckWaagrecht2();
        CheckWaagrecht22();
        CheckWaagrecht222();
        CheckSenkrecht1();
        CheckSenkrecht11();
        CheckSenkrecht111();
        CheckSenkrecht2();
        CheckSenkrecht22();
        CheckSenkrecht222();
        CheckDiagonal1();
        CheckDiagonal11();
        CheckDiagonal2();
        CheckDiagonal22();
        aDraw();

    }
}


async function CheckWaagrecht1() {

    if (PlayBtn1Win === 1 && PlayBtn4Win === 1 && PlayBtn7Win === 1) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor1.classList.add("Game-Item-Win");
        WinColor4.classList.add("Game-Item-Win");
        WinColor7.classList.add("Game-Item-Win");
        WhoIsWinner = 1;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckWaagrecht11() {
    if (PlayBtn2Win === 1 && PlayBtn5Win === 1 && PlayBtn8Win === 1) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor2.classList.add("Game-Item-Win");
        WinColor5.classList.add("Game-Item-Win");
        WinColor8.classList.add("Game-Item-Win");
        WhoIsWinner = 1;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckWaagrecht111() {
    if (PlayBtn3Win === 1 && PlayBtn6Win === 1 && PlayBtn9Win == 1) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor3.classList.add("Game-Item-Win");
        WinColor6.classList.add("Game-Item-Win");
        WinColor9.classList.add("Game-Item-Win");
        WhoIsWinner = 1;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckWaagrecht2() {
    if (PlayBtn1Win === 2 && PlayBtn4Win === 2 && PlayBtn7Win === 2) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor1.classList.add("Game-Item-Win");
        WinColor4.classList.add("Game-Item-Win");
        WinColor7.classList.add("Game-Item-Win");
        WhoIsWinner = 2;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckWaagrecht22() {
    if (PlayBtn2Win === 2 && PlayBtn5Win === 2 && PlayBtn8Win === 2) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor2.classList.add("Game-Item-Win");
        WinColor5.classList.add("Game-Item-Win");
        WinColor8.classList.add("Game-Item-Win");
        WhoIsWinner = 2;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckWaagrecht222() {
    if (PlayBtn3Win === 2 && PlayBtn6Win === 2 && PlayBtn9Win === 2) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor3.classList.add("Game-Item-Win");
        WinColor6.classList.add("Game-Item-Win");
        WinColor9.classList.add("Game-Item-Win");
        WhoIsWinner = 2;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckSenkrecht1() {
    if (PlayBtn1Win === 1 && PlayBtn2Win === 1 && PlayBtn3Win === 1) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor1.classList.add("Game-Item-Win");
        WinColor2.classList.add("Game-Item-Win");
        WinColor3.classList.add("Game-Item-Win");
        WhoIsWinner = 1;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckSenkrecht11() {
    if (PlayBtn4Win === 1 && PlayBtn5Win === 1 && PlayBtn6Win === 1) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor4.classList.add("Game-Item-Win");
        WinColor5.classList.add("Game-Item-Win");
        WinColor6.classList.add("Game-Item-Win");
        WhoIsWinner = 1;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckSenkrecht111() {
    if (PlayBtn7Win === 1 && PlayBtn8Win === 1 && PlayBtn9Win === 1) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor7.classList.add("Game-Item-Win");
        WinColor8.classList.add("Game-Item-Win");
        WinColor9.classList.add("Game-Item-Win");
        WhoIsWinner = 1;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckSenkrecht2() {
    if (PlayBtn1Win === 2 && PlayBtn2Win === 2 && PlayBtn3Win === 2) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor1.classList.add("Game-Item-Win");
        WinColor2.classList.add("Game-Item-Win");
        WinColor3.classList.add("Game-Item-Win");
        WhoIsWinner = 2;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckSenkrecht22() {
    if (PlayBtn4Win === 2 && PlayBtn5Win === 2 && PlayBtn6Win === 2) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor4.classList.add("Game-Item-Win");
        WinColor5.classList.add("Game-Item-Win");
        WinColor6.classList.add("Game-Item-Win");
        WhoIsWinner = 2;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckSenkrecht222() {
    if (PlayBtn7Win === 2 && PlayBtn8Win === 2 && PlayBtn9Win === 2) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor7.classList.add("Game-Item-Win");
        WinColor8.classList.add("Game-Item-Win");
        WinColor9.classList.add("Game-Item-Win");
        WhoIsWinner = 2;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckDiagonal1() {

    if (PlayBtn1Win === 1 && PlayBtn5Win === 1 && PlayBtn9Win === 1) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor1.classList.add("Game-Item-Win");
        WinColor5.classList.add("Game-Item-Win");
        WinColor9.classList.add("Game-Item-Win");
        WhoIsWinner = 1;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckDiagonal11() {
    if (PlayBtn3Win === 1 && PlayBtn5Win === 1 && PlayBtn7Win === 1) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor3.classList.add("Game-Item-Win");
        WinColor5.classList.add("Game-Item-Win");
        WinColor7.classList.add("Game-Item-Win");
        WhoIsWinner = 1;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckDiagonal2() {
    if (PlayBtn1Win === 2 && PlayBtn5Win === 2 && PlayBtn9Win === 2) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor1.classList.add("Game-Item-Win");
        WinColor5.classList.add("Game-Item-Win");
        WinColor9.classList.add("Game-Item-Win");
        WhoIsWinner = 2;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

async function CheckDiagonal22() {
    if (PlayBtn3Win === 2 && PlayBtn5Win === 2 && PlayBtn7Win === 2) {
        AlreadyWin = true;
        GameContainerWin.classList.add("Game-Container-Win");
        WinColor3.classList.add("Game-Item-Win");
        WinColor5.classList.add("Game-Item-Win");
        WinColor7.classList.add("Game-Item-Win");
        WhoIsWinner = 2;
        setTimeout(OpenWinDialog, TimeoutforWinDialog);
    }
}

function aDraw() {
    if (PlayBtn1Win > 0) {
        if (PlayBtn2Win > 0) {
            if (PlayBtn3Win > 0) {
                if (PlayBtn4Win > 0) {
                    if (PlayBtn5Win > 0) {
                        if (PlayBtn6Win > 0) {
                            if (PlayBtn7Win > 0) {
                                if (PlayBtn8Win > 0) {
                                    if (PlayBtn9Win > 0) {
                                        if (AlreadyWin === false) {
                                            GameContainerWin.classList.add("Game-Container-aDraw");
                                            WhoIsWinner = 3;
                                            setTimeout(OpenWinDialog, TimeoutforWinDialog);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------- Funktionen um nur das TicTacToe-Feld zu reseten -----------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


function ResetPlayField() {

    WhoPlay = Math.floor(Math.random() * 2);

    PlayerDisplay.innerHTML = PlayerDisplay.innerHTML.slice(0, -30);

    ResetPlayBtnWin();

    RemovePlayerIconX();
    RemovePlayerIconO();

    RemoveColorOandX();

    RemoveInnerHTML();

    ResetPossibleWay();

    RemoveDisplayColor();

    if (WhoPlay === 0) {
        PlayerDisplay.classList.add(WhichColorForO1);
        PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameO;
        PayGegner(WhoPlay);
    } else if (WhoPlay === 1) {
        PlayerDisplay.classList.add(WhichColorForX1);
        PlayerDisplay.innerHTML = PlayerDisplay.innerHTML + PlayerNameX;
    }

}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------- Funktionen um Alles zu resten und den Start-Dialog zu öffnen (neues Spiel) ----------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


async function ResetPlayGame() {
    FreshGame();

    RoundResultItemNumber1.innerHTML = RoundResultItemNumber1.innerHTML.slice(0, -5);
    RoundResultItemNumber2.innerHTML = RoundResultItemNumber2.innerHTML.slice(0, -5);

    ResultO = 0;
    ResultX = 0;

    CloseDialogStartContainer.classList.remove("CloseDialogStart-Container");
    LinkForBackStart.classList.remove("LinkForBackStartOut");

}
