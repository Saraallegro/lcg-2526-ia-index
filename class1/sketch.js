let xMax = 400;
let yMax = 600;

let xRocket = xMax/2;
let yRocket = yMax*0.4

let xEye = xMax/2;
let yEye = yMax*0.4

function setup() {
  createCanvas(xMax, yMax);
}

function draw() {
  background("#9acef9ff");
  //mostrare un testo bianco che mostra le coordinate del mouse sul foglio da disegno
  fill(255); //bianco
  //string, x, y
  text("mouseX: " + mouseX + ", \
    mouseY: " + mouseY,20,20);

push()

//zampe ragno sx
fill("#9acef9ff");
stroke(10);
strokeWeight(5)
curve(200, 100, 12, 190, 122, 206, 137, 1000);

//zampe ragno sx
fill("#9acef9ff");
stroke(10);
strokeWeight(5)
curve(240, 100, 12, 237, 110, 232, 137, 1000);

//zampe ragno sx
fill("#9acef9ff");
stroke(10);
strokeWeight(5)
curve(200, 310, 15, 273, 112, 282, 137, 1000);

//zampe ragno sx
fill("#9acef9ff");
stroke(10);
strokeWeight(5)
curve(200, 300, 30, 327, 119, 295, 200, 1000);

//zampe ragno dx
fill("#9acef9ff");
stroke(10);
strokeWeight(5)
curve(220, 10, 259, 206, 388, 190, 910, 1000);

//zampe ragno dx
fill("#9acef9ff");
stroke(10);
strokeWeight(5)
curve(350, 10, 292, 221, 387, 228, 910, 1000);

//zampe ragno dx
fill("#9acef9ff");
stroke(10);
strokeWeight(5)
curve(290, 10, 294, 252, 380, 272, 900, 1000);

//zampe ragno dx
fill("#9acef9ff");
stroke(10);
strokeWeight(5)
curve(290, 10, 283, 270, 372, 317, 900, 1000);


push()

//cerchio nero corpo
fill(0, 0, 0);
ellipse(xRocket, yRocket, 200, 200);

//cerchio occhio sx
fill(255);
ellipse(xRocket-50, yRocket-10, 70, 70);

//cerchio occhio dx
fill(255);
ellipse(xRocket+50, yRocket-10, 70, 70);

//cerchio occhio nero sx
fill(0);
ellipse(xEye-50, yEye-10, 20, 20);

//cerchio occhio nero dx
fill(0);
ellipse(xEye+50, yEye-10, 20, 20);

//filo ragno
fill(0);
line(200, 0, 200, 156)

pop()

// xRocket = (xRocket + 1) % xMax;
xEye = (xEye + 1);
// quando la y sarà oltre una certa soglia, allora si resetta la yRocket
let soglia = (xMax - 167);
if (xEye >  soglia){
  xEye = 160
}

  }



