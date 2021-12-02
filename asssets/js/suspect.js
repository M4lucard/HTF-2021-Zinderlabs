"use strict";

document.addEventListener("DOMContentLoaded", init);


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

function init() {
    console.log(window.location.search.substr(1))
    showUserDetails()
}

function showUserDetails() {
    fetchData("https://htf-2021.zinderlabs.com/suspect").then(function(users) {
        for (let userid in users) {
            if (window.location.search.substr(1) == users[userid]["id"]) {
                document.querySelector("img").src = users[userid]["imgSrc"];
                document.querySelector(".id").innerText = "ID: " + users[userid]["id"];
                document.querySelector(".name").innerText = "Name: " + users[userid]["name"];
                document.querySelector(".motive").innerText = "Motive: " + getMotive()
                document.querySelector(".car").innerText = "Car: " + getCar()
                document.querySelector(".location").innerText = "Location: " + getLocation()
            }
        }

    });
}

function getCar() {
    return "TODO";
}

function getLocation() {
    return "TODO";
}

function getMotive() {
    return "TODO";
}