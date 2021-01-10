## What are the different ways of turning on strict mode?

- Used for an entire script: 'use strict'; at the top of the file before any other statements
- Used in a function: function aStrictFunction() {
        'use strict' }
- Adding this at the top enables you to use ES5 onwards
- strict + non strict = strict
- non-strict + strict = non-strict
 - ^ Causes problems so avoid

## Can you summarise roughly what strict mode entails?
* creates a strict operating context which you can place functions/statements into
* tells the browser to use Strict mode which means that mistakes made in your javascript would throw an error rather than silently failing
* can sometimes run faster
* prevents (throws an error) when an unsafe action might be taken such as gaining access to a gloabl object
* doesn't work with block statements
* enables use of modifications added to JS since ES5
* modules and classes enable 'use strict' by default so we don't always need to use 'use strict'
* pre compiler might do this for you
* use strict from the start don't add to a project that's in progress

## Examples:
* using a variable without declaring it
* using an object without declaring it
* deleting a variable (or object) or a function is not allowed
* duplicating a parameter name
* escaping a character is not allowed