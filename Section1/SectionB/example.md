# Apply JavaScript Best Practices

## Comments

- // for single line comments
- /* */ for multiple line comments

## Indentations

- 2/4 spaces
- tabs

## Naming Conventions

- use a letter, _ or $ at the beginning of a function or variable name - no numbers!
- case sensitive

## <noscript>

- if JS is not enabled on a page use
    <noscript> Place the html you want to display here, if JS disabled </noscript>

## Constants

- values inside objects can be changed but primitives can't
- (more explanation needed here)

## Reserved Keywords

- there are some words which can't be used as names for functions, variables or constants as they have a specific meaning in JS
- examples: var, let, const, function, return, if, elsel, switch, case, break, do, for, while, throw, try, catch, finally
- [more examples are here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords)

## Debugger

- placing `debugger;` in you clientside JS will enable you to use the debugger tools in the dev tools available in the browser
- need an example and better explanation

## Console.log

- `console.log("Hello World!)`
- prints out the value within the parenthesis either to the terminal (node.js) or in the browser console