const footerP = document.querySelector('#footer p');
const workoutBtn = document.getElementById('workout');
const foodBtn = document.getElementById('food');
const fastingBtn = document.getElementById('fasting');

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

