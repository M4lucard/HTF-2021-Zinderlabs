"use strict";

document.addEventListener("DOMContentLoaded", init);


function fetchData() {
    const myHeaders = new Headers();
    myHeaders.append("userId", "yourUserId");

    const requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch("https://htf-2021.zinderlabs.com/uri", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));

}