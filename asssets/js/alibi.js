"use strict";

document.addEventListener("DOMContentLoaded", init);


function getAlibiByUserID(id) {
    return fetchData(`https://htf-2021.zinderlabs.com/alibi/${id}`).then(function(alibi) {
        console.log(alibi)
        if (alibi.length < 1) {
            return "Geen Alibi"
        }
        return alibi[0];
    });
}