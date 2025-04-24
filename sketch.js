var x = 0;
var y = 0;


function setup(){
   createCanvas(950,500);
   
}


function draw(){
  background(150);
  background('#AA44FF')
   rect(x,y,15,15);   // adding x and y makes the value change of the rectangle as it moves
   x = x + 1;
   x = x % 500; // modulo operator, divided operator
   y = y + 2;
   y = y % 400; 

}
