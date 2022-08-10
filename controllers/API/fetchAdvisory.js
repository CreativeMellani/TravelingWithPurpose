// import Searched model
const { Searched } = require("../../models");
// declare and store API keys
const apiKey = ``;
// store url of API
const advisoryAPIurl = `https://www.travel-advisory.info/api?countrycode=AU`;
 
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
        console.log('Success', data);
    })
    // catch error if err
    .catch((error) => {
        console.error('Error', error);
    });