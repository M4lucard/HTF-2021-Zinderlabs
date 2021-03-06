"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchSuspects()
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

function fetchSuspects() {
    fetchData("https://htf-2021.zinderlabs.com/suspect").then(function(suspects) {
        let body = document.querySelector("main")

        for (let suspectId in suspects) {
            body.innerHTML += `<div><img src=${suspects[suspectId]["imgSrc"]} alt=${suspects[suspectId]["name"]}><p>Name: ${suspects[suspectId]["name"]}</p><a href="suspect.html?${suspects[suspectId]["id"]}">Details</a> <p id="score">Score: 1 </p></div>` //${score}

        }
    });
}