function getFiveWhiteBalls() {
	var whiteBalls = [];
	var ball1 = Math.floor(Math.random() * 59) + 1;
				
	var ball2 = Math.floor(Math.random() * 59) + 1;
	while (ball2 == ball1) {
	var ball2 = Math.floor(Math.random() * 59) + 1;
	}
				
	var ball3 = Math.floor(Math.random() * 59) + 1;
	while (ball3 == ball2 || ball3 == ball1) {
		var ball3 = Math.floor(Math.random() * 59) + 1;
	}
				
	var ball4 = Math.floor(Math.random() * 59) + 1;
	while (ball4 == ball3 || ball4 == ball2 || ball4 == ball1) {
		var ball4 = Math.floor(Math.random() * 59) + 1;
	}
				
	var ball5 = Math.floor(Math.random() * 59) + 1;
	while (ball5 == ball4 || ball5 == ball3 || ball5 == ball2 || ball5 == ball1) {
		var ball5 = Math.floor(Math.random() * 59) + 1;
	}
				
	whiteBalls.push(ball1, ball2, ball3, ball4, ball5);

	return whiteBalls

}
			
function getPowerBall() {
	var powerBall = Math.floor(Math.random() * 35) + 1;
	return powerBall;			
}
			
var whiteBalls = getFiveWhiteBalls();
var powerBall = getPowerBall();
alert("The winners are: " + whiteBalls + ", " + powerBall);
			
		
