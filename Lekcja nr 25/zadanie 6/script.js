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

document.write("Dzisiaj jest "+weeknames[day]+", "+date+" "+miesiac+" "+year+" roku.");

