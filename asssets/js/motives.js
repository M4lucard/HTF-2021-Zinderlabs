"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    //fetchMotives()
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

function fetchMotives() {
    fetchData(`https://htf-2021.zinderlabs.com/motive`).then(function(motives) {
        let body = document.querySelector("body")

        for (let motive in motives) {
            body.innerHTML += `<div> <p>${motives[motive]["text"]}</p><p>${motives[motive]["suspectId"]}</p></div>`

        }

    });
}

function getAllMotives() {
    return fetchData("https://htf-2021.zinderlabs.com/motive").then(function(motive) {
        return motive;
    });
}

function getMotiveByUserID(id) {
    return fetchData(`https://htf-2021.zinderlabs.com/motive/${id}`).then(function(motive) {
        if (motive === undefined) {
            return "Geen motive"
        }
        return motive.text;
    });
}