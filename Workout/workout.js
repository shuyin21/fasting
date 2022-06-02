const weekDiv = document.getElementById('week-select');
const weekSelector = document.getElementById('week-selector');
const mainDiv = document.getElementById('selection');
const week1Btn = document.querySelector('#week-1');
const week2Btn = document.querySelector('#week-2');
const week3Btn = document.querySelector('#week-3');
const week4Btn = document.querySelector('#week-4');

function weekselectFunc(x) {
    weekDiv.classList.add('non-display');
    console.log(x);
    let wButtons = document.querySelector('.w-buttons');
    wButtons.classList.remove('non-display');
    btnShower(Number(x));

}

function btnShower(x) {
    switch (x) {
        case 1:
            week1Btn.classList.remove('non-display');
            break;
        case 2: week1Btn.classList.remove('non-display');
            week2Btn.classList.remove('non-display');
            break;
        case 3:
            week1Btn.classList.remove('non-display');
            week2Btn.classList.remove('non-display');
            week3Btn.classList.remove('non-display');
            break;
        case 4:
            week1Btn.classList.remove('non-display');
            week2Btn.classList.remove('non-display');
            week3Btn.classList.remove('non-display');
            week4Btn.classList.remove('non-display');
        default:
            break;
    }
}