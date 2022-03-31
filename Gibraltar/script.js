function change_to_indigo(){
    indigo= document.getElementById("indigo").value;
    document.getElementById("right").style.backgroundColor= "indigo";
}



function change_to_steelblue(){
    steelblue= document.getElementById("steelblue").value;
    document.getElementById("right").style.backgroundColor= "steelblue";
}

function change_to_olive(){
    indigo= document.getElementById("olive").value;
    document.getElementById("right").style.backgroundColor= "olive";
}

function change_font_color(){
    let list= document.getElementById("list").value

    if (list== "white"){
        document.getElementById("right").style.color="white";
    }
    else if (list== "tan"){
        document.getElementById("right").style.color="tan";
    }
    else if (list== "bisque"){
        document.getElementById("right").style.color="bisque";
    }
    else if (list== "plum"){
        document.getElementById("right").style.color="plum";
    }
}

function change_size(){
    let czcionka= document.getElementById("czcionka").value;

    if (czcionka== "100%"){
        document.getElementById("right").style.fontSize= "100%"
    }
    else if (czcionka != "100%"){
        let inne= document.getElementById("czcionka").value;
        document.getElementById("right").style.fontSize= inne;
    }
}

function change_border(){
    console.log(document.getElementById('box').checked)
    if (document.getElementById('box').checked) {
        document.getElementById('img').style.border = '1px solid white';
    }
    else {
        document.getElementById('img').style.border = 'none';
    }
}

function radio(punktor){
    let punktory= document.getElementById('lista2');
    if (punktor == 'dysk') {
        punktory.style.listStyle = 'disc';
    }
    if (punktor == 'kwadrat') {
       punktory.style.listStyle = 'square';
    }
    if (punktor == 'okrąg') {
        punktory.style.listStyle = 'circle';
    }

}
