function star(x, y, w, c) {
  let r = w / 2;
  push();
  translate(x, y);
  line(-c, -c, 0, -r);
  line(0, -r, c, -c);

  line(-c, c, 0, r);
  line(0, r, c, c);

  line(c, -c, r, 0);
  line(r, 0, c, c);

  line(-c, -c, -r, 0);
  line(-r, 0, -c, c);
  pop();
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(150, 150, 220);
  strokeWeight(2);

  star(width / 4, height / 2, 200, 10);
  star(width / 2, height / 2, 350, 25);
  star(3 * width / 4, height / 2, 100, 10);
}

function draw() {}
