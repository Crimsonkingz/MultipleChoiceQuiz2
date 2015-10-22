// 5 Question quiz
// Show multiple choice with radio buttons
// When clicking submit, hide the current question and show the next question
// At the end, show how many questions they got right out of 5

// Record the number of correct answers
var correctAnswers;

// Initialise variable to add html to
var html;

// Find the total number of questions available
var totalQuestions = document.getElementsByTagName("fieldset").length;

// Store the ID number of the current question
var currentQId;

// Variable to store the submit button
var submitButton = document.getElementById("submit");



// Show the first question
function init(){
	
	// Start off with 0 correct answers
	correctAnswers = 0;

	// Select the first question
	currentQId = 0;	
	var activeQ =  document.getElementById("question" + currentQId);

	// Show the first question
	activeQ.classList.add("active");
}

// Check if the selected value is the correct answer
function checkAns(value, correctAnswer){
	
	if (value == correctAnswer){

		return true;
	}
	else {
		return false;
	}
}

// Finds the correct answer from the questions.js file
function findAnswer(index){
	
	return questionsArray[index][1];
}

// Find the radio button with the "checked" attribute
function findAnsweredQuestion(nameAttrib){
	
	//List the inputs from that question
	var posAnswers = document.getElementsByName(nameAttrib);

	// Go through all of the inputs
	for (var i = 0; i < posAnswers.length; i++){
	    
	    // find the input that the user clicked on
		if ( posAnswers[i].checked ) {

			// Return the value of the user selected answer
		    return posAnswers[i].value;

		}	
	}
}

// Main function that fires when the submit button is clicked
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
		

		// Add one to quest counter
		currentQId++;

		//check if there is a next question
		if (currentQId < totalQuestions){
			
			// Select the new question fieldset
			var newQ =  document.getElementById("question" + currentQId);

			// Show the new question
			newQ.classList.add("active");
			
		}

		// If there is not another question then remove the submit button and show the number of correctly answered questions
		else {

			document.getElementById("submit").style.display="none";
			html = "<h4> You got " + correctAnswers + " correct!" + "</h4>";
			print(html);


			var restart = document.createElement("button");
			restart.innerHTML = "Restart Quiz";
			restart.addEventListener("click", null);

			var output = document.getElementById("resultsDiv");
			output.appendChild(restart);
		}
	
	

}



// submitButton.addEventListener("click", checkAllAnswers);

submitButton.addEventListener("click", nextQuestion);

function print(message){
	var output = document.getElementById("resultsDiv");
	output.innerHTML = message;
}


init();
