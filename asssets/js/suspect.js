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
                getMotiveByUserID(users[userid]["id"]).then(function(motive) {
                    document.querySelector(".motive").innerText = "Motive: " + motive;
                });
                getCarByName(users[userid]["name"]).then(function(car) {
                    document.querySelector(".car").innerHTML = "Car: " + "</br>"
                    document.querySelector(".car").innerHTML += "licenseplate => " + car["licenseplate"] + "</br>"
                    document.querySelector(".car").innerHTML += "manufacturer => " + car["manufacturer"] + "</br>"
                    document.querySelector(".car").innerHTML += "type => " + car["type"] + "</br>"
                    document.querySelector(".car").innerHTML += "color => " + car["color"] + "</br>"
                });
                getAlibiByUserID(users[userid]["id"]).then(function(alibi) {
                    if (alibi === "Geen Alibi") {
                        document.querySelector(".alibi").innerHTML = "Geen Alibi"
                    } else {
                        document.querySelector(".alibi").innerHTML = "Alibi: " + "</br>"
                        document.querySelector(".alibi").innerHTML += "description => " + alibi["description"] + "</br>"
                        document.querySelector(".alibi").innerHTML += "verified => " + alibi["verified"] + "</br>"
                    }
                })
            }
        }

    });
}



function getLocation() {
    return "TODO";
}

function getMotive() {
    return "TODO";
}