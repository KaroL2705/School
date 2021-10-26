//ĆWICZENIE 1
    /*imie=prompt("Podaj swoje imie:");
    naz=prompt("Podaj swoje nazwisko:");
    document.write("Imię: "+ imie +"<br> Nazwisko "+ naz +"<br>");*/

//ĆWICZENIE 2
    /*let liczba=prompt("Podaj jakąś liczbe");
    if(liczba % 2 !=0){
        document.writeln("Twoja liczba jest nieparzysta") 
    }
    else{
        document.writeln("Twoja liczba jest parzysta")
    }*/

//ĆWICZENIE 3
    /*kolor=prompt("Podaj jakiś kolor");
    switch(kolor) {

        case "Zielony": document.writeln ("Wybrano zielony kolor");
        break;
        case "Niebieski": document.writeln ("Wybrano kolor niebieski");
        break
        case "Biały": document.writeln ("wybrano kolor biały");
        break;
        default: document.writeln("Nieznany kolor");

    }*/

//ĆWICZENIE 4
    /*imie=prompt("Podaj swoje imię");
    if(imie == null || imie == ""){
        document.writeln("Dlaczego nie chcesz podać swojego imienia");
    }
    else{
        document.writeln(" Witaj " + imie + " dziękujemy za podanie imienia.")
    }*/

//ĆWICZENIE 5
    /*var a=prompt("Podaj liczbę a:");
    var b=prompt("Podaj liczbe b:");
    if( a,b !=0){
        w=a/b;
        document.writeln("Wynik dzielenia twoich liczb to: " +w);
    }
    else if(a,b == 0){
        document.writeln("Twoja liczba jest zerem");
    }
    else{
        alert("To nie są liczby");
    }*/

// ĆWICZENIE 6
    /*dzien=prompt("Podaj dzień tygodnia");
    switch(dzien){
        case "sobota": alert("Miłego weekendu!");
        break
        case "niedziela": alert("Miłego weekendu!");
        break
        default:
            alert("Miłej pracy!");
    }*/

//ĆWICZENIE 7
    /*for ( i = 0; i < 5; i++){
        document.write(" Jestem w pętli zewnętrznej " + i);
        for(j=0;j<5;j++){
            document.write(" Jestem w pentli wewnętrznej " + j);
        }
    }*/

//ĆWICZENIE 8 
document.write("<table border=1>");
for (i=1; i<=10; i++){
    document.write("<tr>");    
        for (j=1; j<=10; j++){
            document.writeln("<td>"+i*j+"</td>");
        }
    document.write("</tr>");
}
document.write("</table>");








