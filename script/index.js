let Main = document.querySelector('#Main');
let basicMain = document.querySelector('#basicMain');
let headRecom = document.querySelector('#head-recom');
let asideText = document.querySelectorAll('.aside-text');
let asideItems = document.querySelectorAll('.aside__items');
let user = document.querySelector('#user');
let userCom = document.querySelector('#user-com');
let bell = document.querySelector('#bell');
let bells = document.querySelector('#bell-com');
let options = document.querySelector('#options');
let optionsCom = document.querySelector('#options-com');
let k = true, l = true, belle = true, option = true;

function bars() {
    if (k) {
        Main.style.left = '140px';
        headRecom.style.left = '100px';
        basicMain.style.transform = 'scale(1.1)';
        for (let i = 0; i < asideText.length; i++) {
            asideItems[i].style.width = '70px';
            asideText[i].style.display = 'none';
            asideText[i].style.visibility = 'hidden';
        }
        k = false;
    } else {
        Main.style.left = '240px';
        headRecom.style.left = '240px';
        basicMain.style.transform = 'scale(1)';
        for (let i = 0; i < asideText.length; i++) {
            asideItems[i].style.width = '220px';
            asideText[i].style.display = 'block';
            asideText[i].style.visibility = 'visible';
        }
        k = true
    }
}

user.addEventListener('click', userMain);
basicMain.addEventListener('click', bodyEvent);
function bodyEvent() {
    if (!l) {
        l = true;
        userCom.style.display = 'none';
    };
    if(!belle) {
        belle = true;
        bells.style.display = 'none';
    }
    if(!option) {
        option = true;
        optionsCom.style.display = 'none';
    }
}
function userMain() {
    if (l) {
        l = false;
        belle = true;
        option = true;
        bells.style.display = 'none';
        userCom.style.display = 'block';
        optionsCom.style.display = 'none';
    } else {
        l = true;
        userCom.style.display = 'none';
    }
}
bell.addEventListener('click', bellCom);
function bellCom() {
    if(belle) {
        l = true;
        option = true;
        belle = false;
        bells.style.display = 'block';
        userCom.style.display = 'none';
        optionsCom.style.display = 'none';
    } else {
        belle = true;
        bells.style.display = 'none';
    }
}
options.addEventListener('click', optionsFunc);
function optionsFunc() {
    if(option) {
        l = true;
        belle = true;
        option = false;
        bells.style.display = 'none';
        userCom.style.display = 'none';
        optionsCom.style.display = 'block';
    } else {
        option = true
        optionsCom.style.display = 'none';
    }
}