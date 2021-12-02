var date1 = new Date(prompt("Podaj pierwszą date w formacie mm/dd/rr"));
var date2 = new Date(prompt("Podaj drugą datę w formacie mm/dd/rr"));
var Difference_In_Time = date2.getTime() - date1.getTime();
var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

document.write("Różnica dni między twoimi datami to: "+Difference_In_Days+" dni");

