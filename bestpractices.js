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
