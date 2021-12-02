let text= "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu condimentum nibh, ut tempus turpis. Nam suscipit pretium pulvinar. Sed tincidunt felis sed viverra congue. Phasellus laoreet cursus ligula, at suscipit elit condimentum et. Phasellus ac sollicitudin tellus, sed tempor urna. Donec tincidunt tellus non diam sodales sagittis. Vivamus dignissim orci ligula. Nullam sit amet tellus tortor. Morbi iaculis justo id risus convallis, ut dictum augue vulputate. Cras at rhoncus metus, nec malesuada eros. Donec rhoncus consectetur sem, nec scelerisque velit efficitur et. Vestibulum bibendum nisi velit, vel tempus risus porttitor et. Morbi quis lectus bibendum, cursus velit vitae, blandit lectus. Donec id turpis risus. Fusce nunc nulla, ultricies id turpis nec, mattis ornare nulla. Quisque posuere nunc non laoreet posuere. Vivamus malesuada eget augue vitae porttitor. Mauris dapibus, nisi a vehicula congue, dui lorem volutpat felis, at molestie erat diam non risus. In et pretium tellus. Sed tristique, tortor vel pretium pulvinar, risus neque viverra eros, vitae vehicula lacus augue ac purus. Curabitur ut pulvinar erat. Nullam mattis felis eget leo volutpat, sed sagittis eros blandit. Morbi blandit, nunc tempus fermentum feugiat, lorem sapien rhoncus neque, id vulputate ligula augue id augue. Praesent vitae fringilla tellus. Vestibulum vulputate nisi non diam accumsan, vel cursus massa auctor. In dictum odio non mi pellentesque, at maximus odio consequat. Nam mauris odio, mollis eget viverra et, consectetur quis urna. Morbi pellentesque sem nec ligula lacinia, a pulvinar enim tristique. Nullam sit amet ipsum eget urna efficitur tempor. Nam venenatis lacinia interdum. Nulla facilisi. Nunc sollicitudin";

let MaxInRow= 80;
let inRow= 0;
for (i=0; i<=text.length; i++){
    if (inRow >= 80){
        document.write("<br>");
        inRow= 0;
    }
    document.write(text[i]);
    inRow++;
}
