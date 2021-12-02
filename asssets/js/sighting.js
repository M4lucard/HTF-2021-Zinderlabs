function getSightingByUserId(id) {
    return fetchData(`https://htf-2021.zinderlabs.com/sighting/suspect/${id}`).then(function(sighting) {
        return sighting;
    });
}