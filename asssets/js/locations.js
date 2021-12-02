"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchLocations()
}


function fetchData(url) {
    const myHeaders = new Headers();
    myHeaders.append("userId", "unkindled820");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    return fetch(url, requestOptions)
        .then(response => response.json())
        .then(result => { return result })
        .catch(error => console.log('error', error));

}

function fetchLocations() {
    fetchData(`https://htf-2021.zinderlabs.com/location`).then(function(locations){
        let body = document.querySelector("body")
            
        for (let location in locations) {
            body.innerHTML += `<div><p>${locations[location]["name"]}</p><p>${locations[location]["description"]}</p></div>` 

        }
    
    });
}

