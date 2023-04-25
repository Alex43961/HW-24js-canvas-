const canvas = document.getElementById("canvas");
const thickness = document.getElementById("thickness");
const color = document.getElementById("color");
const clear = document.getElementById("clear");
const ctx = canvas.getContext("2d");
let paint = false;
let startPositionX = null;
let startPositionY = null;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.lineCap = "butt";
ctx.lineWidth = thickness.value;

thickness.addEventListener("change", () => {
	ctx.lineWidth = thickness.value;
});

color.addEventListener("change", () => {
	ctx.fillStyle = color.value;
	ctx.strokeStyle = color.value;
});

clear.addEventListener("click", () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
});


document.addEventListener("mousedown", () => {
	paint = true;
});

document.addEventListener("mouseup", () => {
	paint = false;
});



document.addEventListener("mousemove", (event) => {

	let currentPositionX = event.pageX;
	let currentPositionY = event.pageY;

	if (startPositionX === null && startPositionY === null || paint === false) {
		startPositionX = event.pageX;
		startPositionY = event.pageY;
		return;
	}


	ctx.beginPath();
	ctx.moveTo(startPositionX, startPositionY);
	ctx.lineTo(currentPositionX, currentPositionY);
	ctx.stroke();
	ctx.closePath();

	startPositionX = currentPositionX;
	startPositionY = currentPositionY;
});



