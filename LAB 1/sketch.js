function setup(){
     createCanvas(windowWidth,windowHeight);

}

function draw(){
    background(10, 20, 600, 8 ); // 5th is for the alpha value
    fill('aquamarine');
    stroke('pink');
    if(mouseX < 200){
      rect(mouseX,mouseY,10,10);  // an extra dimension makes it a circle
    }else{
        rect(mouseX, mouseY, 100,100, 100)
    }

    for(var i = 0; i < 1000; i++){
       rect( (i*10)%width,(i*10)%height,10,10);

    }
    fill('yellow');
    stroke('black'); //shape outline
   if(mouseX < 200){
      rect(mouseX,mouseY,100,100);
   }else{
      rect(mouseX,mouseY,50,50,20);

   }
}



