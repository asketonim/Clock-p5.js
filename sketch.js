var s, m, h;
function setup() {
  createCanvas(1400, 750);
}


function draw() {
  translate(700, 370);
  background(0);
  s = second();
  m = minute();
  h = hour();


  angleMode(DEGREES);

  // seconds
  stroke("#c8e4fe");
  strokeWeight(8);
  rotate(s*6);
  line(0,0, 0, -130);
  rotate(-s*6);

  // minutes
  stroke("#94d2e6");
  rotate(m*6);
  line(0,0, 0, -120);
  rotate(-m*6);
  stroke("#a5aeff");

  // hours
  if (h >= 12) h -= 12;
  rotate(h * 30 + (30 * (m/60)));
  line(0,0, 0, -90);
  rotate(-h * 30 - (30 * (m/60)));

  stroke(100, 0, 200);
  point(0, 0);
  stroke("#7dd8c7");
  line(0, 140, 0, 150);
  line(0, -140, 0, -150);
  line(140, 0, 150, 0);
  line(-140, 0, -150, 0);

}
