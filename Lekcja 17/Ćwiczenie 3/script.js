let text= prompt("Wpisz dowolne zdanie");
let samogloski= ["a","e","i","o","ó","y","ą","ę"];
let suma="";

for(i=0; i<=text.length; i++){
    if(samogloski.includes(text[i])){
        suma++
    }
}
document.write(suma);
