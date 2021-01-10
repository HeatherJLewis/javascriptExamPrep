# Evaluate the use of inline and external scripts

## When to use, how to use, and what happens when both are used

### Inline Code
- HTML `<script></script>` used to embed, reference executable code
- need a separate script tag for each file you want to load
- `<script src"link/path" type="text/javascript"></script>`
 - link/path -> to external code
 - type -> attribute used to define the type of script
  - required in HTML4
  - optional in HTML5 (if not present JS assuemd by default)
- IF JS is required during loading, place the script tag in the HEAD
 - can't access HTML elements declared after the script because when the script is being loaded, the target element doesn't exist yet
- IF JS is not require during loading, place the script tag at the END of the BODY
- JavaScript's best practice is to use external JavaScript files and load them at the end of the document body section. Alternatively, external JavaScript files may be added at the end of the document head section and loaded asynchronously using the async or delay attributes.
 - this is because the browser (particularly older ones) blocks further rendering of the page while the JS is loading - which is why it's better to put this into bottom on the BODY
 - that also means that the script isn't seen until it downloads all of the HTML
- async - load script asynchronoulsy executes *as soon as* the script has loaded
- defer - load script asynchronously but executes *after* the script has loaded (HTML4 onwards)
- async and defer placed into the HEAD
- if multiple scripts are loaded, they execute in order

### External Code
- used for larger scripts to make readability and maintainability easier
- when JS files are cached, pages load more quickly
