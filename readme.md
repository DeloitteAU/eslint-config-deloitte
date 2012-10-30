# Deloitte Digital's JavaScript Styleguide

This styleguide has been forked from Rick Waldron's [Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js) project. This is a living document and new ideas are always welcome. Please contribute.


## Table of Contents

1. General principles
2. Whitespace
3. Beautiful Syntax
4. Practical Style
5. Naming
6. Comments
7. Code Quality Tools, Resources & References
8. Get Smart
9. Build & Deployment Process
10. License


## 1. General principles

> "Part of being a good steward to a successful project is realizing that writing code for yourself is a Bad Idea™. If thousands of people are using your code, then write your code for maximum clarity, not your personal preference of how to get clever within the spec." - Idan Gazit

* You are not a human code compiler/compressor, so don't try to be one.
* All code in any code-base should look like a single person typed it, no matter how many people contributed.
* Strictly enforce the agreed upon style.
* If in doubt when deciding upon a style, use existing, common patterns.


## 2. Whitespace

* _Never_ mix spaces and tabs for indentation.
* Real tabs are preferred over spaces. This allows other developers to set a tab width of their choice.
* If your editor supports it, always work with the "show invisibles" setting turned on. In Sublime Text, this can be achieved by adding `"draw_white_space": "all"` to your User Preferences file. The benefits of this practice are:
	* Enforced consistency
	* Eliminating end of line whitespace
	* Eliminating blank line whitespace
	* Commits and diffs that are easier to read

