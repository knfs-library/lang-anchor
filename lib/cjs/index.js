/**
 * @author Kent Phung
 * @email daikhanh9260@gmail.com
 * @version 0.1.1
 * @license MIT
 * @link https://github.com/knfs-library/lang-anchor
 */

/**
 * @module lang-anchor
 * @description A mini AI prompt framework.
 * This framework provides a structured way to define AI prompts,
 * manage missions, enforce rules, and format output results.
 */
const Chain = require("./chain");
const PromptTemplate = require("./prompt");
const Mission = require("./mission");
const ResultForm = require("./resultForm");
const languages = require("./constants/languages");
const rules = require("./constants/rules");
const roles = require("./constants/roles");

/**
 * Main export object for the lang-anchor library.
 * @typedef {Object} LangAnchor
 * @property {typeof Chain} Chain - Handles step-by-step AI processing.
 * @property {typeof PromptTemplate} PromptTemplate - Defines structured AI prompts.
 * @property {typeof Mission} Mission - Represents the mission context for AI tasks.
 * @property {typeof ResultForm} ResultForm - Specifies the expected format for AI responses.
 * @property {Object} constants - Contains predefined constants.
 * @property {typeof languages} constants.languages - Supported languages.
 * @property {typeof rules} constants.rules - Predefined rules for AI interactions.
 * @property {typeof roles} constants.roles - Predefined roles for AI interactions.
 */

module.exports = {
	Chain,
	PromptTemplate,
	Mission,
	ResultForm,
	constants: {
		languages,
		rules,
		roles
	}
};
