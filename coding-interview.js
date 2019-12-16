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
if (1) {
	eval(function foo() {});
	k += typeof foo;
}

console.log(k);

// Answer: The above code would output 1undefined

// Q15: What will the following code output?
(function() {
	var a = (b = 5);
})();

console.log(b);

// The above code will output 5 even though it seems as if the variable was declared within a function and can't be accessed outside of it.

var a = (b = 5);

// is interpreted as

var a = b;
b = 5;
// But bi is not declared anywhere in the function with var so it is set equal to 5 in the global scope.

// Q16: Write a function that would allow you to do this

multiply(5)(6);

//Answer: You can create a closure to keep the value of a even after the inner function is returned. The inner function that is being returned is created within an outer function, making it a closure, and it has access to the variables within the outer function, in this case the variable a.

function multiply(a) {
	return function(b) {
		return a * b;
	};
}

multiply(5)(6);

// Q17: How does the "this" keyword work? Provide some code examples.
//In JavaScript, "this" always refers to the "owner" of the function w're executing or rather to the object that a function is a method of.

function foo() {
	console.log(this.bar);
}

var bar = 'global';

var obj1 = {
	bar: 'obj1',
	foo: foo
};

var obj2 = {
	bar: 'obj2'
};

foo(); // "global"
obj1.foo(); // "obj1"
foo.call(obj2); // "obj2"
new foo(); //undefined

// Q18: Write a recursive function that performs a binary search

function recursiveBinarySearch(array, value, leftPosition, rightPosition) {
	if (leftPosition < rightPosition) return -1;

	var middlePivot = Math.floor((leftPosition + rightPosition) / 2);
	if (array[middlePivot] === value) {
		return middlePivot;
	} else if (array[middlePivot] > value) {
		return recursiveBinarySearch(array, value, leftPosition, middlePivot - 1);
	} else {
		return recursiveBinarySearch(array, value, middlePivot + 1, rightPosition);
	}
}

// Q19: What is "closure" in JavaScript? Provide an example?
// A closure is a function defined inside another function (called parent function) and has access to the variable which is declared and defined in parent function scope.
// The closure has access to variable in three scopes, the variable declared in his own scope, variable declared in parent function scope, and variable declared in global namespace.

var globalVar = 'abc';

// Parent self invoking function
(function outerFunction(outerArg) {
	// Variable declared in outerFunction function scope
	var outerFuncVar = 'x';
	// Closure self-invoking function
	(function innerFunction(innerArg) {
		// Variable declared in innerFunction function scope
		var innerFuncVar = 'y';
		console.log(
			'outerArg = ' +
				outerArg +
				'\n' +
				'outerFuncVar = ' +
				outerFuncVar +
				'\n' +
				'innerArg = ' +
				innerArg +
				'\n' +
				'innerFuncVar = ' +
				innerFuncVar +
				'\n' +
				'globalVar = ' +
				globalVar
		);
		// end of scope innerFunction
	})(5); // Pass 5 as parameter
	// end of scope outerFunction
})(7); // Pass 7 as parameter

// Q20: What will be the output of the following code?
var output = (function(x) {
	delete x;
	return x;
})(0);

console.log(output);

// Answer: The above code will output 0 as the delete operator is used to delete the property from the object. Here x is not an object as it is a local variable, the delete operator doesn't affect local variable.

//Q21: What will be the output of the following code?
var Employee = {
	company: 'xyz'
};

var emp1 = Object.create(Employee);
delete emp1.company;
console.log(emp1.company);

// The above code will output xyz as the output as emp1 object got company as the prototype property. The delete operator doesn't delete the prototype property.

// Q22: When would you use the "bind" function?
// The bind() method creates anew function, that when called has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
// A good use of the bind function is when you have a particular function that you want to call with a specific this value.You can then use the bind to pass a specific object to a function that uses a this reference.

function fullName() {
	return 'Hello, this is ' + this.first + ' ' + this.last;
}

console.log(fullName()); // => Hello this is undefined undefined

// Create a person object and pass its values to the fullName function
var person = { first: 'Foo', last: 'Bar' };
console.log(fullName.bind(person)()); // => Hello this is Foo Bar

// Q23: What will the following code output?
0.1 + 0.2 === 0.3;

// The answer will surprisingly output false because of floating point errors in internally representing certain numbers. 0.1 + 0.2 does not nicely come out to 0.3 but instead the result is actually 0.300000000000004 because the computer cannot internally represent the correct number. One solution to get around this problem is to round the results when doing arithmetic with decimal numbers.

// Q24: how would you create a private variable in JavaScript?
// To create a private variable in js that cannot be changed you first need to create it as a local variable within a function. Even if the function is executed the variable cannot be accessed outside of the function.
function func() {
	var priv = 'secret code';
}

console.log(priv); //throws error

// To access the variable, a helper function would need to be created that returns the private variable.
function func() {
	var priv = 'secret code';
	return function() {
		return priv;
	};
}

var getPriv = func();
console.log(getPriv()); // => secret code

// Q25: Describe the Revealing Module Pattern design pattern
// A variation of the module pattern is called the Revealing Module Pattern. The purpose is to maintain encapsulation and reveal certain variables and methods returned in an object literal. The direct implementation looks like this:
var Exposer = (function() {
	var privateVariable = 10;

	var privateMethod = function() {
		console.log('Inside a private method!');
		privateVariable++;
	};

	var methodToExpose = function() {
		console.log('This is a method I want to expose!');
	};

	var otherMethodIWantToExpose = function() {
		privateMethod();
	};

	return {
		first: methodToExpose,
		second: otherMethodIWantToExpose
	};
})();

Exposer.first(); // Output: This is a method I want to expose!
Exposer.second(); // Output: Inside a private method!
Exposer.methodToExpose; // undefined
