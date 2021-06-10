function displayTest() {
var str1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var str2="abcdefghijklmnopqrstuvwxyz";
// console.log(displayTest(v))
var str3="1234567890";
var str4="!@#$%&";
var value='';
for(i=1;i<=2;i++){
var char1=Math.floor(Math.random()
* str1.length);
 value += str1.charAt(char1)
 var char2=Math.floor(Math.random()
* str2.length);
 value += str2.charAt(char2)
 var char3=Math.floor(Math.random()
* str3.length);
 value += str3.charAt(char3)
 var char4=Math.floor(Math.random()
* str4.length);
 value += str4.charAt(char4)
 }
 return(value);
}
 console.log(displayTest());

 module.exports = displayTest