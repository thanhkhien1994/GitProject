(function() {

var count = 0;
var playerX;
var playerY;
var player = 0;
var score = 0;


function getRandom(min, max) {
	return Math.floor(Math.random() * (max-min+1) + min);
}	

function getRandomCarX() {
	var carX = [];
	carX[0] = 25;
	carX[1] = 125;
	carX[2] = 225;
	// console.log(carX[getRandom(0, 2)]);
	return carX[getRandom(0, 2)];
}

function Car() {
	this.x;
	this.y;
	this.dy = 1;
	this.element;

	this.init = function() {
		this.element = document.createElement("div");
		this.element.setAttribute("class", "car");
		this.element.style.top = this.y + "px";
		this.element.style.left = this.x + "px";

		document.getElementById("container").appendChild(this.element);
	}

	this.draw = function() {
		this.element.style.top = this.y + "px";
		this.element.style.left = this.x + "px";
	}
}

function Animate() {
	var that = this;
	var cars = [];
	var moveInterval;
	var intervalId;
	var playerContainer;

	this.createBackground = function() {
		this.bG = document.createElement("div");
		this.bG.setAttribute("id", "bg");

		document.getElementById("container").appendChild(this.bG);
	}

	this.createPlayer = function() {
		playerContainer = document.createElement("div");
		playerContainer.setAttribute("id", "player");
		document.getElementById("container").appendChild(playerContainer);
		player = document.getElementById("player");
		console.log(typeof(player));
		document.onkeydown = movePlayer;
	}

	this.init = function() {
		var car = new Car();
		car.x = getRandomCarX();
		car.y = getRandom(-100, -90);
		car.init();
		if (cars.length > 2) {
			for (var i=0; i<cars.length; i++) {
				var diff = car.y - cars[i].y;
				if (Math.abs(diff) < 50) {
					car.y += 35;
				}
			}
		}
		cars.push(car);
		if ((count/1000) == 4) {
			console.log(intervalId);
			clearInterval(intervalId);
			console.log("stopped init");
		}
		// console.log(cars.length);
	}

	this.startMove = function() {
		clearInterval(moveInterval);
		moveInterval = setInterval(animate.move,35);
	}

	this.move = function() {
		if (cars.length > 0) {
			clearInterval(moveInterval);
			for (var i=0; i<cars.length; i++) {
				var car = cars[i];
				var dy = 5;
				car.y += dy;
				car.draw();
				check(car, i);
			}
			moveBg();
			that.startMove();
		}
	}

	function check(car, i) {
		playerX = getComputedStyle(player).getPropertyValue("left").split('px')[0];
		playerY = getComputedStyle(player).getPropertyValue("top").split('px')[0];
		playerX = parseInt(playerX);
		playerY = parseInt(playerY);

		if (car.y > 600) {
			score++;
			car.x = getRandomCarX();
			car.y = getRandom(-100, -90);
			if (cars.length > 2) {
				for (var i=0; i<cars.length; i++) {
					var diff = car.y - cars[i].y;
					if (Math.abs(diff) < 40) {
						car.y += diff + 35;
					}
				}
			}
		}

		if (((car.x < (playerX + 50)) && ((car.x + 50) > playerX) && 
		(car.y < (playerY + 50)) && ((50 + car.y) > playerY))) {
			console.log("collision detected");
			restartGame();
		}
	}

	// function checkOverlap(pipe, pos) {
	// 	if (pipesUpper.length >= 2) {
	// 		console.log("inside if of checkoverlap");
	// 		for (var i=0; i<pipesUpper.length-1; i++) {
	// 			if (i==pos) {
	// 				i++;
	// 			}
	// 			if ((pipe.x < (pipesUpper[i].x + 350)) && ((pipe.x + 350) > pipesUpper[i].x)) {
	// 				console.log("collision detected");
					
	// 				if (pipe.x > pipesUpper[i].x) {
	// 					var diff = pipe.x - (50 + pipesUpper[i].x);
	// 					console.log(pipe.x, pipesUpper[i].x);
	// 					if (diff < 0) {
	// 						pipe.x += (300 + Math.abs(diff));
	// 					} else {
	// 						pipe.x += (300 - Math.abs(diff));
	// 					}
	// 					console.log("if",pipe.x, pipesUpper[i].x);
	// 				} else {
	// 					console.log("else",pipe.x, pipesUpper[i].x);
	// 					var diff = pipe.x - pipesUpper[i].x;
	// 					console.log(diff);
	// 					if (diff <= 50) {
	// 						pipe.x += (300 + Math.abs(diff));
	// 					} else {
	// 						pipesUpper[i].x += (300 - Math.abs(diff));
	// 					}
	// 					console.log("else",pipe.x, pipesUpper[i].x);
	// 				}
	// 				// console.log(pipe.x);
					
	// 			}
	// 		}
	// 		pipe.draw();
	// 	}
	// }

	function restartGame() {
		clearInterval(moveInterval);
		count = 0;
		console.log("restarting");
		delete animate;
		document.getElementById("container").innerHTML = "Game Over!" + "<br>" +"Your score is : " + score + "<br>" + "Press space to restart!!!!";
		score = 0;
		var checkRestart = function(event) {
			if (event.keyCode == 32) {
				clearInterval(moveInterval);
				clearInterval(intervalId);
				document.getElementById("container").innerHTML = "";
				startGame();
			}
		}
		document.onkeydown = checkRestart;
	}

	this.start = function() {
		intervalId = setInterval(function() {
				count += 1000;
				animate.init();
		},1000);
	}

	function moveBg() {
		back = document.getElementById("bg");
		margin = parseInt(getComputedStyle(back).getPropertyValue("margin-top"));
		margin = margin + 5;
		back.style = "margin-top : " + margin + "px;";
	}
}


var movePlayer = function(event) {
	playerX = getComputedStyle(player).getPropertyValue("left").split('px')[0];
	playerY = getComputedStyle(player).getPropertyValue("top").split('px')[0];
	playerX = parseInt(playerX);
	console.log(event.keyCode);
	if (event.keyCode == 37) {
		if (playerX > 25 ) {
			player.style.left = playerX - 100 + "px";
			playerX = getComputedStyle(player).getPropertyValue("left").split('px')[0];
			console.log(playerX);
		}
	}
	if (event.keyCode == 39) {
		if (playerX + 50 <= 225) {
			player.style.left = playerX + 100 + "px";
			playerX = getComputedStyle(player).getPropertyValue("left").split('px')[0];
			console.log(playerX);
		}
	}
}


var animate = new Animate();
var back;
var margin;

function startGame() {
	animate = new Animate();
	// var margin = parseInt(getComputedStyle(back).getPropertyValue("margin-top"));
	animate.createBackground();
	animate.createPlayer();

	animate.start();
	animate.startMove();
}

startGame();

})();