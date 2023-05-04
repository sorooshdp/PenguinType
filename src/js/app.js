const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

const timerHours = document.getElementById("timer-hour");
const timerMinutes = document.getElementById("timer-minute");
const timerSeconds = document.getElementById("timer-second");
const queryAllTimer = document.querySelectorAll(".timer");

const colorGrey = "rgba(255, 255, 255, 0.24)";

let timerInHours = 3.5;
let timerInMs = timerInHours * hour;
let blinker = false;

let started = false;
let timerInterval;
let mouseDown = false;

let resetTimeOut;

const body = document.getElementsByTagName("body")[0];
const settingItems = document.querySelectorAll(".setting-items");
const settings = document.getElementById("settings");
const settingsItemsDisplay = document.getElementById("settings-items-display");
const settingsTimerAdjustDisplay = document.getElementById("settings-timer-adjust-display");
const popUps = document.getElementById("popups");
const darkBack = document.getElementById("dark-back");
const setttingsFontSizeDisplay = document.getElementById("settings-font-size-display");

const plusBtns = document.getElementsByClassName("plus-btn");
const saveTimerAdjust = document.getElementById("save-timer-adjust");

const backSpace = document.getElementById("back-space");

const notifElem = document.getElementById("notif");
const notifText = document.querySelector(".notif-text");

// items in setting
const timerAdjust = document.getElementById("timer-adjust");
const countDownMainAdjust = document.getElementById("countdown-main-adjust");
//

let itemsListObject = {};
let itemsListKeys = [];
let itemsListElements = [];

let languageItemsListObject = {};
let languageItemsListKeys = [];
let languageItemsListElements = [];

let themesItemsListOjbect = {};
let themesItemsListKeys = [];
let themesItemsListElements = [];

const typeField = document.getElementById("type-field");

let startTime;
let finishTime;
let typeTestStarted = false;
let readyToStart = true;

let TEXT;
let numberOfWords;
let numberOfCharacters = 0;

let POSITION = 0;
let STATE;
let rawCharacterCount = 0;
let numberOfErrors = 0;

let typeTime;
let wpm;
let rawWpm;
let consistency;
let accuracy;
let errors;

const docWpm = document.getElementById("wpm");
const docAcc = document.getElementById("acc");
const docRaw = document.getElementById("wpm-raw");
const docConsis = document.getElementById("consistency");
const docTime = document.getElementById("time");
const docError = document.getElementById("error");
const resultField = document.getElementById("result-field");
const buttonsResult = document.getElementById("buttons-result");
const aboutButton = document.getElementById("about-button");
const aboutPopup = document.getElementById("about-popup");
const themesButton = document.getElementById("themes-button");
const restartButton = document.getElementById("restart-button");
const repeatButton = document.getElementById("repeat-button");
const logo = document.getElementById("logo");
const typeModeBar = document.getElementById("type-mode-bar");
const timerTimeTypeMode = document.getElementById("timer-time-type-mode");
const gitHubButton = document.getElementById("github-button");

const capsLockState = document.getElementById("caps-lock-state");

let TYPEMODEOBJECT = {};
let TYPEMODE = "word-type-mode";
let THEME = "tokyo-night-dark";

let nWordsInput = 20;
let nTimeInput = 15;
let LANGUAGE = english200;
let nWordsInputLocalStorage = localStorage.getItem("nWordsInput");
let nTimeInputLocalStorage = localStorage.getItem("nTimeInput");
let TYPEMODELocalStorage = localStorage.getItem("TYPEMODE");
let languageLocalStorage = localStorage.getItem("LANGUAGE");
let themeLocalStorage = localStorage.getItem("THEME");

const wordTypeModeOptions = document.getElementById("word-type-mode-options");
const timeTypeModeOptions = document.getElementById("time-type-mode-options");
const docTimeTypeMode = document.getElementById("time-type-mode");
const docWordTypeMode = document.getElementById("word-type-mode");

const LanguagesObj = {
        "english-200": english200,
        "javascript-100": javascript100,
        "english-1k": english1k,
};

let localStorageBg = localStorage.getItem("bgC");
let localStorageFst = localStorage.getItem("fstC");
let localStorageS = localStorage.getItem("sC");
let localStorageT = localStorage.getItem("tC");
let localStorageFrth = localStorage.getItem("frthC");
let localStorageC = localStorage.getItem("cC");
let localStorageE = localStorage.getItem("eC");
let localStorageBs = localStorage.getItem("bsC");
let localStorageWs = localStorage.getItem("wsC");

let bgC = localStorageBg || tokyoNightDark["--background-color"];
let fstC = localStorageFst || tokyoNightDark["--first-color"];
let sC = localStorageS || tokyoNightDark["--second-color"];
let tC = localStorageT || tokyoNightDark["--third-color"];
let frthC = localStorageFrth || tokyoNightDark["--fourth-color"];
let cC = localStorageC || tokyoNightDark["--caret-color"];
let eC = localStorageE || tokyoNightDark["--error-color"];
let bsC = localStorageBs || tokyoNightDark["--best-score-color"];
let wsC = localStorageWs || tokyoNightDark["--worst-score-color"];

let customThemeObj = {
        "--background-color": bgC,
        "--first-color": fstC,
        "--second-color": sC,
        "--third-color": tC,
        "--fourth-color": frthC,
        "--caret-color": cC,
        "--error-color": eC,
        "--best-score-color": bsC,
        "--worst-score-color": wsC,
};

