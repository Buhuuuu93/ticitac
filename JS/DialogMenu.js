let MenuContainer = document.getElementById("MenuContainer");

let LinkMnuiD = document.getElementById("LinkMnuiD");

let BgColorContainer = document.getElementById("BgColorContainer");

let MenuChooseIconOrColorContainer = document.getElementById("MenuChooseIconOrColorContainer");

let ChooseIconToChangeContainer = document.getElementById("ChooseIconToChangeContainer");

//----------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------- Funktionen um das Background Farben Menu zu öffnen -------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function ChangeBgMenu() {
    MenuContainer.classList.remove("OpenMenu-Container");
    BgColorContainer.classList.add("OpenBgColor-Container");
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------- Funktionen / Button um das Menu wieder zu öffnen (zurückgehen)--------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function BacktoGameMenu() {
    MenuContainer.classList.add("OpenMenu-Container");
    BgColorContainer.classList.remove("OpenBgColor-Container");
    ChooseIconToChangeContainer.classList.remove("openChooseIconToChange-Container");
    MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
    LinkMnuiD.classList.add("LinkMenuActiv");
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//----------------------------------------- Funktionen um das Menu zu öffnen (vom spiel aus)----------------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function OpenMenu() {
    MenuContainer.classList.add("OpenMenu-Container");
    LinkMnuiD.classList.add("LinkMenuActiv");
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um das Menu zu schliessen und zurück zum Spiel zu gehen -----------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


function BackToGame() {
    MenuContainer.classList.remove("OpenMenu-Container");
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------ Funktionen um das Auswahl Menu zu öffnen -> Ob X oder O-------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function ChooseIconToChange() {
    ChooseIconToChangeContainer.classList.add("openChooseIconToChange-Container");
    MenuContainer.classList.remove("OpenMenu-Container");
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------ Funktionen um das Auswahl Menu zu öffnen -> Ob Icon oder Farbe X-----------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function ChooseIconToChangeX() {
    ChooseIconToChangeContainer.classList.remove("openChooseIconToChange-Container");
    MenuChooseIconOrColorContainer.classList.add("openChooseIconOrColor-Container");
    ChooseOfXOrO = 1;
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------ Funktionen um das Auswahl Menu zu öffnen -> Ob Icon oder Farbe O-----------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function ChooseIconToChangeO() {
    ChooseIconToChangeContainer.classList.remove("openChooseIconToChange-Container");
    MenuChooseIconOrColorContainer.classList.add("openChooseIconOrColor-Container");
    ChooseOfXOrO = 2;
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------- Funktionen um das Icon Auswahl Menu zu öffnen -> X oder O ----------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function ChooseIconOrColor1() {

    if (ChooseOfXOrO === 2) {
        OpenChooseOIcon();
        MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
    } else if (ChooseOfXOrO === 1) {
        OpenChooseXIcon();
        MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
    }

}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------- Funktionen um das Farben Auswahl Menu zu öffnen -> X oder O ----------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//


async function ChooseIconOrColor2() {

    if (ChooseOfXOrO === 2) {
        ChangeColorIconO();
        MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
        ChooseOfXOrO = 0;
    } else if (ChooseOfXOrO === 1) {
        ChangeColorIconX();
        MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
        ChooseOfXOrO = 0;
    }

}