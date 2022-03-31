function logInfo(city) {
    const { name, country, numPeople } = city;

    console.log(
        `${name} is in ${country} and has ${numPeople} inhabitants in it.`
    );
}

let obj = {
    name: "Berlin",
    country: "Germany",
    numPeople: "83 millions",
};
logInfo(obj);
