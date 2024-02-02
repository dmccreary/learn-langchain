// Non-inverting op-amp simulator
// slider for the feedback resistor
// plots show the input signal and the output signal
let inputSignal;
let outputSignal;
let gainSlider;
let time = 0;

function setup() {
    const canvas = createCanvas(600, 400);
    var mainElement = document.querySelector('main');
    canvas.parent(mainElement);
    textSize(16);
    gainSlider = createSlider(1, 1000, 100); // Rf value from 1 to 1000 Ohms
    gainSlider.position(20, height - 40);

    inputSignal = new Signal(1, 1); // Example input signal: amplitude 5, frequency 1 Hz
    outputSignal = new Signal(5, 1); // Output signal initialized with same parameters
}

function draw() {
    background(220);

    let Rf = gainSlider.value();
    let gain = 1 + Rf / 100; // Assuming Rin is 100 Ohms
    updateSignal(outputSignal, gain * inputSignal.amplitude, inputSignal.frequency);

    drawSignal(inputSignal, color(0, 0, 255), "Input Signal", 10, 20);
    drawSignal(outputSignal, color(255, 0, 0), "Output Signal",200, 20);

    time += 0.05;
    if (time > width) {
        time = 0;
    }

    fill(0);
    noStroke();
    text(`Feedback Resistor (Rf): ${Rf} Ohms`, gainSlider.x + gainSlider.width + 20, height - 25);
}

function drawSignal(signal, color, label, x, y) {
    push();
    stroke(color);
    noFill();
    beginShape();
    for (let i = 0; i < width; i++) {
        let x = i;
        let y = height / 2 + signal.getValue(i - time) * height / (2 * 10); // scaling for visualization
        vertex(x, y);
    }
    endShape();
    pop();

    fill(color);
    noStroke();
    text(label, x, y);
}

function updateSignal(signal, amplitude, frequency) {
    signal.amplitude = amplitude > 10 ? 10 : amplitude; // Limiting amplitude to prevent going off canvas
    signal.frequency = frequency;
}

class Signal {
    constructor(amplitude, frequency) {
        this.amplitude = amplitude;
        this.frequency = frequency;
    }

    getValue(time) {
        return this.amplitude * sin(this.frequency * time * 0.05); // Simple sine wave
    }
}
