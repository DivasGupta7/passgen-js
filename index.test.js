const passgenJs = require("./index");

function aplhaCountDefault(pass) {
    len = 0
    for (var i = 0; i < pass.length; i++){
        if(pass[i]>='A' && pass[i]<='z') len+=1
    }
    // console.log(len)
    return len
}
function numcountDefault(pass) {
    len = 0

    for (var i = 0; i < pass.length; i++) {
      if (pass[i] >= "0" && pass[i] <= "9") len += 1;
    }
    return len
}

describe("PASSWORD GENERATION", () => {
  test("default : Length of string : 8", () => {
    expect(passgenJs().length).toBe(8);
  });

  test("default : No of Numbers : 2", () => {
    expect(numcountDefault(passgenJs())).toBe(2);
  });
  test("default : No of Aplhabets : 4", () => {
    expect(aplhaCountDefault(passgenJs())).toBe(4);
  });

  test("custom : Provinding String instead of Number for length : 🧛", () => {
    expect(passgenJs("🧛")).toBe(
      "Error : Length must be of type number"
    );
  });
   test("custom : Provinding length less than 8 : 6", () => {
     expect(passgenJs(6)).toBe("Error : Lenght must be >= 8");
   });

  test.todo("custom : Providing cutsom Length : 15")

})
