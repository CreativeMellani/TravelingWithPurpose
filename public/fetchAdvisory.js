const { Searched } = require("../models");

// store url of API
const advisoryAPIurl = `https://www.travel-advisory.info/api?countrycode=AU`;

let countrySearchInputEl = document.querySelector('#seachbar'); 

 let country = countrySearchInputEl.value.trim
// async fetch API request function and return data as json
async function getApiData (advisoryAPIurl, country) {
    // store fetched data from await fetch with params
    const searchedCountry = await fetch (advisoryAPIurl.replace("{countrycode=AU}", country), {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'omit',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        // body: JSON.stringify()
    });
    // parses JSON data response into Searched model database
    return searchedCountry.json();
};

// call fetch function
getApiData(advisoryAPIurl, country)
    .then((data) => data.json())
    .then((data) => {
        const postSearchedCountry = await fetch (`/api/search`, {
            method: 'POST',
            body: JSON.stringify({ 
            "Country": data.data.DE.name,
            "Description": data.data.DE.advisory.message,
            "Date_Updated": data.data.DE.advisory.updated,
        },
    )})
});
    // if (response.ok) {
    //     document.location.replace('/homepage')
    // } else {
    //     alert('Failed to create Searched data')
    // }})