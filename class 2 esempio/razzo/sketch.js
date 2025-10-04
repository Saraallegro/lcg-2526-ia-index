let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.6

function setup() {
  createCanvas(xMax, yMax);
  frameRate (1000)
}

function draw() {
  background("#093457ff");
  //mostrare un testo bianco che mostra le coordinate del mouse sul foglio da disegno
  fill(255); //bianco
  //string, x, y
  text("mouseX: " + mouseX + ", \
    mouseY: " + mouseY,20,20);

//disegnare 120 stelle ellipse, ma in tre tipologie
push()

//ciclo 1, stella a, 40
noStroke(); 
//un unico ciclo
// creare una sequenza x fare a, b, c
for(let i=0; i < 120; i++){
  let starX = (i*37) % width + (i%3) * 5;
  let starY = ((i*73) % height) + (i%7);
  //operatore dei modulo %
  if(i % 2 == 0){
  //stella tipo a, quando è pari
  fill(255, 255, 150);
  ellipse(starX, starY, 5);
}else if(i % 3 == 0){
  //stella tipo b, quando i è divisibile per 3
  fill(200, 100, 255);
  ellipse(starX, starY, 1.5);
}else{
  //stella tipo c
  fill(255, 255, 100);
  ellipse(starX, starY, 2.8)
}

}
 //aprire contesto di disegno
 push();
 fill(200);
 stroke(40);
//alternativa
rectMode(CENTER)
rect(xRocket, yRocket+30, 80, 180, 20);

//pop;
//triangolo
fill(200, 40, 40)
triangle(xRocket-40, yRocket-60, xRocket+40, yRocket-60, xRocket, yRocket-120);

//triangolino 1
fill(200, 40, 40)
triangle(xRocket-85, yRocket+130, xRocket-20, yRocket+85, xRocket-40, yRocket+85);

//triangolino 2
fill(200, 40, 40)
triangle(xRocket+85, yRocket+130, xRocket+20, yRocket+85, xRocket+40, yRocket+85);

//cerchio
fill(40, 150, 220);
stroke(255);
strokeWeight(3);
ellipse(xRocket, yRocket, 48, 48);
//finire contesto
pop()

// xRocket = (xRocket + 1) % xMax;
yRocket = (yRocket - 1);
// quando la y sarà oltre una certa soglia, allora si resetta la yRocket
let soglia = - (yMax * 0.6);
if (yRocket <  soglia){
  yRocket = yMax
}

}

