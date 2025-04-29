let x;
let y;


function setup() {
  createCanvas(1000,1000);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}
function draw() {
  background("#0027FF");
  x = x + random(-20,20);
  y = y + random(-20,20);
  let distancia;
 // distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);
  distancia = dist(mouseX, mouseY,x,y);
  circle(mouseX, mouseY, distancia);
  circle(x, y, 15);
  fill("#000000")
   
  if( distancia < 3){
 text("encontrei!",200,200);
 noLoop();
}    
}
