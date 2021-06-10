const displayString = require("./index.js");

test("display string wow", () => {
    expect(displayString("wow")).toBe("string: wow");
})