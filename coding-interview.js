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

// Q3: Write a "mul" function which will be properly invoked as below syntax
console.log(mul(2)(3)(4)); // output: 24
console.log(mul(4)(3)(4)); // output: 48

function mul(x) {
	return function(y) {
		return function(z) {
			return x * y * z;
		};
	};
}

// Q4: How to empty an array in JavaScript?
// Multiple methods depending on situation
var arrayList = ['a', 'b', 'c', 'd', 'e', 'f'];

// Method 1
var anotherArrayList = arrayList; //Reference arrayList to another variable
arrayList = []; //empty the array
// Set the variable arrayList to a new empty array, recommended if you don't have references to the original arrayList anywhere else.

// Method 2
arrayList.length = 0;
// This way clears the existing array by setting the length to 0.

// Method 3
arrayList.splice(0, arrayList.length);
// This will work too because it will empty the length of the array

// Method 4
while (arrayList.length) {
	arrayList.pop();
}
// Above method can empty array but not recommended

// Q5: How to check if an object is an array or not?
// The best way to find whether an object is an instance of a particular class or not using toString from Object.prototype
var arrayList = [1, 2, 3];

function greet(param) {
	if (Object.prototype.toString.call(arrayList) === '[object Array]') {
		console.log('Array!');
	} else {
		console.log('Not an array!');
	}
}

// jQuery way
if ($.isArray(arrayList)) {
	console.log('Array!');
} else {
	console.log('Not an array!');
}

// Modern way to check now
Array.isArray(arrayList);
