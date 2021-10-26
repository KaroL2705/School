function randomcolor(){
    znaki="1234567890abcdef"
    color= "#"
    for(i=0; i<6; i++){
            color += znaki[Math.floor(Math.random()*16)];
        }   
    return color;
}

document.write("<table>");
for(x=0; x<120; x++){
    document.write("<tr>");

for(y=0; y<100; y++){
    document.write("<td style='width:10px; height:10px; background-color:"+randomcolor()+";'></td>");
}
document.write("</tr>");
}
document.write("</table>");


