<p align="center">
<img width="250" src="https://github.com/knfs-library/lang-anchor/blob/master/docs/images/logo.png?raw=true">
  <br>
	<a href="https://github.com/knfs-library/<repo-name>/actions"alt="scrutinizer">
		<img src="https://github.com/knfs-library/<repo-name>/actions" alt="github" />
	</a>
</p>

<h1> <span style="color:#013C4D;">About</span> <span style="color:#2B7F84;">Lang Anchor</span></h1>

## Lang Anchor - A mini AI prompt framework

**Lang Anchor** provides a structured way to define AI prompts, manage missions, enforce rules, and format output results.


## Install

Install Lang Anchor via **npm** or **yarn**:

```bash
npm i @knfs-tech/lang-anchor
#or
yarn add @knfs-tech/lang-anchor
```

## Features

- **Prompting**: Helps you build standard reminder forms, optimizing your reminder process by including usage role, AI role, tasks, rules, output data, and reinforcement data
- **Rule Constants**: Includes built-in rule set to increase prompt accuracy and efficiency.
- **Language Constants**: A set of available languages, convenient to use
- **Roles Constants**: A set of user and AI roles are available for ease of use
- **Chain Construction**: Build a list of steps to manipulate axiomatic data for RAG and AI Agents models

---
## Basic Usage
### Example with PromptTemplate
```javascript
const { Mission, ResultForm, PromptTemplate } = require("@knfs-tech/lang-anchor")
const { rules, roles, languages } = require("@knfs-tech/lang-anchor").constants

const variableInputs = [
  { type: "string", name: "text" },
]

const tasks = [
  "Summarize the given text into key points: {text} ",
  "Translate the give text to Vietnamese: {text}",
]

const mission = new Mission(tasks, variableInputs)

const resultForm = new ResultForm("json", {
  summary: "string",
  keyPoints: "string",
  translation: "string"
})

const modelRole = roles.modelRole.TRANSLATOR

const ruleApplies = [
  rules.noMoreCreativity,
  rules.onlyFormatResult,
  rules.noBias,
  rules.factualOnly
]

const prompt = new PromptTemplate(
  mission,
  resultForm,
  {
    modelRole,
    rules: ruleApplies,
  }
)

const inputData = {text: "Lang Anchor is powerful LLM AI framework..."}

prompt.addEnhancedData("keyPoints should be defined by ,")

//get prompted data
const query = prompt.get(inputData)

```
### Example with Chain

```javascript
const { Mission, ResultForm, PromptTemplate, Chain } = require("@knfs-tech/lang-anchor")
const { rules, roles, languages } = require("@knfs-tech/lang-anchor").constants

const processChain = new Chain()

const inputData = {text: "Lang Anchor is powerful LLM AI framework..."}

processChain
  .addStep(
    async() => {
      const variableInputs = [
        { type: "string", name: "text" },
      ]

      const tasks = [
        "Summarize the given text into key points: {text} ",
        "Translate the give text to Vietnamese: {text}",
      ]

      const mission = new Mission(tasks, variableInputs)

      const resultForm = new ResultForm("json", {
        summary: "string",
        keyPoints: "string",
        translation: "string"
      })

      const modelRole = roles.modelRole.TRANSLATOR

      const ruleApplies = [
        rules.noMoreCreativity,
        rules.onlyFormatResult,
        rules.noBias,
        rules.factualOnly
      ]

      const prompt = new PromptTemplate(
        mission,
        resultForm,
        {
          modelRole,
          rules: ruleApplies,
        }
      )

      prompt.addEnhancedData("keyPoints should be defined by ,")
  
      return prompt
    }
  )
  .addStep(
    async() => {
      // Add more context data, by getting more information from vectorDatabase
      const prompt = processChain.results[0]
      const vectorDBResults = getDataFromVectorDB(inputData.text)
       for (const result of vectorDBResults) {
         prompt.addEnhancedData(result)
       }  
    }
  )
  .addStep(
  	async() => {
      // Add more context data, by getting more information from vectorDatabase
      const prompt = processChain.results[0]
  		const query = prompt.get(inputData)
  		return await callLLMMode(query);
  	}
  )

const result = await processChain.run();
```
---
## API Reference

### **Mission**

#### `new Mission(tasks, variableInputs)`

Create mission of AI

| Parameter             | Type            | Default                |  Description        | Support Version   |
| --------------------- | -------         | ---------------------- | ------------        | ----------------- |
| `tasks`               | Array string    | None                   | AI task work list.  | >= 0.1.1          | 
| `variableInputs`      | Array ({type: <type of variable input>, name: <name of variable input> })    | None                   | Variable input of the task.  | >= 0.1.1          | 

```javascript
const { Mission } = require("@knfs-tech/lang-anchor")

const variableInputs = [
	{ type: "string", name: "mainKeyWords" },
	{ type: "string", name: "secondaryKeywords"}
]

const tasks = [
	"Write me an SEO standard article with main keyword: {mainKeyWords} and secondary keywords: {secondaryKeywords} ",
]

const mission = new Mission(tasks, variableInputs)
```


