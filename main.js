function preload(){
classifier=ml5.imageClassifier('DoodleNet');
}

function setup(){
canvas=createCanvas(400,400);
canvas.center();
background("yellow");
canvas.mouseReleased(classifyCanvas);
synth=window.speechSynthesis;
}

function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}

function clearCanvas() {
    background("aqua");
}

function draw(){

}