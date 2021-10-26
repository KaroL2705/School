let text= "Mama lubi gotować, a Tata w tym czasie gra na Konsoli";

document.write(text); //Wyświetlanie tekstu/ zmiennej 
document.write("<br/>"); 

document.write(text.length); //Zliczanie długości tekstu
document.write("<br/>"); 

document.write(text.charAt(text.length-1)); //podaje liczbe z danego miejsca (W tym przypadku ostatniej)
document.write("<br/>"); 

for (i=0; i<text.length; i++){
    document.write(text.charAt(i)); // wczytuje zdanie jako tablice
}
document.write("<br/>");

for (i=1; i<text.length; i=i+2){
    document.write(text.charAt(i));  // koduje tekst
}
document.write("<br/>");

document.write(text.toUpperCase());  // zmienia na wielkie litery
document.write("<br/>");

document.write(text.toLowerCase()); // zmienia na małe litery
document.write("<br/>");

document.write(text.indexOf("Tata")); // szuka pierwszych liter wyrazów lub liter w tekście (muszą się zgadzać małe i wielkie litery)
document.write("<br/>");

document.write(text.lastIndexOf("a")); // szuka ostatnich liter wyrazów lub liter w tekście
document.write("<br/>");

let url= "http://stronka.pl/plik.php";

document.write(url.slice(url.lastIndexOf("."))); // szuka rozszerzenia
document.write("<br/>");

document.write(url.slice(url.lastIndexOf("/"+1,"."-1)));
document.write("<br/>");

document.write(text.slice(6,10)); // wyswietla litery od 6 do 10 (a<b)
document.write("<br/>");

document.write(text.substring(15,10)); // wyswiela litery od podanego parametru (nie ważne w jakiej kolejnośći)
document.write("<br/>");

document.write(text.substr(-7,7)); // ucina tekst od danej litery, i podaje długość danego wyrażenia (przyjmuje również ujemne wartości, wtedy liczy od końca)
document.write("<br/>");

document.write(text.replace("Tata","Synek")); // zamienia wyrazy lub słowa (podmienia)
document.write("<br/>");

