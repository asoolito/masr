

const password = document.querySelector('.password');
const modme = document.querySelector('.hero__input1');
const form = document.querySelector('.hero_form');
const button = document.querySelector('.button');
const img = document.querySelector('.form__img');

img.addEventListener('click',(event) => {

    password.type.password 
})

button.addEventListener('click', (e) => {
    if (password.value == 1 && modme.value == 1) {
        e.preventDefault();
        alert('welcome kamron');
        password.value = "";
        modme.value = "";
    }else if (password.value == 2 && modme.value == 2){
        alert('welcome polat');
        password.value = "";
        modme.value = "";
    }else if (password.value == 3 && modme.value == 3){
        alert('welcome ibrohim');
        password.value = "";
        modme.value = "";
    }else if (password.value == 4 && modme.value == 4){
        alert('welcome said');
        password.value = "";
        modme.value = "";
    }else if (password.value == 5 && modme.value == 5){
        alert('welcome ibrohim');
        password.value = "";
        modme.value = "";
    }else if (password.value == 6 && modme.value == 6){
        alert('welcome abdulloh');
        password.value = "";
        modme.value = "";
    }else if (password.value == 7 && modme.value == 7){
        alert('welcome fayzulloh');
        password.value = "";
        modme.value = "";
    }else if (password.value == 8 && modme.value == 8){
        alert('welcome jafar');
        password.value = "";
        modme.value = "";
    }

});

new cods