#### `get(valueInputs)`

Get mission prompt with value inputs

| Parameter        | Type                                                                      | Default | Description                 | Support Version |
| ---------------- | ------------------------------------------------------------------------- | ------- | --------------------------- | --------------- |
| `valueInputs`    | Array ({<name of variable input> : <value of variable input})             | None    | Value of variable input.    | >= 0.1.1        |

**Returns:** `String` - The prompted string

```javascript

const inputData = {
	mainKeyWords: "Logitech wireless mouse",
	secondaryKeywords: "Logitech GHUB, Logitech mouse",
}

const missionPrompt = mission.get(inputData)
```

### **ResultForm**

#### `new ResultForm(type, structure)`

Create result form of AI

| Parameter        | Type         | Default    | Description                                            | Support Version |
| ---------------- | ------------ | -------    | ---------------------------                            | --------------- |
| `type`           | String       | "string"   | Type of response received when communicating with LLM. | >= 0.1.1        |
| `structure`      | String       | "<result>" | Structure of the returned response.                    | >= 0.1.1        |

```javascript
const { ResultForm } = require("@knfs-tech/lang-anchor")

const resultForm = new ResultForm("json", {
	content: "string",
	keywords: "string",
})
```

#### `get()`

Get result prompt with value inputs

**Returns:** `String` - The prompted string

```javascript

const resultFormPrompt = resultForm.get()
```

### **PromptTemplate**

#### `new PromptTemplate(mission, resultForm, options)`

Create prompt tempt of AI

| Parameter           | Type            | Default                               | Description                                            | Support Version |
| -----------         | ------          | ----------                            | ------------------------------------------------------ | --------------- |
| `mission`           | Mission         |                                       | Mission of AI                                           | >= 0.1.1        |
| `resultForm`        | ResultForm      |                                       | Result form of response AI                              | >= 0.1.1        |
| `options.modelRole` | string          | roleCons.modelRole.PERSONAL_ASSISTANT | The role of the AI.                                     | >= 0.1.1        |
| `options.userRole`  | string          | roleCons.userRole.NORMAL_USER         | The role of user.                                     | >= 0.1.1        |
| `options.language`  | string          | languageCons.en                       | The language for the result.                                     | >= 0.1.1        |
| `options.rules`     | Array<string>   | []                                    | A set of rules the AI must follow.| >= 0.1.1        |

```javascript
const { PromptTemplate } = require("@knfs-tech/lang-anchor");
const { rules, roles, languages } = require("@knfs-tech/lang-anchor").constants;

const modelRole = roles.modelRole.MARKETING_EXPERT

const ruleApplies = [
	rules.onlyFormatResult,
	rules.noBias,
	rules.factualOnly,
	rules.useFormalTone,
	rules.followInstructions
]

const prompt = new PromptTemplate(
	mission,
	resultForm,
	{
		modelRole,
		rules: ruleApplies,
		language: languages.vi
	}
)
```
#### `addEnhancedData(enhanceData)`

Get prompt with value inputs

| Parameter     | Type   | Default | Description                                        | Support Version |
| ------------- | ------ | ------- | -------------------------------------------------- | --------------- |
| `enhanceData` | string | None    | The enhanced contextual data to increase accuracy. | >= 0.1.1        |

```javascript

prompt.addEnhancedData("The article has 3H2.")
prompt.addEnhancedData("Articles need to be at least 1000 words.")
```

#### `get(valueInputs)`

Get prompt with value inputs

| Parameter     | Type                                                          | Default | Description              | Support Version |
| ------------- | ------------------------------------------------------------- | ------- | ------------------------ | --------------- |
| `valueInputs` | Array ({<name of variable input> : <value of variable input}) | None    | Value of variable input. | >= 0.1.1        |

**Returns:** `String` - The prompted string

```javascript

const inputData = {
	mainKeyWords: "Logitech wireless mouse",
	secondaryKeywords: "Logitech GHUB, Logitech mouse",
}

const query = prompt.get(inputData)
```


### **Chain**

#### `new Chain()`

Create step-by-step AI processing.

**Returns:** `Chain` - This chain

#### `addStep(step)`

Get prompt with value inputs

| Parameter         | Type   | Default | Description                                        | Support Version |
| -------------     | ------ | ------- | -------------------------------------------------- | --------------- |
| `step` | function | None    | The function handle in step.                                | >= 0.1.1        |

**Returns:** `Chain` - This chain

```javascript
const { Chain } = require("@knfs-tech/lang-anchor")

const processChain = new Chain()

processChain
	.addStep(
		async () => console.log("a")
	)
	.addStep(
		async () => console.log("b")
  )
	.addStep(
		async () => {
      return "c"
		}
	)
```

#### `run()`

Run process

**Returns:** `Promise<*>` - Final result in result list

```javascript

const reulst = await processChain.run()
```


## Author
* [Kent Phung](https://github.com/khapu2906)
  
## Owner
* [Knfs.,jsc](https://github.com/knfs-library)

## More

## License

Lang Anchor is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).


