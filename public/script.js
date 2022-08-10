// Function for naviagtion bar functionality
(function() {
    var burger = document.querySelector('.burger')
    var nav = document.querySelector('#'+burger.CDATA_SECTION_NODE.target);

    burger.addEventListener('click', function(){
        burger.classList.toggle('is-active');
        nav.classList.toggle('is-active');

    })
})(); 


// Modal functionality
const signupButton = document.querySelector('#navSignUp');
const modalBg = document.querySelector('.modal-background');
const logInModal = document.querySelector('#logInModal')
const signUpModal = document.querySelector('#signUpModal')
const modalSignUp = document.querySelector('#signUpBtn')
const exitBtn = document.querySelector ('#exitBtn')
const exitBtn2 = document.querySelector ('#exitBtn2')
const logInBtn = document.querySelector ('#logInBtn')


// Log gin button functionality

logInBtn.addEventListener ('click', () => {
    console.log('log in button')
    logInModal.classList.add ('is-active');

});

signupButton.addEventListener('click', () => {
    logInModal.classList.add('is-active');
});

// Adding event listener to close background of modal
exitBtn.addEventListener('click', () => {
    logInModal.classList.remove('is-active');
});

// Adding event listener to close background of modal
exitBtn2.addEventListener('click', () => {
    signUpModal.classList.remove('is-active');
});

console.log(modalSignUp)
// adding event lisener to modal sign up button
modalSignUp.addEventListener('click',() => {
    console.log ("click on sign up")
    logInModal.classList.remove('is-active');
    signUpModal.classList.add('is-active');
});

// create session so modal can only pop up once 
