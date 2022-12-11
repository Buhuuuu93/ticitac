const bodyCol = document.getElementById("bodyCol");
const BG1 = document.getElementsByClassName("Bg1");
const MenuList = document.getElementById("MenuListiD");
const PlayerDisplayContainer = document.getElementById("PlayerDisplay-Container");
const RoundResultContainer = document.getElementById("RoundResultContainer");
const BgColorDialogWinContainerY = document.getElementById("BgColorDialogWinContainer");
const BgColorBgColorContainer = document.getElementById("BgColorBgColorContainer");
const BgColorMenuContainer = document.getElementById("BgColorMenuContainer");
const ChangeBgStartDialog = document.getElementById("ChangeBgStartDialog");
const ChooseIconOrColorMenuContainerY = document.getElementById("ChooseIconOrColorMenuContainerX");

let WhichOneIsChoosed = undefined;

let ActualColor = 0;

//----------------------------------------------------------------------------------------------------------------------------------------//
//---------------------------------------- Funktionen um die Background Color Auswahl auszuführen ----------------------------------------//
//----------------------------------------------------------------------------------------------------------------------------------------//

async function ChangeColorBG1() {
    WhichOneIsChoosed = 1;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 0;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG2() {
    WhichOneIsChoosed = 2;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 1;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG3() {
    WhichOneIsChoosed = 3;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 2;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG4() {
    WhichOneIsChoosed = 4;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 3;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG5() {
    WhichOneIsChoosed = 5;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 4;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG6() {
    WhichOneIsChoosed = 6;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 5;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG7() {
    WhichOneIsChoosed = 7;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 6;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG8() {
    WhichOneIsChoosed = 8;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 7;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG9() {
    WhichOneIsChoosed = 9;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 8;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}
async function ChangeColorBG10() {
    WhichOneIsChoosed = 10;

    addColorToStartDialog();
    addColorToGameArea();
    addColorToWinDialog();
    addColorToMenu();
    addColorToMenuBgColor();
    addColorToMenuChooseIconOrColor();
    addColorToMenuNewIcon();
    addColorToMenuNewIconColor();

    ActualColor = 9;

    BgColorContainer.classList.remove("OpenBgColor-Container");

    await new Promise(resolve => setTimeout(resolve, 1));
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um die Background Color Auswahl auszuführen und entfernen ---------------------------------//
//-----------------------------------------------------------Startdialog------------------------------------------------------------------//

const ChangeitColor = document.getElementById("ChangeitColor");
const ChangeitIcon = document.getElementById("ChangeitIcon");

function addColorToStartDialog() {

    console.log(WhichOneIsChoosed);

    RemoveColorToStartDialog();

    const ArrayBgColor1 = ["0", "Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];
    const ArrayArroundColor1 = ["0", "Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 1; i < 11; i++) {

        if (i === WhichOneIsChoosed) {
            ChangeBgStartDialog.classList.add(ArrayBgColor1[i]);
            ChangeitColor.classList.add(ArrayArroundColor1[i]);
            ChangeitIcon.classList.add(ArrayArroundColor1[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

function RemoveColorToStartDialog() {

    const ArrayBgColor = ["Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];
    const ArrayArroundColor = ["Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 0; i < 10; i++) {

        if (i === ActualColor) {
            ChangeBgStartDialog.classList.remove(ArrayBgColor[i]);
            ChangeitColor.classList.remove(ArrayArroundColor[i]);
            ChangeitIcon.classList.remove(ArrayArroundColor[i]);
        }
    }
}



//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um die Background Color Auswahl auszuführen und entfernen ---------------------------------//
//------------------------------------------------------------Spiel-Area------------------------------------------------------------------//

function addColorToGameArea() {

    RemoveColorToGameArea();

    const ArrayBgColor1 = ["0", "Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];
    const ArrayArroundColor1 = ["0", "Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 1; i < 11; i++) {

        if (i === WhichOneIsChoosed) {
            bodyCol.classList.add(ArrayBgColor1[i]);
            GameContainerWin.classList.add(ArrayArroundColor1[i]);
            PlayerDisplayContainer.classList.add(ArrayArroundColor1[i]);
            PlayerDisplay.classList.add(ArrayArroundColor1[i]);
            RoundResultContainer.classList.add(ArrayArroundColor1[i]);
            MenuList.classList.add(ArrayArroundColor1[i]);

            WinColor1.classList.add(ArrayArroundColor1[i]);
            WinColor2.classList.add(ArrayArroundColor1[i]);
            WinColor3.classList.add(ArrayArroundColor1[i]);
            WinColor4.classList.add(ArrayArroundColor1[i]);
            WinColor5.classList.add(ArrayArroundColor1[i]);
            WinColor6.classList.add(ArrayArroundColor1[i]);
            WinColor7.classList.add(ArrayArroundColor1[i]);
            WinColor8.classList.add(ArrayArroundColor1[i]);
            WinColor9.classList.add(ArrayArroundColor1[i]);

            PlayBtn1.classList.add(ArrayArroundColor1[i]);
            PlayBtn2.classList.add(ArrayArroundColor1[i]);
            PlayBtn3.classList.add(ArrayArroundColor1[i]);
            PlayBtn4.classList.add(ArrayArroundColor1[i]);
            PlayBtn5.classList.add(ArrayArroundColor1[i]);
            PlayBtn6.classList.add(ArrayArroundColor1[i]);
            PlayBtn7.classList.add(ArrayArroundColor1[i]);
            PlayBtn8.classList.add(ArrayArroundColor1[i]);
            PlayBtn9.classList.add(ArrayArroundColor1[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

function RemoveColorToGameArea() {

    const ArrayBgColor = ["Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];
    const ArrayArroundColor = ["Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 0; i < 10; i++) {

        if (i === ActualColor) {
            bodyCol.classList.remove(ArrayBgColor[i]);
            GameContainerWin.classList.remove(ArrayArroundColor[i]);
            PlayerDisplayContainer.classList.remove(ArrayArroundColor[i]);
            PlayerDisplay.classList.remove(ArrayArroundColor[i]);
            RoundResultContainer.classList.remove(ArrayArroundColor[i]);
            MenuList.classList.remove(ArrayArroundColor[i]);

            WinColor1.classList.remove(ArrayArroundColor[i]);
            WinColor2.classList.remove(ArrayArroundColor[i]);
            WinColor3.classList.remove(ArrayArroundColor[i]);
            WinColor4.classList.remove(ArrayArroundColor[i]);
            WinColor5.classList.remove(ArrayArroundColor[i]);
            WinColor6.classList.remove(ArrayArroundColor[i]);
            WinColor7.classList.remove(ArrayArroundColor[i]);
            WinColor8.classList.remove(ArrayArroundColor[i]);
            WinColor9.classList.remove(ArrayArroundColor[i]);

            PlayBtn1.classList.remove(ArrayArroundColor[i]);
            PlayBtn2.classList.remove(ArrayArroundColor[i]);
            PlayBtn3.classList.remove(ArrayArroundColor[i]);
            PlayBtn4.classList.remove(ArrayArroundColor[i]);
            PlayBtn5.classList.remove(ArrayArroundColor[i]);
            PlayBtn6.classList.remove(ArrayArroundColor[i]);
            PlayBtn7.classList.remove(ArrayArroundColor[i]);
            PlayBtn8.classList.remove(ArrayArroundColor[i]);
            PlayBtn9.classList.remove(ArrayArroundColor[i]);

        }
    }
}


//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um die Background Color Auswahl auszuführen und entfernen ---------------------------------//
//------------------------------------------------------------------Win-Dialog------------------------------------------------------------------//

async function addColorToWinDialog() {

    RemoveColorToWinDialog();

    const ArrayBgColor1 = ["0", "Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];

    for (let i = 1; i < 11; i++) {

        if (i === WhichOneIsChoosed) {
            BgColorDialogWinContainerY.classList.add(ArrayBgColor1[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

function RemoveColorToWinDialog() {

    const ArrayArroundColor = ["Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 0; i < 10; i++) {

        if (i === ActualColor) {
            BgColorDialogWinContainerY.classList.remove(ArrayArroundColor[i]);
        }
    }
}


//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um die Background Color Auswahl auszuführen und entfernen ---------------------------------//
//------------------------------------------------------------------Menu------------------------------------------------------------------//

const BtnMenu = document.getElementById("BtnMenu");
const BtnMenu2 = document.getElementById("BtnMenu2");

async function addColorToMenu() {

    RemoveColorToMenu();

    const ArrayBgColor1 = ["0", "Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];
    const ArrayArroundColor1 = ["0", "Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 1; i < 11; i++) {

        if (i === WhichOneIsChoosed) {
            BgColorMenuContainer.classList.add(ArrayBgColor1[i]);
            BtnMenu.classList.add(ArrayArroundColor1[i]);
            BtnMenu2.classList.add(ArrayArroundColor1[i]);
            LinkMnuiD.classList.add(ArrayArroundColor1[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

function RemoveColorToMenu() {

    const ArrayBgColor = ["Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];
    const ArrayArroundColor = ["Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 0; i < 10; i++) {

        if (i === ActualColor) {
            BgColorMenuContainer.classList.remove(ArrayBgColor[i]);
            BtnMenu.classList.remove(ArrayArroundColor[i]);
            BtnMenu2.classList.remove(ArrayArroundColor[i]);
            LinkMnuiD.classList.remove(ArrayArroundColor[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um die Background Color Auswahl auszuführen und entfernen ---------------------------------//
//--------------------------------------------------------Menu => Background-Color--------------------------------------------------------//

async function addColorToMenuBgColor() {

    RemoveColorToMenuBgColor();

    const ArrayBgColor1 = ["0", "Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];

    for (let i = 1; i < 11; i++) {

        if (i === WhichOneIsChoosed) {
            BgColorBgColorContainer.classList.add(ArrayBgColor1[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

function RemoveColorToMenuBgColor() {

    const ArrayBgColor = ["Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];

    for (let i = 0; i < 10; i++) {

        if (i === ActualColor) {
            BgColorBgColorContainer.classList.remove(ArrayBgColor[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um die Background Color Auswahl auszuführen und entfernen ---------------------------------//
//-------------------------------------------------------Menu => Choose Icon Or Color-----------------------------------------------------//

const BtnChooseIconOrColor1 = document.getElementById("BtnChooseIconOrColor1");
const BtnChooseIconOrColor2 = document.getElementById("BtnChooseIconOrColor2");

async function addColorToMenuChooseIconOrColor() {


    RemoveColorToMenuChooseIconOrColor();

    const ArrayBgColor1 = ["0", "Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];
    const ArrayArroundColor1 = ["0", "Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 1; i < 11; i++) {

        if (i === WhichOneIsChoosed) {
            ChooseIconOrColorMenuContainerY.classList.add(ArrayBgColor1[i]);
            BtnChooseIconOrColor1.classList.add(ArrayArroundColor1[i]);
            BtnChooseIconOrColor2.classList.add(ArrayArroundColor1[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

function RemoveColorToMenuChooseIconOrColor() {

    const ArrayBgColor = ["Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];
    const ArrayArroundColor = ["Bg12", "Bg22", "Bg32", "Bg42", "Bg52", "Bg62", "Bg72", "Bg82", "Bg92", "Bg102"];

    for (let i = 0; i < 10; i++) {

        if (i === ActualColor) {
            ChooseIconOrColorMenuContainerY.classList.remove(ArrayBgColor[i]);
            BtnChooseIconOrColor1.classList.remove(ArrayArroundColor[i]);
            BtnChooseIconOrColor2.classList.remove(ArrayArroundColor[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um die Background Color Auswahl auszuführen und entfernen ---------------------------------//
//----------------------------------------------------------Menu => Choose new Icon-------------------------------------------------------//

const NewIconX = document.getElementById("NewIconX");
const NewIconO = document.getElementById("NewIconO");

async function addColorToMenuNewIcon() {

    RemoveColorToMenuNewIcon();

    const ArrayBgColor1 = ["0", "Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];

    for (let i = 1; i < 11; i++) {

        if (i === WhichOneIsChoosed) {
            NewIconX.classList.add(ArrayBgColor1[i]);
            NewIconO.classList.add(ArrayBgColor1[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

function RemoveColorToMenuNewIcon() {

    const ArrayBgColor = ["Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];

    for (let i = 0; i < 10; i++) {

        if (i === ActualColor) {
            NewIconX.classList.remove(ArrayBgColor[i]);
            NewIconO.classList.remove(ArrayBgColor[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//
//--------------------------------- Funktionen um die Background Color Auswahl auszuführen und entfernen ---------------------------------//
//------------------------------------------------------Menu => Choose new IconColor------------------------------------------------------//

const IconXColorItem = document.getElementById("IconXColorItem");
const IconOColorItem = document.getElementById("IconOColorItem");

async function addColorToMenuNewIconColor() {

    RemoveColorToMenuNewIconColor();

    const ArrayBgColor1 = ["0", "Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];

    for (let i = 1; i < 11; i++) {

        if (i === WhichOneIsChoosed) {
            IconXColorItem.classList.add(ArrayBgColor1[i]);
            IconOColorItem.classList.add(ArrayBgColor1[i]);
        }
    }
}

//----------------------------------------------------------------------------------------------------------------------------------------//

function RemoveColorToMenuNewIconColor() {

    const ArrayBgColor = ["Bg1", "Bg2", "Bg3", "Bg4", "Bg5", "Bg6", "Bg7", "Bg8", "Bg9", "Bg10"];

    for (let i = 0; i < 10; i++) {

        if (i === ActualColor) {
            IconXColorItem.classList.remove(ArrayBgColor[i]);
            IconOColorItem.classList.remove(ArrayBgColor[i]);
        }
    }
}