/* convert the following to js cs5

let getNameAndCountry = ({ name, country }) => [name, country];

let getRelocatedCity = (city1, city2 = { country: "Germany" }) => {
    let [, country] = getNameAndCountry(city2);
    return {
        ...city1,
        country,
    };
};
*/

function getNameAndCountry(name, country) {
    return [name, country];
}
function getRelocatedCity(city, obj) {
    let country = obj.country;
    let object = { city, country };
    return object;
}

getNameAndCountry("berlin", "Germany");
let ob = { country: "denmark" };
console.log(getRelocatedCity("berlin", ob));
