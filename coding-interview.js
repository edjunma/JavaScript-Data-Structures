// Q1: Given a string, reverse each word in the sentence
var string = 'Welcome to this JavaScript Guide!';

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, '');

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, '');

function reverseBySeparator(string, separator) {
	return string
		.split(separator)
		.reverse()
		.join(separator);
}

// Q2: Implement enqueue and dequeue using only two stacks
// Enqueue means to add an element, dequeue means to remove an element

var inputStack = [];
var outputStack = [];

// For enqueue, just push the item into the first stack
function enqueue(stackInput, item) {
	return stackInput.push(item);
}

function dequeue(stackInput, stackOutput) {
	// Reverse the stack such that the first element of the output stack is the last element of the input stack.
	// After that, pop out the top of the output to get the first element that was ever pushed into the input stack.
	if (stackOutput.length <= 0) {
		while (stackInput.length > 0) {
			var elementToOutput = stackInput.pop();
			stackOutput.push(elementToOutput);
		}
	}

	return stackOutput.pop();
}
