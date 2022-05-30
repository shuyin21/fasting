const footerP = document.querySelector('#footer p');
const workoutBtn = document.getElementById('workout');
const foodBtn = document.getElementById('food');
const fastingBtn = document.getElementById('fasting');
const modal = document.getElementsByClassName('modal');
const registerModal = document.getElementsByClassName('register-modal');
const loginModal = document.getElementsByClassName('login-modal');
const inputs = document.querySelectorAll('input');
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const errorPar = document.getElementById('error-par');

const buttonsHolder = [workoutBtn, foodBtn, fastingBtn];

let date = () => {
    let d = new Date();
    let year = d.getFullYear();
    footerP.innerHTML = `Life Style Change App ${year}`
}
date();

buttonsHolder.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (btn.id === 'workout') {
            document.location.href = '/Workout/workout.html';
        }
        else if (btn.id === 'fasting') {
            document.location.href = '/Fasting/fasting.html';
        }
        else {
            document.location.href = '/Food/food.html';
        }
    })
})



loginBtn.addEventListener('click', () => {
    modal[0].classList.remove('non-display');
    loginModal[0].classList.remove('non-display');
});
registerBtn.addEventListener('click', () => {
    modal[0].classList.remove('non-display');
    registerModal[0].classList.remove('non-display');
});

function closeModal() {
    modal[0].classList.add('non-display');
    loginModal[0].classList.add('non-display');
    registerModal[0].classList.add('non-display');

    inputs.forEach(x => x.value = '');

    errorPar.innerText = '';
}