const themeObj = {
        "tokyo-night-dark": tokyoNightDark,
        "tokyo-night-light": tokyoNightLight,
        "dark-blue": darkBlue,
        dark: dark,
        matrix: matrix,
        arch: arch,
        "modern-ink": modernInk,
        dracula: dracula,
        terminal: terminal,
        "red-dragon": redDragon,
        "their-theme": theirTheme,
        jungle: jungle,
        custom: customThemeObj,
};

nWordsInput = nWordsInputLocalStorage || nWordsInput;
nTimeInput = nTimeInputLocalStorage || nTimeInput;
TYPEMODE = TYPEMODELocalStorage || TYPEMODE;
LANGUAGE = LanguagesObj[languageLocalStorage] || LANGUAGE;
THEME = themeObj[themeLocalStorage] || themeObj[THEME];

const languageSettingsItemsDisplay = document.getElementById("language-settings-items-display");
const languageButton = document.getElementById("language");
const languagePopup = document.getElementById("language-popup");
const themesSettingItemsDisplay = document.getElementById("themes-settings-items-display");
const themePopup = document.getElementById("themes-popup");
const docEnglish200 = document.getElementById("english200");
const docJavascript100 = document.getElementById("javascript100");

languageButton.innerHTML = languageLocalStorage?.replace("-", " ").toUpperCase() || "LANGUAGE";

let resultBestColorHEX = THEME["--best-score-color"];
let resultWorstColorHEX = THEME["--worst-score-color"];
const resultBestWpm = 140;
const resultWorstWpm = 30;
const resultBestWpmRaw = 140;
const resultWorstWpmRaw = 30;
const resultBestAcc = 100;
const resultWorstAcc = 50;
const resultAllCharToErrRatio = 0.04;
const resultBestConsis = 90;
const resultWorstConsis = 40;
const consisVarMS = 100;
const inConsisMaxMS = 300;

const custom = document.getElementById("custom");
const customTheme = document.getElementById("custom-theme");
const bgColorInput = document.getElementById("bg-color-input");
const firstColorInput = document.getElementById("first-color-input");
const secondColorInput = document.getElementById("second-color-input");
const thirdColorInput = document.getElementById("third-color-input");
const fourthColorInput = document.getElementById("fourth-color-input");
const errorColorInput = document.getElementById("error-color-input");
const bestColorInput = document.getElementById("best-color-input");
const worstColorInput = document.getElementById("worst-color-input");

let caretBloom = "box-shadow: var(--caret-color.3) 0px 0px 34px 14px;";

const validKeyDownSet = new Set(validKeyDownArray);

settings.addEventListener("click", () => {
        if (popUps.style.display === "none") {
                popUps.style.display = "block";
                darkBack.style.display = "block";
        } else {
                popUps.style.display = "none";
                darkBack.style.display = "none";
        }
});

languageButton.addEventListener("click", () => {
        if (languagePopup.style.display === "none") {
                languagePopup.style.display = "block";
                darkBack.style.display = "block";
        }
});

aboutButton.addEventListener("click", () => {
        if (aboutPopup.style.display === "none") {
                aboutPopup.style.display = "block";
                darkBack.style.display = "block";
        }
});

themesButton.addEventListener("click", () => {
        if (themePopup.style.display === "none") {
                themePopup.style.display = "block";
                darkBack.style.display = "block";
        }
});

darkBack.addEventListener("click", () => {
        languagePopup.style.display = "none";
        popUps.style.display = "none";
        darkBack.style.display = "none";
        aboutPopup.style.display = "none";
        themePopup.style.display = "none";
        customTheme.style.display = "none";
        themesSettingItemsDisplay.style.display = "block";
});

document.getElementById("font-size").addEventListener("click", () => {
        settingsItemsDisplay.style.display = "none";
        setttingsFontSizeDisplay.style.display = "block";
});

function displayHandler() {}

Array.from(plusBtns).forEach((e) => {
        e.addEventListener("click", () => inputNumberQuantity(e.nextElementSibling, e.className), { once: true });
});

function inputNumberQuantity(node, sign) {
        let num;
        let max = Number(node.dataset.max);
        let min = Number(node.dataset.min);

        node.innerHTML == "" ? (num = 0) : (num = Number(node.innerHTML));
        if (num > max) {
                node.innerHTML = max.toString();
                return;
        } else if (num < min) {
                node.innerHTML = min.toString();
                return;
        }
        if (sign === "plus-btn") {
                if (num + 1 > max) return;
                num++;
        } else {
                if (num - 1 < min) return;
                num--;
        }

        num = num.toString();
        //console.log(num);
        if (num.length === 1) num = "0" + num;
        node.innerHTML = num;
}

backSpace.addEventListener("click", () => {
        if (settingsItemsDisplay.style.display === "block") {
                popUps.style.display = "none";
                darkBack.style.display = "none";
        } else if (settingsItemsDisplay.style.display === "none") {
                document.querySelectorAll(".setting-inside").forEach((e) => {
                        if (e.style.display === "block") {
                                e.style.display = "none";
                        }
                });
                settingsItemsDisplay.style.display = "block";
        }
});

function saveTrigger() {}

