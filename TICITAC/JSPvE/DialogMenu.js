let MenuContainer = document.getElementById("MenuContainer");

let LinkMnuiD = document.getElementById("LinkMnuiD");

let BgColorContainer = document.getElementById("BgColorContainer");

let MenuChooseIconOrColorContainer = document.getElementById("MenuChooseIconOrColorContainer");

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
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------ Funktionen um das Auswahl Menu zu öffnen -> Ob Icon oder Farbe-------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

function OpenChooseIconOrColor() {
    MenuContainer.classList.remove("OpenMenu-Container");
    MenuChooseIconOrColorContainer.classList.add("openChooseIconOrColor-Container");
    LinkMnuiD.classList.remove("LinkMenuActiv");
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------- Funktionen um das Icon Auswahl Menu zu öffnen -> X oder O ----------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function ChooseIconOrColor1() {

    if (IconX === "O") {
        OpenChooseOIcon();
        MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
    } else if (IconX === "X") {
        OpenChooseXIcon();
        MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
    }

}

//----------------------------------------------------------------------------------------------------------------------------------------//
//------------------------------------- Funktionen um das Farben Auswahl Menu zu öffnen -> X oder O ----------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function ChooseIconOrColor2() {

    if (IconX === "O") {
        ChangeColorIconO();
        MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
    } else if (IconX === "X") {
        ChangeColorIconX();
        MenuChooseIconOrColorContainer.classList.remove("openChooseIconOrColor-Container");
    }

}