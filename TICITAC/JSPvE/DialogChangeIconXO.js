const LabelX = document.getElementById("LabelX");
const LabelO = document.getElementById("LabelO");

const ChangeIconXContainer = document.getElementById("ChangeIconXContainer");
const ChangeIconOContainer = document.getElementById("ChangeIconOContainer");


let WhichIconForX = undefined;
let WhichIconForO = undefined;

let WhichColorForX1 = "StandartColorX";
let WhichColorForO1 = "StandartColorO";


//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------ Funktionen um die Icon Variante auszuwählen -> X --------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


function OpenChooseXIcon() {
    CloseDialogStartContainer.classList.add("CloseDialogStart-Container");
    LinkForBackStart.classList.add("LinkForBackStartOut");
    ChangeIconXContainer.classList.add("OpenChangeIconX-Container");
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

function ChangeIconX1() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon1");
    WhichIconForX = "Icon1";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX2() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon2");
    WhichIconForX = "Icon2";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX3() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon3");
    WhichIconForX = "Icon3";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX4() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon4");
    WhichIconForX = "Icon4";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX5() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon5");
    WhichIconForX = "Icon5";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX6() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon6");
    WhichIconForX = "Icon6";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX7() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon7");
    WhichIconForX = "Icon7";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX8() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon8");
    WhichIconForX = "Icon8";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX9() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon9");
    WhichIconForX = "Icon9";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconX10() {
    ResetFontFamilyX();
    LabelX.classList.add("Icon10");
    WhichIconForX = "Icon10";
    ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    CheckAllPlayBtnForChange1();
}

function ResetFontFamilyX() {

    LabelX.classList.remove("Icon1");
    LabelX.classList.remove("Icon2");
    LabelX.classList.remove("Icon3");
    LabelX.classList.remove("Icon4");
    LabelX.classList.remove("Icon5");
    LabelX.classList.remove("Icon6");
    LabelX.classList.remove("Icon7");
    LabelX.classList.remove("Icon8");
    LabelX.classList.remove("Icon9");
    LabelX.classList.remove("Icon10");

    PlayBtn1.classList.remove(WhichIconForX);
    PlayBtn2.classList.remove(WhichIconForX);
    PlayBtn3.classList.remove(WhichIconForX);
    PlayBtn4.classList.remove(WhichIconForX);
    PlayBtn5.classList.remove(WhichIconForX);
    PlayBtn6.classList.remove(WhichIconForX);
    PlayBtn7.classList.remove(WhichIconForX);
    PlayBtn8.classList.remove(WhichIconForX);
    PlayBtn9.classList.remove(WhichIconForX);

}

function BacktoGameMenuX() {
    if (isStarted !== true) {
        CloseDialogStartContainer.classList.remove("CloseDialogStart-Container");
        LinkForBackStart.classList.remove("LinkForBackStartOut");
        ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
    } else if (isStarted === true) {
        ChangeIconXContainer.classList.remove("OpenChangeIconX-Container");
        MenuContainer.classList.add("OpenMenu-Container");
        LinkMnuiD.classList.add("LinkMenuActiv");
    }
}



//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------ Funktionen um die Icon Variante auszuwählen -> O --------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//



function OpenChooseOIcon() {
    CloseDialogStartContainer.classList.add("CloseDialogStart-Container");
    LinkForBackStart.classList.add("LinkForBackStartOut");
    ChangeIconOContainer.classList.add("OpenChangeIconO-Container");
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

function ChangeIconO1() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon1");
    WhichIconForX = "Icon1";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO2() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon2");
    WhichIconForX = "Icon2";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO3() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon3");
    WhichIconForX = "Icon3";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO4() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon4");
    WhichIconForX = "Icon4";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO5() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon5");
    WhichIconForX = "Icon5";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO6() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon6");
    WhichIconForX = "Icon6";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO7() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon7");
    WhichIconForX = "Icon7";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO8() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon8");
    WhichIconForX = "Icon8";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO9() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon9");
    WhichIconForX = "Icon9";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ChangeIconO10() {
    ResetFontFamilyO();
    LabelX.classList.add("Icon10");
    WhichIconForX = "Icon10";
    ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    CheckAllPlayBtnForChange1();
}

function ResetFontFamilyO() {

    LabelX.classList.remove("Icon1");
    LabelX.classList.remove("Icon2");
    LabelX.classList.remove("Icon3");
    LabelX.classList.remove("Icon4");
    LabelX.classList.remove("Icon5");
    LabelX.classList.remove("Icon6");
    LabelX.classList.remove("Icon7");
    LabelX.classList.remove("Icon8");
    LabelX.classList.remove("Icon9");
    LabelX.classList.remove("Icon10");

    PlayBtn1.classList.remove(WhichIconForX);
    PlayBtn2.classList.remove(WhichIconForX);
    PlayBtn3.classList.remove(WhichIconForX);
    PlayBtn4.classList.remove(WhichIconForX);
    PlayBtn5.classList.remove(WhichIconForX);
    PlayBtn6.classList.remove(WhichIconForX);
    PlayBtn7.classList.remove(WhichIconForX);
    PlayBtn8.classList.remove(WhichIconForX);
    PlayBtn9.classList.remove(WhichIconForX);

}

function BacktoGameMenuO() {
    if (isStarted !== true) {
        CloseDialogStartContainer.classList.remove("CloseDialogStart-Container");
        LinkForBackStart.classList.remove("LinkForBackStartOut");
        ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
    } else if (isStarted === true) {
        ChangeIconOContainer.classList.remove("OpenChangeIconO-Container");
        MenuContainer.classList.add("OpenMenu-Container");
        LinkMnuiD.classList.add("LinkMenuActiv");
    }
}


//----------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------- Funktionen um die Icon Farbe Variante auszuwählen -> X ----------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//



const IconXColorContainer = document.getElementById("IconXColorContainer");


function ChangeColorIconX() {
    CloseDialogStartContainer.classList.add("CloseDialogStart-Container");
    LinkForBackStart.classList.add("LinkForBackStartOut");
    IconXColorContainer.classList.add("OpenIconXColor-Container");
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

function ChangeColorIconX1() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX1");
    WhichColorForX1 = "IconX1";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX2() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX2");
    WhichColorForX1 = "IconX2";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX3() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX3");
    WhichColorForX1 = "IconX3";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX4() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX4");
    WhichColorForX1 = "IconX4";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX5() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX5");
    WhichColorForX1 = "IconX5";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX6() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX6");
    WhichColorForX1 = "IconX6";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX7() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX7");
    WhichColorForX1 = "IconX7";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX8() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX8");
    WhichColorForX1 = "IconX8";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX9() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX9");
    WhichColorForX1 = "IconX9";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconX10() {
    ResetFontFamilyColorX();
    LabelX.classList.add("IconX10");
    WhichColorForX1 = "IconX10";
    IconXColorContainer.classList.remove("OpenIconXColor-Container");
    CheckAllPlayBtnForChange2();
}

function ResetFontFamilyColorX() {

    LabelX.classList.remove("IconX1");
    LabelX.classList.remove("IconX2");
    LabelX.classList.remove("IconX3");
    LabelX.classList.remove("IconX4");
    LabelX.classList.remove("IconX5");
    LabelX.classList.remove("IconX6");
    LabelX.classList.remove("IconX7");
    LabelX.classList.remove("IconX8");
    LabelX.classList.remove("IconX9");
    LabelX.classList.remove("IconX10");

    PlayBtn1.classList.remove(WhichColorForX1);
    PlayBtn2.classList.remove(WhichColorForX1);
    PlayBtn3.classList.remove(WhichColorForX1);
    PlayBtn4.classList.remove(WhichColorForX1);
    PlayBtn5.classList.remove(WhichColorForX1);
    PlayBtn6.classList.remove(WhichColorForX1);
    PlayBtn7.classList.remove(WhichColorForX1);
    PlayBtn8.classList.remove(WhichColorForX1);
    PlayBtn9.classList.remove(WhichColorForX1);

    RoundResultIconX.classList.remove(WhichColorForX1);
    PlayerDisplay.classList.remove(WhichColorForX1);
}

function BacktoGameMenuIconX() {
    if (isStarted !== true) {
        CloseDialogStartContainer.classList.remove("CloseDialogStart-Container");
        LinkForBackStart.classList.remove("LinkForBackStartOut");
        IconXColorContainer.classList.remove("OpenIconXColor-Container");
    } else if (isStarted === true) {
        IconXColorContainer.classList.remove("OpenIconXColor-Container");
        MenuContainer.classList.add("OpenMenu-Container");
        LinkMnuiD.classList.add("LinkMenuActiv");
    }
}


//----------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------- Funktionen um die Icon Farbe Variante auszuwählen -> O ----------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//



const IconOColorContainer = document.getElementById("IconOColorContainer");


function ChangeColorIconO() {
    CloseDialogStartContainer.classList.add("CloseDialogStart-Container");
    LinkForBackStart.classList.add("LinkForBackStartOut");
    IconOColorContainer.classList.add("OpenIconOColor-Container");
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

function ChangeColorIconO1() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX1");
    WhichColorForX1 = "IconX1";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO2() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX2");
    WhichColorForX1 = "IconX2";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO3() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX3");
    WhichColorForX1 = "IconX3";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO4() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX4");
    WhichColorForX1 = "IconX4";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO5() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX5");
    WhichColorForX1 = "IconX5";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO6() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX6");
    WhichColorForX1 = "IconX6";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO7() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX7");
    WhichColorForX1 = "IconX7";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO8() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX8");
    WhichColorForX1 = "IconX8";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO9() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX9");
    WhichColorForX1 = "IconX9";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ChangeColorIconO10() {
    ResetFontFamilyColorO();
    LabelX.classList.add("IconX10");
    WhichColorForX1 = "IconX10";
    IconOColorContainer.classList.remove("OpenIconOColor-Container");
    CheckAllPlayBtnForChange2();
}

function ResetFontFamilyColorO() {

    LabelX.classList.remove("IconX1");
    LabelX.classList.remove("IconX2");
    LabelX.classList.remove("IconX3");
    LabelX.classList.remove("IconX4");
    LabelX.classList.remove("IconX5");
    LabelX.classList.remove("IconX6");
    LabelX.classList.remove("IconX7");
    LabelX.classList.remove("IconX8");
    LabelX.classList.remove("IconX9");
    LabelX.classList.remove("IconX10");

    PlayBtn1.classList.remove(WhichColorForX1);
    PlayBtn2.classList.remove(WhichColorForX1);
    PlayBtn3.classList.remove(WhichColorForX1);
    PlayBtn4.classList.remove(WhichColorForX1);
    PlayBtn5.classList.remove(WhichColorForX1);
    PlayBtn6.classList.remove(WhichColorForX1);
    PlayBtn7.classList.remove(WhichColorForX1);
    PlayBtn8.classList.remove(WhichColorForX1);
    PlayBtn9.classList.remove(WhichColorForX1);

    RoundResultIconX.classList.remove(WhichColorForX1);
    PlayerDisplay.classList.remove(WhichColorForX1);

}

function BacktoGameMenuIconO() {
    if (isStarted !== true) {
        CloseDialogStartContainer.classList.remove("CloseDialogStart-Container");
        LinkForBackStart.classList.remove("LinkForBackStartOut");
        IconOColorContainer.classList.remove("OpenIconOColor-Container");
    } else if (isStarted === true) {
        IconOColorContainer.classList.remove("OpenIconOColor-Container");
        MenuContainer.classList.add("OpenMenu-Container");
        LinkMnuiD.classList.add("LinkMenuActiv");
    }
}


//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------------- Funktion um die Icon Variante Auswahl einsetzen --------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


function CheckAllPlayBtnForChange1() {

    for (let i = 0; i <= 9; i++) {

        let ChangeSchrift = [PlayBtn1, PlayBtn2, PlayBtn3, PlayBtn4, PlayBtn5, PlayBtn6, PlayBtn7, PlayBtn8, PlayBtn9];

        let ChangeSchrift2 = [PlayBtn1Win, PlayBtn2Win, PlayBtn3Win, PlayBtn4Win, PlayBtn5Win, PlayBtn6Win, PlayBtn7Win, PlayBtn8Win, PlayBtn9Win];

        if (ChangeSchrift2[i] === 2) {

            ChangeSchrift[i].classList.remove(WhichIconForX);
            ChangeSchrift[i].classList.add(WhichIconForX);
        }
        if (i === 9) {
            if (isStarted !== true) {
                CloseDialogStartContainer.classList.remove("CloseDialogStart-Container");
                LinkForBackStart.classList.remove("LinkForBackStartOut");
            } else if (isStarted === true) {
                CloseDialogStartContainer.classList.add("CloseDialogStart-Container");
                LinkForBackStart.classList.add("LinkForBackStartOut");
            }
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------------- Funktion um die Icon Farbe Variante Auswahl einsetzen ------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function CheckAllPlayBtnForChange2() {


    for (let i = 0; i <= 9; i++) {

        let ChangeSchrift = [PlayBtn1, PlayBtn2, PlayBtn3, PlayBtn4, PlayBtn5, PlayBtn6, PlayBtn7, PlayBtn8, PlayBtn9];

        let ChangeSchrift2 = [PlayBtn1Win, PlayBtn2Win, PlayBtn3Win, PlayBtn4Win, PlayBtn5Win, PlayBtn6Win, PlayBtn7Win, PlayBtn8Win, PlayBtn9Win];

        if (ChangeSchrift2[i] === 2) {

            RoundResultIconX.classList.remove(WhichColorForX1);
            ChangeSchrift[i].classList.remove(WhichColorForX1);
            ChangeSchrift[i].classList.add(WhichColorForX1);
            RoundResultIconX.classList.add(WhichColorForX1);

            if (WhoPlay === 1) {
                PlayerDisplay.classList.remove(WhichColorForX1);
                PlayerDisplay.classList.add(WhichColorForX1);
            }

        }
        if (i === 9) {
            if (isStarted !== true) {
                CloseDialogStartContainer.classList.remove("CloseDialogStart-Container");
                LinkForBackStart.classList.remove("LinkForBackStartOut");
            } else if (isStarted === true) {
                CloseDialogStartContainer.classList.add("CloseDialogStart-Container");
                LinkForBackStart.classList.add("LinkForBackStartOut");
            }
        }
    }
}