Tip: use an [EditorConfig](http://editorconfig.org/) file (or equivalent) to help maintain the basic whitespace conventions that have been agreed for your code-base. This has been added to the Deloitte Middleman template.


## 3. Beautiful Syntax

### A. Parens, Braces, Linebreaks

```javascript

// if/else/for/while/try always have spaces, braces and span multiple lines
// this encourages readability

// 3.A.1.1
// Examples of really cramped syntax

if(condition) doSomething();

while(condition) iterating++;

for(var i=0;i<100;i++) someIterativeFn();


// 3.A.1.1
// Use whitespace to promote readability

if ( condition ) {
	// statements
}

while ( condition ) {
	// statements
}

for ( var i = 0; i < 100; i++ ) {
	// statements
}

// Even better:

var i,
	length = 100;

for ( i = 0; i < length; i++ ) {
	// statements
}

// Or...

var i = 0,
	length = 100;

for ( ; i < length; i++ ) {
	// statements
}

var prop;

for ( prop in object ) {
	// statements
}


if ( true ) {
	// statements
} else {
	// statements
}

```


### B. Assignments, Declarations, Functions (Named, Expression, Constructor)

```javascript

// 3.B.1.1
// Variables
var foo = 'bar',
	num = 1,
	undef;

// Literal notations:
var array = [],
	object = {};


// 3.B.1.2
// Using only one `var` per scope (function) promotes readability
// and keeps your declaration list free of clutter (also saves a few keystrokes)

// Bad
var foo = '';
var bar = '';
var qux;

// Good
var foo = '',
	bar = '',
	quux;

// or..
var // Comment on these
foo = '',
bar = '',
quux;

// 3.B.1.3
// var statements should always be in the beginning of their respective scope (function).
// Same goes for const and let from ECMAScript 6.

// Bad
function foo() {

	// some statements here

	var bar = '',
		qux;
}

// Good
function foo() {
	var bar = '',
		qux;

	// all statements after the variables declarations.
}

```

```javascript

// 3.B.2.1
// Named Function Declaration
function foo( arg1, argN ) {

}

// Usage
foo( arg1, argN );


// 3.B.2.2
// Named Function Declaration
function square( number ) {
	return number * number;
}

// Usage
square( 10 );

// Really contrived continuation passing style
function square( number, callback ) {
	callback( number * number );
}

square( 10, function( square ) {
	// callback statements
});


// 3.B.2.3
// Function Expression
var square = function( number ) {
	// Return something valuable and relevant
	return number * number;
};

// Function Expression with Identifier
// This preferred form has the added value of being
// able to call itself and have an identity in stack traces:
var factorial = function factorial( number ) {
	if ( number < 2 ) {
		return 1;
	}

	return number * factorial( number-1 );
};


// 3.B.2.4
// Constructor Declaration
function FooBar( options ) {

	this.options = options;
}

// Usage
var fooBar = new FooBar({ a: 'alpha' });

fooBar.options;
// { a: 'alpha' }

```


### C. Exceptions, Slight Deviations

```javascript

// 3.C.1.1
// Functions with callbacks
foo(function() {
	// Note there is no extra space between the first paren
	// of the executing function call and the word "function"
});

// Function accepting an array, no space
foo([ 'alpha', 'beta' ]);

// 3.C.1.2
// Function accepting an object, no space
foo({
	a: 'alpha',
	b: 'beta'
});

// Single argument string literal, no space
foo('bar');

// Inner grouping parens, no space
if ( !('foo' in obj) ) {

}

```


### D. Consistency Always Wins

In sections 3.A-3.C, the whitespace rules are set forth as a recommendation with a simpler, higher purpose: consistency. It's important to note that formatting preferences, such as "inner whitespace" should be considered optional, but only one style should exist across the entire source of your project.

```javascript

// 3.D.1.1

if (condition) {
	// statements
}

while (condition) {
	// statements
}

for (var i = 0; i < 100; i++) {
	// statements
}

if (true) {
	// statements
} else {
	// statements
}

```


### E. Quotes

There is no difference in how JavaScript parses single and double quotes, but we prefer single quotes because this allows us to use double quotes for HTML attributes.

```javascript
var dog = '<div class="dog"></div>';
```


### F. End of Lines and Empty Lines

Whitespace can ruin diffs and make changesets impossible to read. Use an [EditorConfig](http://editorconfig.org/) file (or equivalent) to strip the whitespace from the ends of lines. This has been added to the Deloitte Middleman template.


## 4. Practical Style

```javascript

// 4.1.1
// A Practical Module

(function( NAMESPACE ) {
	var Module = (function() {

		var data = 'secret';

		return {
			// This is some boolean property
			bool: true,
			// Some string value
			string: 'a string',
			// An array property
			array: [ 1, 2, 3, 4 ],
			// An object property
			object: {
				lang: 'en-Us'
			},
			getData: function() {
				// get the current value of `data`
				return data;
			},
			setData: function( value ) {
				// set the value of `data` and return it
				return ( data = value );
			}
		};
	})();

	// Other things might happen here

	// expose our module to the global object
	NAMESPACE.Module = Module;

})( DDIGITAL );

```

```javascript

// 4.2.1
// A Practical Constructor

(function( NAMESPACE ) {

	function Ctor( foo ) {

		this.foo = foo;

		return this;
	}

	Ctor.prototype.getFoo = function() {
		return this.foo;
	};

	Ctor.prototype.setFoo = function( val ) {
		return ( this.foo = val );
	};


	// To call constructor's without `new`, you might do this:
	var ctor = function( foo ) {
		return new Ctor( foo );
	};


	// expose our constructor to the global object
	NAMESPACE.ctor = ctor;

})( DDIGITAL );

```


## 5. Naming

### A. You are not a human code compiler/compressor, so don't try to be one. Use long descriptive variable names.

The following code is an example of egregious naming:

```javascript

// 5.A.1.1
// Example of code with poor names

function q(s) {
	return document.querySelectorAll(s);
}
var i,a=[],els=q('#foo');
for(i=0;i<els.length;i++){a.push(els[i]);}

```

Without a doubt, you've written code like this - hopefully that ends today.

Here's the same piece of logic, but with kinder, more thoughtful naming (and a readable structure):

```javascript

// 5.A.2.1
// Example of code with improved names

function query( selector ) {
	return document.querySelectorAll( selector );
}

var idx = 0,
	elements = [],
	matches = query('#foo'),
	length = matches.length;

for ( ; idx < length; idx++ ) {
	elements.push( matches[ idx ] );
}

```

A few additional naming pointers:

```javascript

// 5.A.3.1
// Naming strings

`dog` is a string


// 5.A.3.2
// Naming arrays

`dogs` is an array of `dog` strings


// 5.A.3.3
// Naming booleans

`hasFocus` is clearly a boolean. `focus` is ambigious
`isEnabled` is a clearly a boolean


// 5.A.3.3
// Naming functions, objects, instances, etc

camelCase; function and var declarations


// 5.A.3.4
// Naming constructors, prototypes, etc

PascalCase; constructor function


// 5.A.3.5
// Naming regular expressions

rDesc = //;


// 5.A.3.6
// From the Google Closure Library Style Guide

functionNamesLikeThis;
variableNamesLikeThis;
ConstructorNamesLikeThis;
SYMBOLIC_CONSTANTS_LIKE_THIS;

// 5.A.3.7
// Global variables
// Use all caps to indicate that you intended to use a global var
var DDIGITAL = {};

```


## 6. Comments

Well commented code is extremely important. Take time to describe components, how they work, their limitations, and the way they are constructed. Don't leave others in the team guessing as to the purpose of uncommon or non-obvious code.

* Comment style should be simple and consistent within a single code base.
* Place comments on a new line above their subject.
* Avoid end of line comments.
* Keep line-length to a sensible maximum, e.g., 80 columns.
* Use "sentence case" comments and consistent text indentation.
* JSDoc style is good, but requires a significant time investment.

#### Example:

```javascript

/* ==========================================================================
 * Section comment block
 * ========================================================================== */

/* Sub-section comment block
 * ========================================================================== */

```

## 7. Code Quality Tools, Resources & References

* [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
* [jsPerf](http://jsperf.com/)
* [jsFiddle](http://jsfiddle.net/)
* [jsbin](http://jsbin.com/)
* [jshint](http://jshint.com/)
* [jslint](http://jslint.org/)


## 8. Get Smart

* [Annotated ECMAScript 5.1](http://es5.github.com/)
* [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

The following should be considered 1) incomplete, and 2) *REQUIRED READING*. I don't always agree with the style written by the authors below, but one thing is certain: They are consistent. Furthermore, these are authorities on the language.

* [Baseline For Front End Developers](http://rmurphey.com/blog/2012/04/12/a-baseline-for-front-end-developers/)
* [Eloquent JavaScript](http://eloquentjavascript.net/)
* [JavaScript, JavaScript](http://javascriptweblog.wordpress.com/)
* [Adventures in JavaScript Development](http://rmurphey.com/)
* [Perfection Kills](http://perfectionkills.com/)
* [Douglas Crockford's Wrrrld Wide Web](http://www.crockford.com)
* [JS Assessment](https://github.com/rmurphey/js-assessment)
* [Leveraging Code Quality Tools by Anton Kovalyov](http://anton.kovalyov.net/slides/gothamjs/)

## 9. Build & Deployment Process

Projects should always attempt to include some generic means by which source can be linted, tested, compressed, and versioned in preparation for production use. For this task, Deloitte Digital normally uses [Middleman](http://middlemanapp.com). [grunt](https://github.com/cowboy/grunt) by Ben Alman is another excellent tool.


## 10. License

_Principles of Writing Consistent, Idiomatic JavaScript_ by Rick Waldron and Contributors is licensed under the [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/). This applies to all documents and translations in this repository.

Based on a work at [https://github.com/rwldrn/idiomatic.js](https://github.com/rwldrn/idiomatic.js).
