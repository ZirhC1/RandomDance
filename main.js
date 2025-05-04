// ARRAY VISUALIZER

// Set up Canvas and Graphics Context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

// Global Variables
let myArray = Array(100).fill(300);      
let driftingArray = [myArray]; 

// Main Program Loop
requestAnimationFrame(draw);

function draw() {
    let barWidth = cnv.width / driftingArray.length;

    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "grey";

    for (let i = 0; i < driftingArray.length; i++) {
        ctx.fillRect(i * barWidth, cnv.height - driftingArray[i], barWidth, driftingArray[i]);
        ctx.strokeRect(i * barWidth, cnv.height - driftingArray[i], barWidth, driftingArray[i]);
    }

    requestAnimationFrame(draw);
}

// Key Events
document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        driftingArray = myArray.map(val => val + (Math.random() * 10 - 5));
    }

    if (event.code === "KeyR") {
        // Reset both arrays
        myArray = Array(100).fill(300);
        driftingArray = [...myArray];
    }
});
