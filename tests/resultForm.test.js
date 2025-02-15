"use strict";

const ResultForm = require("./../lib/cjs/resultForm");

describe("ResultForm Class", () => {

	test("Init Valid", () => {
		const form1 = new ResultForm("string", "example");
		expect(form1.type).toBe("string");
		expect(form1.structure).toBe("example");

		const form2 = new ResultForm("json", { key: "value" });
		expect(form2.type).toBe("json");
		expect(form2.structure).toBe(JSON.stringify({ key: "value" }));
	});

	test("Init Invalid", () => {
		expect(() => new ResultForm("xml", "invalid")).toThrow("Type of result form invalid");
	});

	test("Init With many structure", () => {
		expect(new ResultForm("string", 42).structure).toBe(42);
		expect(new ResultForm("string", null).structure).toBe(null);
		expect(new ResultForm("json", { a: 1 }).structure).toBe('{"a":1}');
	});

	test("Use get() valid", () => {
		const form = new ResultForm("json", { test: "data" });
		expect(form.get()).toBe('You need to only return json with format like: {"test":"data"}');
	});

});
