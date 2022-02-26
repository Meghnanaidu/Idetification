Status = "";
Bed_image = "";

function preload() {
  img = loadImage("Photo frame.jpg");
}

function setup() {
  canvas = createCanvas(640, 350);
  canvas.position(315, 200);
}

function draw() {
  image(img, 0, 0, 640, 420);
  fill("rgb(92, 7, 49)");
  text("Bed", 45, 75);
  noFill();
  stroke("rgb(92, 7, 49)");
  rect(30, 60, 450, 350);
}
