const str = {
    alphaC : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    alphaS:"abcdefghijklmnopqrstuvwxyz",
// console.log(displayTest(v))
    numb:"1234567890",
    special:"!@#$%&",
}
function RandomInt(n){
    return Math.floor(Math.random()*n);
  }
// Increasing randomness in password

function shuffelPassword(s){
      var arr=s.split('');
      var n=arr.length;

      for(var i=0;i<n-1;i++){
        var j=RandomInt(n);

        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }

      s=arr.join('');
      return s;
    }

function passgenJs() {

var value='';
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
   var pass=shuffelPassword(value);
   return pass;
}
 console.log(passgenJs());

 module.exports = passgenJs