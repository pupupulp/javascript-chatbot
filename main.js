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
	raw: {
		"hi, how are you?": "im fine",
		"where are you?": "im here",
	},
	processed: [],
	prepare: function() {
		var raw = this.raw,
			processed = this.processed;

		Object.keys(raw).map(function(key) {
			var splittedKey = key.split(" "),
				value = raw[key];

			processed[splittedKey] = value;
		});
	}
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
	dictionary.prepare()
	// console.log(questionObj.words);
	// console.log(dictionary);
}

askQuestion();