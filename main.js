/**
 * [questionObj description]
 * @type {Object}
 */
var questionObj = {
	words : []
};

/**
 * [responseObj description]
 * @type {Object}
 */
var	responseObj = {
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
		"where are you?": "im here",
	},
};

/**
 * [askQuestion description]
 * @param  {String} question [description]
 * @return {[type]}          [description]
 */
function askQuestion(question = "hi, how are you?") {
	questionObj.words.push(question.split(" "));
	return generateResponse();
}

function generateResponse() {
	for(question in dictionary.conversations) {
		var questionWords = question.split(" ");
		console.log(questionWords);
	};
}

askQuestion();