function save(node) {
        //console.log("save function triggerd");
        //console.log(`node.id: ${node.id}`);
        let obj = {};
        if (node.id === "save-timer-adjust") {
                document.querySelectorAll(".setting-input-number").forEach((e) => {
                        //console.log(`e.id: ${e.id}`);
                        //console.log(`e.innerHTML: ${e.innerHTML}`);
                        obj[e.id.toString()] = e.innerHTML.toString();
                });
                timerInHours = 0;
        } else if (node.id === "save-font-size") {
                document.querySelectorAll(".setting-input-number-font-size").forEach((e) => {
                        //console.log(`e.id: ${e.id}`);
                        //console.log(`e.innerHTML: ${e.innerHTML}`);
                        obj[e.id.toString()] = e.innerHTML.toString();
                });
        }
        //console.log(obj);

        changeSaves(obj);
}

function changeSaves(obj) {
        for (const key in obj) {
                if (key === "input-number-hours") {
                        timerInHours += Number(obj[key]);
                        timerInMs = timerInHours * hour;
                        //console.log(timerInHours);
                } else if (key === "input-number-minutes") {
                        timerInHours += Number(obj[key]) / 60;
                        timerInMs = timerInHours * hour;
                        //console.log(timerInHours);
                } else if (key === "input-number-seconds") {
                        timerInHours += Number(obj[key]) / 60 / 60;
                        timerInMs = timerInHours * hour;
                        //console.log(timerInHours);
                } else if (key === "input-number-font-size") {
                        typeField.style.fontSize = obj[key].toString() + "px";
                }
        }
}

function notif(txt) {
        let time = 4;
        let notifInterval;

        notifText.innerHTML = txt;
        notifElem.style.right = "-2px";
        notifInterval = setInterval(() => {
                time = time - 1;
                if (time <= 0) {
                        notifElem.style.right = "-302px";
                        clearInterval(notifInterval);
                }
        }, second);
}

settingsItemsDisplay.querySelectorAll(".setting-items").forEach((e) => {
        itemsListObject[e.firstChild.innerHTML] = e.id;
        itemsListKeys.push(e.firstChild.innerHTML);
});

languageSettingsItemsDisplay.querySelectorAll(".setting-items").forEach((e) => {
        languageItemsListObject[e.firstChild.innerHTML] = e.id;
        languageItemsListKeys.push(e.firstChild.innerHTML);
});

themesSettingItemsDisplay.querySelectorAll(".setting-items").forEach((e) => {
        themesItemsListOjbect[e.firstChild.innerHTML] = e.id;
        themesItemsListKeys.push(e.firstChild.innerHTML);
});

// why am i doing this?
function tolowercase(str) {
        if (str === " ") return " ";
        if (str == null) return " ";
        return str.toLowerCase();
}

function matchSearch(node) {
        let LK;
        let LO;
        if (node.id === "item-search") {
                LK = itemsListKeys;
                LO = itemsListObject;
        } else if (node.id === "language-item-search") {
                LK = languageItemsListKeys;
                LO = languageItemsListObject;
        } else if (node.id === "themes-item-search") {
                LK = themesItemsListKeys;
                LO = themesItemsListOjbect;
        }
        let txt = node.value;
        let copyOfList = [];
        for (let i = 0; i < LK.length; i++) {
                copyOfList.push(LK[i]);
        }
        if (txt === "") {
                for (let i = 0; i < LK.length; i++) {
                        document.getElementById(LO[copyOfList[i]]).style.display = "block";
                }
        }
        let not = false;
        for (let i = 0; i < copyOfList.length; i++) {
                for (let j = 0; j < txt.length; j++) {
                        if (tolowercase(txt[j]) !== tolowercase(copyOfList[i][j])) {
                                document.getElementById(LO[copyOfList[i]]).style.display = "none";
                                copyOfList.splice(i, 1);
                                not = true;
                                break;
                        }
                }
                if (not) {
                        i--;
                        not = false;
                }
        }
        for (let i = 0; i < copyOfList.length; i++) {
                document.getElementById(LO[copyOfList[i]]).style.display = "block";
        }
}

function rankingSearch(node) {
        let txt = node.value;
        //console.log(txt);
        let matched = 0;
        let k = 0;
        let keysWithMatched = {};
        let keysWithMatchedArray = [];
        for (let i = 0; i < itemsListKeys.length; i++) {
                for (let j = 0; j < itemsListKeys[i].length; j++) {
                        if (tolowercase(itemsListKeys[i][j]) === tolowercase(txt[k])) {
                                k++;
                                matched++;
                        } else {
                                if (itemsListKeys[i] in keysWithMatched) {
                                        if (keysWithMatched[itemsListKeys[i]] < matched) {
                                                keysWithMatched[itemsListKeys[i]] = matched;
                                                k = 0;
                                                matched = 0;
                                        }
                                } else {
                                        keysWithMatched[itemsListKeys[i]] = matched;
                                        k = 0;
                                        matched = 0;
                                }
                        }
                }
                k = 0;
                matched = 0;
        }
        for (const key in keysWithMatched) {
                keysWithMatchedArray.push([key, keysWithMatched[key]]);
        }
        let newChilds = [];
        keysWithMatchedArray.sort((a, b) => b[1] - a[1]);
        //console.log(keysWithMatchedArray);

        for (let i = 0; i < keysWithMatchedArray.length; i++) {
                let child = document.getElementById(itemsListObject[keysWithMatchedArray[i][0]]);
                newChilds.push(child);
        }
        settingsItemsDisplay.replaceChildren(...newChilds);
}

// WHY?
function isLastChild(el) {
        return el === el.parentNode.children[el.parentNode.children.length - 1];
}
function isFirstChild(el) {
        return el === el.parentNode.children[0];
}

