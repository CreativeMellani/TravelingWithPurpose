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
const submitBtn = document.querySelector('#submitBtn')

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

// async event function to link script to querySelector and addEventListeners to forms and buttons
const userLoginForm = async(event) => {
    // prevent form from defaulting values
    event.preventDefault();
    // trim user inputs of email and password entered from login form
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    // send POST request to userRoute API endpoint
    if (email && password) {
        const response = await fetch ('api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        // redirect user to homepage if response is successful
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#logInBtn').addEventListener('submit', userLoginForm);

// async event function to link script to querySelector and addEventListeners to forms and buttons
const userLogout = async(event) => {

    // send POST request to userRoute API endpoint
        const response = await fetch ('api/users/logout', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json'},
        });
        // redirect user to main if response is successful
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    };
    
document.querySelector('#logout').addEventListener('click', userLogout);

// async event function to link script to querySelector and addEventListeners to forms and buttons
const userSignUpForm = async(event) => {
    // prevent form from defaulting values
    event.preventDefault();
    // trim user inputs of email and password entered from login form

    const firstName = document.querySelector('#first_name').value.trim();
    const lastName = document.querySelector('#last_name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const password = document.querySelector('#password').value.trim();

    // send POST request to userRoute API endpoint
    if ( firstName && lastName && email && password) {
        const response = await fetch ('api/users', {
            method: 'POST',
            body: JSON.stringify({ first_name: firstName, last_name: lastName, email: email, password: password }),
            headers: { 'Content-Type': 'application/json'},
        });
        // redirect user to homepage if response is successful
        if (response.ok) {
            document.location.replace('/homepage');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('#submitBtn').addEventListener('click', userSignUpForm);