const displayString = require("./index")

test("display string wow", () => {
    expect(displayString("wow")).toBe("string: wow");
})