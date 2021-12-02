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
    fetchData("https://htf-2021.zinderlabs.com/suspect").then(function (users) {
        for (let userid in users) {
            if (window.location.search.substr(1) == users[userid]["id"]) {
                document.querySelector("img").src = users[userid]["imgSrc"];
                document.querySelector(".id").innerText = "ID: " + users[userid]["id"];
                document.querySelector(".name").innerText = "Name: " + users[userid]["name"];
                getMotiveByUserID(users[userid]["id"]).then(function (motive) {
                    document.querySelector(".motive").innerText = "Motive: " + motive;
                });
                getCarByName(users[userid]["name"]).then(function (car) {
                    document.querySelector(".car").innerHTML = "Car: " + "</br>"
                    document.querySelector(".car").innerHTML += "licenseplate => " + car["licenseplate"] + "</br>"
                    document.querySelector(".car").innerHTML += "manufacturer => " + car["manufacturer"] + "</br>"
                    document.querySelector(".car").innerHTML += "type => " + car["type"] + "</br>"
                    document.querySelector(".car").innerHTML += "color => " + car["color"] + "</br>"
                });
                getAlibiByUserID(users[userid]["id"]).then(function (alibi) {
                    if (alibi === "Geen Alibi") {
                        document.querySelector(".alibi").innerHTML = "Geen Alibi"
                    } else {
                        document.querySelector(".alibi").innerHTML = "Alibi: " + "</br>"
                        document.querySelector(".alibi").innerHTML += "description => " + alibi["description"] + "</br>"
                        document.querySelector(".alibi").innerHTML += "verified => " + alibi["verified"] + "</br>"
                    }
                }).then(function (userId) {
                    document.querySelector(".score").innerHTML = "Score of suspicion: " + calculateSuspectScore(users[userid]["id"])
                });


            }
        }

    });
}

function calculateSuspectScore(suspectId) {
    /* 
Iedereen start met een gelijke verdachtheid, dit wordt beïnvloed door de bewijsstukken op basis van een "gewicht". (+ -> meer verdacht | - -> minder verdacht)
- Motief: Geen motief (-3) vs Wel een motief (+5)
- Auto: Auto vertrokken voor de moord? (-50)
- Alibi: Geverifieerd incorrect alibi (+15) < Geen alibi (+3) < Wel een alibi, maar nog niet geverifieerd (-3) < Geverifieerd correct alibi (-50)
*/
    let score = 500
    let motiveScore = 0
    let carScore = 0
    let alibiScore = 0

    getMotiveByUserID(suspectId).then(result => {
        console.log(result);
        if (result === "Geen motive") {
            motiveScore = -3
        } else {
            motiveScore = 5
            
        }
        console.log(motiveScore);
        getAlibiByUserID(suspectId).then(result => {
            console.log(result);
            if (result = "Geen Alibi") {
                alibiScore = 3
            } else {

                console.log(result[0]["verified"]);
                if (result[0]["verified"]) {
                    alibiScore = 30
                    //split on verified correct/incorrect
                    
                } else {
                    alibiScore = -3
                }
                
            }
            console.log(alibiScore);
            return score + motiveScore + alibiScore;
        })

    
    })
    

    
};



function getLocation() {
    return "TODO";
}

function getMotive() {
    return "TODO";
}