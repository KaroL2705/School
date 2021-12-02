function check(){
    let email=document.getElementById("email").value;
    let number= email.indexOf("@");
    let domain= email.substr(number+1);
    document.write("<h3> Twoja domena to: "+domain+"</h3>");
}