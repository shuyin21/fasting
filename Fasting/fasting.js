const footerP = document.querySelector('#footer p');
const f16 = document.getElementById('f16');
const f24 = document.getElementById('f24');
const f36 = document.getElementById('f36');
const f48 = document.getElementById('f48');
const f72 = document.getElementById('f72');
const digital = document.getElementById('digital');
const button = document.getElementById('button');
const stop = document.getElementById('stop');
const clrBtn = document.getElementById('clr-btn');
const info = document.querySelector('#info h3');
const circle = document.getElementsByClassName('circle');


let myInterval;
let hour = 00;
let min = 00;
let sec = 00;
var todayDate = new Date().getTime();
var countDownDate = '';
var hourVal = '';
const fButtonWrapper = [f16, f24, f36, f48, f72];
let hoursLeft;
let minutesLeft;
let secondsLeft;

// checking the year for the footer
let date = () => {
    let d = new Date();
    let year = d.getFullYear();
    footerP.innerHTML = `Life Style Change App ${year}`
}
date();

// fasting button click handler
fButtonWrapper.forEach((x) => {

    x.addEventListener('click', () => {
        hourVal = Number(x.value);
        button.classList.remove('non-disp');
        countDownDate = todayDate + secondsCal(hourVal);
        console.log(countDownDate);
        fastTime(x);
        digital.innerText = `${hour}:${min}:${sec}`;

        lockBtn();
        info.innerText = `Please press Start to begin your ${hourVal} hours fasting!`

    })
})

// add fasting time to clock function

stop.addEventListener('click', () => {
    clearInterval(myInterval);
    button.classList.remove('non-disp');
    clrBtn.classList.remove('non-disp');
    stop.classList.add('non-disp');
    console.log(`${hoursLeft}:${minutesLeft}:${secondsLeft}`);
    remainingTime(hourVal);
})
// Starting the timer
button.addEventListener('click', () => {
    let now = new Date().getTime();
    myInterval = setInterval(timer, 1000, hourVal);
    button.classList.add('non-disp');
    stop.classList.remove('non-disp');
    clrBtn.classList.add('non-disp');
    countDownDate = now + secondsCal(hourVal);
    lockBtn();
    info.innerText = `If you stop your timer will reset to ${hourVal} hours`
})

// calculate the seconds for fasting hours


// timer function
function timer(x) {
    let now = new Date().getTime();
    // Find the distance between now and the count down date

    var distance = countDownDate - now;
    let num = 0;
    // Time calculations for  hours, minutes and seconds
    console.log(num++);
    var hours = Math.floor((distance % (1000 * 60 * 60 * x)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element
    digital.innerHTML = `${hours}:${minutes}:${seconds}`;

    hoursLeft = hours;
    minutesLeft = minutes;
    secondsLeft = seconds;
    // If the count down is over
    if (distance < 0) {
        clearInterval(timer);
        digital.innerHTML = 'Choose Duration';

    }

}

// Clearing the clock

clrBtn.addEventListener("click", clearClock)

function clearClock() {
    hour = '00';
    min = "00";
    sec = '00';
    digital.innerText = `${hour}:${min}:${sec}`;
    unlockBtn();
    info.innerText = 'Please select your fasting duration';
}

// unlock the fasting duration buttons
function unlockBtn() {
    fButtonWrapper.forEach((x) => {
        x.disabled = false;
        x.classList.add('pulsing');
    })
}
// lock the fasting duration buttons
function lockBtn() {
    fButtonWrapper.forEach((x) => {
        x.disabled = true;
        x.classList.remove('pulsing');
    });

}
// Checking the fasting duration
function fastTime(fTime) {
    hour = fTime.value;
    min = "00";
    sec = '00';

}
// stop the timer
function stopInterval(x) {
    clearInterval(x);
}


// calculate time for Remaining time
function remainingTime(x) {
    let baseHours = x;
    let baseMinutes = 60;
    let baseSeconds = 60;
    info.innerText = `Well done! You fasted for ${(baseHours - hoursLeft) - 1} Hours ${(baseMinutes - minutesLeft) - 1} min and ${baseSeconds - secondsLeft} sec!`;
}
function secondsCal(x) {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const sec = hour * x;
    console.log(sec)
    return Number(sec);
}
