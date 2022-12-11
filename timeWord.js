function timeWord(timeStr) {
	// Initialize time-phrase builder
	let timePhrase;

	// Straightforward object of words for the two-digit hour
	const firstTwoDigitsObj = {
		'00': 'twelve',
		'01': 'one',
		'02': 'two',
		'03': 'three',
		'04': 'four',
		'05': 'five',
		'06': 'six',
		'07': 'seven',
		'08': 'eight',
		'09': 'nine',
		'10': 'ten',
		'11': 'eleven',
		'12': 'twelve',
		'13': 'one',
		'14': 'two',
		'15': 'three',
		'16': 'four',
		'17': 'five',
		'18': 'six',
		'19': 'seven',
		'20': 'eight',
		'21': 'nine',
		'22': 'ten',
		'23': 'eleven'
	};

	// Arrays of words to be used for the two-digit minute
	const dg = [ 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine' ];

	const tn = [
		'ten',
		'eleven',
		'twelve',
		'thirteen',
		'fourteen',
		'fifteen',
		'sixteen',
		'seventeen',
		'eighteen',
		'nineteen'
	];

	const ty = [ 'twenty', 'thirty', 'forty', 'fifty' ];

	// Handle simple usecases off the bat
	if (timeStr === '00:00') {
		return 'midnight';
	}

	if (timeStr === '12:00') {
		return 'noon';
	}

	// Group two-digit hours and minutes into their own variables
	let firstTwoDigits = timeStr[0] + timeStr[1];
	let secondTwoDigits = timeStr[3] + timeStr[4];

	// Assign the two-digit hour to its appropriate word from the object
	for (const number in firstTwoDigitsObj) {
		if (firstTwoDigits === number) {
			timePhrase = firstTwoDigitsObj[number];
		}
	}

	// Check if the two-digit minute is a double 0
	if (secondTwoDigits === '00') {
		timePhrase += " o'clock";
		return +firstTwoDigits < 12 ? (timePhrase += ' am') : (timePhrase += ' pm');
	}

	// Handle a zero for the second to last digit of the time
	if (+timeStr[3] === 0) {
		timePhrase += ' oh' + ' ' + dg[+timeStr[4] - 1];
	}

	// Handle numbers 10-19
	if (+secondTwoDigits >= 10 && +secondTwoDigits < 20) {
		timePhrase += ' ' + tn[+timeStr[4]];
	}

	// Handle all numbers above 19
	if (+secondTwoDigits >= 20) {
		timePhrase += ' ' + ty[+timeStr[3] - 2] + ' ' + dg[+timeStr[4] - 1];
	}

	// Finalize bigger minute numbers by checking for morning or afternoon
	if (+firstTwoDigits < 12) {
		timePhrase += ' am';
	} else {
		timePhrase += ' pm';
	}

	return timePhrase;
}

module.exports = { timeWord };
