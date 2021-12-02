"use strict";

document.addEventListener("DOMContentLoaded", init);

function init() {
    fetchUsers()
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

function fetchUsers() {
    fetchData("https://htf-2021.zinderlabs.com/suspect").then(function(users) {
        let body = document.querySelector("body")
            //console.log(users[0])
        for (let userid in users) {
            body.innerHTML += `<div><img src=${users[userid]["imgSrc"]} alt=${users[userid]["name"]}><p>Name: ${users[userid]["name"]}</p><a href="suspect.html?${users[userid]["id"]}">Details</a> </div>`

        }
    });
}