function textGenerator() {
        let result = [];
        const random = (n) => {
                return Math.floor(Math.random() * n);
        };
        if (TYPEMODE === "word-type-mode") {
                for (let i = 0; i < nWordsInput; i++) {
                        result.push(LANGUAGE[random(LANGUAGE.length)]);
                }
        } else if (TYPEMODE === "time-type-mode") {
                for (let i = 0; i < 100; i++) {
                        result.push(LANGUAGE[random(LANGUAGE.length)]);
                }
        }

        numberOfWords = result.length;
        TEXT = result.join(" ");
        for (let i = 0; i < TEXT.length; i++) {
                numberOfCharacters++;
        }
        textToHTML(TEXT);
}
textGenerator();

function textGeneratorToHtmlTimeTypeMode() {
        let result = [];
        const random = (n) => {
                return Math.floor(Math.random() * n);
        };
        for (let i = 0; i < 25; i++) {
                result.push(LANGUAGE[random(LANGUAGE.length)]);
        }
        result = " " + result.join(" ");
        TEXT += result;
        //console.log(TEXT);

        let firstWordTop = document.querySelector(".word").style.top;

        let x = document.createElement("div");
        x.classList.add("letter");
        x.classList.add("space");
        x.innerHTML = " ";
        typeField.lastChild.appendChild(x);

        let w = document.createElement("div");
        w.classList.add("word");
        w.style.position = "inherit";
        w.style.top = firstWordTop;
        let word = typeField.lastChild;

        for (let i = 1; i < result.length; i++) {
                let letterElem = document.createElement("div");
                letterElem.classList.add("letter");
                letterElem.innerHTML = result[i];
                if (letterElem.innerHTML === " ") {
                        letterElem.classList.add("space");
                }
                word.appendChild(letterElem);

                if (result[i] === " ") {
                        let wordElem = document.createElement("div");
                        wordElem.classList.add("word");
                        wordElem.style.position = "inherit";
                        wordElem.style.top = firstWordTop;
                        typeField.appendChild(wordElem);
                        word = typeField.lastChild;
                }
        }
}

function textToHTML(str) {
        while (typeField.firstChild) {
                typeField.removeChild(typeField.lastChild);
        }
        let w = document.createElement("div");
        w.classList.add("word");
        typeField.appendChild(w);
        w.style.position = "inherit";
        w.style.top = "0px";
        let word = typeField.lastChild;
        let l = document.createElement("div");
        l.classList.add("letter");
        l.classList.add("position");
        l.innerHTML = str[0];
        word.appendChild(l);
        for (let i = 1; i < str.length; i++) {
                let letterElem = document.createElement("div");
                letterElem.classList.add("letter");
                letterElem.innerHTML = str[i];
                if (letterElem.innerHTML === " ") {
                        letterElem.classList.add("space");
                }
                word.appendChild(letterElem);

                if (str[i] === " ") {
                        let wordElem = document.createElement("div");
                        wordElem.classList.add("word");
                        typeField.appendChild(wordElem);
                        word = typeField.lastChild;
                }
        }
}

document.addEventListener("keydown", (event) => {
        //if (validKeyDownSet.has(event.key) === false) return;
        if (
                event.key === "Shift" ||
                event.key === "Tab" ||
                event.key === "Enter" ||
                event.key === "Control" ||
                event.key === "Alt" ||
                event.key === "F11" ||
                event.key === "CapsLock"
        ) {
                return;
        }
        if (POSITION === 0 && event.key === "Backspace") return;
        if (readyToStart === false) return;
        if (popUps.style.display === "block") return;
        if (languagePopup.style.display === "block") return;
        if (aboutPopup.style.display === "block") return;
        if (themePopup.style.display === "block") return;
        //console.log(event.key);

        rawCharacterCount++;
        everyCharTimeBetween();

        if (event.key === "Backspace") {
                POSITION--;
                STATE = null;
                //console.log(STATE);
                //console.log(POSITION);
                backSpaceHandler();
        } else if (event.key === TEXT[POSITION]) {
                if (typeTestStarted === false && readyToStart === true) {
                        typeTestStarted = true;
                        startTime = performance.now();
                        focusMode(true);
                        if (TYPEMODE === "time-type-mode") {
                                timerForTimeTypeMode(Number(nTimeInput));
                        }
                }
                POSITION++;
                STATE = true;
                //console.log(STATE);
                //console.log(POSITION);
                correctHandler();
        } else if (event.key !== TEXT[POSITION]) {
                if (typeTestStarted === false && readyToStart === true) {
                        typeTestStarted = true;
                        startTime = performance.now();
                        focusMode(true);
                        if (TYPEMODE === "time-type-mode") {
                                timerForTimeTypeMode(Number(nTimeInput));
                        }
                }
                numberOfErrors++;
                POSITION++;
                STATE = false;
                //console.log(STATE);
                //console.log(POSITION);
                incorrectHandler();
        }
});

let t1;
let everyCharTimeBetweenArray = [];

function everyCharTimeBetween() {
        let t2 = performance.now();
        let deltaT = Math.round(t2 - t1);
        everyCharTimeBetweenArray.push(deltaT);
        t1 = t2;
}

