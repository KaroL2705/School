
function check(){
    let date1 = new Date(document.getElementById("first").value);
    let date2 = new Date(document.getElementById("second").value);
    let Difference_In_Time = date2.getTime() - date1.getTime();
    let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    document.write("Różnica dni między twoimi datami to: "+Difference_In_Days+" dni");
}

