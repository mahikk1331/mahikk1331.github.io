var redBrick = {
    x: 0,
    y: 0,
    w: 30,
    h: 30, // dont need comma after last one
    xSpeed: 1,
    ySpeed: 1,
    colour: 'red',
    draw: function(){
        fill( redBrick.colour );
        rect(redBrick.x,redBrick.y,redBrick.w,redBrick.h);
    },
    move: function(){                   //bounce back from edge
        redBrick.x += redBrick.xSpeed;
        redBrick.y += redBrick.ySpeed;

       if(redBrick.x < 0 || redBrick.x > width - redBrick.w){
        redBrick.xSpeed *= -1;
       }
       if(redBrick.y > height - redBrick.h || redBrick.y < 0){
           redBrick.ySpeed *= -1;
       }
       

    }
};  

var yellowBrick = {
    x: 40,
    y: 50,
    w: 30,
    h: 30,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'yellow',
    draw: function(){
        fill( this.colour );
        rect(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

function setup(){
    createCanvas(720,480);

}

function draw(){
    background('grey');
    redBrick.draw();
    redBrick.move();
    yellowBrick.draw();
    yellowBrick.move();
}