# Meteor integration for Visual Studio Code

This extension brings support for Meteor to Visual Studio Code. The goal is to create an extension with complete support specific to Meteor.

> It's currently under development and the set of features is limited. See below for more details.

## Installation

```
ext install vscode-meteor
```

For this extension to work you need to add a `jsconfig.json` if you haven't already.
See the [VS Code documentation](https://code.visualstudio.com/docs/languages/javascript#_javascript-projects-jsconfigjson) for more information.

A very basic `jsconfig.json` could be as follows:

```
{
	"compilerOptions": {
		"target": "es6",
		"module": "commonjs",
	},
	"exclude": [
		"node_modules",
		"bower_components"
	]
}
```

## Features

### Auto completion

This extension provides typings for the whole Meteor API. It includes the typings from [meteor-typings](https://github.com/meteor-typings/meteor).

With typings you get auto complete and also information about parameters in function calls.

![auto complete](/images/autocomplete.png)
![parameter info](/images/signature.png)

> Some declarations are currently missing. Also inline documentation is currently not provided. Will be definitely completed.

## Contribution

I just started and have to figure out how to implement more features.
So feature request and pull requests are welcome!

## Release Notes

### 0.1.1

- Use typings instead of custom logic

### 0.0.3

- Mark as preview

### 0.0.2

- Added more Meteor functions for auto completion
- Added package icon

### 0.0.1

Very first basic version only providing intellisense for [Meteor Core](http://docs.meteor.com/api/core.html) functionality.
