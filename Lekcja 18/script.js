function text(){ // wpisuje tekst
    let text= document.getElementById("text").value;
    document.getElementById("paragraf").innerHTML= text;
}

function backgroundColor(){ //zmienia kolor tła
    let bgcolor= document.getElementById("bgcolor").value;
    switch (bgcolor){
        case 'Czerwony':
            document.getElementById("paragraf").style.backgroundColor="red";
            break;
        case 'Niebieski':
            document.getElementById("paragraf").style.backgroundColor="blue";
            break;
        case 'Żółty':
            document.getElementById("paragraf").style.backgroundColor="yellow";
            break;
    }
}

function borderStyle(){ //zmienia typ obramowania
    let brstyle= document.getElementById("borders").value;
    switch (brstyle){
        case 'hidden':
            document.getElementById("paragraf").style.border="hidden";
            break;
        case 'solid':
            document.getElementById("paragraf").style.border="solid";
            break
        case 'dotted':
            document.getElementById("paragraf").style.border="dotted";
            break;
        case 'dashed':
            document.getElementById("paragraf").style.border="dashed";
            break;
    }
}

function fontSize(){ //zmnienia rozmiar czcionki
    fs= document.getElementById("fontsize").value;
    document.getElementById("paragraf").style.fontSize=+fs+"px";
}

function fontColor(){ //zmienia kolorczcionki
    fc= document.getElementById("fontc").value;
    document.getElementById("paragraf").style.color=+fc;
}

function borderColor(){ //zmienia color obramowania
    
}

