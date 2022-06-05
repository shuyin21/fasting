const weekDiv = document.getElementById('week-select');
const weekSelector = document.getElementById('week-selector');
const mainDiv = document.getElementById('selection');
const week1Btn = document.querySelector('#week-1');
const week2Btn = document.querySelector('#week-2');
const week3Btn = document.querySelector('#week-3');
const week4Btn = document.querySelector('#week-4');
const w1 = document.querySelectorAll('.w1');
const w2 = document.querySelectorAll('.w2');
const w3 = document.querySelectorAll('.w3');
const w4 = document.querySelectorAll('.w4');
const tL1 = document.getElementById('w1');
const tL2 = document.getElementById('w2');
const tL3 = document.getElementById('w3');
const tL4 = document.getElementById('w4');
const w1Print = document.querySelector('.w1-print');
const w2Print = document.querySelector('.w2-print');
const w3Print = document.querySelector('.w3-print');
const w4Print = document.querySelector('.w4-print');
const prbtn = document.querySelector('#prbtn')

const tLWrapper = [tL1, tL2, tL3, tL4];

let weekTemp;

let elementContainer;

function weekselectFunc(x) {
    weekDiv.classList.add('non-display');

    let wButtons = document.querySelector('.w-buttons');
    wButtons.classList.remove('non-display');
    btnShower(Number(x));
    weekBtnHandler();
}

function btnShower(x) {
    switch (x) {
        case 1:
            week1Btn.classList.remove('non-display');
            w1Print.classList.remove('non-display');
            break;
        case 2: week1Btn.classList.remove('non-display');
            week2Btn.classList.remove('non-display');
            w1Print.classList.remove('non-display');
            w2Print.classList.remove('non-display');
            break;
        case 3:
            week1Btn.classList.remove('non-display');
            week2Btn.classList.remove('non-display');
            week3Btn.classList.remove('non-display');
            w1Print.classList.remove('non-display');
            w2Print.classList.remove('non-display');
            w3Print.classList.remove('non-display');
            break;
        case 4:
            week1Btn.classList.remove('non-display');
            week2Btn.classList.remove('non-display');
            week3Btn.classList.remove('non-display');
            week4Btn.classList.remove('non-display');
            w1Print.classList.remove('non-display');
            w2Print.classList.remove('non-display');
            w3Print.classList.remove('non-display');
            w4Print.classList.remove('non-display');
        default:
            break;
    }
}

function weekBtnHandler() {
    const weekBtns = document.querySelectorAll('.w-buttons button');
    const days = document.getElementById('days');


    weekBtns.forEach(x => {
        x.addEventListener('click', () => {

            days.classList.remove('non-display');
            if (x.id == 'week-1') {
                daySelectorHandler(w1);
                weekTemp = 'w1';
                listDisplay('w1');
            }
            else if (x.id == 'week-2') {
                daySelectorHandler(w2);
                weekTemp = 'w2';
                listDisplay('w2');
            }
            else if (x.id == 'week-3') {
                daySelectorHandler(w3);
                weekTemp = 'w3';
                listDisplay('w3');
            } else if (x.id == 'week-4') {
                daySelectorHandler(w4);
                weekTemp = 'w4';
                listDisplay('w4');
            }
        })

    })


}
function daySelectorHandler(week) {
    const first = document.querySelectorAll('.first');
    first.forEach(x => x.classList.remove('non-display'));
    prbtn.classList.remove('no-show');
}

function dayHandler(x) {

    let allDiv = document.querySelectorAll('.list');
    allDiv.forEach(y => {

        if (y.classList.contains(x) && y.classList.contains(weekTemp)) {
            y.classList.remove('non-display');

            elementContainer = y;

        }
        else {
            y.classList.add('non-display');
        }
    })


}

