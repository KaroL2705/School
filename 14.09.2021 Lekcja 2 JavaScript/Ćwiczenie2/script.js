alert("Podaj na oceny z podanych przedmiotów: ");
jp=Number.parseInt(prompt("Język Polski: "));
ja=Number.parseInt(prompt("Język Angielski: "));
mat=Number.parseInt(prompt("Matematyka "));
inf=Number.parseInt(prompt("Informatyka "));

avg=jp+ja+mat+inf;
avg/=4

document.write("Twoja średnia to: "+avg);
