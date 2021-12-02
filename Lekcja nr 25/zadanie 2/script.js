let zdanie= prompt("Podaj dowolne zdanie");
let slowo = prompt("Podaj słowo do sprawdzenia czy znajduje się w tekście");

if (zdanie.includes(slowo)){
    alert ("Twoje zdanie zawiera to słowo");
}
else{
    alert ("Twoje zdanie nie zawiera tego słowa");
}
