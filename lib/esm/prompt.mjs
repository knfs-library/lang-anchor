"use strict";

import languageCons from "./constants/languages.mjs";
import roleCons from "./constants/roles.mjs"
import ResultFormClass from "./resultForm.mjs";
import MissionClass from "./mission.mjs";

/**
 * @typedef {typeof languageCons[keyof typeof languageCons]} LanguageCode - A valid language code from the language constants.
 */
/**
 * @typedef Options
 * @property {string} modelRole - The role of the AI.
 * @property {string} userRole - The role of user.
 * @property {LanguageCode} language - The language for the result.
 * @property {Array<string>} [rules=[]] - A set of rules the AI must follow.
 */
const defaultOptions = {
	modelRole: roleCons.modelRole.PERSONAL_ASSISTANT,
	userRole: roleCons.userRole.NORMAL_USER,
	language: languageCons.en,
	rules: []
}

/**
 * Represents a structured prompt template with a model role, mission, rules, result format, and language.
 */
class PromptTemplate {
	/**
	 * The role of user.
	 * @type {string}
	 */
	userRole;

	/**
	 * The role of the AI in the prompt.
	 * @type {string}
	 */
	modelRole;

	/**
	 * The mission associated with the prompt.
	 * @type {MissionClass}
	 */
	mission;

	/**
	 * The rules to be followed in the prompt.
	 * @type {Array<string>}
	 */
	rules = [];

	/**
	 * The expected result format.
	 * @type {ResultFormClass}
	 */
	resultForm;

	/**
	 * The language of the output.
	 * @type {LanguageCode}
	 */
	language;

	/**
	 * The additional data enhances the context
	 * @type {Array<string>}
	 */
	enhancedDataArr = []

	/**
	 * Creates a new PromptTemplate instance.
	 * @param {MissionClass} mission - The mission details.
	 * @param {ResultFormClass} resultForm - The expected result format.
	 * @param {Options} options - The options include AI role, mission, resultForm
	 * @throws {Error} Throws an error if the language is invalid.
	 */
	constructor(
		mission,
		resultForm,
		options = defaultOptions
	) {
		options = { ...defaultOptions, ...options };
		this.modelRole = options.modelRole;
		this.userRole = options.userRole;
		this.mission = mission;
		this.rules = options.rules;
		this.resultForm = resultForm;
		this.#validateLang(options.language);
		this.language = options.language;
	}

	/**
	 * 
	 * @param {string} enhancedData 
	 */
	addEnhancedData(enhancedData) {
		this.enhancedDataArr.push(enhancedData)
		return this;
	}

	/**
	 * Generates the complete formatted prompt.
	 * @param {Object} valueInputs - The input values for dynamic parts of the mission.
	 * @returns {string} The formatted prompt string.
	 */
	get(valueInputs) {
		return `
${this.#userRoleFormatter()}
${this.#modelRoleFormatter()}
${this.#missionFormatter(valueInputs)}
${this.#ruleFormatter()}
${this.#resultFormatFormatter()}
${this.#languageFormatter()}
${this.#enhancedDataFormatter()}
`;
	}

	/**
	 * Formats the AI role section of the prompt.
	 * @returns {string} The formatted role section.
	 * @private
	 */
	#modelRoleFormatter() {
		return `You are ${this.modelRole}`;
	}

	/**
	 * Formats the User role section of the prompt.
	 * @returns {string} The formatted role section.
	 * @private
	 */
	#userRoleFormatter() {
		return `I am ${this.userRole}`;
	}

	/**
	 * Formats the rules section of the prompt.
	 * @returns {string} The formatted rules section or an empty string if no rules exist.
	 * @private
	 */
	#ruleFormatter() {
		if (!this.rules.length) {
			return "";
		}
		let format = "The rules you must not break when completing this work:";
		for (const rule of this.rules) {
			format += `
- ${rule}`;
		}
		return format;
	}

	/**
	 * Formats the mission section of the prompt.
	 * @param {Object} valueInputs - The input values for dynamic mission components.
	 * @returns {string} The formatted mission section.
	 * @private
	 */
	#missionFormatter(valueInputs) {
		return this.mission.get(valueInputs);
	}

	/**
	 * Formats the result format section of the prompt.
	 * @returns {string} The formatted result format section.
	 * @private
	 */
	#resultFormatFormatter() {
		return this.resultForm.get();
	}

	/**
	 * Formats the language section of the prompt.
	 * @returns {string} The formatted language specification.
	 * @private
	 */
	#languageFormatter() {
		return `The language of the result is ${this.language}`;
	}

	/**
	 * Formats the enhanced data section of the prompt.
	 * @returns {string} The enhanced data specification.
	 * @private
	 */
	#enhancedDataFormatter() {
		if (!this.enhancedDataArr.length) {
			return "";
		}
		let format = "Please follow this additional information to increase accuracy:"
		for (const enhancedData of this.enhancedDataArr) {
			format += `
- ${enhancedData}`;
		}

		return format
	}

	/**
	 * Validates the given language code.
	 * @param {string} language - The language code to validate.
	 * @throws {Error} Throws an error if the language is invalid.
	 * @private
	 */
	#validateLang(language) {
		if (!Object.values(languageCons).includes(language)) {
			throw new Error("Language invalid");
		}
	}
}


export default PromptTemplate;
