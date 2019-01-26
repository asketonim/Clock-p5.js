var s, m, h;
function setup() {
  createCanvas(1400, 750);
}


function draw() {
  translate(300, 370);
  background(0);
  s = second();
  m = minute();
  h = hour();


  angleMode(DEGREES);
  stroke("#c8e4fe");
  strokeWeight(8);
  rotate(s*6);
  line(0,0, 0, -130);
  rotate(-s*6);
  stroke("#94d2e6");
  rotate(m*6);
  line(0,0, 0, -120);
  rotate(-m*6);
  stroke("#a5aeff");
  rotate(h * (360 / 24));
  line(0,0, 90, 0);
  rotate(-h * (360 / 24));
  stroke(100, 0, 200);
  point(0, 0);
  stroke("#7dd8c7");
  line(0, 140, 0, 150);
  line(0, -140, 0, -150);
  line(140, 0, 150, 0);
  line(-140, 0, -150, 0);

}
