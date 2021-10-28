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
    let fs= document.getElementById("fontsize").value;
    document.getElementById("paragraf").style.fontSize=+fs+"px";
}

function fontColor(){ //zmienia kolor czcionki
    let fontcolor= document.getElementById("fontc").value;
    document.getElementById("paragraf").style.color=+fontcolor;
}

function textformat(){
    let bold= document.getElementById("bold").value;
    let italics= document.getElementById("italics").value;
    let underline= document.getElementById("underline").value;
    
    if(bold=true){
        document.getElementById("paragraf").style.fontWeight="700";
    } else if (italics==true){
        document.getElementById("paragraf").style.fontStyle="italic";
    } else {
        document.getElementById("paragraf").style.textDecoration="underline";
    }
}

function borderColor(){ //zmienia color obramowania
    
}

