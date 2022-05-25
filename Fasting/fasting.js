const footerP = document.querySelector('#footer p');
const f16 = document.getElementById('f16');
const f24 = document.getElementById('f24');
const f36 = document.getElementById('f36');
const f48 = document.getElementById('f48');
const f72 = document.getElementById('f72');
const digital = document.getElementById('digital');
const button = document.getElementById('button');

var clicked = false;
var stopped = 0;

let hour = 00;
let min = 00;
let sec = 00;
var todayDate = new Date().getTime();
var countDownDate = '';
var hourVal = '';
const fButtonWrapper = [f16, f24, f36, f48, f72];

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

        countDownDate = todayDate + secondsCal(hourVal);
        console.log(countDownDate);
        fastTime(x);
        digital.innerText = `${hour}:${min}:${sec}`
    })
})

// add fasting time to clock function

function fastTime(fTime) {

    hour = fTime.value;
    min = "00";
    sec = '00';

}

// Starting the timer
button.addEventListener('click', () => {

    if (clicked) {
        clicked = false;
        button.innerText = 'Start';
        button.style.backgroundColor = 'green';
    }
    else {
        clicked = true;
        button.innerText = 'Stop';
        button.style.backgroundColor = 'red';
        timer(hourVal);
    }
    stopped++;
    console.log(clicked);
})
const timer = x =>
    setInterval(function () {
        let now = new Date().getTime();
        // Find the distance between now and the count down date
        var distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * x)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Output the result in an element with id="demo"
        digital.innerHTML = `${hours}:${minutes}:${seconds}`;

        // If the count down is over, write some text 
        if (distance < 0 || stopped == 2) {
            clearInterval(timer);

            hourVal = 0;

            countDownDate = todayDate + secondsCal(hourVal);
            hour = "00";
            min = "00";
            sec = '00';
            digital.innerText = `${hour}:${min}:${sec}`

        }
    }, 1000);



// calculate the seconds for fasting hours

function secondsCal(x) {
    const minute = 1000 * 60;
    const hour = minute * 60;
    const sec = hour * x;
    return Number(sec);
}

