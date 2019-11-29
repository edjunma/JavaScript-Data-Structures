// Magic numbers - define a number to a variable to avoid confusion

const SECONDS_IN_A_DAY = 86400;

for (let i = 0; i < SECONDS_IN_A_DAY; i += 1) {
	// ...
}

// Deep nesting

const exampleArray = [[['value']]];

const retrieveFinalValue = () => {
	if (Array.isArray(element)) {
		return retrieveFinalValue(element[0]);
	}

	return element;
};

retrieveFinalValue(exampleArray);

// Avoid large functions

const addMultiplySubtract = (a, b, c) => {
	// addition
	const addition = a + b + c;

	// multiplication
	const multiplication = a * b * c;

	// subtraction
	const subtraction = a - b - c;

	// return a string (addition, multiplication, subtraction)
	return `${addition} ${multiplication} ${subtraction}`;
};

const add = (a, b, c) => a + b + c;
const multiply = (a, b, c) => a * b * c;
const subtract = (a, b, c) => a - b - c;

// Code repetition

const getUserCredentials = user => {
	const { name, surname, password, email } = user;
};

// Variable naming

// Camel Case should be used for all variables
const camelCase; 

const thisIsARandomCamelCaseName;

let exampleFunctionName;

// Important to use meaningful names
// If pulling data for posts, the below is pale in comparison to the latter
getUserData;
getUserInfo;

// Better
getUserPosts;
// Favor descriptive over concise to name variables

findUser;

findUserByNameOrEmail;
setUserLoggedInTrue;

// Use shorter version and descriptive as much as possible

getUserFromDatabase;

// Use consistent verbs per concept

// Functions will usually, create, read, update, or delete something

getQuestions;
getUsers;

// Make booleans that read well in if-then statements

let car = {};

// Broad
sedan, sold, green, airbag

// Better
isSedan, isSold, isGreen, hasAirbag

car.isSedan;
car.isSold;
car.isGreen;
car.hasAirbag;

// Use nouns for classNames

class Car = {
  // ...
}

classMakeCar = {
  // ...
}

// Use PascalCase for classNames.

camelCase
PascalCase

class Task = {}
class task = {}

// Capitalize constant values, SNAKE UPPER CASE

const SECONDS_IN_A_DAY = 86400;

const HOURS_IN_DAY = 24;
const USER_AGE = 30;

const user = foundUser;
const today = new Date();

// Avoid one-letter variable names
const query = () => {

}

const q = () => {

}

const newDate = () => new Date();
const d = () => new Date();