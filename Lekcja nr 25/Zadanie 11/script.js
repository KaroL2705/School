let x= prompt("Podaj dowolną liczbe");
let dzialanie= Math.pow(x,5)+Math.pow(x,3)-Math.sqrt(x);
document.write("Twoje działanie to: "+x+"^5+"+x+"^3-√"+x+"="+dzialanie.toFixed(2));