// Test Logic Gate Lib Test Program
// Four sliders to change the size, fill color, stroke color and stroke weight
// Note that the library of the gate drawing is external
canvasWidth = 400;
drawHeight = 200;
canvasHeight = drawHeight + 120; // room for 4 sliders
sliderLeftMargin = 150;
lm = 40; // left margin
tm = 20; // top margin
hspace = 90; // horizontal spacing between gates
vspace = 85; // vertical spacing between gates
sg = 25; // slider gap

function setup() {
    const canvas = createCanvas(canvasWidth, canvasHeight);
    // canvas.parent('canvas-container');
    var mainElement = document.querySelector('main');
    canvas.parent(mainElement);
    colorMode(HSB, 255);
    textSize(16);

    // slider to adjust the width and height
    sizeSlider = createSlider(0, 60, 40, 1);
    sizeSlider.position(sliderLeftMargin, drawHeight + 10);
    sizeSlider.size(canvasWidth -  sliderLeftMargin - 20);
  
    // slider to adjust the fill color
    colorSlider = createSlider(0, 255, 130, 1);
    colorSlider.position(sliderLeftMargin, drawHeight + 10+sg);
    colorSlider.size(canvasWidth - sliderLeftMargin - 20);
  
    // slider to adjust the stroke color
    strokeColorSlider = createSlider(0, 255, 150, 1);
    strokeColorSlider.position(sliderLeftMargin, drawHeight + 10+sg*2);
    strokeColorSlider.size(canvasWidth - sliderLeftMargin - 20);
  
    // slider to adjust the stroke weight
    strokeWeightSlider = createSlider(0, 5, 1, .1);
    strokeWeightSlider.position(sliderLeftMargin, drawHeight + 10+sg*3);
    strokeWeightSlider.size(canvasWidth - sliderLeftMargin - 20);
}

function draw() {
    // make the background drawing region light gray
    fill('ghostwhite');
    rect(0,0,canvasWidth, canvasWidth);
    // make the background of the controls white
    fill('white')
    rect(0,drawHeight,canvasWidth, canvasHeight-drawHeight);

    // get the updated slider value
    sz = sizeSlider.value();
    colorVal = colorSlider.value();
    strokecolor = strokeColorSlider.value();
    strokeweight = strokeWeightSlider.value();
  
    fill(colorVal, 255, 255, 255);
    stroke(strokecolor, 255, 255, 255);
    strokeWeight(strokeweight);
  
    drawBuffer(lm, tm, sz, sz, sz/2);
    drawLabel('Buffer', lm, tm, sz, sz);
  
    drawInverter(lm + hspace, tm, sz, sz, sz/2);
    drawLabel('Inverter', lm + hspace, tm, sz, sz);
    
    drawAND(lm + hspace*2, tm, sz, sz, sz/2);
    drawLabel('AND', lm  + hspace*2, tm, sz, sz);
  
    drawNAND(lm + hspace*3, tm, sz, sz, sz/2);
    drawLabel('NAND', lm + hspace*3, tm, sz, sz);
  
    drawOR(lm, tm + vspace, sz, sz, sz/2, sz, sz);
    drawLabel('OR', lm, tm + vspace, tm, sz, sz);
  
    drawNOR(lm + hspace, tm + vspace, sz, sz, sz/2);
    drawLabel('NOR', lm + hspace, tm + vspace, tm, sz, sz);
  
    drawXOR(lm + hspace*2, tm + vspace, sz, sz, sz/2);
    drawLabel('NOR', lm + hspace*2, tm + vspace, tm, sz, sz);
  
    drawXNOR(lm + hspace*3, tm + vspace, sz, sz, sz/2);
    drawLabel('XNOR', lm + hspace*3, tm + vspace, tm, sz, sz);


    // draw label and value
    fill('black');
    noStroke();
    textAlign(RIGHT);
    text("Size: " +  sz, sliderLeftMargin-10, drawHeight + sg);
    text("Fill Color: " +  colorVal, sliderLeftMargin-10, drawHeight + sg*2);
    text("Stroke Color: " +  strokecolor, sliderLeftMargin-10, drawHeight + sg*3);
    text("Stroke Weight: " +  strokeweight, sliderLeftMargin-10, drawHeight + sg*4)

}

// draw black text without losing the drawing context
// place the label under the logic gate
function drawLabel(textStr, x, y, w, h) {
  push();
  fill('black');
  noStroke();
  textAlign(CENTER);
  text(textStr, x+w/2, y+h + 20);
  pop();
}