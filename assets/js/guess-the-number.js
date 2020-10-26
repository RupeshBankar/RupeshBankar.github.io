var n = Math.floor(Math.random() * 99);
console.log(n);
var msg = "Good Luck!";
console.log(msg);

var span = document.getElementById('span');
span.innerHTML = msg;

var tries = 0;
var numTries = document.getElementById('tries');



var score = function() {
	tries += 1;
};

var update = function() {
	var inp = document.getElementById('inp-box').value;
	var textField = document.getElementById('inp-box');

	

	if (inp < n) {
		msg = "Higher!";
		console.log(msg);
		span.innerHTML = msg;
		textField.value = "";
		score();
	}

	else if (inp > n) {
		msg = "Lower!";
		console.log(msg);
		span.innerHTML = msg;
		textField.value = "";
		score();
	}

	else if (inp == n) {
		msg = "You got it chief!";
		console.log(msg);
		span.innerHTML = msg;
		score();
		numTries.innerHTML = "It took you " + tries + " tries";
	}

	else {
		msg = "That ain't a number"
		span.innerHTML = msg;
		textField.value = "";
	}
		
};

var replay = function() {			
	n = Math.floor(Math.random() * 99);
	var textField = document.getElementById('inp-box');
	msg = "Good Luck!";
	console.log(msg);
	span.innerHTML = msg;
	textField.value = "";
	tries = 0;

};

var check = document.getElementById('check');
var playAgain = document.getElementById('replay');

playAgain.addEventListener("click", replay);
check.addEventListener("click", update);