function consistencyCalculator() {
        everyCharTimeBetweenArray.shift();
        //console.log(everyCharTimeBetweenArray);

        let length = everyCharTimeBetweenArray.length;
        let SdSquared = 0;
        let sum = 0;
        for (let i = 0; i < length; i++) {
                sum += everyCharTimeBetweenArray[i];
        }
        let mid = sum / length;
        mid = Math.round(mid);

        for (let i = 0; i < length; i++) {
                SdSquared += Math.pow(everyCharTimeBetweenArray[i] - mid, 2);
        }
        SdSquared = SdSquared / length;
        let SD = Math.abs(Math.sqrt(SdSquared) - 40);
        let CV = SD / mid;

        consistency = 100 - CV * 100;
        if (consistency > 100 || consistency < 0) consistency = 0;
        else consistency = Math.round(consistency);

        everyCharTimeBetweenArray = [];
        t1 = null;
        //console.log("mid:" + mid);
        //console.log("sd:" + SD);
        //console.log("consis:" + consistency);
}

function focusMode(state) {
        if (state) {
                buttonsResult.style.opacity = "0.5";
                aboutButton.style.opacity = "0";
                settings.style.opacity = "0";
                logo.classList.add("focus-mode-logo");
                logo.style.color = "var(--first-color)";
                typeModeBar.style.opacity = "0";
                languageButton.style.opacity = "0";
                themesButton.style.opacity = "0";
                gitHubButton.style.opacity = "0";
        } else {
                buttonsResult.style.opacity = "1";
                aboutButton.style.opacity = "1";
                settings.style.opacity = "1";
                logo.classList.remove("focus-mode-logo");
                logo.style.color = "var(--second-color)";
                typeModeBar.style.opacity = "1";
                languageButton.style.opacity = "1";
                themesButton.style.opacity = "1";
                gitHubButton.style.opacity = "1";
        }
}

function backSpaceHandler() {
        let position = document.querySelector(".position");

        if (isFirstChild(position)) {
                let parent = position.parentNode;
                //console.log();
                let classlist = parent.previousElementSibling.children[parent.previousElementSibling.children.length - 1].classList;
                if (classlist.contains("incorrect")) {
                        parent.previousElementSibling.children[parent.previousElementSibling.children.length - 1].classList.remove("incorrect");
                } else if (classlist.contains("space-incorrect")) {
                        parent.previousElementSibling.children[parent.previousElementSibling.children.length - 1].classList.remove("space-incorrect");
                } else {
                        parent.previousElementSibling.children[parent.previousElementSibling.children.length - 1].classList.remove("correct");
                }
                parent.previousElementSibling.children[parent.previousElementSibling.children.length - 1].classList.add("position");
                position.classList.remove("position");
        } else {
                let classlist = position.previousElementSibling.classList;
                if (classlist.contains("incorrect")) {
                        position.previousElementSibling.classList.remove("incorrect");
                } else if (classlist.contains("space-incorrect")) {
                        position.previousElementSibling.classList.remove("space-incorrect");
                } else {
                        position.previousElementSibling.classList.remove("correct");
                }
                position.previousElementSibling.classList.add("position");
                position.classList.remove("position");
        }

        positioningTypeFieldOnCaret();
}

function correctHandler() {
        let position = document.querySelector(".position");
        position.classList.add("correct");

        if (isLastChild(position)) {
                let parent = position.parentElement;
                if (isLastChild(parent)) {
                        finished();
                } else {
                        parent.nextElementSibling.children[0].classList.add("position");
                        position.classList.remove("position");
                }
        } else {
                position.nextElementSibling.classList.add("position");
                position.classList.remove("position");
        }
        positioningTypeFieldOnCaret();
}

function incorrectHandler() {
        let position = document.querySelector(".position");
        if (position.innerHTML === " ") {
                position.classList.add("space-incorrect");
        } else {
                position.classList.add("incorrect");
        }

        if (isLastChild(position)) {
                let parent = position.parentElement;
                if (isLastChild(parent)) {
                        finished();
                } else {
                        parent.nextElementSibling.children[0].classList.add("position");
                        position.classList.remove("position");
                }
        } else {
                position.nextElementSibling.classList.add("position");
                position.classList.remove("position");
        }
        positioningTypeFieldOnCaret();
}

function finished() {
        finishTime = performance.now();
        focusMode(false);
        consistencyCalculator();

        typeTestStarted = false;
        readyToStart = false;
        //console.log("finished");
        if (TYPEMODE === "time-type-mode") {
                const allCorrects = document.querySelectorAll(".correct");
                const allLetters = document.querySelectorAll(".letter");
                let numberOfCorrectOrIncorrect = 0;
                for (let i = 0; i < allLetters.length; i++) {
                        if (allLetters[i].classList.contains("correct") === false && allLetters[i].classList.contains("incorrect") === false) {
                                break;
                        }
                        numberOfCorrectOrIncorrect++;
                }
                rawWpm = rawCharacterCount / 5 / Number(nTimeInput);
                wpm = (allCorrects.length / 5 / Number(nTimeInput)) * 60;
                wpm = Math.round(wpm);
                rawWpm = Math.round(rawWpm * 60);
                accuracy = (allCorrects.length / numberOfCorrectOrIncorrect) * 100;
                accuracy = Math.floor(accuracy);

                errors = numberOfErrors;

                typeTime = Number(nTimeInput) + "s";
                result();
                return;
        }
        typeTime = finishTime - startTime;
        typeTime /= second;

        let allIncorrects = document.querySelectorAll(".incorrect").length;

        rawWpm = rawCharacterCount / 5 / typeTime;
        wpm = ((numberOfCharacters - allIncorrects) / 5 / typeTime) * 60;
        wpm = Math.round(wpm);
        rawWpm = Math.round(rawWpm * 60);

        accuracy = ((numberOfCharacters - numberOfErrors) / numberOfCharacters) * 100;
        accuracy = Math.round(accuracy);

        errors = numberOfErrors;

        typeTime = Math.round(typeTime) + "s";

        //console.log(`allchar: ${numberOfCharacters}`);
        //console.log(`rawCharC: ${rawCharacterCount}`);
        //console.log(`allwords: ${numberOfWords}`);
        //console.log(`errors: ${numberOfErrors}`);
        //console.log(`time: ${typeTime}`);
        //console.log(`allincor: ${allIncorrects}`);

        result();
}

