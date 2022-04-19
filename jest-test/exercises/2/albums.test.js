const { getAlbumNames } = require("./albums");
const spotify = require("./spotify");

jest.mock("./spotify");
spotify.search.mockResolvedValue({
    artist: "numbers",
    albums: {
        items: ["FIRST", "INDEX ONE", "VOL.3", "A4"],
    },
});

test("album names are in alphabetical order", () => {
    return getAlbumNames("meat loaf").then((albumNames) => {
        expect(albumNames).toEqual(albumNames.slice().sort());
    });
});
