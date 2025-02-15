"use strict";

const PromptTemplate = require("./../lib/cjs/prompt");
const MissionClass = require("./../lib/cjs/mission");
const ResultFormClass = require("./../lib/cjs/resultForm");
const languageCons = require("./../lib/cjs/constants/languages");
const roleCons = require("./../lib/cjs/constants/roles");

describe("PromptTemplate Class", () => {
	test("Init Param", () => {
		const mission = new MissionClass(["Test mission"]);
		const resultForm = new ResultFormClass("json", { key: "value" });

		const template = new PromptTemplate(
			mission,
			resultForm,
			{
				rules: ["Rule 1", "Rule 2"],
			}
		);

		expect(template.modelRole).toBe(roleCons.modelRole.PERSONAL_ASSISTANT);
		expect(template.userRole).toBe(roleCons.userRole.NORMAL_USER);
		expect(template.mission).toBe(mission);
		expect(template.rules).toEqual(["Rule 1", "Rule 2"]);
		expect(template.resultForm).toBe(resultForm);
		expect(template.language).toBe(languageCons.en);
	});

	test("create with invalid language", () => {
		const mission = new MissionClass(["Test mission"]);
		const resultForm = new ResultFormClass("json", { key: "value" });

		expect(() => {
			new PromptTemplate(
				mission,
				resultForm,
				{
					rules: ["Rule 1"],
					language: "invalid_lang"
				}
			);
		}).toThrow();
	});

	test("Method get() return valid format", () => {
		const mission = new MissionClass(["Translate a text to Vietnamese: {text}."], [
			{name: "text", type: "string"}
		]);
		jest.spyOn(mission, "get").mockReturnValue(`Your mission include:
- Translate a text to Vietnamese: Hello`);

		const resultForm = new ResultFormClass("json", { translation: "string" }); 
		jest.spyOn(resultForm, "get").mockReturnValue("You need to return json with format like: {\"translation\":\"string\"}");

		const template = new PromptTemplate(
			mission,
			resultForm,
			{
				modelRole: "AI Translator",
				language: languageCons.fr,
				rules: ["Do not use informal language", "Keep it professional"],
			}
		);

		const output = template.get({ text: "Hello" });

		expect(output).toContain("You are AI Translator");
		expect(output).toContain(`Your mission include:
- Translate a text to Vietnamese: Hello`);
		expect(output).toContain("The rules you must not break when completing this work");
		expect(output).toContain("- Do not use informal language");
		expect(output).toContain("- Keep it professional");
		expect(output).toContain("You need to return json with format like: {\"translation\":\"string\"}");
		expect(output).toContain("The language of the result is French");
	});
});
