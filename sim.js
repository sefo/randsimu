function setup() {
    createCanvas(800, 600);
    fill(255);
}
  
function draw() {
    var randX = Math.floor((Math.random() * 800));
    var randY = Math.floor((Math.random() * 600));
    ellipse(randX, randY, 20, 20);
}