function result() {
        typeField.style.display = "none";
        languageButton.style.display = "none";
        docWpm.innerHTML = wpm;
        docAcc.innerHTML = accuracy + "%";
        docRaw.innerHTML = rawWpm;
        resultColoring();
        docConsis.innerHTML = consistency + "%";
        docTime.innerHTML = typeTime;
        docError.innerHTML = errors;

        resultField.style.display = "block";
        buttonsResult.style.display = "block";
}

function resultColoring() {
        let wdiff = resultBestWpm - resultWorstWpm;
        let rwdiff = resultBestWpmRaw - resultWorstWpmRaw;
        let adiff = resultBestAcc - resultWorstAcc;
        let errdiff = Math.ceil(rawCharacterCount * resultAllCharToErrRatio);
        let condiff = resultBestConsis - resultWorstConsis;

        let wpmperc = ((wpm - resultWorstWpm) / wdiff) * 100;
        let wpmrawperc = ((rawWpm - resultWorstWpmRaw) / rwdiff) * 100;
        let accperc = ((accuracy - resultWorstAcc) / adiff) * 100;
        let errprec = (errors / errdiff) * 100;
        let conperc = ((consistency - resultWorstConsis) / condiff) * 100;

        if (wpm > resultBestWpm) wpmperc = 100;
        else if (wpm < resultWorstWpm) wpmperc = 0;
        if (rawWpm > resultBestWpmRaw) wpmrawperc = 100;
        else if (rawWpm < resultWorstWpmRaw) wpmrawperc = 0;
        if (accuracy > resultBestAcc) accperc = 100;
        else if (accuracy < resultWorstAcc) accperc = 0;
        if (errors > errdiff) errprec = 100;
        else if (errors <= 0) errprec = 0;
        if (consistency > resultBestConsis) conperc = 100;
        else if (consistency < resultWorstConsis) conperc = 0;

        let color1 = rgbToArray(hexToRgb(resultWorstColorHEX));
        let color2 = rgbToArray(hexToRgb(resultBestColorHEX));

        let wpmC = betweenTwoColor(color1, color2, wpmperc);
        let rawwpmC = betweenTwoColor(color1, color2, wpmrawperc);
        let accC = betweenTwoColor(color1, color2, accperc);
        let errC = betweenTwoColor(color2, color1, errprec);
        let conC = betweenTwoColor(color1, color2, conperc);

        wpmC = arrayToRgb(wpmC);
        rawwpmC = arrayToRgb(rawwpmC);
        accC = arrayToRgb(accC);
        errC = arrayToRgb(errC);
        conC = arrayToRgb(conC);

        docWpm.style.color = wpmC;
        docRaw.style.color = rawwpmC;
        docAcc.style.color = accC;
        docConsis.style.color = conC;
        docError.style.color = errC;
        docTime.style.color = wpmC;

        if (consistency == "0%") docConsis.style.color = resultWorstColorHEX;
}

function restart() {
        if (TYPEMODE === "time-type-mode") {
                clearInterval(inter);
                timerTimeTypeMode.style.display = "none";
        }
        POSITION = 0;
        STATE = null;
        TEXT = "";
        focusMode(false);

        numberOfWords = 0;
        numberOfCharacters = 0;
        numberOfErrors = 0;
        allIncorrects = null;
        rawCharacterCount = 0;
        startTime = 0;
        finishTime = 0;
        typeTime = 0;

        everyCharTimeBetweenArray = [];
        t1 = null;

        typeTestStarted = false;
        readyToStart = true;

        resultField.style.display = "none";
        typeField.style.display = "block";
        languageButton.style.display = "block";

        textGenerator();
}

function repeat() {
        if (TYPEMODE === "time-type-mode") {
                clearInterval(inter);
                timerTimeTypeMode.style.display = "none";
        }
        POSITION = 0;
        STATE = null;
        focusMode(false);

        numberOfErrors = 0;
        allIncorrects = null;
        rawCharacterCount = 0;
        startTime = 0;
        finishTime = 0;
        typeTime = 0;

        everyCharTimeBetweenArray = [];
        t1 = null;

        typeTestStarted = false;
        readyToStart = true;

        resultField.style.display = "none";
        typeField.style.display = "block";
        languageButton.style.display = "block";
        textToHTML(TEXT);
}

restartButton.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
                restartButton.blur();
                restart();
                settings.focus();
                settings.blur();
        }
});

repeatButton.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
                repeatButton.blur();
                repeat();
                settings.focus();
                settings.blur();
        }
});

restartButton.addEventListener("click", () => {
        restartButton.blur();
        restart();
        settings.focus();
        settings.blur();
});

repeatButton.addEventListener("click", () => {
        repeatButton.blur();
        repeat();
        settings.focus();
        settings.blur();
});

document.addEventListener("keyup", function (event) {
        if (event.getModifierState("CapsLock")) {
                capsLockState.style.display = "block";
        } else {
                capsLockState.style.display = "none";
        }
});

