"use strict";

/**
 * @typedef {Object} VariableInputType
 * @property {"number" | "string" | "object" | *} type - The expected data type of the variable.
 * @property {string} name - The name of the variable.
 */

/**
 * Represents a variable input with a type and a name.
 */
class VariableInput {
	/**
	 * The expected type of the variable.
	 * @type {"number" | "string" | "object" | *}
	 */
	type = "";

	/**
	 * The name of the variable.
	 * @type {string}
	 */
	name = "";

	/**
	 * Creates a new variable input.
	 * @param {"number" | "string" | "object" | *} type - The expected type of the variable.
	 * @param {string} name - The name of the variable.
	 */
	constructor(type, name) {
		this.type = type;
		this.name = name;
	}

	/**
	 * Validates whether the provided value matches the expected type.
	 * @param {*} value - The value to validate.
	 * @throws {Error} Throws an error if the type does not match.
	 */
	validate(value) {
		if (this.type !== typeof value) {
			throw new Error(`var ${this.name} type error`);
		}
	}
}

/**
 * Represents a mission with a set of tasks and variable inputs.
 */
class Mission {
	/**
	 * The default prompt format.
	 * @constant {string}
	 */
	static PROMPT_FORMAT = "Your mission includes:";

	/**
	 * A map of variable names to their corresponding VariableInput objects.
	 * @type {Map<string, VariableInput>}
	 * @private
	 */
	#variableInputs;

	/**
	 * The list of task descriptions.
	 * @type {Array<string>}
	 * @private
	 */
	#tasks = [];

	/**
	 * Creates a new Mission instance.
	 * @param {Array<string>} tasks - The list of tasks to be completed.
	 * @param {Array<VariableInputType>} [variableInputs=[]] - An array of variable input definitions.
	 */
	constructor(tasks, variableInputs = []) {
		this.#variableInputs = new Map();

		for (const variableInput of variableInputs) {
			const vI = new VariableInput(variableInput.type, variableInput.name);
			this.#variableInputs.set(variableInput.name, vI);
		}

		this.#tasks = tasks;
	}

	/**
	 * Generates a formatted mission prompt, replacing placeholders with actual values.
	 * @param {Object} valueInputs - An object containing variable values.
	 * @returns {string} The formatted mission prompt.
	 * @throws {Error} Throws an error if a variable does not exist or fails validation.
	 */
	get(valueInputs) {
		let format = Mission.PROMPT_FORMAT;

		let dataTasks = [...this.#tasks];
		for (const [nameInput, valueInput] of Object.entries(valueInputs)) {
			const foundVariableInput = this.#variableInputs.get(nameInput);

			if (!foundVariableInput) {
				throw new Error(`var ${nameInput} not exist`);
			}

			foundVariableInput.validate(valueInput);

			let processedValue = valueInput;
			if (typeof valueInput === "object") {
				processedValue = JSON.stringify(valueInput);
			}

			dataTasks = dataTasks.map((dataTask) =>
				dataTask.replaceAll(`{${foundVariableInput.name}}`, processedValue)
			);
		}

		for (const task of dataTasks) {
			format += `
- ${task}
`;
		}

		return format;
	}
}

export default Mission;