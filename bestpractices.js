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
