const abc= ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","w","x","y","z","q","v","x","1","2","3","4","5","6","7","8","9","0"];
let email;
let random1= Math.floor(Math.random()*(10-4)+4);

for (let i=0; i<=random1; i++){
    let random2= Math.floor((Math.random())*(abc.length-1)+1);
    email+=abc[random2];
}
email+="@testowa.pl";
alert(email);