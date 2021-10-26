text= prompt("Wpisz jakieś zdanie");
y= prompt("Podaj szukaną frazę");

if (text.includes(y)){
    alert("W twoim zdaniu jest wyraz: " +y);
}
else{
    alert("W towim zdaniu nie ma wyrazu: " +y);
}