function typeModeToLocalStorage() {
        let typeModeItems = document.querySelectorAll(".type-mode-item");
        ////console.log(typeModeItems);
        let actives = [];
        for (let i = 0; i < typeModeItems.length; i++) {
                if (typeModeItems[i].classList.contains("mode-active")) {
                        actives.push(typeModeItems[i]);
                }
        }
        for (let i = 0; i < actives.length; i++) {
                let activeParent = actives[i].parentElement;
                if (actives[i].id === "word-type-mode") {
                        localStorage.setItem("TYPEMODE", "word-type-mode");
                        TYPEMODE = "word-type-mode";
                } else if (actives[i].id === "time-type-mode") {
                        localStorage.setItem("TYPEMODE", "time-type-mode");
                        TYPEMODE = "time-type-mode";
                } else if (activeParent.id === "word-type-mode-options") {
                        localStorage.setItem("nWordsInput", actives[i].innerHTML);
                        nWordsInput = actives[i].innerHTML;
                } else if (activeParent.id === "time-type-mode-options") {
                        localStorage.setItem("nTimeInput", actives[i].innerHTML);
                        nTimeInput = actives[i].innerHTML;
                }
        }
        if (TYPEMODE === "word-type-mode") {
                wordTypeModeOptions.style.display = "inline-block";
                timeTypeModeOptions.style.display = "none";
        } else if (TYPEMODE === "time-type-mode") {
                wordTypeModeOptions.style.display = "none";
                timeTypeModeOptions.style.display = "inline-block";
        }
        afterTypeModeHandler();
}

function typeModeToStyle() {
        let typeModeItems = document.querySelectorAll(".type-mode-item");
        for (let i = 0; i < typeModeItems.length; i++) {
                if (typeModeItems[i].classList.contains("mode-active")) {
                        typeModeItems[i].classList.remove("mode-active");
                }
                if (typeModeItems[i].id === TYPEMODE && TYPEMODE === "word-type-mode") {
                        wordTypeModeOptions.style.display = "inline";
                        timeTypeModeOptions.style.display = "none";
                        typeModeItems[i].classList.add("mode-active");
                } else if (typeModeItems[i].id === TYPEMODE && TYPEMODE === "time-type-mode") {
                        wordTypeModeOptions.style.display = "none";
                        timeTypeModeOptions.style.display = "inline";
                        typeModeItems[i].classList.add("mode-active");
                } else if (typeModeItems[i].innerHTML == nWordsInput) {
                        typeModeItems[i].classList.add("mode-active");
                } else if (typeModeItems[i].innerHTML == nTimeInput) {
                        typeModeItems[i].classList.add("mode-active");
                }
        }
}
typeModeToStyle();

function selectTypeMode(node) {
        if (node.id === "word-type-mode") {
                if (node.classList.contains("mode-active")) return;
                else {
                        node.classList.add("mode-active");
                        docTimeTypeMode.classList.remove("mode-active");
                        TYPEMODE = "word-type-mode";
                        localStorage.setItem("TYPEMODE", "word-type-mode");
                        typeModeToLocalStorage();
                        return;
                }
        } else if (node.id === "time-type-mode") {
                if (node.classList.contains("mode-active")) return;
                else {
                        node.classList.add("mode-active");
                        docWordTypeMode.classList.remove("mode-active");
                        TYPEMODE = "time-type-mode";
                        localStorage.setItem("TYPEMODE", "time-type-mode");
                        typeModeToLocalStorage();
                        return;
                }
        }
        //console.log(node);
        let parent = node.parentNode;
        ////console.log(parent);
        ////console.log(parent.children);
        let children = parent.children;
        for (let i = 0; i < children.length; i++) {
                if (children[i].classList.contains("mode-active")) {
                        children[i].classList.remove("mode-active");
                }
        }

        node.classList.add("mode-active");
        typeModeToLocalStorage();
}

function afterTypeModeHandler() {
        restart();
}

document.querySelectorAll(".type-mode-item").forEach((e) => {
        e.addEventListener("click", () => {
                selectTypeMode(e);
        });
});

window.addEventListener("keydown", function (e) {
        if (e.keyCode == 32 && e.target == document.body) {
                e.preventDefault();
        }
});

let inter;

function timerForTimeTypeMode(time) {
        timerTimeTypeMode.style.display = "block";
        let t = time;
        timerTimeTypeMode.innerHTML = time;
        inter = setInterval(() => {
                t--;
                if (t <= 0) {
                        clearInterval(inter);
                        timerTimeTypeMode.style.display = "none";
                        finished();
                } else {
                        timerTimeTypeMode.innerHTML = t;
                }
        }, second);
}

function positioningTypeFieldOnCaret() {
        ////console.log("positioning called");
        let firstWord = document.querySelector(".word");
        let allWords = document.querySelectorAll(".word");
        let caretLetter = document.querySelector(".position");
        let caretWord = caretLetter.parentNode;
        let caretWordTop = caretWord.offsetTop;
        ////console.log(typeField);
        let typeFieldFontSize = window.getComputedStyle(typeField).getPropertyValue("font-size").replace(/\D/g, "");
        ////console.log(typeFieldFontSize);
        typeFieldFontSize = Number(typeFieldFontSize);
        let caretHeight = typeFieldFontSize * 1.25;
        ////console.log(caretHeight, caretWordTop);
        if (caretWordTop > caretHeight) {
                //console.log("word > caret");
                let firstWordTop = parseInt(firstWord.style.top);
                firstWordTop -= caretHeight;
                firstWordTop = firstWordTop + "px";
                for (let i = 0; i < allWords.length; i++) {
                        allWords[i].style.top = firstWordTop;
                }
                if (TYPEMODE === "word-type-mode") return;
                textGeneratorToHtmlTimeTypeMode();
        }
}

