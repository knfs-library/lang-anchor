"use strict";

const typeArr = ["string", "json"];

/**
 * @typedef {"string" | "json"} TypeOptions - The allowed types for the result format.
 */

/**
 * Represents a result format with a specified type and structure.
 */
class ResultForm {
	/**
	 * The default prompt format string.
	 * @constant {string}
	 */
	static PROMPT_FORMAT = "You need to only return {type} with format like: {structure}";

	/**
	 * The type of the result format.
	 * @type {TypeOptions}
	 */
	type = "string";

	/**
	 * The structure of the result format.
	 * @type {number | string | null}
	 */
	structure = "<result>";

	/**
	 * Creates a new ResultForm instance.
	 * @param {TypeOptions} type - The type of the result format.
	 * @param {string | number | object | null} structure - The structure of the result format.
	 * @throws {Error} Throws an error if the type is invalid.
	 */
	constructor(type, structure = "<result>") {
		this.#validateType(type);
		this.type = type;
		this.structure = this.#structureFormatter(structure);
	}

	/**
	 * Returns the formatted result prompt.
	 * @returns {string} The formatted prompt string.
	 */
	get() {
		return ResultForm.PROMPT_FORMAT.replace("{type}", this.type).replace(
			"{structure}",
			this.structure
		);
	}

	/**
	 * Validates the given type.
	 * @param {TypeOptions} type - The type to validate.
	 * @throws {Error} Throws an error if the type is not allowed.
	 * @private
	 */
	#validateType(type) {
		if (!typeArr.includes(type)) {
			throw new Error("Type of result form invalid");
		}
	}

	/**
	 * Formats the structure for the result.
	 * @param {string | number | object | null} structure - The structure to format.
	 * @returns {string | number | null} The formatted structure.
	 * @private
	 */
	#structureFormatter(structure) {
		if (structure === null) {
			return structure;
		}
		if (typeof structure === "object") {
			return JSON.stringify(structure);
		}
		return structure;
	}
}

module.exports = ResultForm;
