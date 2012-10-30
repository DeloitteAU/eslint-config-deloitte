# Deloitte Digital's JavaScript Styleguide

This styleguide has been forked from Rick Waldron's [Idiomatic JavaScript](https://github.com/rwldrn/idiomatic.js) project. This is a living document and new ideas are always welcome. Please contribute.


## Table of Contents

1. Whitespace
2. Beautiful Syntax
3. Practical Style
4. Naming
5. Misc
6. Comments
7. Code Quality Tools, Resources & References
8. Get Smart
9. Build & Deployment Process
10. Acknowledgements
11. License


## Idiomatic Style Manifesto


## Whitespace
* Never mix spaces and tabs.
* Always use real tabs instead of spaces. This allows other developers to set a tab width of their choice.
* If your editor supports it, always work with the "show invisibles" setting turned on. In Sublime Text, this can be achieved by adding `"draw_white_space": "all"` to your User Preferences file. The benefits of this practice are:
	* Enforced consistency
	* Eliminating end of line whitespace
	* Eliminating blank line whitespace
	* Commits and diffs that are easier to read

Tip: use an [EditorConfig](http://editorconfig.org/) file (or equivalent) to help maintain the basic whitespace conventions that have been agreed for your code-base. This has been added to the Deloitte Middleman template.


## Beautiful Syntax

### A. Parens, Braces, Linebreaks

```javascript

// if/else/for/while/try always have spaces, braces and span multiple lines
// this encourages readability

// 2.A.1.1
// Examples of really cramped syntax

if(condition) doSomething();

while(condition) iterating++;

for(var i=0;i<100;i++) someIterativeFn();


// 2.A.1.1
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

// 2.B.1.1
// Variables
var foo = 'bar',
	num = 1,
	undef;

// Literal notations:
var array = [],
	object = {};


// 2.B.1.2
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

// 2.B.1.3
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

// 2.B.2.1
// Named Function Declaration
function foo( arg1, argN ) {

}

// Usage
foo( arg1, argN );


// 2.B.2.2
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


// 2.B.2.3
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


// 2.B.2.4
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

// 2.C.1.1
// Functions with callbacks
foo(function() {
	// Note there is no extra space between the first paren
	// of the executing function call and the word "function"
});

// Function accepting an array, no space
foo([ 'alpha', 'beta' ]);

// 2.C.1.2
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

In sections 2.A-2.C, the whitespace rules are set forth as a recommendation with a simpler, higher purpose: consistency. It's important to note that formatting preferences, such as "inner whitespace" should be considered optional, but only one style should exist across the entire source of your project.

```javascript

// 2.D.1.1

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


## 3. Practical Style

```javascript

// 3.1.1
// A Practical Module

(function( global ) {
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
	global.Module = Module;

})( this );

```

```javascript

// 3.2.1
// A Practical Constructor

(function( global ) {

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
	global.ctor = ctor;

})( this );

```


## 4. Naming

### A. You are not a human code compiler/compressor, so don't try to be one. Use long descriptive variable names.

The following code is an example of egregious naming:

```javascript

// 4.A.1.1
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

// 4.A.2.1
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

// 4.A.3.1
// Naming strings

`dog` is a string


// 4.A.3.2
// Naming arrays

`dogs` is an array of `dog` strings


// 4.A.3.3
// Naming booleans

`hasFocus` is clearly a boolean. `focus` is ambigious.
`isEnabled` is a clearly a boolean


// 4.A.3.3
// Naming functions, objects, instances, etc

camelCase; function and var declarations


// 4.A.3.4
// Naming constructors, prototypes, etc.

PascalCase; constructor function


// 4.A.3.5
// Naming regular expressions

rDesc = //;


// 4.A.3.6
// From the Google Closure Library Style Guide

functionNamesLikeThis;
variableNamesLikeThis;
ConstructorNamesLikeThis;
SYMBOLIC_CONSTANTS_LIKE_THIS;

// 4.A.3.7
// Global variables.
// Use all caps to indicate that you intended to use a global var.
var DDIGITAL = {};

```


## 5. Misc

This section will serve to illustrate ideas and concepts that should not be considered dogma, but instead exists to encourage questioning practices in an attempt to find better ways to do common JavaScript programming tasks.

### A. Using `switch` should be avoided, modern method tracing will blacklist functions with switch statements

There seems to be drastic improvements to the execution of `switch` statements in latest releases of Firefox and Chrome.
http://jsperf.com/switch-vs-object-literal-vs-module

Notable improvements can be witnesses here as well:
https://github.com/rwldrn/idiomatic.js/issues/13

```javascript

// 5.A.1.1
// An example switch statement

switch( foo ) {
	case 'alpha':
		alpha();
		break;
	case 'beta':
		beta();
		break;
	default:
		// something to default to
		break;
}

// 5.A.1.2
// A alternate approach that supports composability and reusability is to
// use an object to store "cases" and a function to delegate:

var cases, delegator;

// Example returns for illustration only.
cases = {
	alpha: function() {
		// statements
		// a return
		return [ 'Alpha', arguments.length ];
	},
	beta: function() {
		// statements
		// a return
		return [ 'Beta', arguments.length ];
	},
	_default: function() {
		// statements
		// a return
		return [ 'Default', arguments.length ];
	}
};

delegator = function() {
	var args, key, delegate;

	// Transform arguments list into an array
	args = [].slice.call( arguments );

	// shift the case key from the arguments
	key = args.shift();

	// Assign the default case handler
	delegate = cases._default;

	// Derive the method to delegate operation to
	if ( cases.hasOwnProperty( key ) ) {
		delegate = cases[ key ];
	}

	// The scope arg could be set to something specific,
	// in this case, |null| will suffice
	return delegate.apply( null, args );
};

// 5.A.1.3
// Put the API in 5.A.1.2 to work:

delegator( 'alpha', 1, 2, 3, 4, 5 );
// [ 'Alpha', 5 ]

// Of course, the `case` key argument could easily be based
// on some other arbitrary condition.

var caseKey, someUserInput;

// Possibly some kind of form input?
someUserInput = 9;

if ( someUserInput > 10 ) {
	caseKey = 'alpha';
} else {
	caseKey = 'beta';
}

// or...

caseKey = someUserInput > 10 ? 'alpha' : 'beta';

// And then...

delegator( caseKey, someUserInput );
// [ 'Beta', 1 ]

// And of course...

delegator();
// [ 'Default', 0 ]

```

### B. Early returns promote code readability with negligible performance difference

```javascript

// 5.B.1.1
// Bad:
function returnLate( foo ) {
	var ret;

	if ( foo ) {
		ret = 'foo';
	} else {
		ret = 'quux';
	}
	return ret;
}

// Good:

function returnEarly( foo ) {

	if ( foo ) {
		return 'foo';
	}
	return 'quux';
}

```


## 6. Comments

* Single line above the code that is subject
* Multiline is good
* End of line comments are prohibited!
* JSDoc style is good, but requires a significant time investment


## 7. Code Quality Tools, Resources & References

 * [JavaScript Plugin](http://docs.codehaus.org/display/SONAR/JavaScript+Plugin) for [Sonar](http://www.sonarsource.org/)
 * [jsPerf](http://jsperf.com/)
 * [jsFiddle](http://jsfiddle.net/)
 * [jsbin](http://jsbin.com/)
 * [JavaScript Lint (JSL)](http://javascriptlint.com/)
 * [jshint](http://jshint.com/)
 * [jslint](http://jslint.org/)


## 8. Get Smart

### [Annotated ECMAScript 5.1](http://es5.github.com/)
### [EcmaScript Language Specification, 5.1 Edition](http://ecma-international.org/ecma-262/5.1/)

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


## 10. Acknowledgements

* Rick Waldron [@rwaldron](http://twitter.com/rwaldron), [github](https://github.com/rwldrn)
* Mathias Bynens [@mathias](http://twitter.com/mathias), [github](https://github.com/mathiasbynens)
* Schalk Neethling [@ossreleasefeed](http://twitter.com/ossreleasefeed), [github](https://github.com/ossreleasefeed/)
* Kit Cambridge  [@kitcambridge](http://twitter.com/kitcambridge), [github](https://github.com/kitcambridge)
* Raynos  [github](https://github.com/Raynos)
* Matias Arriola [@MatiasArriola](https://twitter.com/MatiasArriola), [github](https://github.com/MatiasArriola/)
* John Fischer [@jfroffice](https://twitter.com/jfroffice), [github](https://github.com/jfroffice/)
* Idan Gazit [@idangazit](http://twitter.com/idangazit), [github](https://github.com/idangazit)
* Leo Balter [@leobalter](http://twitter.com/leobalter), [github](https://github.com/leobalter)
* Breno Oliveira [@garu_rj](http://twitter.com/garu_rj), [github](https://github.com/garu)
* Leo Beto Souza [@leobetosouza](http://twitter.com/leobetosouza), [github](https://github.com/leobetosouza)
* Ryuichi Okumura [@okuryu](http://twitter.com/okuryu), [github](https://github.com/okuryu)
* Pascal Precht [@PascalPrecht](http://twitter.com/PascalPrecht), [github](https://github.com/pascalprecht)
* EngForDev [engfordev](http://www.opentutorials.org/course/167/1363) - Hwan Min Hong / MinTaek Kwon [@leoinsight](http://twitter.com/leoinsight) / Tw Shim [@marocchino](http://twitter.com/marocchino), [github](https://github.com/marocchino) / Nassol Kim [@nassol99](http://twitter.com/nassol99), [github](https://github.com/nassol) / Juntai Park [@rkJun](http://twitter.com/rkJun), [github](https://github.com/rkJun) / Minkyu Shim / Gangmin Won / Justin Yoo [@justinchronicle](http://twitter.com/justinchronicle) / Daeyup Lee
* Marco Trulla [@marcotrulla](http://twitter.com/marcotrulla), [github](https://github.com/Ragnarokkr)
* Alex Navasardyan [@alexnavasardyan](http://twitter.com/alexnavasardyan), [github](https://github.com/2k00l)
* Mihai Paun [@mihaipaun](http://twitter.com/mihaipaun), [github](https://github.com/mihaipaun)
* Evgeny Mandrikov [@\_godin\_](http://twitter.com/_godin_), [github](https://github.com/Godin)
* Sofish Lin [@sofish](http://twitter.com/sofish), [github](https://github.com/sofish)
* Дејан Димић [@dejan_dimic](http://twitter.com/dejan_dimic), [github](https://github.com/rubystream)
* Miloš Gavrilović [@gavrisimo](http://twitter.com/gavrisimo), [github](https://github.com/gavrisimo)


## 11. License

_Principles of Writing Consistent, Idiomatic JavaScript_ by Rick Waldron and Contributors is licensed under the [Creative Commons Attribution 3.0 Unported License](http://creativecommons.org/licenses/by/3.0/). This applies to all documents and translations in this repository.

Based on a work at [https://github.com/rwldrn/idiomatic.js](https://github.com/rwldrn/idiomatic.js).
