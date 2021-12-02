"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchCars()
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

function fetchCars() {
    fetchData(`https://htf-2021.zinderlabs.com/car`).then(function(cars){
        let body = document.querySelector("body")
            
        for (let car in cars) {
            console.log(cars[car]);
            body.innerHTML += `<div><p>${cars[car]["licenseplate"]}</p><p>${cars[car]["manufacturer"]}</p><p>${cars[car]["type"]}</p><p>${cars[car]["color"]}</p><p>${cars[car]["owner"]}</p></div>` 

        }
    
    });
}

