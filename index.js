const str = {
  alphaC: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  alphaS: "abcdefghijklmnopqrstuvwxyz",
  // console.log(displayTest(v))
  numb: "1234567890",
  special: "!@#$%&",
};
function RandomInt(n) {
  return Math.floor(Math.random() * n);
}
// Increasing randomness in password
function shuffelPassword(s) {
  var arr = s.split("");
  var n = arr.length;

  for (var i = 0; i < n - 1; i++) {
    var j = RandomInt(n);

    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }

  s = arr.join("");
  return s;
}

function passgenJs(length) {
  try {
    /* length property of passgenJs   @type number */
    this.len = length || 8;
    if (this.len < 8) {
      throw new Error("Error : Lenght must be >= 8");
    }
    if (typeof this.len === "string") {
      throw new Error("Error : Length must be of type number");
    }
    var value = "";
    if (this.len % 4 === 0) {
      // in each iteration we are accessing random element from all strings
      for (i = 1; i <= this.len / 4; i++) {
        var char1 = Math.floor(Math.random() * str.alphaC.length);
        // console.log(char1)
        value += str.alphaC.charAt(char1);
        var char2 = Math.floor(Math.random() * str.alphaS.length);
        value += str.alphaS.charAt(char2);
        var char3 = Math.floor(Math.random() * str.numb.length);
        value += str.numb.charAt(char3);
        var char4 = Math.floor(Math.random() * str.special.length);
        value += str.special.charAt(char4);
      }
      var pass = shuffelPassword(value);
      return pass;
    } else {
      throw new Error(
        "Error : Not valid input. Enter in multiple of 4. min::8"
      );
    }
  } catch (error) {
    return error.message;
  }
}

module.exports = passgenJs;
