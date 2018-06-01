
/* function to checks answers */ 

function check_answers(){

	var question1 = document.quiz.question1.value;
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
	var question8 = document.quiz.question8.value;
	var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
	var correct = 0;


	if (question1 == "true") {
		correct++;
	}
	if (question2 == "true") {
		correct++;
	}	
	if (question3 == "true") {
		correct++;
	}

	if (question4 == 'true') {
		correct++;
	}

	if (question5 == 'true') {
		correct++;
	}
	if (question6 == 'true') {
		correct++;
	}
	if (question7 == 'true') {
		correct++;
	}
	if (question8 == 'true') {
		correct++;
	}
	if (question9 == 'true') {
		correct++;
	}
	if (question10 == 'true') {
		correct++;
	}
	
	var pictures = ["images/rgb.jpg", "images/scalia.jpg", 'images/Gorsuch.jpg', "images/roberts.jpg"];
	var messages = ["Notorious RBG is pleased", "Scalia is disappointed", "Gorsuch laughs at your lack of knowledge", "Roberts wonders what is wrong with you"];
	var score;

	
	if (correct == 10) {
		score = 0;
	}

	if (correct >= 5 && correct < 10) {
		score = 1;
	}

	if (correct > 0 && correct < 5)
		{ score = 2 };

	if (correct == 0) {
		score = 3;
	}

/*	displays the content */

	document.getElementById("after_submit").style.visibility = "visible";
	document.getElementById("message").innerHTML = messages[score];
	document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
	document.getElementById("picture").src = pictures[score];
	
	}


/* five minute timer begins on load */

window.onload = function () {
    var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
}


function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
};














	
	
