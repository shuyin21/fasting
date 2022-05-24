const footerP = document.querySelector('#footer p');
function dateFunc() {
    let d = new Date();
    let year = d.getFullYear();
    footerP.innerHTML = `Life Style Change App ${year}`;
}
dateFunc();


const addBtn = document.getElementById('add-btn');
const listBox = document.querySelector('#list-box ul');
let foodInput = document.getElementById('foodInput');
let foodQt = document.getElementById('foodQt');
let size = document.getElementById('size');



addBtn.addEventListener('click', () => {

    crtListItem(foodInput.value, foodQt.value, size.value);
    foodInput.value = '';
    foodQt.value = '';
    size.value = '';

});
// Creating the list Item
const crtListItem = (foodInput, foodQt, size) => {
    if (foodInput.length > 12) {
        foodInput = `${foodInput.substring(0, 11)}..`;
    }
    let li = document.createElement('li');
    let h4 = document.createElement('h4');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    listBox.appendChild(li);
    li.appendChild(h4);
    li.appendChild(p);
    li.appendChild(btn);
    h4.innerText = foodInput.toUpperCase();
    p.innerHTML = `${foodQt} ${size}`;
    btn.innerText = 'X';
    btn.addEventListener('click', () => {
        li.remove();
    });
}


