const countries = require("./countries");

test("countries.find returns [] when passed empty string", () => {
    expect(countries.find("")).toEqual([]);
});

test("countries.find returns a 4 elements array", () => {
    expect(countries.find("a").length).toEqual(4);
});

test("countries.find is NOT key sensitive", () => {
    expect(countries.find("BA")).toEqual(countries.find("ba"));
});

test("countries.find returns an empty array when no mathces are found", () => {
    expect(countries.find("advuew")).toEqual([]);
    expect(countries.find("Garmany")).toEqual([]);
    expect(countries.find("ITaliaa")).toEqual([]);
});
