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

document.querySelector('.login-form').addEventListener('submit', userLoginForm);