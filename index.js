const str = {
    alphaC : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    alphaS:"abcdefghijklmnopqrstuvwxyz",
// console.log(displayTest(v))
    numb:"1234567890",
    special:"!@#$%&",
}
function passgenJs() {

var value='';
// in each iteration we are accessing random element from all strings
for(i=1;i<=2;i++){
var char1=Math.floor(Math.random()
    * str.alphaC.length);
    // console.log(char1)
 value += str.alphaC.charAt(char1)
 var char2=Math.floor(Math.random()
* str.alphaS.length);
 value += str.alphaS.charAt(char2)
 var char3=Math.floor(Math.random()
* str.numb.length);
 value += str.numb.charAt(char3)
 var char4=Math.floor(Math.random()
* str.special.length);
 value += str.special.charAt(char4)
 }
 return(value);
}
 console.log(passgenJs());

 module.exports = passgenJs