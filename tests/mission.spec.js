const Mission = require("../lib/cjs/mission");

describe("Mission Class", () => {
	test("Should create a Mission instance with correct variable inputs and tasks", () => {
		const variables = [
			{ type: "string", name: "username" },
			{ type: "number", name: "age" },
		];
		const tasks = ["Hello {username}, you are {age} years old"];

		const mission = new Mission(tasks, variables);

		expect(mission).toBeInstanceOf(Mission);
	});

	test("Should replace placeholders with valid values", () => {
		const variables = [
			{ type: "string", name: "username" },
			{ type: "number", name: "age" },
		];
		const tasks = ["Hello {username}, you are {age} years old"];

		const mission = new Mission(tasks, variables);
		const result = mission.get({
			username: "Alice",
			age: 25
		});

		expect(result).toContain("Hello Alice, you are 25 years old");
	});

	test("Should throw error when variable is missing", () => {
		const variables = [{ type: "string", name: "username" }];
		const tasks = ["Hello {username}"];

		const mission = new Mission(tasks, variables);
		expect(() => {
			const result = mission.get({
				name: "abc",
			});
		}).toThrow("var name not exist");
	});

	test("Should throw error when variable type is incorrect", () => {
		const variables = [{ type: "number", name: "age" }];
		const tasks = ["You are {age} years old"];

		const mission = new Mission(tasks, variables);
		expect(() => {
			const result = mission.get({
				age: "eight",
			});
		}).toThrow("var age type error");
	});
});
