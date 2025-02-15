"use strict";

/**
 * @typedef {*} preResult - The input result for each step in the chain.
 * @typedef {(preResult: any) => any | Promise<any>} StepFunctionType - A function that processes each step in the chain, which can be either synchronous or asynchronous.
 */

class Chain {
	/**
	 * List of steps in the chain.
	 * @type {Array<StepFunctionType>}
	 */
	steps = [];

	/**
	 * 
	 * @type {*}
	 */
	results = [];

	/**
	 * Initializes an empty processing chain.
	 */
	constructor() { }

	/**
	 * Adds a step to the processing chain.
	 * @param {StepFunctionType} step - The function to be added to the chain.
	 * @returns {this} - Returns the instance to allow method chaining.
	 */
	addStep(step) {
		this.steps.push(step);
		return this;
	}

	/**
	 * Executes the steps in the chain sequentially.
	 * @returns {Promise<any>} - Returns the final result of the processing chain.
	 */
	async run() {
		let result = null;
		for (const step of this.steps) {
			result = await step() || null;
			this.results.push(result);
		}

		return result;
	}
}

module.exports = Chain;
