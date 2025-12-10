var textarea = document.getElementById("text_area");
var textarea_main = document.getElementById("text_area_main");
var textarea_header2 = document.getElementById("text_area_header2");
var fontMono;
function preload(){
fontMono=loadFont("font/Andale Mono.ttf");
}
function setup() {
var c = createCanvas(400, 400);
c.parent("canvasWrapper");
}

function draw() {
  background(240);
  textFont(fontMono);
  textSize(27);
  //estilo header1
  noStroke();
  fill(0);
  textAlign(LEFT);
  text(textarea.value, 10, 30);

  //estilo main
  textAlign(RIGHT);
  stroke(0);
  strokeWeight(1);
  fill(255);
  text(textarea_main.value, width, 150);

  //estilo header2
  noStroke();
  fill(0);
  textAlign(RIGHT);
  text(textarea_header2.value, 400, 300);
}
