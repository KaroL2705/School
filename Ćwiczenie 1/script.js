let text="<a href='mailto:lukasz.fimiak@zspwrzesnia.pl'>Mój email</a>";

document.write(text.slice(text.indexOf(":")+1,text.lastIndexOf("'")));
