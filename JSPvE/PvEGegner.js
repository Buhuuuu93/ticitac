
let WhichWinWay;
let WhichWinWaySeted = false;

let PossibleOrNotWinWay0 = true;
let PossibleOrNotWinWay1 = true;
let PossibleOrNotWinWay2 = true;
let PossibleOrNotWinWay3 = true;
let PossibleOrNotWinWay4 = true;
let PossibleOrNotWinWay5 = true;
let PossibleOrNotWinWay6 = true;
let PossibleOrNotWinWay7 = true;

let GoLastOption = false;

const WhichWinWayArray = [0, 1, 2, 3, 4, 5, 6, 7];
console.log(WhichWinWayArray.length);

//----------------------------------------------------------------------------------------------------------------------------------------//
//----------2 Options: Option 1= Zufälliges setzen auf ein freies Feld / Option 2= Zufälliger Win Weg (Auswahl welcher Weg)---------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function NumberForWhichWay() {

    if (WhichWinWaySeted === false) {

        console.log(WhichWinWay);
        console.log(WhichWinWayArray);

        console.log(PossibleOrNotWinWay0);
        console.log(PossibleOrNotWinWay1);
        console.log(PossibleOrNotWinWay2);
        console.log(PossibleOrNotWinWay3);
        console.log(PossibleOrNotWinWay4);
        console.log(PossibleOrNotWinWay5);
        console.log(PossibleOrNotWinWay6);
        console.log(PossibleOrNotWinWay7);

        if (PossibleOrNotWinWay0 === false && PossibleOrNotWinWay1 === false && PossibleOrNotWinWay2 === false && PossibleOrNotWinWay3 === false && PossibleOrNotWinWay4 === false && PossibleOrNotWinWay5 === false && PossibleOrNotWinWay6 === false && PossibleOrNotWinWay7 === false) {

            InLastCasePlayStep()
            GoLastOption = true;

        } else if (PossibleOrNotWinWay0 === true || PossibleOrNotWinWay1 === true || PossibleOrNotWinWay2 === true || PossibleOrNotWinWay3 === true || PossibleOrNotWinWay4 === true || PossibleOrNotWinWay5 === true || PossibleOrNotWinWay6 === true || PossibleOrNotWinWay7 === true) {

            WhichWinWay = Math.floor(Math.random() * 8);
            WhichWinWaySeted = true;
            console.log("88888888888")

        }
    }
    console.log(WhichWinWaySeted);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------------------------------Haupt-Funktion-------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function PayGegner() {
    setTimeout(PlayGegner, 200);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-----------------------------------------------------------Gegner-----------------------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function PlayGegner() {

    DefStepLET = false;

    AttackStep();

    if (AttackWinStep === false) {

        DefStep();

        if (DefStepLET === false) {

            NumberForWhichWay();

            console.log(WhichWinWay);

            if (GoLastOption === false) {

                if (WhichWinWayArray[WhichWinWay] === 0) {
                    PossibleWay0();
                } else if (WhichWinWayArray[WhichWinWay] === 1) {
                    PossibleWay1();
                } else if (WhichWinWayArray[WhichWinWay] === 2) {
                    PossibleWay2();
                } else if (WhichWinWayArray[WhichWinWay] === 3) {
                    PossibleWay3();
                } else if (WhichWinWayArray[WhichWinWay] === 4) {
                    PossibleWay4();
                } else if (WhichWinWayArray[WhichWinWay] === 5) {
                    PossibleWay5();
                } else if (WhichWinWayArray[WhichWinWay] === 6) {
                    PossibleWay6();
                } else if (WhichWinWayArray[WhichWinWay] === 7) {
                    PossibleWay7();
                }
            }
        }
    }

}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------------Vor-Check ob der Win-Weg Möglich ist--------------------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function PossibleWay0() {

    let a = false;

    if (PlayBtn1Win === 0 || PlayBtn1Win === 1) {
        if (PlayBtn2Win === 0 || PlayBtn2Win === 1) {
            if (PlayBtn3Win === 0 || PlayBtn3Win === 1) {

                WinWay0Func(WhoPlay);
                a = true;

            }
        }
    }

    if (a === false) {
        WhichWinWaySeted = false;
        PayGegner(WhoPlay);
    }
}

async function PossibleWay1() {

    let a = false;

    if (PlayBtn4Win === 0 || PlayBtn4Win === 1) {
        if (PlayBtn5Win === 0 || PlayBtn5Win === 1) {
            if (PlayBtn6Win === 0 || PlayBtn6Win === 1) {

                WinWay1Func(WhoPlay);
                a = true;

            }
        }
    }

    if (a === false) {
        WhichWinWaySeted = false;
        PayGegner(WhoPlay);
    }
}

async function PossibleWay2() {

    let a = false;

    if (PlayBtn7Win === 0 || PlayBtn7Win === 1) {
        if (PlayBtn8Win === 0 || PlayBtn8Win === 1) {
            if (PlayBtn9Win === 0 || PlayBtn9Win === 1) {

                WinWay2Func(WhoPlay);
                a = true;

            }
        }
    }

    if (a === false) {
        WhichWinWaySeted = false;
        PayGegner(WhoPlay);
    }
}

async function PossibleWay3() {

    let a = false;

    if (PlayBtn1Win === 0 || PlayBtn1Win === 1) {
        if (PlayBtn4Win === 0 || PlayBtn4Win === 1) {
            if (PlayBtn7Win === 0 || PlayBtn7Win === 1) {

                WinWay3Func(WhoPlay);
                a = true;

            }
        }
    }

    if (a === false) {
        WhichWinWaySeted = false;
        PayGegner(WhoPlay);
    }
}

async function PossibleWay4() {

    let a = false;

    if (PlayBtn2Win === 0 || PlayBtn2Win === 1) {
        if (PlayBtn5Win === 0 || PlayBtn5Win === 1) {
            if (PlayBtn8Win === 0 || PlayBtn8Win === 1) {

                WinWay4Func(WhoPlay);
                a = true;

            }
        }
    }

    if (a === false) {
        WhichWinWaySeted = false;
        PayGegner(WhoPlay);
    }
}

async function PossibleWay5() {

    let a = false;

    if (PlayBtn3Win === 0 || PlayBtn3Win === 1) {
        if (PlayBtn6Win === 0 || PlayBtn6Win === 1) {
            if (PlayBtn9Win === 0 || PlayBtn9Win === 1) {

                WinWay5Func(WhoPlay);
                a = true;

            }
        }
    }

    if (a === false) {
        WhichWinWaySeted = false;
        PayGegner(WhoPlay);
    }
}

async function PossibleWay6() {

    let a = false;

    if (PlayBtn1Win === 0 || PlayBtn1Win === 1) {
        if (PlayBtn5Win === 0 || PlayBtn5Win === 1) {
            if (PlayBtn9Win === 0 || PlayBtn9Win === 1) {

                WinWay6Func(WhoPlay);
                a = true;

            }
        }
    }

    if (a === false) {
        WhichWinWaySeted = false;
        PayGegner(WhoPlay);
    }
}

async function PossibleWay7() {

    let a = false;

    if (PlayBtn7Win === 0 || PlayBtn7Win === 1) {
        if (PlayBtn5Win === 0 || PlayBtn5Win === 1) {
            if (PlayBtn3Win === 0 || PlayBtn3Win === 1) {

                WinWay7Func(WhoPlay);
                a = true;

            }
        }
    }

    if (a === false) {
        WhichWinWaySeted = false;
        PayGegner(WhoPlay);
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn kein Win Weg möglich ist = Setzen auf das erste freie Feld------------------------------------------//
//---------------------------------------------Immer vierte und letzte Option-------------------------------------------------------------//

function InLastCasePlayStep() {

    for (let i = 0; i <= 9; i++) {

        if (i === 1 && PlayBtn1Win === 0) {
            SetIcon1();
            i = 10;
        }
        if (i === 2 && PlayBtn2Win === 0) {
            SetIcon2();
            i = 10;
        }
        if (i === 3 && PlayBtn3Win === 0) {
            SetIcon3();
            i = 10;
        }
        if (i === 4 && PlayBtn4Win === 0) {
            SetIcon4();
            i = 10;
        }
        if (i === 5 && PlayBtn5Win === 0) {
            SetIcon5();
            i = 10;
        }
        if (i === 6 && PlayBtn6Win === 0) {
            SetIcon6();
            i = 10;
        }
        if (i === 7 && PlayBtn7Win === 0) {
            SetIcon7();
            i = 10;
        }
        if (i === 8 && PlayBtn8Win === 0) {
            SetIcon8();
            i = 10;
        }
        if (i === 9 && PlayBtn9Win === 0) {
            SetIcon9();
            i = 10;
        }
    }

}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn Feld 1 vom Spieler besetzt, deaktiviere Win Weg 0 / 3 / 6 ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr1() {
    PossibleOrNotWinWay0 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 0) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }
    }
}
function DeleteArrayNr11() {
    PossibleOrNotWinWay3 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 3) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }
    }
}
function DeleteArrayNr111() {
    PossibleOrNotWinWay6 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 6) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn Feld 2 vom Spieler besetzt, deaktiviere Win Weg 0 / 4 ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr2() {
    PossibleOrNotWinWay0 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 0) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr22() {
    PossibleOrNotWinWay4 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 4) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn Feld 3 vom Spieler besetzt, deaktiviere Win Weg 0 / 5 / 7 ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr3() {
    PossibleOrNotWinWay0 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 0) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr33() {
    PossibleOrNotWinWay5 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 5) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr333() {
    PossibleOrNotWinWay7 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 7) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn Feld 4 vom Spieler besetzt, deaktiviere Win Weg 1 / 3 ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr4() {
    PossibleOrNotWinWay1 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 1) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr44() {
    PossibleOrNotWinWay3 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 3) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------Wenn Feld 5 vom Spieler besetzt, deaktiviere Win Weg 1 / 4 / 6 / 7 ---------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr5() {
    PossibleOrNotWinWay1 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 1) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr55() {
    PossibleOrNotWinWay4 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 4) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr555() {
    PossibleOrNotWinWay6 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 6) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr5555() {
    PossibleOrNotWinWay7 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 7) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn Feld 6 vom Spieler besetzt, deaktiviere Win Weg 1 / 5 ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr6() {
    PossibleOrNotWinWay1 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 1) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr66() {
    PossibleOrNotWinWay5 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 5) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn Feld 7 vom Spieler besetzt, deaktiviere Win Weg 2 / 3 / 7 ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr7() {
    PossibleOrNotWinWay2 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 2) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr77() {
    PossibleOrNotWinWay3 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 3) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr777() {
    PossibleOrNotWinWay7 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 7) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn Feld 8 vom Spieler besetzt, deaktiviere Win Weg 2 / 4 ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr8() {
    PossibleOrNotWinWay2 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 2) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr88() {
    PossibleOrNotWinWay4 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 4) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------------Wenn Feld 9 vom Spieler besetzt, deaktiviere Win Weg 2 / 5 / 6 ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function DeleteArrayNr9() {
    PossibleOrNotWinWay2 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 2) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr99() {
    PossibleOrNotWinWay5 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 5) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
}
function DeleteArrayNr999() {
    PossibleOrNotWinWay6 = false;
    for (let i = 0; i === WhichWinWayArray.length; i++) {
        if (WhichWinWayArray[i] === 6) {
            delete WhichWinWayArray.splice(WhichWinWayArray[i], 1);
        }

    }
    console.log(WhichWinWayArray);
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------------------- Ausführen des Win Weges, durch suche eines freien Feldes in der 3er Kombi------------------------------------//
//--------------------------------------------------Immer dritte Option-------------------------------------------------------------------//

async function WinWay0Func(WhoPlay) {

    if (WhoPlay === 0) {

        for (let i = 0; i < 20; i++) {

            let WinStep = Math.floor(Math.random() * 3);

            if (WinStep === 0 && PlayBtn1Win === 0) {
                SetIcon1();
                i = 21;
            } else if (WinStep === 1 && PlayBtn2Win === 0) {
                SetIcon2();
                i = 21;
            } else if (WinStep === 2 && PlayBtn3Win === 0) {
                SetIcon3();
                i = 21;
            }
        }
    }
}

async function WinWay1Func(WhoPlay) {

    if (WhoPlay === 0) {

        for (let i = 0; i < 20; i++) {

            let WinStep = Math.floor(Math.random() * 3);

            if (WinStep === 0 && PlayBtn4Win === 0) {
                SetIcon4();
                i = 21;
            } else if (WinStep === 1 && PlayBtn5Win === 0) {
                SetIcon5();
                i = 21;
            } else if (WinStep === 2 && PlayBtn6Win === 0) {
                SetIcon6();
                i = 21;
            }
        }
    }
}

async function WinWay2Func(WhoPlay) {

    if (WhoPlay === 0) {

        for (let i = 0; i < 20; i++) {

            let WinStep = Math.floor(Math.random() * 3);

            if (WinStep === 0 && PlayBtn7Win === 0) {
                SetIcon7();
                i = 21;
            } else if (WinStep === 1 && PlayBtn8Win === 0) {
                SetIcon8();
                i = 21;
            } else if (WinStep === 2 && PlayBtn9Win === 0) {
                SetIcon9();
                i = 21;
            }
        }
    }
}





async function WinWay3Func(WhoPlay) {

    if (WhoPlay === 0) {

        for (let i = 0; i < 20; i++) {

            let WinStep = Math.floor(Math.random() * 3);

            if (WinStep === 0 && PlayBtn1Win === 0) {
                SetIcon1();
                i = 21;
            } else if (WinStep === 1 && PlayBtn4Win === 0) {
                SetIcon4();
                i = 21;
            } else if (WinStep === 2 && PlayBtn7Win === 0) {
                SetIcon7();
                i = 21;
            }
        }
    }
}

async function WinWay4Func(WhoPlay) {

    if (WhoPlay === 0) {

        for (let i = 0; i < 20; i++) {

            let WinStep = Math.floor(Math.random() * 3);

            if (WinStep === 0 && PlayBtn2Win === 0) {
                SetIcon2();
                i = 21;
            } else if (WinStep === 1 && PlayBtn5Win === 0) {
                SetIcon5();
                i = 21;
            } else if (WinStep === 2 && PlayBtn8Win === 0) {
                SetIcon8();
                i = 21;
            }
        }
    }
}

async function WinWay5Func(WhoPlay) {

    if (WhoPlay === 0) {

        for (let i = 0; i < 20; i++) {

            let WinStep = Math.floor(Math.random() * 3);

            if (WinStep === 0 && PlayBtn3Win === 0) {
                SetIcon3();
                i = 21;
            } else if (WinStep === 1 && PlayBtn6Win === 0) {
                SetIcon6();
                i = 21;
            } else if (WinStep === 2 && PlayBtn9Win === 0) {
                SetIcon9();
                i = 21;
            }
        }
    }
}

async function WinWay6Func(WhoPlay) {

    if (WhoPlay === 0) {

        for (let i = 0; i < 20; i++) {

            let WinStep = Math.floor(Math.random() * 3);

            if (WinStep === 0 && PlayBtn1Win === 0) {
                SetIcon1();
                i = 21;
            } else if (WinStep === 1 && PlayBtn5Win === 0) {
                SetIcon5();
                i = 21;
            } else if (WinStep === 2 && PlayBtn9Win === 0) {
                SetIcon9();
                i = 21;
            }
        }
    }
}

async function WinWay7Func(WhoPlay) {

    if (WhoPlay === 0) {

        for (let i = 0; i < 20; i++) {

            let WinStep = Math.floor(Math.random() * 3);

            if (WinStep === 0 && PlayBtn7Win === 0) {
                SetIcon7();
                i = 21;
            } else if (WinStep === 1 && PlayBtn5Win === 0) {
                SetIcon5();
                i = 21;
            } else if (WinStep === 2 && PlayBtn3Win === 0) {
                SetIcon3();
                i = 21;
            }
        }
    }
}



//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------- Überprüfen ob der Spieler gewinnen könnte -> wenn ja Setze aud das mögliche <<Gewinnfled>> Defense ----------------------//
//---------------------------------------------------Immer zweite Option------------------------------------------------------------------//

let DefStepLET = false;

async function DefStep() {

    let StepDone = false;

    //--------------------------------------------------------------------------//


    for (let i = 0; i <= 7; i++) {

        if (i === 0) {

            const DefArray = [PlayBtn1Win, PlayBtn2Win, PlayBtn3Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 2 && DefArray[2] === 0 && DefArray[1] === 2) {
                    SetIcon3();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 2 && DefArray[1] === 0 && DefArray[2] === 2) {
                    SetIcon2();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 2 && DefArray[0] === 0 && DefArray[2] === 2) {
                    SetIcon3();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 1) {

            const DefArray = [PlayBtn4Win, PlayBtn5Win, PlayBtn6Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 2 && DefArray[2] === 0 && DefArray[1] === 2) {
                    SetIcon6();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 2 && DefArray[1] === 0 && DefArray[2] === 2) {
                    SetIcon5();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 2 && DefArray[0] === 0 && DefArray[2] === 2) {
                    SetIcon4();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 2) {

            const DefArray = [PlayBtn7Win, PlayBtn8Win, PlayBtn9Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 2 && DefArray[2] === 0 && DefArray[1] === 2) {
                    SetIcon9();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 2 && DefArray[1] === 0 && DefArray[2] === 2) {
                    SetIcon8();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 2 && DefArray[0] === 0 && DefArray[2] === 2) {
                    SetIcon7();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 3) {

            const DefArray = [PlayBtn1Win, PlayBtn4Win, PlayBtn7Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 2 && DefArray[2] === 0 && DefArray[1] === 2) {
                    SetIcon7();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 2 && DefArray[1] === 0 && DefArray[2] === 2) {
                    SetIcon4();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 2 && DefArray[0] === 0 && DefArray[2] === 2) {
                    SetIcon1();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 4) {

            const DefArray = [PlayBtn2Win, PlayBtn5Win, PlayBtn8Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 2 && DefArray[2] === 0 && DefArray[1] === 2) {
                    SetIcon8();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 2 && DefArray[1] === 0 && DefArray[2] === 2) {
                    SetIcon5();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 2 && DefArray[0] === 0 && DefArray[2] === 2) {
                    SetIcon2();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 5) {


            const DefArray = [PlayBtn3Win, PlayBtn6Win, PlayBtn9Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 2 && DefArray[2] === 0 && DefArray[1] === 2) {
                    SetIcon9();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 2 && DefArray[1] === 0 && DefArray[2] === 2) {
                    SetIcon6();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 2 && DefArray[0] === 0 && DefArray[2] === 2) {
                    SetIcon3();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 6) {


            const DefArray = [PlayBtn1Win, PlayBtn5Win, PlayBtn9Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 2 && DefArray[2] === 0 && DefArray[1] === 2) {
                    SetIcon9();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 2 && DefArray[1] === 0 && DefArray[2] === 2) {
                    SetIcon5();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 2 && DefArray[0] === 0 && DefArray[2] === 2) {
                    SetIcon1();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 7) {

            const DefArray = [PlayBtn3Win, PlayBtn5Win, PlayBtn7Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 2 && DefArray[2] === 0 && DefArray[1] === 2) {
                    SetIcon7();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 2 && DefArray[1] === 0 && DefArray[2] === 2) {
                    SetIcon5();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 2 && DefArray[0] === 0 && DefArray[2] === 2) {
                    SetIcon3();
                    StepDone = true;
                    DefStepLET = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        }
    }
}


//----------------------------------------------------------------------------------------------------------------------------------------//
//-------------- Überprüfen ob der E-Gegner gewinnen könnte -> wenn ja Setze aud das mögliche <<Gewinnfled>> Attack ----------------------//
//-----------------------------------------------------Immer erste Option-----------------------------------------------------------------//

let AttackWinStep = false;


async function AttackStep() {

    let StepDone = false;

    //--------------------------------------------------------------------------//


    for (let i = 0; i <= 7; i++) {

        if (i === 0) {

            const DefArray = [PlayBtn1Win, PlayBtn2Win, PlayBtn3Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 1 && DefArray[2] === 0 && DefArray[1] === 1) {
                    SetIcon3();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 1 && DefArray[1] === 0 && DefArray[2] === 1) {
                    SetIcon2();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 1 && DefArray[0] === 0 && DefArray[2] === 1) {
                    SetIcon3();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 1) {

            const DefArray = [PlayBtn4Win, PlayBtn5Win, PlayBtn6Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 1 && DefArray[2] === 0 && DefArray[1] === 1) {
                    SetIcon6();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 1 && DefArray[1] === 0 && DefArray[2] === 1) {
                    SetIcon5();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 1 && DefArray[0] === 0 && DefArray[2] === 1) {
                    SetIcon4();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 2) {

            const DefArray = [PlayBtn7Win, PlayBtn8Win, PlayBtn9Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 1 && DefArray[2] === 0 && DefArray[1] === 1) {
                    SetIcon9();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 1 && DefArray[1] === 0 && DefArray[2] === 1) {
                    SetIcon8();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 1 && DefArray[0] === 0 && DefArray[2] === 1) {
                    SetIcon7();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 3) {

            const DefArray = [PlayBtn1Win, PlayBtn4Win, PlayBtn7Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 1 && DefArray[2] === 0 && DefArray[1] === 1) {
                    SetIcon7();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 1 && DefArray[1] === 0 && DefArray[2] === 1) {
                    SetIcon4();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 1 && DefArray[0] === 0 && DefArray[2] === 1) {
                    SetIcon1();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 4) {

            const DefArray = [PlayBtn2Win, PlayBtn5Win, PlayBtn8Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 1 && DefArray[2] === 0 && DefArray[1] === 1) {
                    SetIcon8();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 1 && DefArray[1] === 0 && DefArray[2] === 1) {
                    SetIcon5();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 1 && DefArray[0] === 0 && DefArray[2] === 1) {
                    SetIcon2();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 5) {


            const DefArray = [PlayBtn3Win, PlayBtn6Win, PlayBtn9Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 1 && DefArray[2] === 0 && DefArray[1] === 1) {
                    SetIcon9();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 1 && DefArray[1] === 0 && DefArray[2] === 1) {
                    SetIcon6();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 1 && DefArray[0] === 0 && DefArray[2] === 1) {
                    SetIcon3();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 6) {


            const DefArray = [PlayBtn1Win, PlayBtn5Win, PlayBtn9Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 1 && DefArray[2] === 0 && DefArray[1] === 1) {
                    SetIcon9();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 1 && DefArray[1] === 0 && DefArray[2] === 1) {
                    SetIcon5();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 1 && DefArray[0] === 0 && DefArray[2] === 1) {
                    SetIcon1();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        } else if (i === 7) {

            const DefArray = [PlayBtn3Win, PlayBtn5Win, PlayBtn7Win];

            for (let a = 0; a < 3; a++) {
                if (a === 0 && DefArray[0] === 1 && DefArray[2] === 0 && DefArray[1] === 1) {
                    SetIcon7();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 1 && DefArray[0] === 1 && DefArray[1] === 0 && DefArray[2] === 1) {
                    SetIcon5();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
                if (a === 2 && DefArray[1] === 1 && DefArray[0] === 0 && DefArray[2] === 1) {
                    SetIcon3();
                    StepDone = true;
                    AttackWinStep = true;
                    break;
                }
            }

            if (StepDone === true) {
                break;
            }

            //--------------------------------------------------------------------------//

        }
    }
}




