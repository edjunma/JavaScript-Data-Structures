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

// Q6: How would you use a closure to create a private counter?
function counter() {
	var _counter = 0;
	// return an object with several functions that allow you to modify the private _counter variable
	return {
		add: function(increment) {
			_counter += increment;
		},
		retrieve: function() {
			return 'The counter is currently at: ' + _counter;
		}
	};
}

var c = counter();
c.add(5);
c.add(9);

// Now we can access the private variable in the following way
c.retrieve();

// Q7: Write a function that would allow you to do this.
var addSix = createBase(6);
addSix(10);
addSix(21);

function createBase(baseNumber) {
	return function(N) {
		return baseNumber + N;
	};
}

var addSix = createBase(6);
addSix(10);
addSix(21);

// Q8: How would you check if a number is an integer?
function isInt(num) {
	return num % 1 === 0;
}

console.log(isInt(4)); //true
console.log(isInt(12.2)); //false
console.log(isInt(0.3)); //false

// Q9: Explain what a callback function is and provide a simple example.
// A callback function is a function that is passed to another function as an argument and is executed after some operation has been completed.
function modifyArray(arr, callback) {
	// do something to array here
	arr.push(100);
	// then execute the callback function that was passed
	callback();
}

var arr = [1, 2, 3, 4, 5];

modifyArray(arr, function() {
	console.log('array has been modified', arr);
});

// Q10: FizzBuzz Challenge - create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5, and "fizzbuzz" at multiples of 3 and 5.

for (let i = 1; i <= 100; i++) {
	let fizz = i % 3 == 0,
		buzz = i % 5 == 0;
	console.log(fizz ? (buzz ? 'FizzBuzz' : 'Fizz') : buzz ? 'Buzz' : i);
}

// Q11: Make this work
duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

function duplicate(arr) {
	return arr.concat(arr);
}

duplicate([1, 2, 3, 4, 5]); // [1,2,3,4,5,1,2,3,4,5]

// Q12: Provide some examples of non-boolean value coercion to a boolean one
// Falsy values in JavaScript are ""(empty string), 0, -0, NaN (invalid number), null, undefined, false
// Any value that is not falsy is truthy like "hello", 42, true, [], [1, "2", "3"] (arrays), {}, {a:42} (objects), function foo() {} (functions)

// Q13: Given two strings, return true if they are anagrams of one another
// Anagram is word/phrase/name that is rearranged with the letters of one another for example "Mary" can become "Army", "Iceman" can become "Cinema".

var firstWord = 'Mary';
var secondWord = 'Army';

isAnagram(firstWord, secondWord);

function isAnagram(first, second) {
	// For case insensitivity, change both words to lowercase.
	var a = first.toLowerCase();
	var b = second.toLowerCase();

	// Sort the strings, and join the resulting array to a string then compare the results
	a = a
		.split('')
		.sort()
		.join('');
	b = b
		.split('')
		.sort()
		.join('');

	return a === b;
}

// Q14: What will be the output of the following code?

var y = 1;
if (function f() {}) {
	y += typeof f;
}

console.log(y);

var k = 1;
if(1) {}

// Answer: The above code would output 1undefined