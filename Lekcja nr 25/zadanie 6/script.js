//Dzisiaj jest wtorek, 27 października 2020 roku. To jest 301 dzień roku.

let year= new Date().getFullYear();
let month= new Date().getMonth();
let date= new Date().getDate();
let miesiac;
let day= new Date().getDay();

const weeknames=["niedziela","poniedziałek","wtorek","środa","czwartek","piątek","sobota"];
switch(month){
    case 0:
        miesiac= "stycznia";
    break;
    case 1:
        miesiac="lutego";
    break;
    case 2:
        miesiac= "marca";
    break;
    case 3:
        miesiac= "kwietnia";
    break;
    case 4:
        miesiac= "maja";
    break;
    case 11:
        miesiac= "grudnia";
    break;
}

var now = new Date();
var start = new Date(now.getFullYear(), 0, 0);
var diff = (now - start) + ((start.getTimezoneOffset() - now.getTimezoneOffset()) * 60 * 1000);
var oneDay = 1000 * 60 * 60 * 24;
var days = Math.floor(diff / oneDay);
console.log('Day of year: ' + day);

document.write("Dzisiaj jest "+weeknames[day]+", "+date+" "+miesiac+" "+year+" roku. To jest "+days+" dzień roku");

