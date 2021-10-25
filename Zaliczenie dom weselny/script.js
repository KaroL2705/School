function oblicz(){
    var liczba_gosci = document.getElementById("goscie").value;
    var poprawiny = document.getElementById("poprawiny").checked;

    if (liczba_gosci > 0){
        let cena = liczba_gosci * 100;
        if (poprawiny){
            cena = cena*1.3;
        }
        document.getElementById("suma").innerText = "Koszt twojego wesela to "+cena+" złoych."
    }
}