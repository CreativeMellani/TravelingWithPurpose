// async event function to link script to querySelector and addEventListeners to forms and buttons
const userLogout = async(event) => {

    // send POST request to userRoute API endpoint
        const response = await fetch ('api/users/logout', {
            method: 'POST',
            // body: JSON.stringify({ email, password }),
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