const footerP = document.querySelector('#footer p');



let date = () => {
    let d = new Date();
    let year = d.getFullYear();
    footerP.innerHTML = `Life Style Change App ${year}`
}
date();