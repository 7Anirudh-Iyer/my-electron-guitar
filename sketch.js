let yoohoo
let i,final,done,x = 40,f,dungibu

function preload(){
  final = loadSound("beat.mp3")
}

function setup() {
  createCanvas(windowWidth, 500);

  dungibu = createButton('Start')
  dungibu.position(windowWidth/2-dungibu.width/2, windowHeight/1.2)
}

function draw() {
  background(0);

  fill('azure')
  textSize(28)
  text(i + 'bpm', windowWidth / 2-30, 100)

  fill('cyan')
  stroke('cyan')
  strokeWeight(10)
  rectMode(CENTER)
  line(40, windowHeight / 2, windowWidth - 40, windowHeight / 2)
  
  if(mouseIsPressed){
    x = mouseX
  }

  map(x,0,100,0,10)
  
  i = Math.ceil((x-40)/5)
  f = 60/i
  
  ellipse(x, windowHeight / 2, 10,40)

  dungibu.mousePressed(function(){
    var timerID = setInterval(function() {
      final.play() 
    }, f * 1000);
  })
  
}

function yayhoo(x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;

  rect(this.x, this.y, this.width, this.height)
}