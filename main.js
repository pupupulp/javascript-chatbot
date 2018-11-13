/**
 * [questionObj description]
 * @type {Object}
 */
var userQuestion = {
	words : []
};

/**
 * [responseObj description]
 * @type {Object}
 */
var	response = {
	phrase: '',
	bestSequence: 0,
	currentSequence: 0
};

/**
 * [dictionary description]
 * @type {Object}
 */
var dictionary = {
	conversations: {
		"hi, how are you?": "im fine",
		"where?": "im here",
	},
};

/**
 * [askQuestion description]
 * @param  {String} question [description]
 * @return {[type]}          [description]
 */
function askQuestion(question = "hi, how are you?") {
	userQuestion.words = question.split(" ");
	return generateResponse();
}

/**
 * [generateResponse description]
 * @return {[type]} [description]
 */
function generateResponse() {
	var previousWordIndex = 0;

	for(question in dictionary.conversations) {
		var questionWords = question.split(" ");
		console.log(questionWords);

		for(userWords in userQuestion.words) {
			var userWord = userQuestion.words[userWords];

			switch(true) {
				case questionWords.indexOf(userWord) > previousWordIndex:
					response.currentSequence += 1;
					previousWordIndex = questionWords.indexOf(userWord);
					break;
				case response.currentSequence > response.bestSequence:
					response.bestSequence = response.currentSequence;
					response.phrase = dictionary.conversations[question];
					break;
				case !questionWords.includes(userWord):
					response.currentSequence -= 2;
					break;
				case questionWords.indexOf(userWord) < previousWordIndex:
					response.currentSequence -=1;
					break;
			}
		}
	};

	console.log(response.phrase);
}

askQuestion();