document.querySelectorAll(".lang").forEach((e) => {
        ////console.log(e.id);
        e.addEventListener("click", () => {
                let langStr = e.id;
                console.log(langStr);
                localStorage.setItem("LANGUAGE", langStr);
                LANGUAGE = langStr;
                LANGUAGE = LanguagesObj[LANGUAGE];
                restart();
                languagePopup.style.display = "none";
                darkBack.style.display = "none";
                languageButton.innerHTML = langStr.replace("-", " ").toUpperCase();
        });
});

document.querySelectorAll(".theme").forEach((e) => {
        e.addEventListener("click", () => {
                THEME = themeObj[e.id];
                localStorage.setItem("THEME", e.id);
                resultBestColorHEX = THEME["--best-score-color"] || themeObj["tokyo-night-dark"];
                resultWorstColorHEX = THEME["--worst-score-color"] || themeObj["tokyo-night-dark"];
                themeUpdateOnScreen();
                resultColoring();
        });
});
themeUpdateOnScreen();
function themeUpdateOnScreen() {
        let root = document.querySelector(":root");
        let sheet = document.getElementById("new-animation").sheet;
        for (const key in THEME) {
                root.style.setProperty(key, THEME[key]);
        }
        if ("bloom-caret" in THEME) {
                let rule;
                if ("caret-animation" in THEME) {
                        let animName = THEME["caret-animation"];
                        rule = `.position { animation-name: ${animName}; }`;
                } else {
                        rule = ".position { animation-name: blinker-bloom; }";
                }
                if (sheet.cssRules.length > 0) {
                        sheet.deleteRule(0);
                        sheet.insertRule(rule, 0);
                } else {
                        sheet.insertRule(rule, 0);
                }
                root.style.setProperty("--caret-bloom-color", THEME["bloom-caret"]);
        } else {
                let rule = ".position { animation-name: blinker; }";
                if (sheet.cssRules.length > 0) {
                        sheet.deleteRule(0);
                        sheet.insertRule(rule, 0);
                } else {
                        sheet.insertRule(rule, 0);
                }
        }
}

function rgbToArray(str) {
        str = str.split(",");
        for (let i = 0; i < str.length; i++) {
                str[i] = str[i].replace(/\D/g, "");
                str[i] = parseInt(str[i]);
        }
        return str;
}
function betweenTwoColor(color1, color2, percent) {
        let diff1 = Math.abs(color1[0] - color2[0]);
        let diff2 = Math.abs(color1[1] - color2[1]);
        let diff3 = Math.abs(color1[2] - color2[2]);

        let smaller1 = color1[0] > color2[0] ? color2[0] : color1[0];
        let smaller2 = color1[1] > color2[1] ? color2[1] : color1[1];
        let smaller3 = color1[2] > color2[2] ? color2[2] : color1[2];

        let sign1 = smaller1 === color2[0] ? -1 : 1;
        let sign2 = smaller2 === color2[1] ? -1 : 1;
        let sign3 = smaller3 === color2[2] ? -1 : 1;

        return [color1[0] + (sign1 * (diff1 * percent)) / 100, color1[1] + (sign2 * (diff2 * percent)) / 100, color1[2] + (sign3 * (diff3 * percent)) / 100];
}
function arrayToRgb(arr) {
        return `rgb(${arr[0]}, ${arr[1]}, ${arr[2]})`;
}

// not mine
function rgbToHex(r, g, b) {
        return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}
// not mine
function hexToRgb(h) {
        let r = 0,
                g = 0,
                b = 0;
        if (h.length == 4) {
                r = "0x" + h[1] + h[1];
                g = "0x" + h[2] + h[2];
                b = "0x" + h[3] + h[3];
        } else if (h.length == 7) {
                r = "0x" + h[1] + h[2];
                g = "0x" + h[3] + h[4];
                b = "0x" + h[5] + h[6];
        }

        return "rgb(" + +r + "," + +g + "," + +b + ")";
}

custom.addEventListener("click", () => {
        themesSettingItemsDisplay.style.display = "none";
        customTheme.style.display = "block";
});

const inputIdWithColorKey = {
        "bg-color-input": ["--background-color", "bgC"],
        "first-color-input": ["--first-color", "fstC"],
        "second-color-input": ["--second-color", "sC"],
        "third-color-input": ["--third-color", "tC"],
        "fourth-color-input": ["--fourth-color", "frthC"],
        "error-color-input": ["--error-color", "eC"],
        "caret-color-input": ["--caret-color", "cC"],
        "best-color-input": ["--best-score-color", "bsC"],
        "worst-color-input": ["--worst-score-color", "wsC"],
};

document.querySelectorAll(".color-input").forEach((e) => {
        e.value = THEME[inputIdWithColorKey[e.id][0]];
});

document.querySelectorAll(".color-input").forEach((e) => {
        e.addEventListener("input", () => {
                let id = e.id;
                let value = e.value;

                THEME[inputIdWithColorKey[id][0]] = value;
                localStorage.setItem(inputIdWithColorKey[id][1], value);

                resultBestColorHEX = THEME["--best-score-color"];
                resultWorstColorHEX = THEME["--worst-score-color"];
                themeUpdateOnScreen();
        });
});