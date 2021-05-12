//1
let exo1 = document.querySelector('#content');
console.log(exo1);

//2
let exo2 = document.querySelectorAll('#content');
console.log(exo2);

//3
let exo3 = document.querySelector('.important');
console.log(exo3);

//4
let exo4 = document.querySelectorAll('.important');
console.log(exo4);

//5
Array.from(exo4).forEach(e => {
    console.log(e.innerText.substring(0, e.innerText.length-1) + e.innerText.substring(e.innerText.length-1).toUpperCase());
});

//6
let exo6 = document.getElementById('content').getElementsByClassName('grandParagraphe');
console.log(exo6);