function listDisplay(x) {
    tLWrapper.forEach(y => {

        if (x == y.id) {
            y.classList.remove('non-display');
        }
        else { y.classList.add('non-display'); }
    })

}
// adding the chosen workout sets and reps to the list
function addingHandler() {
    const train = document.querySelector('#tr-select').value;
    const sets = document.querySelector('#sets').value;
    let reps = document.querySelector('#reps').value;
    const allList = document.querySelectorAll('.list');
    const bodyPart = document.querySelector('#buttons-wrapper').value;

    allList.forEach(x => {
        if (x.classList.contains('non-display') === false) {
            let li = document.createElement('li');
            let trSpan = document.createElement('span');
            let setsSpan = document.createElement('span');
            let repsSpan = document.createElement('span');
            let bodySpan = document.createElement('span');
            let delBtn = document.createElement('button');
            let ul = x.children[0];
            bodySpan.style.color = 'red';
            bodySpan.style.width = '110px';
            trSpan.style.width = '130px';
            setsSpan.style.width = '50px';
            repsSpan.style.width = '50px';
            delBtn.style.height = '10px';
            delBtn.style.background = 'red';
            ul.appendChild(li);
            li.appendChild(bodySpan);
            li.appendChild(trSpan);
            li.appendChild(setsSpan);
            li.appendChild(repsSpan);
            li.appendChild(delBtn);
            bodySpan.innerText = bodyPart.toUpperCase();
            trSpan.innerText = train;
            setsSpan.innerText = `${sets}sets`;
            repsSpan.innerText = `${reps}reps`;
            delBtn.innerText = 'X';
            delBtn.addEventListener('click', () => {
                li.remove();
            })
        }


    })

}
// Printing function and displaying only the workout til printing
function printWorkout(w) {

    const week = document.querySelectorAll('.list');
    week.forEach(x => {
        if (x.classList.contains(w) == true) {
            x.classList.remove('non-display');
        }
    })
    const noPrint = document.querySelectorAll('.no');
    noPrint.forEach(x => {
        x.classList.add('no-show');
    })
    window.print();
    setTimeout(() => {
        noPrint.forEach(x => {
            x.classList.remove('no-show');
        });
        week.forEach(x => {
            if (x.classList.contains(w) == true) {
                x.classList.add('non-display');
            }
        })
    }, 1000)

}
// print function
function printBtn() {
    const btn = document.querySelectorAll('.pr');
    const prbtn = document.querySelector('#prbtn').classList.add('no-show');
    btn.forEach(x => x.classList.remove('no-show'));

}
const chestWrapper = [];
const backWrapper = [];
const shoulderWrapper = [];
const legWrapper = [];
const bicepsWrapper = [];
const tricepsWrapper = [];
// fetching the json
fetch('./workout.json')
    .then(response => response.json())
    .then(data => dataHandler(data))
    .catch(error => console.log(error));

// pushing the data to the corresponding arrays

function dataHandler(data) {
    data.chest.forEach(data => chestWrapper.push(data.name));
    data.back.forEach(data => backWrapper.push(data.name));
    data.shoulder.forEach(data => shoulderWrapper.push(data.name));
    data.leg.forEach(data => legWrapper.push(data.name));
    data.biceps.forEach(data => bicepsWrapper.push(data.name));
    data.triceps.forEach(data => tricepsWrapper.push(data.name));
}
// Adding the json data to the select element as option

function bodyPartSelector(selectValue) {
    const trainingSelector = document.querySelector('#tr-select');
    removeAllChildNodes(trainingSelector);
    let wrapper;
    if (selectValue == 'chest') { wrapper = chestWrapper }
    else if (selectValue == 'back') { wrapper = backWrapper }
    else if (selectValue == 'shoulder') { wrapper = shoulderWrapper }
    else if (selectValue == 'leg') { wrapper = legWrapper }
    else if (selectValue == 'biceps') { wrapper = bicepsWrapper }
    else { wrapper = tricepsWrapper }
    wrapper.forEach(x => {

        let option = document.createElement('option');
        trainingSelector.appendChild(option);
        option.value = x;
        option.innerText = x;

    })
}


// removing all Child nodes
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}