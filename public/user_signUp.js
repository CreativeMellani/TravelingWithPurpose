// async event function to link script to querySelector and addEventListeners to forms and buttons
const userSignUpForm = async(event) => {
    // prevent form from defaulting values
    event.preventDefault();
    // trim user inputs of email and password entered from login form

    const firstName = document.querySelector('#firstName-signUp').value.trim();
    const lastName = document.querySelector('#lastName-signUp').value.trim();
    const email = document.querySelector('#email-signUp').value.trim();
    const password = document.querySelector('#password-signUp').value.trim();

    // send POST request to userRoute API endpoint
    if ( firstName && lastName && email && password) {
        const response = await fetch ('/api/users', {
            method: 'POST',
            body: JSON.stringify({ firstName, lastName, email, password }),
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

document.querySelector('#signUpModal').addEventListener('submit', userSignUpForm);