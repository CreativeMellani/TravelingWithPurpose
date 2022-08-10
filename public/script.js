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
const signupButton = document.querySelector('#signUp');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal')

signupButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

// Adding event listener to close background of modal
exitBtn.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

// create session so modal can only pop up once 

