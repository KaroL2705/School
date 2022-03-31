function sprawdz(){
    let button = document.getElementById("sprawdz");
    let piling = document.getElementById("piling").checked;
    let maska = document.getElementById("maska").checked;
    let masaz = document.getElementById("masaz").checked;
    let brwi = document.getElementById("brwi").checked;
    let sum = 0;

    if(piling){
        sum += 45;
    }

    if(maska){
        sum += 30;
    }

    if(masaz){
        sum += 20;
    }

    if(brwi){
        sum += 5;
    }

    document.getElementById("cena").innerHTML="Cena zabiegów: " + sum + " zł";
}