// 5 Question quiz
// Show multiple choice with radio buttons
// When clicking submit, hide the current question and show the next question
// At the end, show how many questions they got right out of 5

var correctAnswers;


var currentQId = 0;

// Show the first question
function init() {
	
	var activeQ =  document.getElementById("question" + currentQId);

	activeQ.classList.add("active");
}

// Check if the selected value is the correct answer
function checkAns(value, correctAnswer) {
	
	if(value == correctAnswer){
		return true;
	}else{
		return false;
	}
}

function findAnswer(index) {
	return questionsArray[index][1];

}

function nextQuestion() {
	

	// get the active fieldset of questions
	var activeQuestion = document.getElementById("question" + currentQId);

	//get the id of the current fieldset
	// var questID = activeQuestion[0].id;

	//get the name of the current questions by looking at the first input element
	// var questName = activeQuestion.getElementsByTagName("input")[0].getAttribute("name");

	// Check if the user has answered correctly
	if (checkAns( userAns, findAnswer(currentQId) )) {
		correctAnswers++;
	}

	// hide current question
	activeQuestion.classList.remove("active");
	

	// show next question
	currentQId++;
	var newQ =  document.getElementById("question" + currentQId);

	newQ.classList.add("active");





	

	

}

var submitButton = document.getElementById("submit");

// submitButton.addEventListener("click", checkAllAnswers);

submitButton.addEventListener("click", nextQuestion);

function print(message) {
	var output = document.getElementById("resultsDiv");
	output.innerHTML = message;
}


init();
