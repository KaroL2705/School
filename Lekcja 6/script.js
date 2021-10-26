function calculator(){
  let something= document.getElementById("something").value;
  let number1= document.getElementById("number1").vaule;
  let number2= document.getElementById("number2").value;
  number1= preseInt(number1);
  number2= preseInt(number2);
  console.log(number2);
  switch (something){
    case "+":
      document.getElementById("result").innerHTML = number1+number2;
    break;
    case "-":
      document.getElementById("result").innerHTML = number1-number2;
    break;
    case "*":
      document.getElementById("result").innerHTML = number1*number2;
    break;
    case "/":
      document.getElementById("result").innerHTML = number1/number2;
    break;
  }
}















/* let znak= document.getElementById("znak");
  let liczba1= preseInt (document.getElementById("liczba1"));
  let liczba2= preseInt (document.getElementById("liczba2"));

  if (znak="+"){
      let suma= l1+l2;
      alert(suma);
  }
  else if(znak="-"){
      let różnica= l1-l2;
      document.write(różnica);
  }        
  else if(znak="*"){
      let iloczyn= l1*l2;
      document.write(iloczyn);
  }
  else if(znak="/"){
      let iloraz= l1/l2;
      document.write(iloraz);
  }*/

