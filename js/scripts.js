// 5 Question quiz
// Show multiple choice with radio buttons
// When clicking submit, hide the current question and show the next question
// At the end, show how many questions they got right out of 5


var correctAnswers;
var html;
var totalQuestions = document.getElementsByTagName("fieldset").length;
var currentQId = 0;

// Show the first question
function init(){
	
	correctAnswers = 0;
	var activeQ =  document.getElementById("question" + currentQId);

	activeQ.classList.add("active");
}

// Check if the selected value is the correct answer
function checkAns(value, correctAnswer){
	console.log(correctAnswer);
	if (value == correctAnswer){

		return true;
	}
	else {
		return false;
	}
}

function findAnswer(index){
	
	return questionsArray[index][1];
}

// Find the radio button with the "checked" attribute
function findAnsweredQuestion(nameAttrib){
	
	var posAnswers = document.getElementsByName(nameAttrib);

	for (var i = 0; i < posAnswers.length; i++){
	    
		if ( posAnswers[i].checked ) {
		    return posAnswers[i].value;

		}	
	}
}

function nextQuestion(){
	
	



		// get the active fieldset of questions
		var activeQuestion = document.getElementById("question" + currentQId);

		// get the radio buttons
		var activeQuestionSet = activeQuestion.getElementsByTagName("input");

		// get the name attribute of the current radio buttons
		var activeQuestionName = activeQuestionSet[0].getAttribute("name");


		// Check if the user has answered correctly
		if (checkAns(findAnsweredQuestion(activeQuestionName), findAnswer(currentQId))){
			correctAnswers++;
		}

		// hide current question
		activeQuestion.classList.remove("active");
		

		// show next question
		currentQId++;
		//check if there is a next question
		if (currentQId < totalQuestions){
			var newQ =  document.getElementById("question" + currentQId);

			newQ.classList.add("active");
		}	
		else {
			document.getElementById("submit").style.display="none";
			html = "<h3> You got " + correctAnswers + " correct!" + "</h3>";
			print(html);
		}
	
	

}

var submitButton = document.getElementById("submit");

// submitButton.addEventListener("click", checkAllAnswers);

submitButton.addEventListener("click", nextQuestion);

function print(message){
	var output = document.getElementById("resultsDiv");
	output.innerHTML = message;
}


init();
