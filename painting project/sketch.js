var video;

var vScale = 16;
var painters = [];

function setup(){
    createCanvas(640,480);
    video = createCapture(VIDEO);
    video.size(width/vScale,height/vScale);
    for(var i = 0; i < 4; i++){
        painters[i] = new Painter;
    }
    background(51);
}





function draw(){
    video.loadPixels();
    for (var i = 0; i < painters.length; i++){
        painters[i].update();
        painters[i].show();
    }
}





function Painter(){

    this.x = width/2;
    this.y = height/2;
    this.r = 10;
    
    this.update = function(){
        this.x += random(-10,10);
        this.y += random(-10,10); 
        if(this.x > width){
            this.x += random(-100,0);
        }
        else if (this.x < 0){
            this.x += random(0,100);
        }
        
        if(this.y >height){
            this.y += random(-100,0);
        }
        else if (this.y < 0){
            this.y += random(0,100);
        }
    }
    
    this.show = function(){
     
        var px = floor(this.x/vScale);
        var py = floor(this.y/vScale);
     
        var col = video.get(px,py);
        console.log(col);
        ellipse(this.x,this.y,this.r,this.r);
        fill(col[0], col[1], col[2]);
        noStroke();
    }
}