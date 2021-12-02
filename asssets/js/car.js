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

function getCarByName(name) {
    return getAllCars().then(function(cars) {
        for (let carId in cars) {
            console.log(cars[carId]["owner"])
            if (cars[carId]["owner"] == name) {
                console.log(cars[carId])
                return cars[carId];
            }
        }
        return "No Car";
    });
}

function getAllCars() {
    return fetchData("https://htf-2021.zinderlabs.com/car").then(function(cars) {
        return cars
    });
}